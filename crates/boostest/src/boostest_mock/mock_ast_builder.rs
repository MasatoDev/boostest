use oxc::{
    ast::{
        ast::{
            Argument, Declaration, Expression, FunctionBody, IdentifierName, Program, Statement,
        },
        Visit, VisitMut,
    },
    codegen::{Codegen, CodegenOptions},
    span::Atom,
};

use oxc::allocator::Vec;

pub struct ClassASTBuilder;

impl<'a> ClassASTBuilder {
    pub fn new() -> Self {
        Self {}
    }

    pub fn generate_code(&mut self, program: &Program) {
        let options = CodegenOptions::default();

        let printed = Codegen::<false>::new("", "", options)
            .build(program)
            .source_text;

        println!("{}", printed);
    }
}

impl VisitMut<'_> for ClassASTBuilder {
    fn visit_program(&mut self, program: &mut Program<'_>) {
        self.visit_statements(&mut program.body);
    }

    fn visit_statements(&mut self, stmts: &mut Vec<'_, Statement<'_>>) {
        for stmt in stmts.iter_mut() {
            match stmt {
                Statement::ExportNamedDeclaration(export) => {
                    if let Some(decl) = &mut export.declaration {
                        self.visit_declaration(decl);
                    }
                }
                _ => {}
            }
        }
    }

    fn visit_declaration(&mut self, decl: &mut Declaration<'_>) {
        match decl {
            Declaration::FunctionDeclaration(func) => {
                if let Some(id) = &func.id {
                    if id.name.to_string() == "boostestClassTemplate" {
                        println!("boostestClassTemplate");
                    }
                }

                if let Some(body) = &mut func.body {
                    self.visit_function_body(body);
                }
            }
            _ => {}
        }
    }

    fn visit_function_body(&mut self, body: &mut FunctionBody<'_>) {
        for stmt in body.statements.iter_mut() {
            match stmt {
                Statement::ReturnStatement(return_val) => {
                    if let Some(expr) = &mut return_val.argument {
                        self.visit_expression(expr);
                    }
                }

                _ => {}
            }
        }
    }

    fn visit_expression(&mut self, expr: &mut Expression<'_>) {
        match expr {
            Expression::NewExpression(new_expr) => {
                if let Expression::Identifier(ident) = &mut new_expr.callee {
                    println!("new_expr.callee {:?}", ident);

                    if ident.name.to_string() == "boostestClassName" {
                        let new_atom = Atom::from("newNameClassHello");
                        ident.name = new_atom;

                        println!("boostestClassTemplate");
                    }
                }
            }

            _ => {}
        }
    }
}
