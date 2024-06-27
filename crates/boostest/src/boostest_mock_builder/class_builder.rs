use std::cell::Cell;

use oxc::{
    allocator::Allocator,
    ast::{
        ast::{
            Argument, ArrayExpression, ArrowFunctionExpression, BindingIdentifier, BindingPattern,
            BindingPatternKind, CallExpression, Class, ClassElement, Declaration, Expression,
            FormalParameterKind, FunctionBody, NullLiteral, ObjectExpression, Program, Statement,
            TSType,
        },
        AstBuilder, VisitMut,
    },
    codegen::{Codegen, CodegenOptions},
    parser::Parser,
    span::{SourceType, Span},
    syntax::{self, number::BigintBase},
};

use oxc::allocator;

use super::mock_builder::MockBuilder;

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
                                    target_data_vec
                                        .push((id.name.to_string(), &item.type_annotation));
                                }
                            }
                            _ => {}
                        }
                    }
                }
                _ => {}
            }
        }

        for (key_name, ts_type) in &mut target_data_vec {
            let argument = match ts_type {
                TSType::TSAnyKeyword(_) => {
                    let expression = self.ast_builder.string_literal(SPAN, "any");
                    let argument_item = self.ast_builder.alloc(expression);
                    Argument::StringLiteral(argument_item)
                }
                TSType::TSBigIntKeyword(_) => {
                    let big_int_literal = self.ast_builder.bigint_literal(
                        SPAN,
                        self.ast_builder.new_atom("9007199254740991"),
                        BigintBase::Decimal,
                    );
                    let argument_item = self.ast_builder.alloc(big_int_literal);
                    Argument::BigintLiteral(argument_item)
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
                TSType::TSTypeReference(ts_type_ref) if MockBuilder::is_this_type(ts_type_ref) => {
                    let expression = self.ast_builder.string_literal(SPAN, "ThisType");
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
                TSType::TSObjectKeyword(_) => {
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSVoidKeyword(_) => {
                    let new_val = NullLiteral::new(SPAN);
                    let argument_item = self.ast_builder.alloc(new_val);
                    Argument::NullLiteral(argument_item)
                }

                // here
                TSType::TSFunctionType(_) => {
                    let params = self.ast_builder.formal_parameters(
                        SPAN,
                        FormalParameterKind::ArrowFormalParameters,
                        self.ast_builder.new_vec(),
                        None,
                    );
                    let body = self.ast_builder.function_body(
                        SPAN,
                        self.ast_builder.new_vec(),
                        self.ast_builder.new_vec(),
                    );

                    let arrow_func_expr = ArrowFunctionExpression {
                        span: SPAN,
                        expression: false,
                        r#async: false,
                        params,
                        body,
                        type_parameters: None,
                        return_type: None,
                        scope_id: Cell::default(),
                    };
                    let argument_item = self.ast_builder.alloc(arrow_func_expr);
                    Argument::ArrowFunctionExpression(argument_item)
                }
                TSType::TSUndefinedKeyword(_) => {
                    let undefined_id = self.ast_builder.identifier_reference(SPAN, "undefined");
                    let argument_item = self.ast_builder.alloc(undefined_id);
                    Argument::Identifier(argument_item)
                }
                TSType::TSUnknownKeyword(_) => {
                    let undefined_id = self.ast_builder.identifier_reference(SPAN, "undefined");
                    let argument_item = self.ast_builder.alloc(undefined_id);
                    Argument::Identifier(argument_item)
                }
                TSType::TSConditionalType(_ts_conditional_type) => {
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)

                    // let ts_type = self.ast_builder.copy(&ts_conditional_type.true_type);
                    // let new = self.get_expression(ts_type, key_name);
                    // return new;
                }
                TSType::TSUnionType(_box_ts_union_type) => {
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)

                    // let ts_union_type = &mut box_ts_union_type.unbox();
                    // let first_union_type = ts_union_type.types.first_mut();

                    // if let Some(first_type) = first_union_type {
                    //     let ts_type = self.ast_builder.copy(first_type);
                    //     let new = self.get_expression(ts_type, key_name);
                    //     return new;
                    // }

                    // let new_val = self
                    //     .ast_builder
                    //     .string_literal(SPAN, "default_val(unimplemented)");
                    // self.ast_builder.literal_string_expression(new_val)
                }
                TSType::TSNeverKeyword(_) => {
                    let null_literal = NullLiteral::new(SPAN);
                    let argument_item = self.ast_builder.alloc(null_literal);
                    Argument::NullLiteral(argument_item)
                }
                TSType::TSArrayType(_) => {
                    // let new_ts_type = self.ast_builder.copy(&ts_array.element_type);
                    // let expr = self.get_expression(new_ts_type, key_name);

                    let new_array = self.ast_builder.new_vec();
                    let array_expr = ArrayExpression {
                        span: SPAN,
                        elements: new_array,
                        trailing_comma: None,
                    };

                    let argument_item = self.ast_builder.alloc(array_expr);
                    Argument::ArrayExpression(argument_item)
                }
                TSType::TSThisType(_) => {
                    // TODO
                    // error
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSMappedType(_) => {
                    // {[K in keyof T]: T[K]}
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSTupleType(_) => {
                    // [string, number]
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSNamedTupleMember(_) => {
                    // [name: string, age: number]
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSQualifiedName(_) => {
                    // TODO
                    // Namespace.MyType
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSTypeLiteral(_) => {
                    // {name: string, age: number}
                    // { x: number; y: number; }`
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSTypeOperatorType(_) => {
                    // keyof T
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSTypePredicate(_) => {
                    // x is string
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSTypeQuery(_) => {
                    // typeof x
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSTemplateLiteralType(_) => {
                    // `${string}`, \`hello ${string}\`
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSConstructorType(_) => {
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSIndexedAccessType(_) => {
                    // person["name"]
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSInferType(_) => {
                    // infer R ? R : never
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSIntersectionType(_ts_intersection_type) => {
                    // TODO
                    // for ts_type in ts_intersection_type.types.iter() {
                    //     let new_ts_type = self.ast_builder.copy(ts_type);
                    //     println!("TSIntersectionType {:?}", new_ts_type);
                    //     let expr = self.get_expression(new_ts_type, key_name);
                    //     println!("TSIntersectionType {:?}", expr);
                    // }

                    // println!("TSIntrsectionType {:?}", ts_intersection);
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSLiteralType(_literal_type) => {
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)

                    // let val = match &literal_type.literal {
                    //     TSLiteral::StringLiteral(string_literal) => {
                    //         let new_val = self
                    //             .ast_builder
                    //             .string_literal(SPAN, string_literal.value.as_str());
                    //         self.ast_builder.literal_string_expression(new_val)
                    //     }
                    //     TSLiteral::NumericLiteral(numeric_literal) => {
                    //         let new_val = self.ast_builder.number_literal(
                    //             SPAN,
                    //             numeric_literal.value,
                    //             numeric_literal.raw,
                    //             numeric_literal.base,
                    //         );
                    //         self.ast_builder.literal_number_expression(new_val)
                    //     }
                    //     TSLiteral::BooleanLiteral(boolean_literal) => {
                    //         let new_val = self
                    //             .ast_builder
                    //             .boolean_literal(SPAN, boolean_literal.value);
                    //         self.ast_builder.literal_boolean_expression(new_val)
                    //     }
                    //     TSLiteral::NullLiteral(_) => {
                    //         let new_val = NullLiteral::new(SPAN);
                    //         self.ast_builder.literal_null_expression(new_val)
                    //     }
                    //     _ => {
                    //         let new_val = self
                    //             .ast_builder
                    //             .string_literal(SPAN, "default_val(unimplemented)");
                    //         self.ast_builder.literal_string_expression(new_val)
                    //     }
                    // };
                    // val
                }

                TSType::JSDocNullableType(_) => {
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::JSDocUnknownType(_) => {
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSSymbolKeyword(_) => {
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
                }
                TSType::TSImportType(_) => {
                    // TODO
                    let object_expr = ObjectExpression {
                        span: SPAN,
                        properties: self.ast_builder.new_vec(),
                        trailing_comma: None,
                    };
                    let argument_item = self.ast_builder.alloc(object_expr);
                    Argument::ObjectExpression(argument_item)
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
