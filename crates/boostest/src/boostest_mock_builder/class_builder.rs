use std::collections::HashMap;

use oxc::{
    allocator::Allocator,
    ast::{
        ast::{
            Argument, BindingIdentifier, BindingPattern, BindingPatternKind, CallExpression, Class,
            ClassElement, Declaration, Expression, FunctionBody, NullLiteral, Program, Statement,
            TSType,
        },
        AstBuilder, VisitMut,
    },
    codegen::{Codegen, CodegenOptions},
    parser::Parser,
    span::{SourceType, Span},
    syntax,
};

use oxc::allocator;

const SPAN: Span = Span::new(0, 0);

pub struct ClassArg {
    pub key: String,
    pub val: String,
}

pub struct ClassMockData<'a> {
    pub mock_func_name: String,
    pub class_name: String,
    pub key_name: Option<String>,
    pub constructor_args: HashMap<String, &'a TSType<'a>>,
}

pub struct ClassBuilder<'a> {
    mock_data: ClassMockData<'a>,
    ast_builder: AstBuilder<'a>,
}

impl<'a> ClassBuilder<'a> {
    pub fn new(allocator: &'a Allocator, mock_func_name: String, key_name: Option<String>) -> Self {
        let ast_builder = AstBuilder::new(allocator);
        let mock_data = ClassMockData {
            mock_func_name,
            key_name,
            class_name: "".to_string(),
            constructor_args: HashMap::new(),
        };

        Self {
            ast_builder,
            mock_data,
        }
    }

    pub fn generate_code(
        &mut self,
        allocator: &'a Allocator,
        source_type: SourceType,
        class: &'a Class<'a>,
    ) -> String {
        let bytes = include_bytes!("./template/class.ts");
        let source_code = std::str::from_utf8(bytes).unwrap();
        let parser = Parser::new(allocator, source_code, source_type);
        let program = &mut parser.parse().program;

        self.get_new_class_expression(class);
        self.visit_program(program);

        let mut codegen_options = CodegenOptions::default();
        codegen_options.enable_typescript = true;

        Codegen::<false>::new("", "", codegen_options)
            .build(program)
            .source_text
    }

    pub fn get_new_class_expression(&mut self, class: &'a Class<'a>) {
        if let Some(ident) = &class.id {
            let name = ident.name.to_string();
            self.mock_data.class_name = name;

            for stmt in &class.body.body {
                match stmt {
                    ClassElement::MethodDefinition(method) => {
                        for formal_parameter in &method.value.params.items {
                            match &formal_parameter.pattern.kind {
                                BindingPatternKind::BindingIdentifier(id) => {
                                    if let Some(item) = &formal_parameter.pattern.type_annotation {
                                        self.mock_data
                                            .constructor_args
                                            .insert(id.name.to_string(), &item.type_annotation);
                                    }
                                }
                                _ => {}
                            }
                        }
                    }
                    _ => {}
                }
            }
        }
    }

