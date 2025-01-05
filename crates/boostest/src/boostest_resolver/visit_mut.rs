use oxc::ast::visit::walk_mut::{
    walk_formal_parameters, walk_function, walk_identifier_name, walk_method_definition,
    walk_ts_enum_declaration, walk_ts_infer_type, walk_ts_module_declaration,
    walk_ts_module_declaration_body, walk_ts_type_parameter_declaration, walk_variable_declaration,
    walk_variable_declarator,
};
use oxc::ast::{match_declaration, match_module_declaration, match_ts_type_name};

use oxc::ast::ast::{
    BindingPatternKind, Class, ExportAllDeclaration, ExportDefaultDeclaration,
    ExportDefaultDeclarationKind, ExportNamedDeclaration, FormalParameters, Function,
    IdentifierReference, MethodDefinition, TSInterfaceDeclaration, TSModuleDeclaration,
    TSModuleReference, TSNamespaceExportDeclaration, TSTypeAliasDeclaration, TSTypeName,
    TSTypeQueryExprName, VariableDeclaration,
};
use oxc::ast::{
    ast::{
        Declaration, ImportDeclaration, ImportDeclarationSpecifier, Statement,
        TSImportEqualsDeclaration,
    },
    VisitMut,
};
use oxc::semantic::ScopeFlags;

use super::target::{gen_target_supplement, DeclType, TargetDefinition, TargetReference};
pub use super::target_resolver::TargetResolver;

use crate::boostest_utils::ast_utils::{calc_prop_span, ignore_ref_name};
use crate::boostest_utils::napi::TargetType;

impl<'a> VisitMut<'a> for TargetResolver {
    fn visit_statement(&mut self, stmt: &mut Statement<'a>) {
        match stmt {
            Statement::BlockStatement(it) => {
                // self.visit_block_statement(it)
            }
            Statement::BreakStatement(it) => {
                // self.visit_break_statement(it)
            }
            Statement::ContinueStatement(it) => {
                // self.visit_continue_statement(it)
            }
            Statement::DebuggerStatement(it) => {
                // self.visit_debugger_statement(it)
            }
            Statement::DoWhileStatement(it) => {
                // self.visit_do_while_statement(it)
            }
            Statement::EmptyStatement(it) => {
                // self.visit_empty_statement(it)
            }
            Statement::ExpressionStatement(it) => {
                // TODO: hoge<T = any>のようなgenericは`T = any`というexpressio, statementなのでanyが入るよう調整する
                // self.visit_expression_statement(it)
            }
            Statement::ForInStatement(it) => {
                // self.visit_for_in_statement(it)
            }
            Statement::ForOfStatement(it) => {
                // self.visit_for_of_statement(it)
            }
            Statement::ForStatement(it) => {
                // self.visit_for_statement(it)
            }
            Statement::IfStatement(it) => {
                // self.visit_if_statement(it)
            }
            Statement::LabeledStatement(it) => {
                // self.visit_labeled_statement(it)
            }
            Statement::ReturnStatement(it) => {
                // self.visit_return_statement(it)
            }
            Statement::SwitchStatement(it) => {
                // self.visit_switch_statement(it)
            }
            Statement::ThrowStatement(it) => {
                // self.visit_throw_statement(it)
            }
            Statement::TryStatement(it) => {
                // self.visit_try_statement(it)
            }
            Statement::WhileStatement(it) => {
                // self.visit_while_statement(it)
            }
            Statement::WithStatement(it) => {
                // self.visit_with_statement(it)
            }

            match_module_declaration!(Statement) => {
                self.visit_module_declaration(stmt.to_module_declaration_mut())
            }
            match_declaration!(Statement) => self.visit_declaration(stmt.to_declaration_mut()),
        }
    }

