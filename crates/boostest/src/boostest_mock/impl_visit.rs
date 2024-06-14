use std::fs::File;
use std::io::{self, Read};
use std::path::Path;

use anyhow::{anyhow, Result};

use oxc::ast::ast::{
    ExportNamedDeclaration, ExportSpecifier, ImportSpecifier, StringLiteral,
    TSTypeParameterInstantiation, VariableDeclarator,
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

    // --------------ADD BASE IMPORT TO MOCK--------------

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
