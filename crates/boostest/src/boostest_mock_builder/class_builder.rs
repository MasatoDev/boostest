use oxc::{
    allocator::Allocator,
    ast::{
        ast::{
            Argument, BindingIdentifier, BindingPattern, BindingPatternKind, Class, ClassElement,
            Declaration, Expression, FunctionBody, Program, Statement,
        },
        AstBuilder, VisitMut,
    },
    codegen::{Codegen, CodegenOptions},
    parser::Parser,
    span::{SourceType, Span},
};

use oxc::allocator;

use super::test_data_factory;

const SPAN: Span = Span::new(0, 0);

pub struct ClassArg {
    pub key: String,
    pub val: String,
}

pub struct ClassMockData {
    pub mock_func_name: String,
    pub class_name: String,
    pub key_name: Option<String>,
}

pub struct ClassBuilder<'a> {
    mock_data: ClassMockData,
    ast_builder: AstBuilder<'a>,
    class: Class<'a>,
}

impl<'a> ClassBuilder<'a> {
    pub fn new(
        allocator: &'a Allocator,
        class: &'a Class,
        mock_func_name: String,
        key_name: Option<String>,
    ) -> Self {
        let ast_builder = AstBuilder::new(allocator);

        let copied_class = ast_builder.copy(class);

        let mock_data = ClassMockData {
            mock_func_name,
            key_name,
            class_name: "".to_string(),
        };

        Self {
            ast_builder,
            mock_data,
            class: copied_class,
        }
    }

    pub fn generate_code(&mut self, source_type: SourceType) -> String {
        let bytes = include_bytes!("./template/class.ts");
        let source_code = std::str::from_utf8(bytes).unwrap();
        let parser = Parser::new(self.ast_builder.allocator, source_code, source_type);
        let program = &mut parser.parse().program;

        if let Some(ident) = &self.class.id {
            let name = ident.name.to_string();
            self.mock_data.class_name = name;
        }

        self.visit_program(program);

        let mut codegen_options = CodegenOptions::default();
        codegen_options.enable_typescript = true;

        Codegen::<false>::new("", "", codegen_options)
            .build(program)
            .source_text
    }

    pub fn get_new_expression_argument(&mut self) -> allocator::Vec<'a, Argument<'a>> {
        let mut args = self.ast_builder.new_vec();
        let mut target_data_vec = Vec::new();

        for stmt in &self.class.body.body {
            match stmt {
                ClassElement::MethodDefinition(method) => {
                    for formal_parameter in &method.value.params.items {
                        match &formal_parameter.pattern.kind {
                            BindingPatternKind::BindingIdentifier(id) => {
                                if let Some(item) = &formal_parameter.pattern.type_annotation {
                                    let ts_type = self.ast_builder.copy(&item.type_annotation);
                                    target_data_vec.push((id.name.to_string(), ts_type));
                                }
                            }
                            BindingPatternKind::ObjectPattern(_) => {
                                if let Some(item) = &formal_parameter.pattern.type_annotation {
                                    let ts_type = self.ast_builder.copy(&item.type_annotation);
                                    target_data_vec.push((String::from("object"), ts_type));
                                }
                            }
                            _ => {}
                        }
                    }
                }
                _ => {}
            }
        }

        for (key_name, ts_type) in target_data_vec {
            let argument = test_data_factory::get_arg(
                &self.ast_builder,
                ts_type,
                key_name.as_str(),
                &self.mock_data.mock_func_name,
            );

            args.push(argument);
        }

        args
    }
}

impl<'a> VisitMut<'a> for ClassBuilder<'a> {
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

    fn visit_binding_identifier(&mut self, ident: &mut BindingIdentifier<'a>) {
        if ident.name.to_string() == "boostestClassName" {
            let name = self.ast_builder.new_atom(&self.mock_data.class_name);
            let new_binding = BindingIdentifier::new(SPAN, name);

            let _ = std::mem::replace(ident, new_binding);
        }
    }
    fn visit_binding_pattern(&mut self, pat: &mut BindingPattern<'a>) {
        if let BindingPatternKind::BindingIdentifier(ident) = &mut pat.kind {
            self.visit_binding_identifier(ident);
        }
    }

    fn visit_declaration(&mut self, decl: &mut Declaration<'a>) {
        match decl {
            Declaration::FunctionDeclaration(func) => {
                if let Some(id) = &mut func.id {
                    if id.name.to_string() == "boostestClassTemplate" {
                        let new_name = match &self.mock_data.key_name {
                            Some(key_name) => {
                                format!("{}_{}", key_name, &self.mock_data.mock_func_name)
                            }
                            None => self.mock_data.mock_func_name.clone(),
                        };

                        let name = self.ast_builder.new_atom(&new_name);
                        let new_binding = BindingIdentifier::new(SPAN, name);

                        let _ = std::mem::replace(id, new_binding);
                    }
                }

                for param in &mut func.params.items.iter_mut() {
                    self.visit_binding_pattern(&mut param.pattern);
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

                let callee = self.ast_builder.move_expression(&mut new_expr.callee);
                let args = self.get_new_expression_argument();
                let new_expression = self.ast_builder.new_expression(SPAN, callee, args, None);

                let _ = std::mem::replace(expr, new_expression);
            }

            _ => {}
        }
    }

    fn visit_identifier_reference(&mut self, ident: &mut oxc::ast::ast::IdentifierReference<'a>) {
        if ident.name.to_string() == "boostestClassName" {
            let i = self
                .ast_builder
                .identifier_reference(SPAN, &self.mock_data.class_name);

            let _ = std::mem::replace(ident, i);
        }
    }
}
