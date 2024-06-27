use oxc::{
    allocator::Allocator,
    ast::{
        ast::{
            BindingIdentifier, Declaration, Expression, FormalParameterKind, FunctionBody,
            NullLiteral, ObjectPropertyKind, Program, PropertyKind, Statement, TSAnyKeyword,
            TSInterfaceDeclaration, TSLiteral, TSSignature, TSType,
        },
        AstBuilder, VisitMut,
    },
    codegen::{Codegen, CodegenOptions},
    parser::Parser,
    span::{SourceType, Span},
    syntax::number::{BigintBase, NumberBase},
};

use oxc::allocator;

use super::mock_builder::MockBuilder;

const SPAN: Span = Span::new(0, 0);

pub struct ClassArg {
    pub key: String,
    pub val: String,
}

pub struct TypeAliasMockData {
    pub mock_func_name: String,
    pub key_name: Option<String>,
    // pub properties: std::vec::Vec<&'a mut TSPropertySignature<'a>>,
}

pub struct TSInterfaceBuilder<'a> {
    mock_data: TypeAliasMockData,
    ast_builder: AstBuilder<'a>,
    target_ts_interface: TSInterfaceDeclaration<'a>,
}

impl<'a> TSInterfaceBuilder<'a> {
    pub fn new(
        allocator: &'a Allocator,
        ts_interface: &'a mut TSInterfaceDeclaration,
        mock_func_name: String,
        key_name: Option<String>,
    ) -> Self {
        let ast_builder = AstBuilder::new(allocator);
        let copied_ts_interface = ast_builder.copy(ts_interface);

        let mock_data = TypeAliasMockData {
            mock_func_name,
            key_name,
        };

        Self {
            ast_builder,
            mock_data,
            target_ts_interface: copied_ts_interface,
        }
    }

    pub fn generate_code(&mut self, source_type: SourceType) -> String {
        let bytes = include_bytes!("./template/tsInterface.ts");
        let source_code = std::str::from_utf8(bytes).unwrap();
        let allocator = self.ast_builder.allocator;
        let parser = Parser::new(allocator, source_code, source_type);
        let program = &mut parser.parse().program;

        self.visit_program(program);

        let mut codegen_options = CodegenOptions::default();
        codegen_options.enable_typescript = true;
        Codegen::<false>::new("", "", codegen_options)
            .build(program)
            .source_text
    }

