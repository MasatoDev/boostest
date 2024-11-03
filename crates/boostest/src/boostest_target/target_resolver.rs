use anyhow::{anyhow, Result};
use colored::*;
use oxc::allocator::Vec as AllocVec;
use oxc::parser::Parser;
use oxc::span::{SourceType, Span};
use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex};

use oxc::ast::ast::{
    BindingPatternKind, Class, ClassBody, ExportDefaultDeclaration, ExportDefaultDeclarationKind,
    ExportNamedDeclaration, MethodDefinition, PropertyDefinition, TSInterfaceDeclaration,
    TSModuleReference, TSSignature, TSType, TSTypeAliasDeclaration,
};
use oxc::ast::{
    ast::{
        Declaration, ImportDeclaration, ImportDeclarationSpecifier, Statement,
        TSImportEqualsDeclaration,
    },
    VisitMut,
};

use super::super::boostest_manager::propety_assignment::{
    calc_prop_span, ts_type_assign_as_property, TargetReferenceInfo,
};
use super::super::boostest_utils::{module_resolver::resolve_specifier, tsserver::tsserver};

use super::target::{Target, TargetDefinition, TargetType};

use crate::boostest_utils::buf::source_text_from_span;
use crate::boostest_utils::utils;

/**

[Resolver Logic]

- [1] visit file that first(top) target is defined
  - [OK] if target is defined, then add target_definition
- [2] find `Impot Decl` and add to import
- [3] resolve module with specifers of `Import Decl`
- [4] visit resolved module(file)
  - [OK] if target is defined, then add target_definition
- [6] resolve module with specifers that use `index.d.ts`
  - [OK] if target is defined, then add target_definition
- [7] resolve module with specifers that use `[filename].d.ts`
  - [OK] if target is defined, then add target_definition
- [8] use tsserver to get definition
  - [OK] add target_definition with calculated span

*/

#[derive(Debug, Clone, PartialEq)]
pub enum ResolveStatus {
    Nothing,
    Start,
    Resolved,
}

#[derive(Debug, Clone)]
pub struct Import {
    // original_name: Option<String>,
    identifier_original_name: Option<String>, // export {original_name as local_name(or default)};

    // import {Hoge as Huga} from '.'
    // -> imported: Hoge, local: Huga
    imported: Option<String>,
    local: String,

    pub default_import: bool,

    pub full_path: String,

    pub loaded: bool,
    pub index_d_ts_loaded: bool,
    pub file_d_ts_loaded: bool,

    pub need_reload: bool,
}

#[derive(Debug)]
pub struct TargetResolver {
    pub target: Arc<Mutex<Target>>,
    pub status: ResolveStatus,
    pub read_file_span: Option<Span>,

    /*
    - visit ast
    - add temp_import_source_vec
    - continue visit ast
    - end visit
    - unresolved -> set_import_source
    */
    pub import: Vec<Import>,
    pub temp_import_source_vec: Option<Vec<Import>>,
    pub temp_current_read_file_path: PathBuf,
}

impl TargetResolver {
    pub fn new(target: Arc<Mutex<Target>>) -> Self {
        Self {
            target,
            status: ResolveStatus::Nothing,
            import: Vec::new(),
            temp_import_source_vec: None,
            temp_current_read_file_path: PathBuf::new(),
            read_file_span: None,
        }
    }

    pub fn resolve(
        &mut self,
        ts_config_path: &Option<PathBuf>,
        project_root_path: &Option<PathBuf>,
    ) {
        //TODO: 途中で追加される未解決のpropがある可能性あり。
        self.status = ResolveStatus::Start;
        let file_path = self
            .target
            .lock()
            .unwrap()
            .target_reference
            .file_path
            .clone();
        resolve_target(self, file_path, ts_config_path, project_root_path, 1);
    }

    /*****************/
    /*    status     */
    /*****************/
    pub fn resolved(&self) -> bool {
        self.status == ResolveStatus::Resolved
    }