    fn visit_declaration(&mut self, it: &mut Declaration<'a>) {
        match it {
            Declaration::VariableDeclaration(it) => self.visit_variable_declaration(it),
            Declaration::FunctionDeclaration(it) => {
                let flags = ScopeFlags::Function;
                self.visit_function(it, flags)
            }
            Declaration::ClassDeclaration(it) => self.visit_class(it),
            Declaration::TSTypeAliasDeclaration(it) => self.visit_ts_type_alias_declaration(it),
            Declaration::TSInterfaceDeclaration(it) => self.visit_ts_interface_declaration(it),
            Declaration::TSEnumDeclaration(it) => {
                // self.visit_ts_enum_declaration(it),
            }
            Declaration::TSModuleDeclaration(it) => self.visit_ts_module_declaration(it),
            Declaration::TSImportEqualsDeclaration(it) => {
                self.visit_ts_import_equals_declaration(it)
            }
        }
    }

    fn visit_ts_export_assignment(
        &mut self,
        ts_export_assignment: &mut oxc::ast::ast::TSExportAssignment<'a>,
    ) {
        if let Some(identifier) = ts_export_assignment.expression.get_identifier_reference() {
            self.set_default_import_name(&String::from("default"), identifier.name.as_ref());

            // for tsserver
            self.temp_renamed_var_decl_span =
                Some(calc_prop_span(identifier.span, self.read_file_span));
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
    // export * from "./lib";
    // export as namespace Zod;
    fn visit_ts_namespace_export_declaration(
        &mut self,
        ts_namespace_export_decl: &mut TSNamespaceExportDeclaration<'a>,
    ) {
        let id = ts_namespace_export_decl.id.name.clone().into_string();
        self.set_ts_namespace_export(&id);
    }

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
            self.visit_declaration(export_named_decl);
        }
    }

    fn visit_export_all_declaration(&mut self, decl: &mut ExportAllDeclaration<'a>) {
        let full_path = decl.source.value.clone().into_string();
        self.set_all_flag_temp_import_source(full_path);
    }

    /*************************************************/
    /*************************************************/
    /*              Handle Declaration               */
    /*************************************************/
    /*************************************************/

    fn visit_ts_enum_declaration(&mut self, it: &mut oxc::ast::ast::TSEnumDeclaration<'a>) {
        walk_ts_enum_declaration(self, it);
    }

