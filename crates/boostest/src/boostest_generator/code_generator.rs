use std::collections::HashSet;
use std::sync::Arc;

use oxc::allocator::{Allocator, Vec as AllocVec};
use oxc::ast::visit::walk_mut::{
    walk_identifier_name, walk_identifier_reference, walk_method_definition, walk_statements,
    walk_ts_type_name,
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

    pub fn clean_up(&mut self, remain_targets: HashSet<String>) -> String {
        let source_text_parser = Parser::new(self.allocator, self.source_text, self.source_type);
        let mut source_text_program = source_text_parser.parse().program;

        // remove unused decl
        let mut cleanup = CleanupVisitor::new(remain_targets);
        cleanup.visit_program(&mut source_text_program);

        Codegen::new().build(&source_text_program).code
    }

    fn clean_recursively(
        &mut self,
        cleanup_detector: &mut CleanupDetectVisitor,
        remain_code: String,
    ) -> String {
        // find used decl from binded_code
        let parser = Parser::new(self.allocator, &remain_code, self.source_type);
        let mut program = parser.parse().program;
        let is_detected = cleanup_detector.detect(&mut program);

        if is_detected {
            // remove unused decl from binded_code
            let remain_code = &self.clean_up(cleanup_detector.remain_targets.clone());

            // join code that has used decl and generated code
            if let Some(code) = &self.code {
                let mut generated_code = code.clone();
                generated_code.push_str(remain_code);

                return self.clean_recursively(cleanup_detector, generated_code);
            }
        }

        remain_code
    }

    pub fn generate(&mut self) {
        let source_text_parser = Parser::new(self.allocator, self.source_text, self.source_type);
        let mut source_text_program = source_text_parser.parse().program;

        self.visit_statements(&mut source_text_program.body);

        // self.code = Some(self.source_text.to_string());

        if let Some(code) = self.code.clone() {
            let mut clean_up_detector = CleanupDetectVisitor::new();
            let binded_code = self.clean_recursively(&mut clean_up_detector, code);
            self.code = Some(binded_code);
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
    pub before_targets_len: usize,
    pub remain_targets: HashSet<String>,
}

impl CleanupDetectVisitor {
    fn new() -> Self {
        Self {
            before_targets_len: 0,
            remain_targets: HashSet::new(),
        }
    }

    fn detect(&mut self, program: &mut oxc::ast::ast::Program<'_>) -> bool {
        self.visit_program(program);

        let is_detected = self.remain_targets.len() > self.before_targets_len;
        self.before_targets_len = self.remain_targets.len();
        is_detected
    }

    fn add_target(&mut self, target: String) {
        // if target.starts_with("ref_") {
        self.remain_targets.insert(target);
        // }
    }
}

impl<'a> VisitMut<'a> for CleanupDetectVisitor {
    fn visit_identifier_reference(&mut self, it: &mut oxc::ast::ast::IdentifierReference<'a>) {
        self.add_target(it.name.to_string());
        walk_identifier_reference(self, it);
    }

    fn visit_ts_type_name(&mut self, it: &mut oxc::ast::ast::TSTypeName<'a>) {
        if let TSTypeName::IdentifierReference(identifier) = it {
            let id_name = identifier.name.clone();
            self.add_target(id_name.to_string());
        }

        if let TSTypeName::QualifiedName(qualified_name) = it {
            self.add_target(qualified_name.right.to_string());
        }
        walk_ts_type_name(self, it);
    }

    fn visit_identifier_name(&mut self, it: &mut oxc::ast::ast::IdentifierName<'a>) {
        // self.add_target(it.to_string());
        walk_identifier_name(self, it);
    }
}

struct CleanupVisitor {
    pub remain_targets: HashSet<String>,
}

impl CleanupVisitor {
    fn new(remain_targets: HashSet<String>) -> Self {
        Self { remain_targets }
    }
}

impl<'a> VisitMut<'a> for CleanupVisitor {
    fn visit_statements(&mut self, it: &mut AllocVec<'a, Statement<'a>>) {
        it.retain(|stmt| {
            let result: bool = match stmt {
                // Statement::ExportNamedDeclaration(decl) => {
                //     if let Some(export_named_decl) = &decl.declaration {
                //         match export_named_decl {
                //             Declaration::ClassDeclaration(class) => {
                //                 if let Some(id) = &class.id {
                //                     self.remain_targets.contains(&id.name.to_string())
                //                 } else {
                //                     false
                //                 }
                //             }
                //             Declaration::TSTypeAliasDeclaration(decl) => {
                //                 self.remain_targets.contains(&decl.id.name.to_string())
                //             }
                //             Declaration::TSInterfaceDeclaration(decl) => {
                //                 self.remain_targets.contains(&decl.id.name.to_string())
                //             }
                //             _ => false,
                //         }
                //     } else {
                //         false
                //     }
                // }
                Statement::TSTypeAliasDeclaration(decl) => {
                    self.remain_targets.contains(&decl.id.name.to_string())
                }
                Statement::TSInterfaceDeclaration(decl) => {
                    self.remain_targets.contains(&decl.id.name.to_string())
                }
                Statement::ClassDeclaration(decl) => {
                    if let Some(id) = &decl.id {
                        self.remain_targets.contains(&id.name.to_string())
                    } else {
                        false
                    }
                }
                Statement::TSEnumDeclaration(decl) => {
                    self.remain_targets.contains(&decl.id.name.to_string())
                }
                Statement::TSModuleDeclaration(decl) => {
                    self.remain_targets.contains(&decl.id.to_string())
                }
                Statement::FunctionDeclaration(decl) => {
                    if let Some(id) = &decl.id {
                        self.remain_targets.contains(&id.name.to_string())
                    } else {
                        true
                    }
                }

                // Statement::VariableDeclaration(decl) => {
                //     decl.declarations.retain(|decl| {
                //         if let Some(id) = &decl.id.get_identifier() {
                //             !self.remain_targets.contains(&id.to_string())
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
        // walk_statements(self, it);
    }

    // fn visit_method_definition(&mut self, it: &mut oxc::ast::ast::MethodDefinition<'a>) {
    //     if it.kind == oxc::ast::ast::MethodDefinitionKind::Constructor {
    //         it.accessibility = None;
    //     }
    //     walk_method_definition(self, it);
    // }
}