    /******************/
    /* manage imports */
    /******************/
    pub fn reset_temp_import_source(&mut self) {
        self.temp_import_source_vec = None;
    }
    pub fn set_temp_import_source(
        &mut self,
        local: String,
        full_path: String,
        imported: Option<String>,
        default_import: bool,
    ) {
        // import {Hoge(imported) as Huga(local)} from '...'
        // import {Hoge(imported or local)} from '...'
        if self.get_decl_name_for_resolve() != local {
            return;
        }

        let import = Import {
            local,
            imported,
            full_path,
            identifier_original_name: None,
            default_import,
            need_reload: false,
            loaded: false,
            index_d_ts_loaded: false,
            file_d_ts_loaded: false,
        };

        if let Some(vec) = &mut self.temp_import_source_vec {
            vec.push(import);
        } else {
            self.temp_import_source_vec = Some(vec![import]);
        }
    }

    // if not resolved set import as a target to resolve
    pub fn set_import_source(&mut self) {
        if self.resolved() {
            return;
        }

        if let Some(vec) = &self.temp_import_source_vec {
            self.import = vec.clone();
        }

        self.reset_temp_import_source();
    }

    // pub fn get_needs_start_analysis_properties(&mut self) -> Vec<Arc<Mutex<Target>>> {
    //     let mut result = Vec::new();
    //
    //     for prop in &mut self.target.ref_properties {
    //         let prop_lock = prop.lock().unwrap();
    //         if !prop_lock.resolved() && !prop_lock.analysis_started {
    //             result.push(prop.clone());
    //         }
    //     }
    //     result
    // }

    // import {Hoge(imported) as Huga(local)} from '...'
    pub fn get_decl_name_for_resolve(&self) -> String {
        if let Some(last) = self.import.last() {
            if let Some(original_name) = &last.identifier_original_name {
                return original_name.to_string();
            }

            if let Some(imported) = &last.imported {
                return imported.to_string();
            }
            return last.local.to_string();
        }

        self.target.lock().unwrap().name.to_string()
    }

    pub fn get_next_import(&mut self) -> Option<&mut Import> {
        if let Some(last) = self.import.last_mut() {
            if TargetResolver::is_loaded_file_d_ts(last) {
                return None;
            }
            return Some(last);
        }
        None
    }

    pub fn is_default_import(&self) -> bool {
        if let Some(last) = self.import.last() {
            return last.default_import;
        }
        false
    }

    pub fn set_default_import_name(&mut self, exported: &String, local: &String) {
        if let Some(import) = self.get_next_import() {
            if import.default_import
                && import.identifier_original_name.is_none()
                && exported.clone() == String::from("default")
            {
                import.identifier_original_name = Some(local.clone());
                import.need_reload = true;
                // Once read, it is skipped, so read again and look for the declaration
                // MockAstLoader::reset_loaded_import(import);
            }
        }
    }

    pub fn set_original_name(&mut self, exported: &String, local: &String) {
        if let Some(import) = self.get_next_import() {
            let target_name: &String;

            if let Some(imported) = &import.imported {
                target_name = imported;
            } else {
                target_name = &import.local;
            }

            /*
            export type {Huga as AnotherHuga}

            export is AnotherHuga.
            local is Huga.
            If target_name matches exported, local Huga is the original name.
            The original_name is the highest priority in finding the target.
             */
            if target_name == exported {
                import.identifier_original_name = Some(local.clone());

                // Once read, it is skipped, so read again and look for the declaration
                // MockAstLoader::reset_loaded_import(import);
                import.need_reload = true;
            }
        }
    }

    /**********************/
    /* manage load status */
    /**********************/
    pub fn is_unloaded_import(import: &Import) -> bool {
        !import.loaded && !import.index_d_ts_loaded && !import.file_d_ts_loaded
    }
    pub fn is_loaded_full_path(import: &Import) -> bool {
        import.loaded && !import.index_d_ts_loaded && !import.file_d_ts_loaded
    }
    pub fn is_loaded_index_d_ts(import: &Import) -> bool {
        import.loaded && import.index_d_ts_loaded && !import.file_d_ts_loaded
    }
    pub fn is_loaded_file_d_ts(import: &Import) -> bool {
        import.loaded && import.index_d_ts_loaded && import.file_d_ts_loaded
    }
}

