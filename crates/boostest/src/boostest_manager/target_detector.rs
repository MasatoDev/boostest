use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex};

use oxc::allocator::Vec as AllocVec;

use oxc::ast::ast::{CallExpression, Expression, Statement, VariableDeclaration};
use oxc::ast::ast::{ExpressionStatement, VariableDeclarator};
use oxc::ast::VisitMut;
use oxc::parser::Parser;
use oxc::span::{SourceType, Span};

use crate::boostest_target::target::{MainTarget, TargetReference};
use crate::boostest_utils::file_utils;

pub struct TargetDetector {
    pattern: String,
    pub main_targets: Vec<Arc<Mutex<MainTarget>>>,
    temp_target_file_path: PathBuf,
}

impl TargetDetector {
    pub fn new(pattern: Option<String>) -> Self {
        Self {
            pattern: pattern.unwrap_or(String::from("boostest")),
            main_targets: Vec::new(),
            temp_target_file_path: PathBuf::new(),
        }
    }

    pub fn detect(&mut self, target_file_path: &Path) {
        self.temp_target_file_path = target_file_path.to_path_buf();
        let target_source = file_utils::read(target_file_path).unwrap_or(String::new());

        let source_type = SourceType::ts();
        let allocator = oxc::allocator::Allocator::default();
        let parser = Parser::new(&allocator, &target_source, source_type);
        let mut program = parser.parse().program;
        self.visit_statements(&mut program.body);
    }

    fn add_main_target(&mut self, mock_func_name: String, expr: &mut CallExpression) {
        let mut main_target = MainTarget::new(
            mock_func_name,
            None,
            TargetReference {
                file_path: self.temp_target_file_path.clone(),
                span: Span::default(),
            },
        );

        main_target.visit_call_expression(expr);
        self.main_targets.push(Arc::new(Mutex::new(main_target)));
    }
}

impl<'a> VisitMut<'a> for TargetDetector {
    fn visit_statements(&mut self, stmts: &mut AllocVec<'a, Statement<'a>>) {
        for stmt in stmts.iter_mut() {
            match stmt {
                Statement::VariableDeclaration(decl) => {
                    self.visit_variable_declaration(decl);
                }
                Statement::ExpressionStatement(expr_stmt) => {
                    self.visit_expression_statement(expr_stmt);
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

    fn visit_expression_statement(&mut self, stmt: &mut ExpressionStatement<'a>) {
        match &mut stmt.expression {
            Expression::CallExpression(call_expr) => self.visit_call_expression(call_expr),
            Expression::AssignmentExpression(assignment_expr) => {
                if let Expression::CallExpression(call_expr) = &mut assignment_expr.right {
                    self.visit_call_expression(call_expr)
                }
            }
            _ => {}
        }
    }

    fn visit_call_expression(&mut self, expr: &mut CallExpression<'a>) {
        if let Expression::Identifier(ident) = &expr.callee {
            let pattern = &self.pattern;

            // add target function to mock ast loader
            if ident.name.contains(pattern) {
                let target_mock_name = ident.name.clone().into_string();
                self.add_main_target(target_mock_name.clone().to_string(), expr);
            }
        }
    }
}
