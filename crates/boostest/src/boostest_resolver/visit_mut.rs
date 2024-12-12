use oxc::allocator::Vec as AllocVec;

use oxc::ast::visit::walk_mut::{walk_ts_function_type, walk_ts_type_parameter_declaration};

use oxc::ast::ast::{
    BindingPatternKind, Class, ExportDefaultDeclaration, ExportDefaultDeclarationKind,
    ExportNamedDeclaration, MethodDefinition, TSInterfaceDeclaration, TSModuleReference,
    TSSignature, TSTupleElement, TSType, TSTypeAliasDeclaration, TSTypeName, TSTypeQueryExprName,
    VariableDeclaration,
};
use oxc::ast::{
    ast::{
        Declaration, ImportDeclaration, ImportDeclarationSpecifier, Statement,
        TSImportEqualsDeclaration,
    },
    VisitMut,
};

use super::target::{gen_target_supplement, TargetDefinition, TargetReference};
pub use super::target_resolver::TargetResolver;

use crate::boostest_utils::ast_utils;
use crate::boostest_utils::ast_utils::{calc_prop_span, ignore_ref_name};
use crate::boostest_utils::napi::TargetType;

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

    fn visit_property_key(&mut self, it: &mut oxc::ast::ast::PropertyKey<'a>) {
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

        self.add_prop_with_retry(id_name, target_ref);
    }

    fn visit_ts_type_parameter_declaration(
        &mut self,
        it: &mut oxc::ast::ast::TSTypeParameterDeclaration<'a>,
    ) {
        for param in it.params.iter_mut() {
            self.defined_generics.push(param.name.to_string());
        }

        walk_ts_type_parameter_declaration(self, it);
    }

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
                            target_supplement: gen_target_supplement(self.is_generic_property()),
                        };

                        self.add_prop_with_retry(id_name, target_ref);
                    }
                    TSTypeName::QualifiedName(qualified_name) => {
                        let id_name = qualified_name.right.name.clone().into_string();

                        let target_ref = TargetReference {
                            span: calc_prop_span(qualified_name.right.span, self.read_file_span),
                            file_path: self.temp_current_read_file_path.clone(),
                            target_supplement: gen_target_supplement(self.is_generic_property()),
                        };

                        self.add_prop_with_retry(id_name, target_ref);
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
                        target_supplement: gen_target_supplement(self.is_generic_property()),
                    };
                    self.add_prop_with_retry(identifier.name.clone().into_string(), target_ref);
                }
            }
            TSType::TSTypeOperatorType(ts_type_operator_type) => {
                if let TSType::TSTypeReference(ts_type_ref) = &ts_type_operator_type.type_annotation
                {
                    let target_ref = TargetReference {
                        span: calc_prop_span(ts_type_ref.span, self.read_file_span),
                        file_path: self.temp_current_read_file_path.clone(),
                        target_supplement: gen_target_supplement(self.is_generic_property()),
                    };

                    self.add_prop_with_retry(ts_type_ref.type_name.to_string(), target_ref);
                }
            }
            TSType::TSIndexedAccessType(ts_indexed_access_type) => {
                if let TSType::TSTypeReference(ts_object_type_ref) =
                    &ts_indexed_access_type.object_type
                {
                    let target_ref = TargetReference {
                        span: calc_prop_span(ts_object_type_ref.span, self.read_file_span),
                        file_path: self.temp_current_read_file_path.clone(),
                        target_supplement: gen_target_supplement(self.is_generic_property()),
                    };
                    self.add_prop_with_retry(ts_object_type_ref.type_name.to_string(), target_ref);
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

            if !ignore_ref_name(&decl.id.name) {
                self.visit_ts_type(&mut decl.type_annotation);
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

            if !ignore_ref_name(&decl.id.name) {
                self.visit_ts_interface_body(&mut decl.body);
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
