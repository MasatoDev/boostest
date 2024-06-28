use oxc::allocator::Vec;

use oxc::ast::ast::{
    Argument, CallExpression, Declaration, Expression, ImportDeclaration,
    ImportDeclarationSpecifier, Statement, TSImportEqualsDeclaration, TSType::TSTypeReference,
    TSTypeName, VariableDeclaration,
};
use oxc::ast::ast::{
    Class, ClassBody, ExportDefaultDeclaration, ExportDefaultDeclarationKind,
    ExportNamedDeclaration, PropertyDefinition, TSInterfaceDeclaration, TSModuleReference,
    TSSignature, TSType, TSTypeAliasDeclaration, TSTypeParameterInstantiation, VariableDeclarator,
};
use oxc::ast::VisitMut;

use crate::boostest_mock_loader::mock_loader::MockLoader;

use super::mock_ast_loader::MockAstLoader;

// *********************************** MockBuilder ***********************************
impl<'a> VisitMut<'a> for MockLoader {
    fn visit_statements(&mut self, stmts: &mut Vec<'a, Statement<'a>>) {
        for stmt in stmts.iter_mut() {
            match stmt {
                Statement::VariableDeclaration(decl) => {
                    self.visit_variable_declaration(decl);
                }
                _ => {}
            }
        }
    }

    // --------------ADD BASE MOCK--------------
    fn visit_variable_declaration(&mut self, decl: &mut VariableDeclaration<'a>) {
        for declarator in decl.declarations.iter_mut() {
            self.visit_variable_declarator(declarator);
        }
    }

    fn visit_variable_declarator(&mut self, declarator: &mut VariableDeclarator<'a>) {
        if let Some(Expression::CallExpression(call_expr)) = &mut declarator.init {
            self.visit_call_expression(call_expr)
        }
    }

    fn visit_call_expression(&mut self, expr: &mut CallExpression<'a>) {
        if let Expression::Identifier(ident) = &expr.callee {
            let pattern = &self.get_pattern();

            // add target function to mock ast loader
            if ident.name.contains(pattern) {
                let target_mock_name = ident.name.clone().into_string();
                self.add_ast_loader(target_mock_name.clone().to_string());

                if let Some(target_mock) = self.get_mock(&target_mock_name) {
                    target_mock.visit_call_expression(expr);
                }
            }
        }
    }
}

// *********************************** BoostestMock ***********************************

impl<'a> VisitMut<'a> for MockAstLoader {
    fn visit_call_expression(&mut self, expr: &mut CallExpression<'a>) {
        let CallExpression {
            type_parameters,
            arguments,
            ..
        } = expr;

        if let Some(result) = type_parameters {
            self.visit_ts_type_parameter_instantiation(result);
        }

        // NOTE: handle first argument only
        if let Some(first_arg) = arguments.get_mut(0) {
            self.visit_argument(first_arg);
        }
        // for argument in arguments.iter() {
        //     self.visit_argument(argument);
        // }
    }

