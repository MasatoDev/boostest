use anyhow::{anyhow, Result};
use colored::*;
use oxc::allocator::Vec as AllocVec;
use oxc::ast::visit::walk_mut::{
    walk_class, walk_method_definition, walk_ts_function_type, walk_ts_interface_declaration,
    walk_ts_type_name,
};
use oxc::parser::Parser;
use oxc::semantic::ScopeFlags;
use oxc::span::{SourceType, Span};
use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex};
use std::thread;
use std::time::Duration;

use oxc::ast::ast::{
    BindingPatternKind, Class, ClassBody, ExportDefaultDeclaration, ExportDefaultDeclarationKind,
    ExportNamedDeclaration, Expression, MethodDefinition, PropertyDefinition,
    TSInterfaceDeclaration, TSModuleReference, TSSignature, TSTupleElement, TSType,
    TSTypeAliasDeclaration, TSTypeAnnotation, TSTypeName, TSTypeQueryExprName, VariableDeclaration,
    VariableDeclarator,
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

use super::target::{ResolvedDefinitions, Target, TargetDefinition, TargetReference};

use crate::boostest_manager::propety_assignment::gen_target_supplement;
use crate::boostest_utils::ast_utils::ignore_ref_name;
use crate::boostest_utils::buf::{source_text_from_span, utf16_span_to_utf8_span};
use crate::boostest_utils::id_name::get_parent_key_name;
use crate::boostest_utils::napi::TargetType;
use crate::boostest_utils::tsserver::TSServerCache;
use crate::boostest_utils::{ast_utils, file_utils};

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
    pub lib_d_ts_loaded: bool,

    pub need_reload: bool,
}

#[derive(Debug)]
pub struct TargetResolver {
    pub target: Arc<Mutex<Target>>,
    pub resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,

    pub defined_generics: Vec<String>,

    pub parent_key_name: Option<String>,
    pub key_name: Option<String>,

    pub status: ResolveStatus,
    pub read_file_span: Option<Span>,

    pub use_tsserver: bool,

    /*
    - visit ast
    - add temp_import_source_vec
    - continue visit ast
    - end visit
    - unresolved -> set_import_source
    */
    pub import: Vec<Import>,
    // for utility types and so on
    pub lib_file_loaded: bool,
    pub temp_import_source_vec: Option<Vec<Import>>,
    pub temp_current_read_file_path: PathBuf,
    pub temp_renamed_var_decl_span: Option<Span>,
}

impl TargetResolver {
    pub fn new(
        target: Arc<Mutex<Target>>,
        resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
    ) -> Self {
        Self {
            target,
            defined_generics: Vec::new(),
            resolved_definitions,
            parent_key_name: None,
            key_name: None,
            status: ResolveStatus::Nothing,
            import: Vec::new(),
            lib_file_loaded: false,
            use_tsserver: false,
            temp_import_source_vec: None,
            temp_current_read_file_path: PathBuf::new(),
            temp_renamed_var_decl_span: None,
            read_file_span: None,
        }
    }

    pub fn resolve(
        &mut self,
        ts_config_path: &Option<PathBuf>,
        project_root_path: &Option<PathBuf>,
        ts_server_cache: Arc<Mutex<TSServerCache>>,
        lib_file_path: &PathBuf,
    ) {
        // 循環参照防止
        let target_ref = self.target.lock().unwrap().target_reference.clone();
        let is_resolved = self
            .resolved_definitions
            .lock()
            .unwrap()
            .is_resolved(&target_ref);

        if is_resolved {
            println!("Already resolved: {}", self.get_target_name().green());
            return;
        };

        self.status = ResolveStatus::Start;
        let file_path = self
            .target
            .lock()
            .unwrap()
            .target_reference
            .file_path
            .clone();
        resolve_target(
            self,
            file_path,
            ts_config_path,
            lib_file_path,
            project_root_path,
            1,
            ts_server_cache,
        );
    }

    pub fn update_key_name(&mut self, key_name: String) {
        self.key_name = Some(key_name);
    }