    fn visit_function(&mut self, it: &mut Function<'a>, flags: ScopeFlags) {
        // skip function is included by class
        // TODO: check function
        // if flags.is_constructor() || flags.is_set_or_get_accessor() || flags.is_function() {
        if flags.is_constructor()
            || flags.is_set_or_get_accessor()
            || (flags.is_function() && it.id.is_none())
        {
            walk_function(self, it, flags);
            return;
        }

        // chack declaration
        let target_name = self.get_decl_name_for_resolve();

        if let Some(identifier) = &it.id.clone() {
            if self.skip_id_check || identifier.name == *target_name {
                let is_setable = self
                    .resolved_definitions
                    .lock()
                    .unwrap()
                    .is_setable_target_definition(
                        &self.target.lock().unwrap().target_reference,
                        TargetType::Function,
                        self.target_decl_type.clone(),
                    );
                if !is_setable {
                    return;
                }

                if let Some(type_parameters) = &mut it.type_parameters {
                    self.visit_ts_type_parameter_declaration(type_parameters);
                }

                if !ignore_ref_name(&identifier.name) {
                    walk_function(self, it, flags);

                    if !self.skip_set_definition {
                        let target_def = TargetDefinition {
                            specifier: identifier.name.to_string(),
                            span: calc_prop_span(it.span, self.read_file_span),
                            file_path: self.temp_current_read_file_path.clone(),
                            target_type: TargetType::Function,
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
                }

                self.set_resolved();
            }
        }
    }

    fn visit_class(&mut self, class: &mut Class<'a>) {
        if let Some(identifier) = &class.id {
            if self.skip_id_check || identifier.name == self.get_decl_name_for_resolve() {
                let is_setable = self
                    .resolved_definitions
                    .lock()
                    .unwrap()
                    .is_setable_target_definition(
                        &self.target.lock().unwrap().target_reference,
                        TargetType::Class,
                        self.target_decl_type.clone(),
                    );
                if !is_setable {
                    return;
                }

                if let Some(type_parameters) = &mut class.type_parameters {
                    self.visit_ts_type_parameter_declaration(type_parameters);
                }

                if !ignore_ref_name(&identifier.name) {
                    if !self.skip_set_definition {
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
                }

                self.set_resolved();
            }
        }
    }

    fn visit_ts_module_declaration(&mut self, module_decl: &mut TSModuleDeclaration<'a>) {
        let target_name = self.get_decl_name_for_resolve();

        if self.skip_id_check || module_decl.id.name() == *target_name {
            if !ignore_ref_name(&module_decl.id.name()) {
                let is_setable = self
                    .resolved_definitions
                    .lock()
                    .unwrap()
                    .is_setable_target_definition(
                        &self.target.lock().unwrap().target_reference,
                        TargetType::TSModule,
                        self.target_decl_type.clone(),
                    );
                if !is_setable {
                    return;
                }

                if !self.skip_set_definition {
                    let target_def = TargetDefinition {
                        specifier: module_decl.id.name().to_string(),
                        span: calc_prop_span(module_decl.span, self.read_file_span),
                        file_path: self.temp_current_read_file_path.clone(),
                        target_type: TargetType::TSModule,
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
                self.skip_id_check = true;
                self.skip_set_definition = true;

                walk_ts_module_declaration(self, module_decl);
            }
            self.set_resolved();
        }
    }

    fn visit_variable_declaration(&mut self, var_decl: &mut VariableDeclaration<'a>) {
        var_decl.declarations.iter_mut().for_each(|decl| {
            if let BindingPatternKind::BindingIdentifier(id) = &decl.id.kind {
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

            let target_name = self.get_decl_name_for_resolve();
            if let Some(id) = decl.id.get_identifier() {
                if self.skip_id_check || id == *target_name {
                    let is_setable = self
                        .resolved_definitions
                        .lock()
                        .unwrap()
                        .is_setable_target_definition(
                            &self.target.lock().unwrap().target_reference,
                            TargetType::Variable,
                            self.target_decl_type.clone(),
                        );
                    if !is_setable {
                        return;
                    }

                    walk_variable_declarator(self, decl);

                    if !self.skip_set_definition {
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
                    }

                    self.set_resolved();
                }
            }
        });
    }

    // handle mock target is type alias
    fn visit_ts_type_alias_declaration(&mut self, decl: &mut TSTypeAliasDeclaration<'a>) {
        let target_name = self.get_decl_name_for_resolve();

        if self.skip_id_check || decl.id.name == *target_name {
            let is_setable = self
                .resolved_definitions
                .lock()
                .unwrap()
                .is_setable_target_definition(
                    &self.target.lock().unwrap().target_reference,
                    TargetType::TSTypeAlias,
                    self.target_decl_type.clone(),
                );
            if !is_setable {
                return;
            }

            if let Some(type_parameters) = &mut decl.type_parameters {
                self.visit_ts_type_parameter_declaration(type_parameters);
            }

            if !ignore_ref_name(&decl.id.name) {
                self.visit_ts_type(&mut decl.type_annotation);

                if !self.skip_set_definition {
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
            }

            self.set_resolved();
        }
    }

    fn visit_ts_interface_declaration(&mut self, decl: &mut TSInterfaceDeclaration<'a>) {
        if self.skip_id_check || decl.id.name == self.get_decl_name_for_resolve() {
            let is_setable = self
                .resolved_definitions
                .lock()
                .unwrap()
                .is_setable_target_definition(
                    &self.target.lock().unwrap().target_reference,
                    TargetType::TSInterface,
                    self.target_decl_type.clone(),
                );
            if !is_setable {
                return;
            }

            if let Some(type_parameters) = &mut decl.type_parameters {
                self.visit_ts_type_parameter_declaration(type_parameters);
            }

            if !ignore_ref_name(&decl.id.name) {
                self.visit_ts_interface_body(&mut decl.body);

                if !self.skip_set_definition {
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
                }
                self.target.lock().unwrap().is_resolved = true;
            }
            self.set_resolved();
        }
    }

    // skip add props infer type
    fn visit_ts_infer_type(&mut self, it: &mut oxc::ast::ast::TSInferType<'a>) {
        self.defined_generics
            .push(it.type_parameter.name.to_string());
        walk_ts_infer_type(self, it);
    }

    // skip add props generic type
    fn visit_ts_type_parameter_declaration(
        &mut self,
        it: &mut oxc::ast::ast::TSTypeParameterDeclaration<'a>,
    ) {
        for param in it.params.iter_mut() {
            self.defined_generics.push(param.name.to_string());
        }

        walk_ts_type_parameter_declaration(self, it);
    }

    /*************************************************/
    /*************************************************/
    /*                Handle Property                */
    /*************************************************/
    /*************************************************/

    fn visit_method_definition(&mut self, method: &mut MethodDefinition<'a>) {
        walk_method_definition(self, method);
    }

    fn visit_formal_parameters(&mut self, formal_parameters: &mut FormalParameters<'a>) {
        for formal_parameter in formal_parameters.items.iter_mut() {
            match &mut formal_parameter.pattern.kind {
                BindingPatternKind::BindingIdentifier(_) => {
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
        walk_formal_parameters(self, formal_parameters);
    }

    fn visit_property_key(&mut self, _it: &mut oxc::ast::ast::PropertyKey<'a>) {
        /* NOTE: skip property key name */
        // class SimpleClass {
        //   name: string; // Skip ‘name’ through visit_identifier_name.
        //   ver: number; // Skip ‘name’ through visit_identifier_name.
        //   constructor(name: string, ver: number) {
        //     this.name = name;
        //     this.ver = ver;
        //   }
        // }
    }

    fn visit_identifier_name(&mut self, identifier: &mut oxc::ast::ast::IdentifierName<'a>) {
        let id_name = identifier.name.clone().into_string();
        let target_ref = TargetReference {
            span: calc_prop_span(identifier.span, self.read_file_span),
            file_path: self.temp_current_read_file_path.clone(),
            target_supplement: gen_target_supplement(self.is_generic_property()),
        };
        self.add_prop_with_retry(id_name, target_ref, DeclType::Type);

        walk_identifier_name(self, identifier);
    }

    fn visit_identifier_reference(&mut self, identifier: &mut IdentifierReference<'a>) {
        let id_name = identifier.name.clone().into_string();

        let target_ref = TargetReference {
            span: calc_prop_span(identifier.span, self.read_file_span),
            file_path: self.temp_current_read_file_path.clone(),
            target_supplement: gen_target_supplement(self.is_generic_property()),
        };

        self.add_prop_with_retry(id_name, target_ref, DeclType::Type);
    }

    fn visit_ts_qualified_name(&mut self, qualified_name: &mut oxc::ast::ast::TSQualifiedName<'a>) {
        let id_name = qualified_name.left.to_string();

        let target_ref = TargetReference {
            span: calc_prop_span(qualified_name.right.span, self.read_file_span),
            file_path: self.temp_current_read_file_path.clone(),
            target_supplement: gen_target_supplement(self.is_generic_property()),
        };

        self.add_prop_with_retry(id_name, target_ref, DeclType::Type);
    }

    fn visit_ts_type_query_expr_name(&mut self, it: &mut TSTypeQueryExprName<'a>) {
        match it {
            TSTypeQueryExprName::TSImportType(it) => self.visit_ts_import_type(it),
            match_ts_type_name!(TSTypeQueryExprName) => match it.to_ts_type_name_mut() {
                TSTypeName::IdentifierReference(identifier) => {
                    let id_name = identifier.name.clone().into_string();

                    let target_ref = TargetReference {
                        span: calc_prop_span(identifier.span, self.read_file_span),
                        file_path: self.temp_current_read_file_path.clone(),
                        target_supplement: gen_target_supplement(self.is_generic_property()),
                    };

                    self.add_prop_with_retry(id_name, target_ref, DeclType::Value);
                }
                TSTypeName::QualifiedName(qualified_name) => {
                    let id_name = qualified_name.left.to_string();

                    let target_ref = TargetReference {
                        span: calc_prop_span(qualified_name.right.span, self.read_file_span),
                        file_path: self.temp_current_read_file_path.clone(),
                        target_supplement: gen_target_supplement(self.is_generic_property()),
                    };

                    self.add_prop_with_retry(id_name, target_ref, DeclType::Value);
                }
            },
        }
    }
}