/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*                  VisitMut                     */
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
impl<'a> VisitMut<'a> for TargetResolver {
    fn visit_statements(&mut self, stmts: &mut AllocVec<'a, Statement<'a>>) {
        for stmt in stmts.iter_mut() {
            match stmt {
                /**********/
                /* Import */
                /**********/
                Statement::TSImportEqualsDeclaration(ts_import_equals_decl) => {
                    self.visit_ts_import_equals_declaration(ts_import_equals_decl);
                }

                Statement::ImportDeclaration(import) => {
                    self.visit_import_declaration(import);
                }

                Statement::ExportNamedDeclaration(export_named_decl) => {
                    self.visit_export_named_declaration(export_named_decl);
                }
                Statement::ExportDefaultDeclaration(export_default_decl) => {
                    self.visit_export_default_declaration(export_default_decl);
                }

                /***************/
                /* Declaration */
                /***************/
                Statement::ClassDeclaration(class) => self.visit_class(class),
                Statement::TSTypeAliasDeclaration(decl) => {
                    self.visit_ts_type_alias_declaration(decl);
                }
                Statement::TSInterfaceDeclaration(decl) => {
                    self.visit_ts_interface_declaration(decl);
                }

                /********/
                /* TODO */
                /********/
                Statement::VariableDeclaration(_) => {
                    // TODO: support named change `const huga  = hoge;`
                }
                Statement::TSExportAssignment(_ts_export_assignment) => {
                    /*
                     * TODO: support commonjs
                     * export = ClassName;
                     *
                     */

                    // if let Expression::Identifier(id) = &ts_export_assignment.expression {
                    //     self.set_default_import_name(
                    //         &String::from("default"),
                    //         &id.name.to_string(),
                    //     );
                    // }
                }
                Statement::ExpressionStatement(_expr_stmt) => {
                    // TODO: hoge<T = any>のようなgenericは`T = any`というexpressio, statementなのでanyが入るよう調整する
                }

                _ => {
                    // println!("Another Statement {:?}", stmt);
                }
            }
        }
    }

    fn visit_export_default_declaration(&mut self, decl: &mut ExportDefaultDeclaration<'a>) {
        match &mut decl.declaration {
            ExportDefaultDeclarationKind::ClassDeclaration(class) => {
                self.visit_class(class);
            }
            ExportDefaultDeclarationKind::TSInterfaceDeclaration(ts_interface_decl) => {
                self.visit_ts_interface_declaration(ts_interface_decl);
            }
            ExportDefaultDeclarationKind::FunctionDeclaration(_) => {}
            ExportDefaultDeclarationKind::Identifier(id) => {
                /*
                 * export default ClassName;
                 * exported: default
                 * local: ClassName
                 */
                self.set_default_import_name(&decl.exported.to_string(), &id.name.to_string());
            }
            _ => {}
        }
    }