    pub fn clear_key_name(&mut self) {
        self.key_name = None;
    }

    pub fn get_target_name(&self) -> String {
        self.target.clone().lock().unwrap().name.to_string()
    }

    pub fn add_prop_with_retry(
        &mut self,
        key_name: Option<String>,
        id: String,
        target_reference: TargetReference,
    ) {
        if !self.defined_generics.contains(&id) {
            let target_name = self.get_target_name();

            loop {
                match self.target.clone().lock() {
                    Ok(mut target) => {
                        let new_parent_key_name = get_parent_key_name(
                            self.parent_key_name.clone(),
                            key_name,
                            target_name,
                        );
                        target.add_property(id, target_reference);
                        break;
                    }
                    Err(_) => {
                        // ロック取得に失敗した場合、少し待ってからリトライ
                        thread::sleep(Duration::from_millis(10));
                    }
                }
            }
        }
    }

    /*****************/
    /*    status     */
    /*****************/
    pub fn resolved(&self) -> bool {
        self.status == ResolveStatus::Resolved
    }

    pub fn set_resolved(&mut self) {
        self.target.lock().unwrap().is_resolved = true;
        self.status = ResolveStatus::Resolved;
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
            lib_d_ts_loaded: false,
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

        self.target.clone().lock().unwrap().name.to_string()
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

    // export const Hoge = Huga;
    pub fn set_renamed_decl(&mut self, renamed_decl_name: String) {
        if let Some(last) = self.import.last_mut() {
            last.identifier_original_name = Some(renamed_decl_name.clone());
            last.need_reload = true;
        }
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

    pub fn is_generic_property(&self) -> bool {
        self.target
            .lock()
            .unwrap()
            .target_reference
            .target_supplement
            .clone()
            .map(|s| s.is_generic_property)
            .unwrap_or(false)
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

                Statement::VariableDeclaration(var_decl) => {
                    self.visit_variable_declaration(var_decl);
                }
                Statement::TSExportAssignment(ts_export_assignment) => {
                    if let Some(identifier) =
                        ts_export_assignment.expression.get_identifier_reference()
                    {
                        self.set_default_import_name(
                            &String::from("default"),
                            &identifier.name.to_string(),
                        );

                        // for tsserver
                        self.temp_renamed_var_decl_span =
                            Some(calc_prop_span(identifier.span, self.read_file_span));
                    }
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
                        self.set_temp_import_source(local, full_path, imported, true)
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
                Declaration::VariableDeclaration(var_decl) => {
                    self.visit_variable_declaration(var_decl);
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
            if self.use_tsserver || identifier.name == self.get_decl_name_for_resolve() {
                if let Some(type_parameters) = &mut class.type_parameters {
                    for param in type_parameters.params.iter() {
                        self.defined_generics.push(param.name.to_string());
                    }
                    self.visit_ts_type_parameter_declaration(type_parameters);
                }

                if !ignore_ref_name(&identifier.name) {
                    let target_def = TargetDefinition {
                        specifier: identifier.name.to_string(),
                        span: calc_prop_span(class.span, self.read_file_span),
                        file_path: self.temp_current_read_file_path.clone(),
                        target_type: TargetType::Class,
                        defined_generics: self.defined_generics.clone(),
                    };

                    self.resolved_definitions
                        .lock()
                        .unwrap()
                        .set_target_definition(
                            &self.target.lock().unwrap().target_reference,
                            target_def,
                        );
                }

                if let Some(id) = &mut class.id {
                    self.visit_binding_identifier(id);
                }

                if let Some(implements) = &mut class.implements {
                    self.visit_ts_class_implementses(implements);
                }
                self.visit_class_body(&mut class.body);

                self.set_resolved();
            }
        }
    }

    fn visit_method_definition(&mut self, method: &mut MethodDefinition<'a>) {
        if let Some(key_name) = method.key.name() {
            if key_name == "constructor" {
                for formal_parameter in method.value.params.items.iter_mut() {
                    match &mut formal_parameter.pattern.kind {
                        BindingPatternKind::BindingIdentifier(id) => {
                            if let Some(ts_type) = &mut formal_parameter.pattern.type_annotation {
                                self.visit_ts_type(&mut ts_type.type_annotation);
                            }
                        }
                        BindingPatternKind::ObjectPattern(_) => {
                            if let Some(ts_type) = &mut formal_parameter.pattern.type_annotation {
                                self.visit_ts_type(&mut ts_type.type_annotation);
                            }
                        }
                        _ => {}
                    }
                }
            }
        }
        // walk_method_definition(self, method);
    }

    // fn visit_static_member_expression(
    //     &mut self,
    //     it: &mut oxc::ast::ast::StaticMemberExpression<'a>,
    // ) {
    //     it.property
    // }
    //
    fn visit_identifier_name(&mut self, identifier: &mut oxc::ast::ast::IdentifierName<'a>) {
        let id_name = identifier.name.clone().into_string();

        let target_ref = TargetReference {
            span: calc_prop_span(identifier.span, self.read_file_span),
            file_path: self.temp_current_read_file_path.clone(),
            target_supplement: gen_target_supplement(false, self.is_generic_property()),
        };

        self.add_prop_with_retry(self.key_name.clone(), id_name, target_ref);
    }

    /** NOTE: not used? */
    // fn visit_property_definition(&mut self, def: &mut PropertyDefinition<'a>) {
    //     for annotation in def.type_annotation.iter_mut() {
    //         if let Some(key_name) = def.key.name() {
    //             ts_type_assign_as_property(
    //                 self.target.clone(),
    //                 TargetReferenceInfo {
    //                     file_path: self.temp_current_read_file_path.clone(),
    //                 },
    //                 self.read_file_span,
    //                 &annotation.type_annotation,
    //                 key_name.to_string(),
    //             );
    //         }
    //     }
    // }

    // fn visit_ts_signatures(&mut self, it: &mut AllocVec<'a, TSSignature<'a>>) {
    //     for el in it.iter_mut() {
    //         if self.key_name.is_none() {
    //             self.visit_ts_signature(el);
    //             self.clear_key_name();
    //         } else {
    //             self.clear_key_name();
    //             self.visit_ts_signature(el);
    //         }
    //     }
    // }

    fn visit_ts_signature(&mut self, signature: &mut TSSignature<'a>) {
        match signature {
            TSSignature::TSPropertySignature(ts_prop_signature) => {
                // if let Some(key_name) = ts_prop_signature.key.name() {
                if let Some(prop_key) = ts_prop_signature.key.name() {
                    self.update_key_name(prop_key.to_string());
                }

                for annotation in &mut ts_prop_signature.type_annotation.iter_mut() {
                    self.visit_ts_type(&mut annotation.type_annotation);
                }
                // }
            }
            TSSignature::TSIndexSignature(it) => self.visit_ts_index_signature(it),
            TSSignature::TSConstructSignatureDeclaration(it) => {
                self.visit_ts_construct_signature_declaration(it)
            }
            TSSignature::TSMethodSignature(it) => self.visit_ts_method_signature(it),
            // FIXME:
            // TSSignature::TSCallSignatureDeclaration(it) => {
            //     self.visit_ts_call_signature_declaration(it)
            // }
            _ => {}
        }
    }

    // fn visit_ts_type_name(&mut self, it: &mut TSTypeName<'a>) {
    //     if let TSTypeName::IdentifierReference(identifier) = it {
    //         let id_name = identifier.name.clone().into_string();
    //
    //         let target_ref = TargetReference {
    //             span: calc_prop_span(identifier.span, self.read_file_span),
    //             file_path: self.temp_current_read_file_path.clone(),
    //             target_supplement: gen_target_supplement(false, self.is_generic_property()),
    //         };
    //
    //         self.add_prop_with_retry(self.key_name.clone(), id_name, target_ref);
    //     }
    //     walk_ts_type_name(self, it);
    // }
    //

    fn visit_ts_type(&mut self, ts_type: &mut TSType<'a>) {
        // NOTE: handle mock target property
        match ts_type {
            TSType::TSTypeReference(ty_ref) if ast_utils::is_defined_type(&ty_ref) => {}
            TSType::TSTypeReference(ty_ref) if ast_utils::is_function_type(&ty_ref) => {}
            TSType::TSTypeReference(ty_ref) if ast_utils::is_array_type(&ty_ref) => {}
            TSType::TSTypeReference(ty_ref) if ast_utils::is_boolean_type(&ty_ref) => {}
            TSType::TSTypeReference(ty_ref) if ast_utils::is_promise_type(&ty_ref) => {
                if let Some(type_parameters) = &mut ty_ref.type_parameters {
                    for param in type_parameters.params.iter_mut() {
                        self.visit_ts_type(param);
                    }
                }
            }
            TSType::TSTypeReference(ts_type_ref) => {
                if let Some(type_parameters) = &mut ts_type_ref.type_parameters {
                    for param in type_parameters.params.iter_mut() {
                        self.visit_ts_type(param);
                    }
                }

                match &mut ts_type_ref.type_name {
                    TSTypeName::IdentifierReference(identifier) => {
                        let id_name = identifier.name.clone().into_string();

                        let target_ref = TargetReference {
                            span: calc_prop_span(identifier.span, self.read_file_span),
                            file_path: self.temp_current_read_file_path.clone(),
                            target_supplement: gen_target_supplement(
                                false,
                                self.is_generic_property(),
                            ),
                        };

                        self.add_prop_with_retry(self.key_name.clone(), id_name, target_ref);
                    }
                    TSTypeName::QualifiedName(qualified_name) => {
                        let id_name = qualified_name.right.name.clone().into_string();

                        let target_ref = TargetReference {
                            span: calc_prop_span(qualified_name.right.span, self.read_file_span),
                            file_path: self.temp_current_read_file_path.clone(),
                            target_supplement: gen_target_supplement(
                                false,
                                self.is_generic_property(),
                            ),
                        };

                        self.add_prop_with_retry(self.key_name.clone(), id_name, target_ref);
                    }
                }
            }
            TSType::TSTypeLiteral(ts_type_literal) => {
                self.visit_ts_signatures(&mut ts_type_literal.members);
            }
            TSType::TSConditionalType(ts_condition_type) => {
                self.visit_ts_type(&mut ts_condition_type.check_type);
                self.visit_ts_type(&mut ts_condition_type.extends_type);
                self.visit_ts_type(&mut ts_condition_type.true_type);
                self.visit_ts_type(&mut ts_condition_type.false_type);
            }
            TSType::TSUnionType(ts_union_type) => {
                for ts_type in ts_union_type.types.iter_mut() {
                    self.visit_ts_type(ts_type);
                }
            }
            TSType::TSTupleType(ts_tuple_type) => {
                for element in ts_tuple_type.element_types.iter_mut() {
                    self.visit_ts_type(element.to_ts_type_mut());
                }
            }
            TSType::TSNamedTupleMember(ts_named_tuple_member) => {
                match &mut ts_named_tuple_member.element_type {
                    TSTupleElement::TSOptionalType(_) => {
                        // &ts_named_tuple_member.element_type,
                    }
                    TSTupleElement::TSRestType(_) => {}
                    mut ts_tuple_type => {
                        self.visit_ts_type(ts_tuple_type.to_ts_type_mut());
                    }
                }
            }
            TSType::TSIntersectionType(ts_intersection_type) => {
                for ts_type in ts_intersection_type.types.iter_mut() {
                    self.visit_ts_type(ts_type);
                }
            }
            TSType::TSTypeQuery(ts_type_query) => {
                if let TSTypeQueryExprName::IdentifierReference(identifier) =
                    &ts_type_query.expr_name
                {
                    let target_ref = TargetReference {
                        span: calc_prop_span(identifier.span, self.read_file_span),
                        file_path: self.temp_current_read_file_path.clone(),
                        target_supplement: gen_target_supplement(false, self.is_generic_property()),
                    };
                    self.add_prop_with_retry(
                        self.key_name.clone(),
                        identifier.name.clone().into_string(),
                        target_ref,
                    );
                }
            }
            TSType::TSTypeOperatorType(ts_type_operator_type) => {
                if let TSType::TSTypeReference(ts_type_ref) = &ts_type_operator_type.type_annotation
                {
                    let target_ref = TargetReference {
                        span: calc_prop_span(ts_type_ref.span, self.read_file_span),
                        file_path: self.temp_current_read_file_path.clone(),
                        target_supplement: gen_target_supplement(false, self.is_generic_property()),
                    };

                    self.add_prop_with_retry(
                        self.key_name.clone(),
                        ts_type_ref.type_name.to_string(),
                        target_ref,
                    );
                }
            }
            TSType::TSIndexedAccessType(ts_indexed_access_type) => {
                if let TSType::TSTypeReference(ts_object_type_ref) =
                    &ts_indexed_access_type.object_type
                {
                    let target_ref = TargetReference {
                        span: calc_prop_span(ts_object_type_ref.span, self.read_file_span),
                        file_path: self.temp_current_read_file_path.clone(),
                        target_supplement: gen_target_supplement(false, self.is_generic_property()),
                    };
                    self.add_prop_with_retry(
                        self.key_name.clone(),
                        ts_object_type_ref.type_name.to_string(),
                        target_ref,
                    );
                }
            }
            TSType::TSMappedType(ts_mapped_type) => {
                // FIXME: genericsではないものをキャンセル対象で入れているので、変数名変更する
                self.defined_generics
                    .push(ts_mapped_type.type_parameter.name.to_string());

                if let Some(ts_type) = &mut ts_mapped_type.type_parameter.constraint {
                    self.visit_ts_type(ts_type);
                }

                if let Some(ts_type) = &mut ts_mapped_type.type_annotation {
                    self.visit_ts_type(ts_type);
                }
            }
            TSType::TSArrayType(ts_array_type) => {
                self.visit_ts_type(&mut ts_array_type.element_type);
            }
            TSType::TSConstructorType(ts_constructor_type) => {
                self.visit_ts_type(&mut ts_constructor_type.return_type.type_annotation);
                self.visit_formal_parameters(&mut ts_constructor_type.params);
            }
            TSType::TSFunctionType(ts_function_type) => {
                walk_ts_function_type(self, ts_function_type);
            }
            TSType::TSInferType(ts_infer_type) => {
                self.defined_generics
                    .push(ts_infer_type.type_parameter.name.to_string());
            }
            _ => {}
        }
    }

    fn visit_variable_declaration(&mut self, var_decl: &mut VariableDeclaration<'a>) {
        var_decl.declarations.iter_mut().for_each(|decl| {
            match &decl.id.kind {
                BindingPatternKind::BindingIdentifier(id) => {
                    if id.name == self.get_decl_name_for_resolve() {
                        if let Some(init) = &mut decl.init {
                            if let Some(identifier) = init.get_identifier_reference() {
                                self.set_renamed_decl(identifier.name.to_string());

                                // for tsserver
                                self.temp_renamed_var_decl_span =
                                    Some(calc_prop_span(identifier.span, self.read_file_span));
                            }
                        }
                    }
                }
                _ => {}
            };
            let target_name = self.get_decl_name_for_resolve();

            if let Some(id) = decl.id.get_identifier() {
                if self.use_tsserver || id == *target_name {
                    let target_def = TargetDefinition {
                        specifier: id.to_string(),
                        span: calc_prop_span(var_decl.span, self.read_file_span),
                        file_path: self.temp_current_read_file_path.clone(),
                        target_type: TargetType::Variable,
                        defined_generics: self.defined_generics.clone(),
                    };

                    self.resolved_definitions
                        .lock()
                        .unwrap()
                        .set_target_definition(
                            &self.target.lock().unwrap().target_reference,
                            target_def,
                        );

                    self.set_resolved();
                }
            }
        });
    }

    // handle mock target is type alias
    fn visit_ts_type_alias_declaration(&mut self, decl: &mut TSTypeAliasDeclaration<'a>) {
        let target_name = self.get_decl_name_for_resolve();

        if self.use_tsserver || decl.id.name == *target_name {
            if let Some(type_parameters) = &mut decl.type_parameters {
                for param in type_parameters.params.iter() {
                    self.defined_generics.push(param.name.to_string());
                }
                self.visit_ts_type_parameter_declaration(type_parameters);
            }

            self.visit_ts_type(&mut decl.type_annotation);

            if !ignore_ref_name(&decl.id.name) {
                let target_def = TargetDefinition {
                    specifier: decl.id.name.to_string(),
                    span: calc_prop_span(decl.span, self.read_file_span),
                    file_path: self.temp_current_read_file_path.clone(),
                    target_type: TargetType::TSTypeAlias,
                    defined_generics: self.defined_generics.clone(),
                };

                self.resolved_definitions
                    .lock()
                    .unwrap()
                    .set_target_definition(
                        &self.target.lock().unwrap().target_reference,
                        target_def,
                    );
            }

            self.set_resolved();
        }
    }

    fn visit_ts_interface_declaration(&mut self, decl: &mut TSInterfaceDeclaration<'a>) {
        if self.use_tsserver || decl.id.name.to_string() == self.get_decl_name_for_resolve() {
            if let Some(type_parameters) = &mut decl.type_parameters {
                for param in type_parameters.params.iter() {
                    self.defined_generics.push(param.name.to_string());
                }

                self.visit_ts_type_parameter_declaration(type_parameters);
            }

            self.visit_ts_interface_body(&mut decl.body);

            if !ignore_ref_name(&decl.id.name) {
                let target_def = TargetDefinition {
                    specifier: decl.id.name.to_string(),
                    span: calc_prop_span(decl.span, self.read_file_span),
                    file_path: self.temp_current_read_file_path.clone(),
                    target_type: TargetType::TSInterface,
                    defined_generics: self.defined_generics.clone(),
                };

                self.resolved_definitions
                    .lock()
                    .unwrap()
                    .set_target_definition(
                        &self.target.lock().unwrap().target_reference,
                        target_def,
                    );
                self.target.lock().unwrap().is_resolved = true;
            }
            self.set_resolved();
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
    lib_file_path: &PathBuf,
    project_root_path: &Option<PathBuf>,
    depth: u8,
    ts_server_cache: Arc<Mutex<TSServerCache>>,
) -> Result<()> {
    println!("target_name: {:?}", target_resolver.get_target_name());

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

    target_resolver.temp_current_read_file_path = target_file_path.clone();
    let file = file_utils::read(&target_file_path).unwrap_or_default();
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

    if target_resolver.resolved() {
        return Ok(());
    };
    println!("resolved {:?}", target_resolver.resolved());

    target_resolver.set_import_source();

    if let Ok(module_path) = target_file_path.canonicalize() {
        println!("module_path");
        if let Some(parent_path) = module_path.parent() {
            println!("parent_path");
            if let Some(next_import) = target_resolver.get_next_import() {
                println!("next_import{:?}", depth);

                let mut read_file_path: PathBuf = PathBuf::new();
                let parent_path_buf = parent_path.to_path_buf();

                // important the order of is_loaded_hogehoge() because these func handle loaded flag
                if TargetResolver::is_loaded_index_d_ts(next_import) {
                    println!("index_d_ts_loaded");
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

                if TargetResolver::is_loaded_full_path(next_import) {
                    println!("full_path_loaded");
                    next_import.index_d_ts_loaded = true;
                    read_file_path = parent_path_buf.join("index.d.ts");
                }

                if TargetResolver::is_unloaded_import(next_import) {
                    println!("unloaded_import");
                    next_import.loaded = true;

                    let resolution_result =
                        resolve_specifier(parent_path, &next_import.full_path, ts_config_path);

                    if let Ok(resolution) = resolution_result {
                        read_file_path = resolution.full_path();
                    }
                }

                if next_import.need_reload {
                    read_file_path = target_file_path;
                }

                if !read_file_path.exists() {
                    if let Some(project_root_path) = project_root_path {
                        resolve_target_ast_with_tsserver(
                            target_resolver,
                            &Some(project_root_path.clone()),
                            depth + 1,
                            ts_server_cache.clone(),
                        )?;
                    }

                    return Ok(());
                }

                println!("re resolve");
                resolve_target(
                    target_resolver,
                    read_file_path,
                    ts_config_path,
                    lib_file_path,
                    project_root_path,
                    depth + 1,
                    ts_server_cache.clone(),
                )?;
                return Ok(());
            }

            if !target_resolver.lib_file_loaded {
                target_resolver.lib_file_loaded = true;
                println!("use lib path");
                resolve_target(
                    target_resolver,
                    lib_file_path.clone(),
                    ts_config_path,
                    lib_file_path,
                    project_root_path,
                    depth + 1,
                    ts_server_cache.clone(),
                )?;
                return Ok(());
            } else {
                if let Some(project_root_path) = project_root_path {
                    println!("outer tsserver");
                    resolve_target_ast_with_tsserver(
                        target_resolver,
                        &Some(project_root_path.clone()),
                        depth + 1,
                        ts_server_cache.clone(),
                    )?;
                }
                return Ok(());
            }
        }
    }

    Ok(())
}

pub fn resolve_target_ast_with_tsserver(
    target_resolver: &mut TargetResolver,
    project_root_path: &Option<PathBuf>,
    depth: u8,
    ts_server_cache: Arc<Mutex<TSServerCache>>,
) -> Result<()> {
    println!("use tsserver");
    let target_file_path = target_resolver
        .target
        .lock()
        .unwrap()
        .target_reference
        .file_path
        .clone();

    if depth > 10 {
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

    // clean up
    target_resolver.temp_renamed_var_decl_span = None;
    if target_resolver.resolved() {
        return Ok(());
    };

    let absolute_path = target_file_path.canonicalize().unwrap();
    target_resolver.temp_current_read_file_path = absolute_path.clone();

    if let Some(project_root_path) = project_root_path {
        let target = target_resolver.target.lock().unwrap();
        let name = target.name.clone();
        let span = target.target_reference.span.clone();
        drop(target);

        target_resolver.use_tsserver = true;

        if let Some(result) = tsserver(
            project_root_path,
            &absolute_path,
            span,
            &name,
            ts_server_cache.clone(),
        ) {
            let (target_file_path, span) = result;

            let target_source = file_utils::read(&target_file_path).unwrap_or(String::new());
            let utf8_span = utf16_span_to_utf8_span(span, &target_source);

            // NOTE: 対象ファイルから定義元のspanを取得
            // それをsouce_textとしてast visitするため完全なファイルではない
            // 抽出位置からのspanとなるため、抽出地点のSPANを加えられるよう一時保存する
            target_resolver.read_file_span = Some(utf8_span);
            target_resolver.temp_current_read_file_path = target_file_path.clone();

            let target_source_text = source_text_from_span(span, &target_source);

            let source_type = SourceType::ts();
            let allocator = oxc::allocator::Allocator::default();
            let parser = Parser::new(&allocator, &target_source_text, source_type);
            let mut program = parser.parse().program;

            target_resolver.visit_statements(&mut program.body);

            if let Some(span) = target_resolver.temp_renamed_var_decl_span {
                let mut target = target_resolver.target.lock().unwrap();
                target.target_reference.span = span;
                target.target_reference.file_path = target_file_path.clone();
                drop(target);
                resolve_target_ast_with_tsserver(
                    target_resolver,
                    &Some(project_root_path.clone()),
                    depth + 1,
                    ts_server_cache.clone(),
                )?;
            }
        } else {
            return Err(anyhow!("ファイル読み込みでエラー"));
        }
    }
    Ok(())
}