    fn visit_ts_type_parameter_instantiation(&mut self, ty: &mut TSTypeParameterInstantiation<'a>) {
        for param in &ty.params {
            if let TSTypeReference(ty_ref) = param {
                if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                    self.set_target_name(identifier.name.clone().into_string());
                }
            }
        }
    }

    fn visit_argument(&mut self, arg: &mut Argument<'a>) {
        match arg {
            Argument::Identifier(identifier) => {
                self.set_target_name(identifier.name.clone().into_string());
            }
            _ => {
                // println!("This isn't mock target: {:?}", arg);
            }
        }
    }

    // -------------- ADD DECL TO MOCK --------------

    fn visit_statements(&mut self, stmts: &mut Vec<'a, Statement<'a>>) {
        for stmt in stmts.iter_mut() {
            match stmt {
                Statement::TSImportEqualsDeclaration(ts_import_equals_decl) => {
                    self.visit_ts_import_equals_declaration(ts_import_equals_decl);
                }
                Statement::ImportDeclaration(import) => {
                    self.visit_import_declaration(import);
                }

                Statement::ExportNamedDeclaration(export_named_decl) => {
                    self.visit_export_named_declaration(export_named_decl);
                }
                Statement::ClassDeclaration(class) => self.visit_class(class),
                Statement::TSTypeAliasDeclaration(decl) => {
                    self.visit_ts_type_alias_declaration(decl);
                }
                Statement::TSInterfaceDeclaration(decl) => {
                    self.visit_ts_interface_declaration(decl);
                }
                Statement::TSExportAssignment(_ts_export_assignment) => {
                    // not implemented (commonjs)
                    // println!("TSExportAssignment: {:?}", ts_export_assignment);
                }
                Statement::ExportDefaultDeclaration(export_default_decl) => {
                    self.visit_export_default_declaration(export_default_decl);
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
            ExportDefaultDeclarationKind::TSEnumDeclaration(_) => {}
            ExportDefaultDeclarationKind::FunctionDeclaration(_) => {}
            _ => {}
        }
    }

    // handle mock target is class
    fn visit_class(&mut self, class: &mut Class<'a>) {
        if let Some(identifier) = &class.id {
            // export default is not named
            if self.is_default_import() {
                self.add_class(class);
                self.visit_class_body(&mut class.body);
            } else if let Some(target_name) = self.get_decl_name_for_resolve() {
                if identifier.name.to_string() == *target_name {
                    self.add_class(class);
                    self.visit_class_body(&mut class.body);
                }
            }
        }
    }

    fn visit_class_body(&mut self, body: &mut ClassBody<'a>) {
        body.body.iter_mut().for_each(|element| match element {
            // TODO: cover method definition

            // oxc::ast::ast::ClassElement::MethodDefinition(method) => {
            //     self.visit_method_definition(method);
            // }
            oxc::ast::ast::ClassElement::PropertyDefinition(property) => {
                self.visit_property_definition(property);
            }
            _ => {}
        });
    }

    fn visit_property_definition(&mut self, def: &mut PropertyDefinition<'a>) {
        for annotation in def.type_annotation.iter_mut() {
            match &annotation.type_annotation {
                TSType::TSTypeReference(ty_ref) => {
                    if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                        if let Some(key_name) = def.key.name() {
                            self.add_property_ts_type(
                                identifier.name.clone().into_string(),
                                key_name.to_string(),
                            );
                        }
                    }
                }
                TSType::TSUnionType(ts_union_type) => {
                    if let Some(first_union_type) = ts_union_type.types.first() {
                        if let TSType::TSTypeReference(ty_ref) = first_union_type {
                            if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                                if let Some(key_name) = def.key.name() {
                                    self.add_property_ts_type(
                                        identifier.name.clone().into_string(),
                                        key_name.to_string(),
                                    );
                                }
                            }
                        }
                    }
                }
                _ => {
                    // println!("Another Type {:?}", annotation);
                }
            }
        }
    }

    fn visit_ts_signature(&mut self, signature: &mut TSSignature<'a>) {
        match signature {
            TSSignature::TSPropertySignature(ts_prop_signature) => {
                for annotation in ts_prop_signature.type_annotation.iter() {
                    match &annotation.type_annotation {
                        TSType::TSTypeReference(ty_ref) => {
                            if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                                if let Some(key_name) = ts_prop_signature.key.name() {
                                    self.add_property_ts_type(
                                        identifier.name.clone().into_string(),
                                        key_name.to_string(),
                                    );
                                }
                            }
                        }

                        TSType::TSUnionType(ts_union_type) => {
                            if let Some(first_union_type) = ts_union_type.types.first() {
                                if let TSType::TSTypeReference(ty_ref) = first_union_type {
                                    if let TSTypeName::IdentifierReference(identifier) =
                                        &ty_ref.type_name
                                    {
                                        if let Some(key_name) = ts_prop_signature.key.name() {
                                            self.add_property_ts_type(
                                                identifier.name.clone().into_string(),
                                                key_name.to_string(),
                                            );
                                        }
                                    }
                                }
                            }
                        }

                        _ => {
                            // println!("Another Type {:?}", ts_prop_signature);
                        }
                    }
                }
            }
            _ => {}
        }
    }

    // handle mock target is type alias
    fn visit_ts_type_alias_declaration(&mut self, decl: &mut TSTypeAliasDeclaration<'a>) {
        if let Some(target_name) = self.get_decl_name_for_resolve() {
            if decl.id.name.to_string() == *target_name {
                self.add_ts_alias(decl);

                // NOTE: handle mock target property
                match &mut decl.type_annotation {
                    TSType::TSTypeLiteral(ts_type_literal) => {
                        for ts_signature in ts_type_literal.members.iter_mut() {
                            self.visit_ts_signature(ts_signature);
                        }
                    }
                    _ => {}
                }
            }
        }
    }

    fn visit_ts_interface_declaration(&mut self, decl: &mut TSInterfaceDeclaration<'a>) {
        // export default is not named
        if self.is_default_import() {
            self.add_ts_interface(decl);

            for ts_signature in decl.body.body.iter_mut() {
                self.visit_ts_signature(ts_signature);
            }
        } else if let Some(target_name) = self.get_decl_name_for_resolve() {
            if decl.id.name.to_string() == *target_name {
                self.add_ts_interface(decl);

                for ts_signature in decl.body.body.iter_mut() {
                    self.visit_ts_signature(ts_signature);
                }
            }
        }
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
            TSModuleReference::IdentifierReference(id) => {
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
                // export type {Huga as default};
                self.set_default_import_name(&exported, &local);

                // export type {Huga as AnotherHuga};
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
                _ => {
                    // println!("Another Statement {:?}", export_named_decl);
                }
            }
        }
    }
}
