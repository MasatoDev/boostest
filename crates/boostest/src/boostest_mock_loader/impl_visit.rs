use oxc::allocator::Vec;

use oxc::ast::ast::{
    CallExpression, Declaration, Expression, ImportDeclaration, ImportDeclarationSpecifier,
    Statement, TSType::TSTypeReference, TSTypeName, VariableDeclaration,
};
use oxc::ast::ast::{
    Class, ExportNamedDeclaration, TSInterfaceDeclaration, TSSignature, TSType,
    TSTypeAliasDeclaration, TSTypeParameterInstantiation, VariableDeclarator,
};
use oxc::ast::{ast::Argument, Visit};

use crate::boostest_mock_loader::mock_loader::MockLoader;

use super::mock_ast_loader::MockAstLoader;

// *********************************** MockBuilder ***********************************
impl<'a> Visit<'a> for MockLoader {
    fn visit_statements(&mut self, stmts: &Vec<'a, Statement<'a>>) {
        for stmt in stmts {
            match stmt {
                Statement::VariableDeclaration(decl) => {
                    self.visit_variable_declaration(decl);
                }
                _ => {}
            }
        }
    }

    // --------------ADD BASE MOCK--------------
    fn visit_variable_declaration(&mut self, decl: &VariableDeclaration<'a>) {
        for declarator in decl.declarations.iter() {
            self.visit_variable_declarator(declarator);
        }
    }

    fn visit_variable_declarator(&mut self, declarator: &VariableDeclarator<'a>) {
        if let Some(Expression::CallExpression(call_expr)) = &declarator.init {
            self.visit_call_expression(call_expr)
        }
    }

    fn visit_call_expression(&mut self, expr: &CallExpression<'a>) {
        if let Expression::Identifier(ident) = &expr.callee {
            let pattern = "boostest";

            if ident.name.contains(pattern) {
                let target_mock_name = ident.name.clone().into_string();
                let mock = MockAstLoader::new(target_mock_name.clone(), None);
                self.add_mock(mock);
                if let Some(target_mock) = self.get_mock(&target_mock_name) {
                    target_mock.visit_call_expression(expr);
                }
            }
        }
    }
}

// *********************************** BoostestMock ***********************************

impl<'a> Visit<'a> for MockAstLoader {
    fn visit_call_expression(&mut self, expr: &CallExpression<'a>) {
        let CallExpression {
            type_parameters,
            arguments,
            ..
        } = expr;

        if let Some(result) = type_parameters {
            self.visit_ts_type_parameter_instantiation(result);
        }

        for argument in arguments.iter() {
            self.visit_argument(argument);
        }
    }

