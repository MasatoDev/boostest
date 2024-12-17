use std::sync::Arc;

use oxc::allocator::{Allocator, Vec as AllocVec};
use oxc::ast::visit::walk_mut::{
    walk_identifier_name, walk_identifier_reference, walk_ts_type_name,
};
use oxc::codegen::Codegen;
use oxc::parser::Parser;
use oxc::span::SourceType;

use oxc::ast::ast::{Declaration, Statement, TSTypeName};
use oxc::ast::ast::{
    ExportDefaultDeclaration, ExportDefaultDeclarationKind, ExportNamedDeclaration,
    TSTypeAliasDeclaration,
};
use oxc::ast::VisitMut;

use crate::boostest_generator::ts_type_alias_builder::TSTypeAliasBuilder;
use crate::boostest_resolver::target::TargetSupplement;
use crate::OutputOption;

pub struct CodeGenerator<'a> {
    pub output_option_arc: Arc<OutputOption>,
    pub func_name: &'a str,
    target_name: &'a str,
    source_text: &'a str,
    allocator: &'a Allocator,
    source_type: SourceType,
    target_supplement: Option<TargetSupplement>,

    pub code: Option<String>,
}

impl<'a, 'b: 'a> CodeGenerator<'a> {
    pub fn new(
        output_option_arc: Arc<OutputOption>,
        allocator: &'b Allocator,
        func_name: &'a str,
        target_name: &'a str,
        source_text: &'a str,
        target_supplement: Option<TargetSupplement>,
    ) -> Self {
        Self {
            output_option_arc,
            func_name,
            source_text,
            target_name,
            allocator,
            source_type: SourceType::ts(),
            code: None,
            target_supplement,
        }
    }

    pub fn generate(&mut self) {
        let parser = Parser::new(self.allocator, self.source_text, self.source_type);
        let mut program = parser.parse().program;

        self.visit_statements(&mut program.body);

        if let Some(code) = &self.code {
            let parser = Parser::new(self.allocator, code, self.source_type);
            let mut code_program = parser.parse().program;

            // [1] detect ref of main functiion
            let mut clean_up_detector = CleanupDetectVisitor::new();
            clean_up_detector.visit_program(&mut code_program);
            clean_up_detector.visit_program(&mut program);

            // // [2]remain main function refarences
            let mut clean_up = CleanupVisitor::new(clean_up_detector.targets);
            clean_up.visit_program(&mut program);
            //
            // // add [1]'s ref and [2]'s ref
            // let mut all_clean_up_detector = CleanupDetectVisitor::new();
            // all_clean_up_detector.visit_program(&mut program);
            //
            // println!(
            //     "\nclean_up_detector.targets: {:?}",
            //     all_clean_up_detector.targets
            // );

            // // reset program
            // let new_parser = Parser::new(self.allocator, self.source_text, self.source_type);
            // let mut new_program = new_parser.parse().program;

            // remove unused other functions

            if let Some(code) = &self.code {
                let mut generated_code = code.clone();
                let retain_text = Codegen::new().build(&program).code;
                generated_code.push_str(&retain_text);
                self.code = Some(generated_code);
            }
        }
    }

    fn gen_ts_alias<'c>(&mut self, ts_type_alias_decl: &'c mut TSTypeAliasDeclaration<'a>) {
        let mut ts_type_alias_builder = TSTypeAliasBuilder::new(
            self.output_option_arc.clone(),
            self.allocator,
            ts_type_alias_decl,
            self.func_name.to_string(),
            self.target_name.to_string(),
            self.target_supplement.clone(),
        );

        let generated_code = ts_type_alias_builder.generate_code(self.source_type);
        self.code = Some(generated_code);
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

    // handle mock target is type alias
    fn visit_ts_type_alias_declaration(&mut self, decl: &mut TSTypeAliasDeclaration<'a>) {
        if decl.id.name == "main_output_target" {
            self.gen_ts_alias(decl);
        }
    }
}

struct CleanupDetectVisitor {
    pub targets: Vec<String>,
}

impl CleanupDetectVisitor {
    fn new() -> Self {
        Self { targets: vec![] }
    }
}

impl<'a> VisitMut<'a> for CleanupDetectVisitor {
    fn visit_identifier_reference(&mut self, it: &mut oxc::ast::ast::IdentifierReference<'a>) {
        self.targets.push(it.name.to_string());
        walk_identifier_reference(self, it);
    }

    fn visit_ts_type_name(&mut self, it: &mut oxc::ast::ast::TSTypeName<'a>) {
        if let TSTypeName::IdentifierReference(identifier) = it {
            let id_name = identifier.name.clone();
            self.targets.push(id_name.to_string());
        }

        if let TSTypeName::QualifiedName(qualified_name) = it {
            self.targets.push(qualified_name.right.to_string());
        }
        walk_ts_type_name(self, it);
    }

    fn visit_identifier_name(&mut self, it: &mut oxc::ast::ast::IdentifierName<'a>) {
        self.targets.push(it.to_string());
        walk_identifier_name(self, it);
    }
}

struct CleanupVisitor {
    pub targets: Vec<String>,
}

impl CleanupVisitor {
    fn new(targets: Vec<String>) -> Self {
        Self { targets }
    }
}

impl<'a> VisitMut<'a> for CleanupVisitor {
    fn visit_statements(&mut self, it: &mut AllocVec<'a, Statement<'a>>) {
        it.retain(|stmt| {
            let result: bool = match stmt {
                Statement::TSTypeAliasDeclaration(decl) => {
                    // 削除対象の型名に一致する場合は削除
                    self.targets.contains(&decl.id.name.to_string())
                }
                Statement::TSInterfaceDeclaration(decl) => {
                    // 削除対象の型名に一致する場合は削除
                    self.targets.contains(&decl.id.name.to_string())
                }
                Statement::ClassDeclaration(decl) => {
                    // 削除対象の型名に一致する場合は削除
                    if let Some(id) = &decl.id {
                        self.targets.contains(&id.name.to_string())
                    } else {
                        false
                    }
                }
                // Statement::VariableDeclaration(decl) => {
                //     // 削除対象の型名に一致する場合は削除
                //     //
                //     decl.declarations.retain(|decl| {
                //         if let Some(id) = &decl.id.get_identifier() {
                //             !self.targets.contains(&id.to_string())
                //         } else {
                //             true
                //         }
                //     });
                //     true
                // }
                _ => false,
            };
            result
        });
    }
}
