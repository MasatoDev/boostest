use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex};

use oxc::ast::ast::{CallExpression, Expression};
use oxc::ast::visit::walk_mut::walk_call_expression;
use oxc::ast::{AstKind, Visit, VisitMut};
use oxc::parser::Parser;
use oxc::semantic::SemanticBuilder;
use oxc::span::{SourceType, Span};

use crate::boostest_resolver::target::{MainTarget, TargetReference};
use crate::boostest_utils::file_utils;

pub struct TargetDetector {
    pattern: String,
    pub main_targets: Vec<Arc<Mutex<MainTarget>>>,
    temp_target_file_path: PathBuf,
}

impl TargetDetector {
    pub fn new(pattern: String) -> Self {
        Self {
            pattern,
            main_targets: Vec::new(),
            temp_target_file_path: PathBuf::new(),
        }
    }

    pub fn detect(&mut self, target_file_path: &Path) {
        self.temp_target_file_path = target_file_path.to_path_buf();
        let target_source = file_utils::read(target_file_path).unwrap_or_default();

        let source_type = SourceType::ts();
        let allocator = oxc::allocator::Allocator::default();

        let parser = Parser::new(&allocator, &target_source, source_type);
        let mut program = parser.parse().program;

        println!("program: {:?}", program);

        self.visit_statements(&mut program.body);

        // let ret = Parser::new(&allocator, &target_source, source_type).parse();
        // let semantic_ret = SemanticBuilder::new().build(&ret.program);

        // for node in semantic_ret.semantic.nodes() {
        //     if let AstKind::CallExpression(call_expr) = node.kind() {
        //         let function_name = match &call_expr.callee {
        //             Expression::Identifier(ident) => ident.name.clone().into_string(),
        //             _ => String::new(),
        //         };
        //
        //         println!("function_name: {}", function_name);
        //
        //         let pattern = &self.pattern;
        //
        //         // add target function to mock ast loader
        //         if function_name.contains(pattern) {
        //             self.add_main_target(function_name, call_expr);
        //         }
        //     }
        // }
    }

    fn add_main_target(&mut self, mock_func_name: String, expr: &CallExpression) {
        let mut main_target = MainTarget::new(
            mock_func_name,
            None,
            TargetReference {
                file_path: self.temp_target_file_path.clone(),
                span: Span::default(),
                target_supplement: None,
            },
            TargetReference {
                file_path: self.temp_target_file_path.clone(),
                span: expr.span,
                target_supplement: None,
            },
        );

        main_target.visit_call_expression(expr);

        self.main_targets.push(Arc::new(Mutex::new(main_target)));
    }
}
impl<'a> VisitMut<'a> for TargetDetector {
    fn visit_call_expression(&mut self, call_expr: &mut CallExpression) {
        println!("visit_call_expression{:?}", call_expr);
        let function_name = match &call_expr.callee {
            Expression::Identifier(ident) => ident.name.clone().into_string(),
            _ => String::new(),
        };

        println!("function_name: {}", function_name);

        let pattern = &self.pattern;

        // add target function to mock ast loader
        if function_name.contains(pattern) {
            self.add_main_target(function_name, call_expr);
        }

        walk_call_expression(self, call_expr);
    }
}