    pub fn get_new_expression_argument(&mut self) -> allocator::Vec<'a, Argument<'a>> {
        let mut args = self.ast_builder.new_vec();

        for (key_name, ts_type) in &mut self.mock_data.constructor_args {
            let argument = match ts_type {
                TSType::TSAnyKeyword(_) => {
                    let expression = self.ast_builder.string_literal(SPAN, "any");
                    let argument_item = self.ast_builder.alloc(expression);
                    Argument::StringLiteral(argument_item)
                }
                TSType::TSBigIntKeyword(_) => {
                    let expression = self.ast_builder.number_literal(
                        SPAN,
                        1234.0,
                        "1234",
                        syntax::number::NumberBase::Decimal,
                    );
                    let argument_item = self.ast_builder.alloc(expression);
                    Argument::NumericLiteral(argument_item)
                }
                TSType::TSBooleanKeyword(_) => {
                    let expression = self.ast_builder.boolean_literal(SPAN, true);
                    let argument_item = self.ast_builder.alloc(expression);
                    Argument::BooleanLiteral(argument_item)
                }
                TSType::TSNullKeyword(_) => {
                    let null_literal = NullLiteral::new(SPAN);
                    let argument_item = self.ast_builder.alloc(null_literal);
                    Argument::NullLiteral(argument_item)
                }
                TSType::TSNumberKeyword(_) => {
                    let expression = self.ast_builder.number_literal(
                        SPAN,
                        42.0,
                        "42",
                        syntax::number::NumberBase::Decimal,
                    );
                    let argument_item = self.ast_builder.alloc(expression);
                    Argument::NumericLiteral(argument_item)
                }
                TSType::TSStringKeyword(_) => {
                    let expression = self.ast_builder.string_literal(SPAN, "string_val");
                    let argument_item = self.ast_builder.alloc(expression);
                    Argument::StringLiteral(argument_item)
                }
                TSType::TSTypeReference(_) => {
                    let new_name = format!("{}_{}", key_name, &self.mock_data.mock_func_name);

                    let new_id = self.ast_builder.identifier_reference(SPAN, &new_name);
                    let new_callee = self.ast_builder.identifier_reference_expression(new_id);
                    let arg = self.ast_builder.new_vec();

                    Argument::CallExpression(self.ast_builder.alloc(CallExpression {
                        span: SPAN,
                        callee: new_callee,
                        arguments: arg,
                        optional: false,
                        type_parameters: None,
                    }))
                }
                // TSType::TSNeverKeyword(_) => "/* never */".to_string(), // never を表現
                // TSType::TSObjectKeyword(_) => "{}".to_string(),
                // TSType::TSSymbolKeyword(_) => "Symbol('foo')".to_string(),
                // TSType::TSThisType(_) => "this".to_string(),
                // TSType::TSUndefinedKeyword(_) => "undefined".to_string(),
                // TSType::TSUnknownKeyword(_) => "'unknown'".to_string(), // unknown を表現
                // TSType::TSVoidKeyword(_) => "/* void */".to_string(),   // void を表現
                // TSType::TSArrayType(arr_type) => {
                //     let element_type: String = get_test_value(&arr_type.element_type);
                //     format!("[{}]", element_type)
                // }
                // TSType::TSFunctionType(_) => "() => {}".to_string(),
                // TSType::TSTypeLiteral(type_literal) => {
                //     let members = type_literal
                //         .members
                //         .iter()
                //         .filter_map(|ts_signature| {
                //             match ts_signature {
                //                 TSSignature::TSPropertySignature(ts_prop_signature) => {
                //                     if let Some(name) = ts_prop_signature.key.name() {
                //                         let value = get_test_value(
                //                             &ts_prop_signature
                //                                 .type_annotation
                //                                 .as_ref()
                //                                 .unwrap()
                //                                 .type_annotation,
                //                         );
                //                         return Some(format!("{}: {}", name, value));
                //                     }
                //                 }
                //                 _ => {
                //                     return None;
                //                 }
                //             }
                //             None
                //         })
                //         .collect::<Vec<String>>()
                //         .join(", ");

                //     format!("{{ {} }}", members)
                // }

                // TSType::JSDocNullableType(_) => todo!(),
                // TSType::TSUnionType(_) => todo!(),
                // TSType::TSIntersectionType(_) => todo!(),
                // TSType::TSTypeOperatorType(_) => todo!(),
                // TSType::TSTypePredicate(_) => todo!(),
                // TSType::TSTypeQuery(_) => todo!(),
                // TSType::TSTypeReference(_) => todo!(),
                // TSType::TSIndexedAccessType(_) => todo!(),
                // TSType::TSConstructorType(_) => todo!(),
                // TSType::TSConditionalType(_) => todo!(),
                // TSType::TSInferType(_) => todo!(),
                // TSType::JSDocUnknownType(_) => todo!(),
                // TSType::TSTemplateLiteralType(_) => todo!(),
                // TSType::TSMappedType(_) => todo!(),
                // TSType::TSTupleType(_) => todo!(),
                // TSType::TSNamedTupleMember(_) => todo!(),
                // TSType::TSImportType(_) => todo!(),
                // TSType::TSQualifiedName(_) => todo!(),
                // TSType::TSLiteralType(_) => todo!(),
                _ => {
                    let expression = self
                        .ast_builder
                        .string_literal(SPAN, "default value(unimplemented)");
                    let argument_item = self.ast_builder.alloc(expression);
                    Argument::StringLiteral(argument_item)
                }
            };

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

                // TODO: replaceでいいのか？
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
