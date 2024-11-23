use std::collections::HashMap;
use std::mem;

use oxc::allocator::{self, Allocator, Vec as AllocVec};
use oxc::ast::visit::walk_mut::{
    walk_class, walk_ts_interface_declaration, walk_ts_signature, walk_ts_type,
    walk_ts_type_alias_declaration,
};
use oxc::codegen::Codegen;
use oxc::parser::Parser;
use oxc::span::{SourceType, Span};

use oxc::ast::ast::{
    Class, ExportDefaultDeclaration, ExportDefaultDeclarationKind, ExportNamedDeclaration,
    TSInterfaceDeclaration, TSSignature, TSType, TSTypeAliasDeclaration, TSTypeName,
};
use oxc::ast::ast::{Declaration, Statement};
use oxc::ast::{AstBuilder, VisitMut};

use crate::boostest_generator::class_builder::ClassBuilder;
use crate::boostest_generator::ts_interface_builder::TSInterfaceBuilder;
use crate::boostest_generator::ts_type_alias_builder::TSTypeAliasBuilder;
use crate::boostest_target::target::{TargetSupplement, TargetType};
use crate::boostest_utils::ast_utils;

pub struct CodeGenerator<'a> {
    pub is_main_target: bool,
    pub specifier: &'a str,
    pub func_name: &'a str,
    pub target_type: &'a TargetType,
    target_name: &'a str,
    key_name: Option<String>,
    prop_key_name: Option<String>,
    defined_generics: Vec<String>,
    source_text: &'a str,
    allocator: &'a Allocator,
    ast_builder: AstBuilder<'a>,
    source_type: SourceType,
    target_supplement: Option<TargetSupplement>,

    pub code: Option<String>,
}

impl<'a, 'b: 'a> CodeGenerator<'a> {
    pub fn new(
        is_main_target: bool,
        allocator: &'b Allocator,
        specifier: &'a str,
        func_name: &'a str,
        target_name: &'a str,
        key_name: Option<String>,
        defined_generics: Vec<String>,
        source_text: &'a str,
        target_type: &'a TargetType,
        target_supplement: Option<TargetSupplement>,
    ) -> Self {
        let ast_builder = AstBuilder::new(allocator);
        Self {
            is_main_target,
            specifier,
            func_name,
            source_text,
            target_name,
            key_name,
            defined_generics,
            prop_key_name: None,
            target_type,
            allocator,
            ast_builder,
            source_type: SourceType::ts(),
            code: None,
            target_supplement,
        }
    }

    pub fn update_prop_key_name(&mut self, key_name: String) {
        self.prop_key_name = Some(key_name);
    }

    pub fn clear_prop_key_name(&mut self) {
        self.prop_key_name = None;
    }

    pub fn generate(&mut self) {
        let parser = Parser::new(self.allocator, self.source_text, self.source_type);
        let mut program = parser.parse().program;

        self.visit_statements(&mut program.body);
        self.code = Some(Codegen::new().build(&program).code);
    }

    fn gen_ts_interface<'c>(&mut self, ts_interface_decl: &'c mut TSInterfaceDeclaration<'a>) {
        let key_name = self.key_name.clone();
        let mut ts_interface_builder = TSInterfaceBuilder::new(
            self.allocator,
            ts_interface_decl,
            self.func_name.to_string(),
            key_name,
        );

        self.code = Some(ts_interface_builder.generate_code(self.source_type));
    }

    fn gen_ts_alias<'c>(&mut self, ts_type_alias_decl: &'c mut TSTypeAliasDeclaration<'a>) {
        let key_name = self.key_name.clone();

        let mut ts_type_alias_builder = TSTypeAliasBuilder::new(
            self.is_main_target,
            self.allocator,
            ts_type_alias_decl,
            self.func_name.to_string(),
            self.target_name.to_string(),
            key_name,
            self.target_supplement.clone(),
        );

        self.code = Some(ts_type_alias_builder.generate_code(self.source_type));
    }

    fn gen_class<'c>(&mut self, class: &'c mut Class<'a>) {
        let key_name = self.key_name.clone();
        let mut class_builder =
            ClassBuilder::new(self.allocator, class, self.func_name.to_string(), key_name);

        self.code = Some(class_builder.generate_code(self.source_type));
    }

    pub fn get_name(&self, id: String) -> String {
        let mut new_name = id.to_string();
        if let Some(p_key) = &self.key_name {
            new_name = p_key.to_string();
        }
        new_name
    }
}