    /*************************************************/
    /*************************************************/
    /*                Import / Export                */
    /*************************************************/
    /*************************************************/
    fn visit_ts_import_equals_declaration(&mut self, decl: &mut TSImportEqualsDeclaration<'a>) {
        let name = &decl.id.name;

        match &decl.module_reference {
            TSModuleReference::ExternalModuleReference(external_module_reference) => {
                let full_path = external_module_reference
                    .expression
                    .value
                    .clone()
                    .into_string();
                self.set_temp_import_source(name.to_string(), full_path, None, false)
            }
            TSModuleReference::IdentifierReference(_id) => {
                // println!("id: {:?}", id)
            }
            _ => {}
        };
    }
    fn visit_import_declaration(&mut self, decl: &mut ImportDeclaration<'a>) {
        if let Some(specifiers) = &decl.specifiers {
            for specifier in specifiers {
                let full_path = decl.source.value.clone().into_string();
                let mut imported: Option<String> = None;

                match specifier {
                    ImportDeclarationSpecifier::ImportNamespaceSpecifier(namespace) => {
                        let local = namespace.local.name.clone().into_string();
                        self.set_temp_import_source(local, full_path, imported, false)
                    }
                    ImportDeclarationSpecifier::ImportSpecifier(normal) => {
                        let local = normal.local.name.clone().into_string();
                        imported = Some(normal.imported.to_string());

                        self.set_temp_import_source(local, full_path, imported, false)
                    }
                    ImportDeclarationSpecifier::ImportDefaultSpecifier(default) => {
                        let local = default.local.name.clone().into_string();
                        self.set_temp_import_source(local, full_path, imported, true)
                    }
                }
            }
        }
    }

    fn visit_export_named_declaration(&mut self, decl: &mut ExportNamedDeclaration<'a>) {
        let ExportNamedDeclaration {
            declaration,
            specifiers,
            source,
            ..
        } = decl;

        for specifier in specifiers.iter_mut() {
            let local = specifier.local.name().to_string();
            let exported = specifier.exported.name().to_string();

            /*
             * export type { Huga as default };     // source is None
             * export type { Huga as default } from '...';
             */
            if let Some(source) = source {
                let full_path = source.value.clone().into_string();
                // NOTE: set local to imported because use for searching decl with local name
                // export type {Huga(local) as Hoge(exported)} from '...'
                self.set_temp_import_source(exported, full_path, Some(local), false);
            } else {
                /*
                 * export type {Huga as default};
                 *
                 * exported: default
                 * local: Huga
                 */
                self.set_default_import_name(&exported, &local);

                /*
                 * export type {Huga as AnotherHuga};
                 *
                 * exported: AnotherHuga
                 * local: Huga
                 */
                self.set_original_name(&exported, &local)
            }
        }

        if let Some(export_named_decl) = declaration {
            match export_named_decl {
                Declaration::ClassDeclaration(class) => {
                    self.visit_class(class);
                }
                Declaration::TSTypeAliasDeclaration(decl) => {
                    self.visit_ts_type_alias_declaration(decl);
                }
                Declaration::TSInterfaceDeclaration(decl) => {
                    self.visit_ts_interface_declaration(decl)
                }
                Declaration::VariableDeclaration(_decl) => {
                    // TODO: support named change `const huga  = aguh;`
                }
                _ => {
                    // println!("Another Statement {:?}", export_named_decl);
                }
            }
        }
    }

