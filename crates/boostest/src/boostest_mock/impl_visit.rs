use std::fs::File;
use std::io::{self, Read};
use std::path::Path;

use anyhow::{anyhow, Result};
use oxc::allocator::Vec;

use oxc::ast::ast::{
    Class, ExportNamedDeclaration, ExportSpecifier, ImportSpecifier, StringLiteral,
    TSInterfaceDeclaration, TSTypeAliasDeclaration, TSTypeParameterInstantiation,
    VariableDeclarator,
};
use oxc::ast::{ast::Argument, AstKind, Visit};
use oxc::syntax::identifier;
use oxc::{
    ast::ast::{
        Argument::{ObjectExpression, SpreadElement},
        CallExpression, Declaration, Expression, IdentifierReference, ImportDeclaration,
        ImportDeclarationSpecifier, Program, Statement,
        TSType::TSTypeReference,
        TSTypeName, VariableDeclaration,
    },
    parser::Parser,
    span::SourceType,
};
use oxc_resolver::{Resolution, ResolveOptions, Resolver};

use crate::boostest_mock::mock_builder::MockBuilder;
use crate::boostest_mock::{
    mock::{self, BoostestMock},
    mock_target::MockTargetAST,
};

// *********************************** MockBuilder ***********************************
impl<'a> Visit<'a> for MockBuilder {
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
                let mock = BoostestMock::new(target_mock_name.clone());
                self.add_mock(mock);
                if let Some(target_mock) = self.get_mock(&target_mock_name) {
                    target_mock.visit_call_expression(expr);
                }
            }
        }
    }

    fn visit_identifier_reference(&mut self, ident: &IdentifierReference<'a>) {}

    // -------------- ADD BASE IMPORT TO MOCK --------------

    fn visit_import_declaration(&mut self, decl: &ImportDeclaration<'a>) {
        if let Some(specifiers) = &decl.specifiers {
            for specifier in specifiers {
                match specifier {
                    ImportDeclarationSpecifier::ImportNamespaceSpecifier(namespace) => {
                        let name = namespace.local.name.to_string();

                        if let Some(mock) = self.get_mock(&name) {
                            let full_path = decl.source.value.clone().into_string();
                            let local = namespace.local.name.clone().into_string();
                            let imported = None;

                            if let Some(target) = &mut mock.target_ast {
                                target.add_import(local, full_path, imported)
                            }
                        }
                    }
                    ImportDeclarationSpecifier::ImportSpecifier(normal) => {
                        let name = normal.local.name.to_string();

                        if let Some(mock) = self.get_mock(&name) {
                            let full_path = decl.source.value.clone().into_string();
                            let local = normal.local.name.clone().into_string();
                            let imported = Some(normal.imported.to_string());

                            if let Some(target) = &mut mock.target_ast {
                                target.add_import(local, full_path, imported)
                            }
                        }
                    }
                    ImportDeclarationSpecifier::ImportDefaultSpecifier(default) => {
                        let name = default.local.name.to_string();

                        if let Some(mock) = self.get_mock(&name) {
                            let full_path = decl.source.value.clone().into_string();
                            let local = default.local.name.clone().into_string();
                            let imported = None;

                            if let Some(target) = &mut mock.target_ast {
                                target.add_import(local, full_path, imported)
                            }
                        }
                    }
                }
            }
        }
    }
}

// *********************************** BoostestMock ***********************************

impl<'a> Visit<'a> for BoostestMock {
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

    fn visit_identifier_reference(&mut self, ident: &IdentifierReference<'a>) {}

    fn visit_ts_type_parameter_instantiation(&mut self, ty: &TSTypeParameterInstantiation<'a>) {
        for param in &ty.params {
            if let TSTypeReference(ty_ref) = param {
                if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                    self.add_ts_type_ref_target(identifier.name.clone().into_string());
                }
            }
        }
    }

    fn visit_argument(&mut self, arg: &Argument<'a>) {
        match arg {
            Argument::Identifier(identifier) => {
                self.add_class_ref_target(identifier.name.clone().into_string());
            }
            _ => {
                println!("other arg: {:?}", arg);
            }
        }
    }
}

impl<'a> Visit<'a> for MockTargetAST {
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
    fn visit_class(&mut self, class: &Class<'a>) {
        if let Some(identifier) = &class.id {
            let target_name = self.get_decl_name_for_resolve().clone();

            if identifier.name.to_string() == target_name {
                self.set_decl(String::from("class"));
            }
        }
    }

    fn visit_ts_type_alias_declaration(&mut self, decl: &TSTypeAliasDeclaration<'a>) {
        let target_name = self.get_decl_name_for_resolve().clone();

        if decl.id.name.to_string() == target_name {
            self.set_decl(String::from("type alias"));
        }
    }

    fn visit_ts_interface_declaration(&mut self, decl: &TSInterfaceDeclaration<'a>) {
        let target_name = self.get_decl_name_for_resolve().clone();

        if decl.id.name.to_string() == target_name {
            self.set_decl(String::from("type interface"));
        }
    }

    fn visit_import_declaration(&mut self, decl: &ImportDeclaration<'a>) {
        let target_name = self.get_decl_name_for_resolve().clone();

        if let Some(specifiers) = &decl.specifiers {
            for specifier in specifiers {
                let full_path = decl.source.value.clone().into_string();
                let mut imported: Option<String> = None;

                match specifier {
                    ImportDeclarationSpecifier::ImportNamespaceSpecifier(namespace) => {
                        let local = namespace.local.name.clone().into_string();

                        if local == target_name {
                            self.set_temp_import_source(local, full_path, imported)
                        }
                    }
                    ImportDeclarationSpecifier::ImportSpecifier(normal) => {
                        let local = normal.local.name.clone().into_string();
                        imported = Some(normal.imported.to_string());

                        if local == target_name {
                            self.set_temp_import_source(local, full_path, imported)
                        }
                    }
                    ImportDeclarationSpecifier::ImportDefaultSpecifier(default) => {
                        let local = default.local.name.clone().into_string();
                        if local == target_name {
                            self.set_temp_import_source(local, full_path, imported)
                        }
                    }
                }
            }
        }
    }

    fn visit_export_named_declaration(&mut self, decl: &ExportNamedDeclaration<'a>) {
        let target_name = self.get_decl_name_for_resolve().clone();

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

                if name == target_name {
                    self.set_temp_import_source(name, full_path, Some(imported))
                }
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