impl<'a> VisitMut<'a> for CodeGenerator<'a> {
    fn visit_statements(&mut self, stmts: &mut AllocVec<'a, Statement<'a>>) {
        for stmt in stmts.iter_mut() {
            match stmt {
                /**********/
                /* Import */
                /**********/
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
            _ => {}
        }
    }

    /*************************************************/
    /*************************************************/
    /*                Import / Export                */
    /*************************************************/
    /*************************************************/

    fn visit_export_named_declaration(&mut self, decl: &mut ExportNamedDeclaration<'a>) {
        let ExportNamedDeclaration { declaration, .. } = decl;

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

    /*************************************************/
    /*************************************************/
    /*                Handle Targets                 */
    /*************************************************/
    /*************************************************/

    fn visit_class(&mut self, class: &mut Class<'a>) {
        if let Some(identifier) = &class.id {
            if identifier.name.to_string() == self.specifier {
                // self.gen_class(class);
                let mut new_name = self.get_name(self.specifier.to_string());
                if self.is_main_target {
                    new_name = format!(
                        "{}_{}",
                        self.get_name(self.specifier.to_string()),
                        self.func_name
                    );
                }

                class.id = Some(
                    self.ast_builder
                        .binding_identifier(Span::default(), new_name),
                );

                walk_class(self, class);
            }
        }
    }

    // handle mock target is type alias
    fn visit_ts_type_alias_declaration(&mut self, decl: &mut TSTypeAliasDeclaration<'a>) {
        if decl.id.name.to_string() == self.specifier {
            // self.gen_ts_alias(decl);
            let mut new_name = self.get_name(self.specifier.to_string());
            if self.is_main_target {
                new_name = format!(
                    "{}_{}",
                    self.get_name(self.specifier.to_string()),
                    self.func_name
                );
            }
            decl.id = self
                .ast_builder
                .binding_identifier(Span::default(), new_name);

            // if let Some(type_parameters) = &mut decl.type_parameters {
            //     for param in type_parameters.params.iter_mut() {
            //         println!("param {:?}", param.name);
            //         param.name = self
            //             .ast_builder
            //             .binding_identifier(Span::default(), self.get_name(param.name.to_string()));
            //     }
            // }

            walk_ts_type_alias_declaration(self, decl);
        }
    }

    fn visit_ts_interface_declaration(&mut self, decl: &mut TSInterfaceDeclaration<'a>) {
        if decl.id.name.to_string() == self.specifier {
            // self.gen_ts_interface(decl);
            let mut new_name = self.get_name(self.specifier.to_string());
            if self.is_main_target {
                new_name = format!(
                    "{}_{}",
                    self.get_name(self.specifier.to_string()),
                    self.func_name
                );
            }
            decl.id = self
                .ast_builder
                .binding_identifier(Span::default(), new_name);

            walk_ts_interface_declaration(self, decl);
        }
    }

    fn visit_ts_type(&mut self, it: &mut TSType<'a>) {
        let parent_key_name = self.prop_key_name.clone();

        match it {
            TSType::TSTypeReference(ty_ref) if ast_utils::is_defined_type(&ty_ref) => {}
            TSType::TSTypeReference(ty_ref) if ast_utils::is_function_type(&ty_ref) => {}
            TSType::TSTypeReference(ty_ref) if ast_utils::is_boolean_type(&ty_ref) => {}
            TSType::TSTypeReference(ts_type_ref) if ast_utils::is_array_type(ts_type_ref) => {}
            TSType::TSTypeReference(ref mut ts_type_ref) => {
                if let TSTypeName::IdentifierReference(identifier) = &mut ts_type_ref.type_name {
                    let id_name = identifier.name.clone();

                    let easy_name = format!("{}_{}", self.target_name, id_name);

                    let new_parent_key = match parent_key_name.clone() {
                        Some(p_key) if p_key.is_empty() => easy_name,
                        Some(p_key) => format!("{}_{}", p_key, id_name),
                        None => easy_name,
                    };

                    println!("defined_generics {:?}", self.defined_generics);

                    if !self.defined_generics.contains(&id_name.to_string()) {
                        identifier.name = self.ast_builder.atom(&new_parent_key);
                    }
                }

                // if let Some(type_params) = &mut ts_type_ref.type_parameters {
                //     for param in type_params.params.iter_mut() {
                //
                //
                //
                //         if let TSType::TSTypeReference(ref mut ts_type_ref) = param {
                //             if let TSTypeName::IdentifierReference(identifier) =
                //                 &mut ts_type_ref.type_name
                //             {
                //                 let id_name = identifier.name.clone();
                //
                //                 let new_parent_key = match parent_key_name.clone() {
                //                     Some(p_key) if p_key.is_empty() => id_name.to_string(),
                //                     Some(p_key) => format!("{}_{}", p_key, id_name),
                //                     None => id_name.to_string(),
                //                 };
                //
                //                 println!("main_key_name {:?}", main_key_name);
                //                 println!("parent_key_name {:?}", parent_key_name);
                //
                //                 identifier.name = self.ast_builder.atom(&new_parent_key);
                //             }
                //         }
                //     }
                // }
            }
            // ts_type_literal.members = ts_signatures;
            _ => {}
        };

        walk_ts_type(self, it);
    }

    fn visit_ts_signatures(&mut self, it: &mut AllocVec<'a, TSSignature<'a>>) {
        for el in it.iter_mut() {
            if self.prop_key_name.is_none() {
                self.update_prop_key_name(self.key_name.clone().unwrap_or_default());
                self.visit_ts_signature(el);
                self.clear_prop_key_name();
            } else {
                self.clear_prop_key_name();
                self.visit_ts_signature(el);
            }
        }
    }

    fn visit_ts_signature(&mut self, it: &mut TSSignature<'a>) {
        let parent_key_name = self.prop_key_name.clone();

        match it {
            TSSignature::TSPropertySignature(ref mut ts_prop_signature) => {
                if let Some(prop_key) = ts_prop_signature.key.name() {
                    let new_parent_key = match parent_key_name {
                        Some(p_key) if p_key.is_empty() => prop_key.to_string(),
                        Some(p_key) => format!("{}_{}", p_key, prop_key),
                        None => prop_key.to_string(),
                    };

                    self.update_prop_key_name(new_parent_key.clone());
                }
            }
            _ => {}
        }

        walk_ts_signature(self, it);
    }
}