    /*************************************************/
    /*************************************************/
    /*                Handle Targets                 */
    /*************************************************/
    /*************************************************/
    fn visit_class(&mut self, class: &mut Class<'a>) {
        if let Some(identifier) = &class.id {
            if identifier.name.to_string() == self.get_decl_name_for_resolve() {
                // self.add_class(class);

                self.target
                    .lock()
                    .unwrap()
                    .set_target_definition(TargetDefinition {
                        specifier: identifier.name.to_string(),
                        span: calc_prop_span(class.span, self.read_file_span),
                        file_path: self.temp_current_read_file_path.clone(),
                        target_type: TargetType::Class,
                    });
                self.status = ResolveStatus::Resolved;

                self.visit_class_body(&mut class.body);
            }
        }
    }
    fn visit_class_body(&mut self, body: &mut ClassBody<'a>) {
        body.body.iter_mut().for_each(|element| match element {
            oxc::ast::ast::ClassElement::MethodDefinition(method) => {
                self.visit_method_definition(method);
            }

            /*
            class MyClass {
              static staticProperty = 10; // StaticBlock
              private _name: string; // PropertyDefinition
              constructor(name: string) {
                this._name = name;
              }
              get name(): string { // AccessorProperty (getter)
                return this._name;
              }
              set name(newName: string) { // AccessorProperty (setter)
                this._name = newName;
              }
              greet() { // MethodDefinition
                console.log(`Hello, ${this.name}!`);
              }
              [index: number]: string; // TSIndexSignature
            }
            */
            _ => {}
        });
    }
    fn visit_method_definition(&mut self, method: &mut MethodDefinition<'a>) {
        if let Some(key_name) = method.key.name() {
            if key_name == "constructor" {
                for formal_parameter in method.value.params.items.iter_mut() {
                    match &formal_parameter.pattern.kind {
                        BindingPatternKind::BindingIdentifier(id) => {
                            if let Some(ts_type) = &formal_parameter.pattern.type_annotation {
                                ts_type_assign_as_property(
                                    self.target.clone(),
                                    TargetReferenceInfo {
                                        file_path: self.temp_current_read_file_path.clone(),
                                    },
                                    self.read_file_span,
                                    &ts_type.type_annotation,
                                    id.name.to_string(),
                                );
                            }
                        }
                        BindingPatternKind::ObjectPattern(_) => {
                            if let Some(ts_type) = &formal_parameter.pattern.type_annotation {
                                ts_type_assign_as_property(
                                    self.target.clone(),
                                    TargetReferenceInfo {
                                        file_path: self.temp_current_read_file_path.clone(),
                                    },
                                    self.read_file_span,
                                    &ts_type.type_annotation,
                                    String::from("object"),
                                );
                            }
                        }
                        _ => {}
                    }
                }
            }
        }
    }

    fn visit_property_definition(&mut self, def: &mut PropertyDefinition<'a>) {
        for annotation in def.type_annotation.iter_mut() {
            if let Some(key_name) = def.key.name() {
                ts_type_assign_as_property(
                    self.target.clone(),
                    TargetReferenceInfo {
                        file_path: self.temp_current_read_file_path.clone(),
                    },
                    self.read_file_span,
                    &annotation.type_annotation,
                    key_name.to_string(),
                );
            }
        }
    }

    fn visit_ts_signature(&mut self, signature: &mut TSSignature<'a>) {
        match signature {
            TSSignature::TSPropertySignature(ts_prop_signature) => {
                for annotation in ts_prop_signature.type_annotation.iter() {
                    if let Some(key_name) = ts_prop_signature.key.name() {
                        ts_type_assign_as_property(
                            self.target.clone(),
                            TargetReferenceInfo {
                                file_path: self.temp_current_read_file_path.clone(),
                            },
                            self.read_file_span,
                            &annotation.type_annotation,
                            key_name.to_string(),
                        );
                    }
                }
            }
            // TODO
            /*
            type MyType = {
              [key: string]: number; // TSIndexSignature
              name: string;           // TSPropertySignature
              sayHello(): void;       // TSMethodSignature
              new (name: string): MyType; // TSConstructSignatureDeclaration
              (message: string): string; // TSCallSignatureDeclaration
            };
            */
            TSSignature::TSCallSignatureDeclaration(_) => {}
            _ => {}
        }
    }

    // handle mock target is type alias
    fn visit_ts_type_alias_declaration(&mut self, decl: &mut TSTypeAliasDeclaration<'a>) {
        let target_name = self.get_decl_name_for_resolve();

        if decl.id.name.to_string() == *target_name {
            // NOTE: handle mock target property
            match &mut decl.type_annotation {
                TSType::TSTypeLiteral(ts_type_literal) => {
                    for ts_signature in ts_type_literal.members.iter_mut() {
                        self.visit_ts_signature(ts_signature);
                    }
                }

                /*
                    genericの変数も探してしまい、解決できず処理が止まってしまう
                    時間制限と、genericの変数を利用するよう調整が必要そう
                */
                TSType::TSTypeReference(_ty_ref) => {
                    ts_type_assign_as_property(
                        self.target.clone().clone(),
                        TargetReferenceInfo {
                            file_path: self.temp_current_read_file_path.clone(),
                        },
                        self.read_file_span,
                        &decl.type_annotation,
                        target_name.to_string(),
                    );
                }
                _ => {}
            }

            // self.add_ts_alias(decl);
            self.target
                .lock()
                .unwrap()
                .set_target_definition(TargetDefinition {
                    specifier: decl.id.name.to_string(),
                    span: calc_prop_span(decl.span, self.read_file_span),
                    file_path: self.temp_current_read_file_path.clone(),
                    target_type: TargetType::TSTypeAlias,
                });
            self.status = ResolveStatus::Resolved;
        }
    }

