use oxc::ast::{
    ast::{Argument, Declaration, Expression, FunctionBody, Program, Statement},
    Visit,
};

use oxc::allocator::Vec;

pub struct ClassASTBuilder;

impl ClassASTBuilder {
    pub fn new() -> Self {
        Self {}
    }

    pub fn generate_code(&mut self, stmts: &Vec<'_, Statement<'_>>) {
        self.visit_statements(stmts);
    }
}

// TODO: use VisitMut
impl Visit<'_> for ClassASTBuilder {
    fn visit_statements(&mut self, stmts: &Vec<'_, Statement<'_>>) {
        for stmt in stmts {
            match stmt {
                Statement::ExportNamedDeclaration(export) => {
                    if let Some(decl) = &export.declaration {
                        self.visit_declaration(decl);
                    }
                }
                _ => {}
            }
        }
    }

    fn visit_declaration(&mut self, decl: &Declaration<'_>) {
        match decl {
            Declaration::FunctionDeclaration(func) => {
                if let Some(id) = &func.id {
                    if id.name.to_string() == "boostestClassTemplate" {
                        println!("boostestClassTemplate");
                    }
                }

                if let Some(body) = &func.body {
                    self.visit_function_body(body);
                }
            }
            _ => {}
        }
    }

    fn visit_function_body(&mut self, body: &FunctionBody<'_>) {
        for stmt in &body.statements {
            match stmt {
                Statement::ReturnStatement(return_val) => {
                    if let Some(expr) = &return_val.argument {
                        self.visit_expression(expr);
                    }
                }

                _ => {}
            }
        }
    }

    fn visit_expression(&mut self, expr: &Expression<'_>) {
        match expr {
            Expression::NewExpression(new_expr) => {
                if let Expression::Identifier(ident) = &new_expr.callee {
                    println!("new_expr.callee {:?}", ident);

                    if ident.name.to_string() == "boostestClassName" {
                        // ident.name = "newNameClassHello".to_string();
                        println!("boostestClassTemplate");

                        println!("new_expr.arguments {:?}", new_expr.arguments);
                    }
                }
            }

            _ => {}
        }
    }
}