    pub fn get_expression(&self, type_annotation: TSType<'a>, key_name: &str) -> Expression<'a> {
        let val = match type_annotation {
            TSType::TSTypeReference(ts_type_ref) if MockBuilder::is_this_type(&ts_type_ref) => {
                let str_literal = self.ast_builder.string_literal(SPAN, "ThisType");
                self.ast_builder.literal_string_expression(str_literal)
            }
            TSType::TSTypeReference(_) => {
                // 'key_name':[key_name]_boostestHoge(),
                let new_name = format!("{}_{}", key_name, &self.mock_data.mock_func_name);
                let new_id = self.ast_builder.identifier_reference(SPAN, &new_name);
                let new_callee = self.ast_builder.identifier_reference_expression(new_id);
                let arg = self.ast_builder.new_vec();
                self.ast_builder
                    .call_expression(SPAN, new_callee, arg, false, None)
            }
            TSType::TSStringKeyword(_) => {
                let str_literal = self.ast_builder.string_literal(SPAN, "test data string");
                self.ast_builder.literal_string_expression(str_literal)
            }
            TSType::TSAnyKeyword(_) => {
                let any_literal = self.ast_builder.string_literal(SPAN, "any");
                self.ast_builder.literal_string_expression(any_literal)
            }
            TSType::TSBooleanKeyword(_) => {
                let bool_literal = self.ast_builder.boolean_literal(SPAN, true);
                self.ast_builder.literal_boolean_expression(bool_literal)
            }
            TSType::TSNullKeyword(_) => {
                let null_literal = NullLiteral::new(SPAN);
                self.ast_builder.literal_null_expression(null_literal)
            }
            TSType::TSNumberKeyword(_) => {
                let num_literal =
                    self.ast_builder
                        .number_literal(SPAN, 42.0, "42", NumberBase::Decimal);
                self.ast_builder.literal_number_expression(num_literal)
            }
            TSType::TSBigIntKeyword(_) => {
                let big_int_literal = self.ast_builder.bigint_literal(
                    SPAN,
                    self.ast_builder.new_atom("9007199254740991"),
                    BigintBase::Decimal,
                );
                self.ast_builder.literal_bigint_expression(big_int_literal)
            }
            TSType::TSObjectKeyword(_) => {
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSVoidKeyword(_) => {
                let new_val = NullLiteral::new(SPAN);
                self.ast_builder.literal_null_expression(new_val)
            }
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

                self.ast_builder
                    .arrow_function_expression(SPAN, false, false, params, body, None, None)
            }
            TSType::TSUndefinedKeyword(_) => {
                let undefined_id = self.ast_builder.identifier_reference(SPAN, "undefined");
                self.ast_builder
                    .identifier_reference_expression(undefined_id)
            }
            TSType::TSUnknownKeyword(_) => {
                // same any
                let undefined_id = self.ast_builder.identifier_reference(SPAN, "undefined");
                self.ast_builder
                    .identifier_reference_expression(undefined_id)
            }
            TSType::TSConditionalType(ts_conditional_type) => {
                let ts_type = self.ast_builder.copy(&ts_conditional_type.true_type);
                let new = self.get_expression(ts_type, key_name);
                return new;
            }
            TSType::TSUnionType(box_ts_union_type) => {
                let ts_union_type = &mut box_ts_union_type.unbox();
                let first_union_type = ts_union_type.types.first_mut();

                if let Some(first_type) = first_union_type {
                    let ts_type = self.ast_builder.copy(first_type);
                    let new = self.get_expression(ts_type, key_name);
                    return new;
                }

                let new_val = self
                    .ast_builder
                    .string_literal(SPAN, "default_val(unimplemented)");
                self.ast_builder.literal_string_expression(new_val)
            }
            TSType::TSNeverKeyword(_) => {
                let null_literal = NullLiteral::new(SPAN);
                self.ast_builder.literal_null_expression(null_literal)
            }
            TSType::TSArrayType(_) => {
                // let new_ts_type = self.ast_builder.copy(&ts_array.element_type);
                // let expr = self.get_expression(new_ts_type, key_name);

                let new_array = self.ast_builder.new_vec();
                self.ast_builder.array_expression(SPAN, new_array, None)
            }
            TSType::TSThisType(_) => {
                // TODO
                // error
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSMappedType(_) => {
                // {[K in keyof T]: T[K]}
                // TODO
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSTupleType(_) => {
                // [string, number]
                // TODO
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSNamedTupleMember(_) => {
                // [name: string, age: number]
                // TODO
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSQualifiedName(_) => {
                // TODO
                // Namespace.MyType
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSTypeLiteral(_) => {
                // {name: string, age: number}
                // { x: number; y: number; }`
                // TODO
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSTypeOperatorType(_) => {
                // keyof T
                // TODO
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSTypePredicate(_) => {
                // x is string
                // TODO
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSTypeQuery(_) => {
                // typeof x
                // TODO
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSTemplateLiteralType(_) => {
                // `${string}`, \`hello ${string}\`
                // TODO
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSConstructorType(_) => {
                // TODO
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSIndexedAccessType(_) => {
                // person["name"]
                // TODO
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSInferType(_) => {
                // infer R ? R : never
                // TODO
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
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
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSLiteralType(literal_type) => {
                let val = match &literal_type.literal {
                    TSLiteral::StringLiteral(string_literal) => {
                        let new_val = self
                            .ast_builder
                            .string_literal(SPAN, string_literal.value.as_str());
                        self.ast_builder.literal_string_expression(new_val)
                    }
                    TSLiteral::NumericLiteral(numeric_literal) => {
                        let new_val = self.ast_builder.number_literal(
                            SPAN,
                            numeric_literal.value,
                            numeric_literal.raw,
                            numeric_literal.base,
                        );
                        self.ast_builder.literal_number_expression(new_val)
                    }
                    TSLiteral::BooleanLiteral(boolean_literal) => {
                        let new_val = self
                            .ast_builder
                            .boolean_literal(SPAN, boolean_literal.value);
                        self.ast_builder.literal_boolean_expression(new_val)
                    }
                    TSLiteral::NullLiteral(_) => {
                        let new_val = NullLiteral::new(SPAN);
                        self.ast_builder.literal_null_expression(new_val)
                    }
                    _ => {
                        let new_val = self
                            .ast_builder
                            .string_literal(SPAN, "default_val(unimplemented)");
                        self.ast_builder.literal_string_expression(new_val)
                    }
                };
                val
            }

            TSType::JSDocNullableType(_) => {
                // TODO
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::JSDocUnknownType(_) => {
                // TODO
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSSymbolKeyword(_) => {
                // TODO
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
            TSType::TSImportType(_) => {
                // TODO
                self.ast_builder
                    .object_expression(SPAN, self.ast_builder.new_vec(), None)
            }
        };

        val
    }

    pub fn get_object_property_kind(&mut self) -> Vec<ObjectPropertyKind<'a>> {
        let mut target_ts_types_vec = Vec::new();

        let mut properties: Vec<_> = self
            .target_ts_interface
            .body
            .body
            .iter_mut()
            .filter_map(|ts_signature| match ts_signature {
                TSSignature::TSPropertySignature(ts_prop_signature) => Some(ts_prop_signature),
                _ => None,
            })
            .collect();

        for property in properties.iter_mut() {
            if let Some(key) = property.key.name() {
                if let Some(val_type_annotation) = &mut property.type_annotation {
                    let ts_type = self.ast_builder.copy(&val_type_annotation.type_annotation);

                    let key_name = key.to_string();
                    target_ts_types_vec.push((key_name, ts_type));
                }
            }
        }

        let mut temp_properties = Vec::new();

        for (key, ts_type) in target_ts_types_vec {
            let val = self.get_expression(ts_type, key.as_str());
            let new_key = self.ast_builder.string_literal(SPAN, key.as_str());
            let new_key_expr = self.ast_builder.literal_string_expression(new_key);
            let new_prop_key = self.ast_builder.property_key_expression(new_key_expr);

            let object_expr = self.ast_builder.object_property(
                SPAN,
                PropertyKind::Init,
                new_prop_key,
                val,
                None,
                false,
                false,
                false,
            );
            temp_properties.push(ObjectPropertyKind::ObjectProperty(object_expr));
        }

        temp_properties
    }
}

impl<'a> VisitMut<'a> for TSInterfaceBuilder<'a> {
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
                if let Some(id) = &mut func.id {
                    if id.name.to_string() == "boostestTSTypeAliasTemplate" {
                        let new_name = match &self.mock_data.key_name {
                            Some(key_name) => {
                                format!("{}_{}", key_name, self.mock_data.mock_func_name)
                            }
                            None => self.mock_data.mock_func_name.clone(),
                        };

                        let name = self.ast_builder.new_atom(&new_name);
                        let new_binding = BindingIdentifier::new(SPAN, name);

                        let _ = std::mem::replace(id, new_binding);
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
        let mut temp_obj_expr = self.ast_builder.move_expression(expr);

        match &mut temp_obj_expr {
            // It isn't used when use with TSAsExpression `as T`
            Expression::ObjectExpression(obj_expr) => {
                let mock_properties = self.get_object_property_kind();

                if let Some(last) = obj_expr.properties.pop() {
                    let mut properties = self.ast_builder.new_vec();

                    for mock_prop in mock_properties {
                        properties.push(mock_prop);
                    }
                    properties.push(last);

                    let new_obj_expr = self.ast_builder.object_expression(SPAN, properties, None);

                    let _ = std::mem::replace(expr, new_obj_expr);
                }
            }
            Expression::TSAsExpression(ts_as_expr) => {
                match &mut ts_as_expr.expression {
                    Expression::ObjectExpression(obj_expr) => {
                        let mock_properties = self.get_object_property_kind();

                        if let Some(last) = obj_expr.properties.pop() {
                            let mut properties = self.ast_builder.new_vec();

                            for mock_prop in mock_properties {
                                properties.push(mock_prop);
                            }
                            properties.push(last);

                            let new_obj_expr =
                                self.ast_builder.object_expression(SPAN, properties, None);

                            // move_ts_annotation
                            let ts_any_keyword = TSAnyKeyword { span: SPAN };
                            let allocated = self.ast_builder.alloc(ts_any_keyword);
                            let ts_any_ts_type = TSType::TSAnyKeyword(allocated);
                            let new_ts_type =
                                std::mem::replace(&mut ts_as_expr.type_annotation, ts_any_ts_type);

                            let new_ts_as_expr =
                                self.ast_builder
                                    .ts_as_expression(SPAN, new_obj_expr, new_ts_type);

                            let _ = std::mem::replace(expr, new_ts_as_expr);
                        }
                    }
                    _ => {}
                }
            }
            _ => {}
        }
    }
}