    fn visit_ts_interface_declaration(&mut self, decl: &mut TSInterfaceDeclaration<'a>) {
        if decl.id.name.to_string() == self.get_decl_name_for_resolve() {
            // self.add_ts_interface(decl);
            self.target
                .lock()
                .unwrap()
                .set_target_definition(TargetDefinition {
                    specifier: decl.id.name.to_string(),
                    span: calc_prop_span(decl.span, self.read_file_span),
                    file_path: self.temp_current_read_file_path.clone(),
                    target_type: TargetType::TSInterface,
                });
            self.status = ResolveStatus::Resolved;

            for ts_signature in decl.body.body.iter_mut() {
                self.visit_ts_signature(ts_signature);
            }
        }
    }
}

/*************************/
/* main func for resolve */
/*************************/
pub fn resolve_target(
    target_resolver: &mut TargetResolver,
    target_file_path: PathBuf,
    ts_config_path: &Option<PathBuf>,
    project_root_path: &Option<PathBuf>,
    depth: u8,
) -> Result<()> {
    // prevent infinite loop
    if depth > 50 {
        println!(
            "{}",
            format!(
                "module resolution depth is too deep: {} of {}",
                target_resolver.target.lock().unwrap().name,
                target_file_path.to_str().unwrap_or("unknown file")
            )
            .red()
        );
        return Ok(());
    }

    if target_resolver.resolved() {
        return Ok(());
    };

    target_resolver.temp_current_read_file_path = target_file_path.clone();
    let file = utils::read(&target_file_path).unwrap_or(String::new());
    let source_type = SourceType::ts();
    let allocator = oxc::allocator::Allocator::default();
    let parser = Parser::new(&allocator, &file, source_type);

    let mut program = parser.parse().program;
    target_resolver.visit_statements(&mut program.body);

    // /*
    //  * NOTE:
    //  * start analysis for ref_properties after original mock_target_ast analysis is started
    //  */
    // for prop in self.get_needs_start_analysis_properties() {
    //     prop.lock().unwrap().analysis_start();
    //     resolve_mock_target_ast(prop, program, path, ts_config_path, project_root_path, 1)?;
    // }

    if !target_resolver.resolved() {
        target_resolver.set_import_source();

        if let Ok(module_path) = target_file_path.canonicalize() {
            if let Some(parent_path) = module_path.parent() {
                if let Some(next_import) = target_resolver.get_next_import() {
                    if TargetResolver::is_loaded_file_d_ts(&next_import) {
                        // TODO: 呼ばれていない
                        // tried all possible patterns.

                        if let Some(project_root_path) = project_root_path {
                            resolve_target_ast_with_tsserver(
                                target_resolver,
                                &Some(project_root_path.clone()),
                                depth + 1,
                            )?;
                        }
                        return Ok(());
                    }

                    let mut read_file_path: PathBuf = PathBuf::new();
                    let parent_path_buf = parent_path.to_path_buf();

                    // important the order of is_loaded_hogehoge() because these func handle loaded flag
                    if TargetResolver::is_loaded_index_d_ts(&next_import) {
                        next_import.file_d_ts_loaded = true;

                        let next_file_stem = Path::new(&next_import.full_path)
                            .file_stem()
                            .ok_or(anyhow!("next file is not found"))?;

                        let next_file_name = next_file_stem.to_string_lossy();

                        if next_file_name.ends_with(".d") {
                            read_file_path =
                                parent_path_buf.join(format!("{}{}", next_file_name, ".ts"));
                        } else {
                            read_file_path =
                                parent_path_buf.join(format!("{}{}", next_file_name, ".d.ts"));
                        }
                    }

                    if TargetResolver::is_loaded_full_path(&next_import) {
                        next_import.index_d_ts_loaded = true;
                        read_file_path = parent_path_buf.join("index.d.ts");
                    }

                    if TargetResolver::is_unloaded_import(&next_import) {
                        next_import.loaded = true;

                        let resolution_result =
                            resolve_specifier(parent_path, &next_import.full_path, ts_config_path);

                        if let Ok(resolution) = resolution_result {
                            read_file_path = resolution.full_path();
                        }
                    }

                    // TODO: use same program ast
                    if next_import.need_reload {
                        read_file_path = PathBuf::from(target_file_path);
                    }

                    if !read_file_path.exists() {
                        if let Some(project_root_path) = project_root_path {
                            resolve_target_ast_with_tsserver(
                                target_resolver,
                                &Some(project_root_path.clone()),
                                depth + 1,
                            )?;
                        }

                        return Ok(());
                    }

                    resolve_target(
                        target_resolver,
                        read_file_path,
                        ts_config_path,
                        project_root_path,
                        depth + 1,
                    )?;
                }
            }
        }
    }

    Ok(())
}