    fn visit_ts_type_parameter_instantiation(&mut self, ty: &TSTypeParameterInstantiation<'a>) {
        for param in &ty.params {
            if let TSTypeReference(ty_ref) = param {
                if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                    self.set_target_name(identifier.name.clone().into_string());
                }
            }
        }
    }

    fn visit_argument(&mut self, arg: &Argument<'a>) {
        match arg {
            Argument::Identifier(identifier) => {
                self.set_target_name(identifier.name.clone().into_string());
            }
            _ => {
                println!("other arg: {:?}", arg);
            }
        }
    }

    // -------------- ADD DECL TO MOCK --------------

    fn visit_statements(&mut self, stmts: &Vec<'a, Statement<'a>>) {
        for stmt in stmts {
            match stmt {
                Statement::ImportDeclaration(import) => {
                    self.visit_import_declaration(import);
                }

                Statement::ExportNamedDeclaration(export_named_decl) => {
                    self.visit_export_named_declaration(export_named_decl);
                }

                Statement::ClassDeclaration(ref class) => self.visit_class(class),
                Statement::TSTypeAliasDeclaration(ref decl) => {
                    self.visit_ts_type_alias_declaration(decl);
                }
                Statement::TSInterfaceDeclaration(ref decl) => {
                    self.visit_ts_interface_declaration(decl);
                }

                _ => {
                    // println!("Another Statement {:?}", stmt);
                }
            }
        }
    }

    // handle mock target is class
    fn visit_class(&mut self, class: &Class<'a>) {
        if let Some(identifier) = &class.id {
            if let Some(target_name) = self.get_decl_name_for_resolve() {
                if identifier.name.to_string() == *target_name {
                    self.add_class(class);

                    self.visit_class_body(&class.body);
                }
            }
        }
    }

    fn visit_class_body(&mut self, body: &oxc::ast::ast::ClassBody<'a>) {
        body.body.iter().for_each(|element| match element {
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

    fn visit_property_definition(&mut self, def: &oxc::ast::ast::PropertyDefinition<'a>) {
        for annotation in def.type_annotation.iter() {
            self.visit_ts_type_annotation(annotation);
        }
    }

    fn visit_ts_type_annotation(&mut self, annotation: &oxc::ast::ast::TSTypeAnnotation<'a>) {
        match &annotation.type_annotation {
            TSType::TSTypeReference(ty_ref) => {
                if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                    self.add_property_ts_type(identifier.name.clone().into_string());
                }
            }
            _ => {}
        }
    }

    fn visit_method_definition(&mut self, _def: &oxc::ast::ast::MethodDefinition<'a>) {}

    fn visit_ts_signature(&mut self, signature: &TSSignature<'a>) {
        match signature {
            TSSignature::TSPropertySignature(ts_prop_signature) => {
                for annotation in ts_prop_signature.type_annotation.iter() {
                    self.visit_ts_type_annotation(annotation);
                }
            }
            _ => {}
        }
    }

    // handle mock target is type alias
    fn visit_ts_type_alias_declaration(&mut self, decl: &TSTypeAliasDeclaration<'a>) {
        if let Some(target_name) = self.get_decl_name_for_resolve() {
            if decl.id.name.to_string() == *target_name {
                self.set_decl(String::from("type alias"));
                self.add_ts_alias(decl);

                // NOTE: handle mock target property
                match &decl.type_annotation {
                    TSType::TSTypeLiteral(ts_type_literal) => {
                        for ts_signature in ts_type_literal.members.iter() {
                            self.visit_ts_signature(ts_signature);
                        }
                    }
                    _ => {}
                }
            }
        }
    }

    fn visit_ts_interface_declaration(&mut self, decl: &TSInterfaceDeclaration<'a>) {
        if let Some(target_name) = self.get_decl_name_for_resolve() {
            if decl.id.name.to_string() == *target_name {
                self.set_decl(String::from("type interface"));
                self.add_ts_interface(decl);

                for ts_signature in &decl.body.body {
                    self.visit_ts_signature(ts_signature);
                }
            }
        }
    }

    fn visit_import_declaration(&mut self, decl: &ImportDeclaration<'a>) {
        if let Some(specifiers) = &decl.specifiers {
            for specifier in specifiers {
                let full_path = decl.source.value.clone().into_string();
                let mut imported: Option<String> = None;

                match specifier {
                    ImportDeclarationSpecifier::ImportNamespaceSpecifier(namespace) => {
                        let local = namespace.local.name.clone().into_string();

                        self.set_temp_import_source(local, full_path, imported)
                    }
                    ImportDeclarationSpecifier::ImportSpecifier(normal) => {
                        let local = normal.local.name.clone().into_string();
                        imported = Some(normal.imported.to_string());

                        self.set_temp_import_source(local, full_path, imported)
                    }
                    ImportDeclarationSpecifier::ImportDefaultSpecifier(default) => {
                        let local = default.local.name.clone().into_string();
                        self.set_temp_import_source(local, full_path, imported)
                    }
                }
            }
        }
    }

    fn visit_export_named_declaration(&mut self, decl: &ExportNamedDeclaration<'a>) {
        let ExportNamedDeclaration {
            declaration,
            specifiers,
            source,
            ..
        } = decl;

        for specifier in specifiers.into_iter() {
            if let Some(source) = source {
                let full_path = source.value.clone().into_string();
                let imported = specifier.local.name().to_string();
                let name = specifier.exported.name().to_string();

                self.set_temp_import_source(name, full_path, Some(imported))
            }
        }

        if let Some(export_named_decl) = declaration {
            match export_named_decl {
                Declaration::ClassDeclaration(ref class) => {
                    self.visit_class(class);
                }
                Declaration::TSTypeAliasDeclaration(ref decl) => {
                    self.visit_ts_type_alias_declaration(decl);
                }
                Declaration::TSInterfaceDeclaration(ref decl) => {
                    self.visit_ts_interface_declaration(decl)
                }
                _ => {
                    // println!("Another Statement {:?}", export_named_decl);
                }
            }
        }
    }
}
