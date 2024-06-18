use std::borrow::Borrow;

use oxc::{
    allocator::Allocator,
    ast::{
        ast::{
            Argument, Declaration, Expression, FunctionBody, IdentifierName, ObjectExpression,
            Program, Statement,
        },
        AstBuilder, Visit, VisitMut,
    },
    codegen::{self, Codegen, CodegenOptions},
    parser::Parser,
    span::{Atom, SourceType, Span},
};

use oxc::allocator;

const SPAN: Span = Span::new(0, 0);

pub struct ClassArg {
    pub key: String,
    pub val: String,
}

pub struct ClassMockData {
    pub class_name: String,
    pub constructor_args: Vec<ClassArg>,
}

impl ClassMockData {
    pub fn default() -> Self {
        Self {
            class_name: "boostestClassName".to_string(),
            constructor_args: vec![],
        }
    }
}

pub struct ClassASTBuilder<'a> {
    mock_data: ClassMockData,
    ast_builder: AstBuilder<'a>,
}

impl<'a> ClassASTBuilder<'a> {
    pub fn new(mock_data: ClassMockData, allocator: &'a Allocator) -> Self {
        let ast_builder = AstBuilder::new(allocator);

        Self {
            mock_data,
            ast_builder,
        }
    }

    pub fn get_class_name(&self) -> &str {
        self.mock_data.class_name.as_str()
    }

    pub fn generate_code(&mut self, allocator: &'a Allocator, source_type: SourceType) -> String {
        let bytes = include_bytes!("./template/class.ts");
        let source_code = std::str::from_utf8(bytes).unwrap();
        let parser = Parser::new(allocator, source_code, source_type);
        let program = &mut parser.parse().program;

        self.visit_program(program);

        let codegen_options = CodegenOptions::default();
        Codegen::<false>::new("", "", codegen_options)
            .build(program)
            .source_text
    }
}

impl<'a> VisitMut<'a> for ClassASTBuilder<'a> {
    fn visit_program(&mut self, program: &mut Program<'a>) {
        self.visit_statements(&mut program.body);
    }

    fn visit_statements(&mut self, stmts: &mut allocator::Vec<'_, Statement<'a>>) {
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

    fn visit_declaration(&mut self, decl: &mut Declaration<'a>) {
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

    fn visit_function_body(&mut self, body: &mut FunctionBody<'a>) {
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

    fn visit_expression(&mut self, expr: &mut Expression<'a>) {
        match expr {
            Expression::NewExpression(new_expr) => {
                if let Expression::Identifier(ident) = &mut new_expr.callee {
                    self.visit_identifier_reference(ident);
                }

                let expression = self.ast_builder.string_literal(SPAN, "testarg");
                let argument_item = self.ast_builder.alloc(expression);
                let callee = self.ast_builder.move_expression(&mut new_expr.callee);

                let mut args = self.ast_builder.new_vec();
                args.push(Argument::StringLiteral(argument_item));

                let new_expression = self.ast_builder.new_expression(SPAN, callee, args, None);

                // TODO: replaceでいいのか？
                std::mem::replace(expr, new_expression);
            }

            _ => {}
        }
    }

    fn visit_new_expression(&mut self, expr: &mut oxc::ast::ast::NewExpression<'a>) {}

    fn visit_identifier_reference(&mut self, ident: &mut oxc::ast::ast::IdentifierReference<'a>) {
        if ident.name.to_string() == "boostestClassName" {
            let i = self
                .ast_builder
                .identifier_reference(SPAN, &self.mock_data.class_name);

            std::mem::replace(ident, i);

            println!("boostestClassTemplate");
        }
    }
}