pub fn resolve_target_ast_with_tsserver(
    target_resolver: &mut TargetResolver,
    project_root_path: &Option<PathBuf>,
    depth: u8,
) -> Result<()> {
    let target_file_path = target_resolver
        .target
        .lock()
        .unwrap()
        .target_reference
        .file_path
        .clone();

    if depth > 15 {
        println!(
            "{}",
            format!(
                "module resolution depth is too deep on tsserver: {} of {}",
                target_resolver.target.lock().unwrap().name,
                target_file_path.to_str().unwrap_or("unknown file")
            )
            .red()
        );
        return Ok(());
    }

    let absolute_path = target_file_path.canonicalize().unwrap();
    target_resolver.temp_current_read_file_path = absolute_path.clone();

    if let Some(project_root_path) = project_root_path {
        let target = target_resolver.target.lock().unwrap();

        if let Some(result) = tsserver(
            project_root_path,
            &absolute_path,
            target.target_reference.span,
        ) {
            drop(target);
            let (target_file_path, span) = result;

            // NOTE: 対象ファイルから定義元のspanを取得
            // それをsouce_textとしてast visitするため完全なファイルではない
            // 抽出位置からのspanとなるため、抽出地点のSPANを加えられるよう一時保存する
            target_resolver.read_file_span = Some(span);
            target_resolver.temp_current_read_file_path = target_file_path.clone();

            let target_source = utils::read(&target_file_path).unwrap_or(String::new());
            // let target_source_text = span.source_text(&target_source);

            let target_source_text = source_text_from_span(span, &target_source);

            let source_type = SourceType::ts();
            let allocator = oxc::allocator::Allocator::default();
            let parser = Parser::new(&allocator, &target_source_text, source_type);
            let mut program = parser.parse().program;

            target_resolver.visit_statements(&mut program.body);

            // let mut handles = vec![];
            //
            // /*
            //  * NOTE:
            //  * start analysis for ref_properties after original mock_target_ast analysis is started
            //  */
            // for prop in target_resolver.get_needs_start_analysis_properties() {
            //     let mut cloned_target_resolver = target_resolver.clone();
            //     let project_root_path = project_root_path.clone();
            //
            //     let handle = thread::spawn(move || {
            //         if let Err(e) = resolve_target_ast_with_tsserver(
            //             &mut cloned_target_resolver,
            //             &Some(project_root_path.clone()),
            //             depth + 1,
            //         ) {
            //             println!("{}", e);
            //         }
            //     });
            //
            //     handles.push(handle);
            // }
            //
            // for handle in handles {
            //     handle.join().unwrap();
            // }
        } else {
            return Err(anyhow!("ファイル読み込みでエラー"));
        }
    }
    Ok(())
}
