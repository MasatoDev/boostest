use oxc::allocator::{Allocator, Vec as AllocVec};
use oxc::parser::Parser;
use oxc::span::SourceType;

use oxc::ast::ast::{
    Class, ExportDefaultDeclaration, ExportDefaultDeclarationKind, ExportNamedDeclaration,
    TSInterfaceDeclaration, TSTypeAliasDeclaration,
};
use oxc::ast::ast::{Declaration, Statement};
use oxc::ast::VisitMut;

use crate::boostest_generator::class_builder::ClassBuilder;
use crate::boostest_generator::ts_interface_builder::TSInterfaceBuilder;
use crate::boostest_generator::ts_type_alias_builder::TSTypeAliasBuilder;
use crate::boostest_target::target::TargetSupplement;
use crate::boostest_utils::napi::TargetType;

pub struct CodeGenerator<'a> {
    pub is_main_target: bool,
    pub specifier: &'a str,
    pub func_name: &'a str,
    target_name: &'a str,
    source_text: &'a str,
    allocator: &'a Allocator,
    source_type: SourceType,
    target_supplement: Option<TargetSupplement>,
    target_type: &'a TargetType,

    pub code: Option<String>,
}

impl<'a, 'b: 'a> CodeGenerator<'a> {
    pub fn new(
        is_main_target: bool,
        allocator: &'b Allocator,
        specifier: &'a str,
        func_name: &'a str,
        target_name: &'a str,
        source_text: &'a str,
        target_supplement: Option<TargetSupplement>,
        target_type: &'a TargetType,
    ) -> Self {
        Self {
            is_main_target,
            specifier,
            func_name,
            source_text,
            target_name,
            allocator,
            source_type: SourceType::ts(),
            code: None,
            target_supplement,
            target_type,
        }
    }

    pub fn generate(&mut self) {
        println!("\n🎉🎉🎉🎉DDCode: {}", self.source_text);

        let parser = Parser::new(self.allocator, self.source_text, self.source_type);
        let mut program = parser.parse().program;

        self.visit_statements(&mut program.body);
    }

    fn gen_ts_interface<'c>(&mut self, ts_interface_decl: &'c mut TSInterfaceDeclaration<'a>) {
        let mut ts_interface_builder = TSInterfaceBuilder::new(
            self.allocator,
            ts_interface_decl,
            self.func_name.to_string(),
        );

        self.code = Some(ts_interface_builder.generate_code(self.source_type));
    }

    fn gen_ts_alias<'c>(&mut self, ts_type_alias_decl: &'c mut TSTypeAliasDeclaration<'a>) {
        let mut ts_type_alias_builder = TSTypeAliasBuilder::new(
            self.is_main_target,
            self.allocator,
            ts_type_alias_decl,
            self.func_name.to_string(),
            self.target_name.to_string(),
            self.target_supplement.clone(),
        );

        self.code = Some(ts_type_alias_builder.generate_code(self.source_type));
    }

    fn gen_class<'c>(&mut self, class: &'c mut Class<'a>) {
        let mut class_builder =
            ClassBuilder::new(self.allocator, class, self.func_name.to_string());

        self.code = Some(class_builder.generate_code(self.source_type));
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
            // if identifier.name.to_string() == self.specifier {
            self.gen_class(class);
            // }
        }
    }

    // handle mock target is type alias
    fn visit_ts_type_alias_declaration(&mut self, decl: &mut TSTypeAliasDeclaration<'a>) {
        // if decl.id.name.to_string() == self.specifier {
        self.gen_ts_alias(decl);
        // }
    }

    fn visit_ts_interface_declaration(&mut self, decl: &mut TSInterfaceDeclaration<'a>) {
        // if decl.id.name.to_string() == self.specifier {
        self.gen_ts_interface(decl);
        // }
    }
}
