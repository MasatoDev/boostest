use oxc::{
    allocator::Allocator,
    ast::{
        ast::{
            BindingIdentifier, Declaration, Expression, FunctionBody, ObjectPropertyKind, Program,
            PropertyKind, Statement, TSAnyKeyword, TSPropertySignature, TSSignature, TSType,
            TSTypeAliasDeclaration,
        },
        AstBuilder, VisitMut,
    },
    codegen::{Codegen, CodegenOptions},
    parser::Parser,
    span::{SourceType, Span},
};

use oxc::allocator;

use crate::boostest_utils;

use super::test_data_factory;

const SPAN: Span = Span::new(0, 0);

pub struct ClassArg {
    pub key: String,
    pub val: String,
}

pub struct TypeAliasMockData {
    pub mock_func_name: String,
    pub key_name: Option<String>,
}

pub struct TSTypeAliasBuilder<'a> {
    mock_data: TypeAliasMockData,
    ast_builder: AstBuilder<'a>,
    ts_type_alias: TSTypeAliasDeclaration<'a>,
}

impl<'a> TSTypeAliasBuilder<'a> {
    pub fn new(
        allocator: &'a Allocator,
        ts_type_alias: &'a TSTypeAliasDeclaration<'a>,
        mock_func_name: String,
        key_name: Option<String>,
    ) -> Self {
        let ast_builder = AstBuilder::new(allocator);
        let copied_ts_type_alias = ast_builder.copy(ts_type_alias);

        let mock_data = TypeAliasMockData {
            mock_func_name,
            key_name,
        };

        Self {
            ast_builder,
            mock_data,
            ts_type_alias: copied_ts_type_alias,
        }
    }

    pub fn generate_code(&mut self, source_type: SourceType) -> String {
        let bytes = include_bytes!("./template/tsTypeAlias.ts");
        let source_code = std::str::from_utf8(bytes).unwrap();
        let parser = Parser::new(self.ast_builder.allocator, source_code, source_type);
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
            TSType::TSTypeReference(ts_type_ref)
                if boostest_utils::ast_utils::is_defined_type(&ts_type_ref) =>
            {
                // TODO: Defined type
                test_data_factory::object_expr(&self.ast_builder)
            }
            TSType::TSTypeReference(ts_type_ref)
                if boostest_utils::ast_utils::is_array_type(&ts_type_ref) =>
            {
                // TODO: Array
                test_data_factory::array_expr(&self.ast_builder)
            }
            TSType::TSTypeReference(_) => test_data_factory::ref_expr(
                &self.ast_builder,
                key_name,
                &self.mock_data.mock_func_name,
            ),
            TSType::TSStringKeyword(_) => test_data_factory::string_expr(&self.ast_builder, None),
            TSType::TSAnyKeyword(_) => test_data_factory::any_expr(&self.ast_builder),
            TSType::TSBooleanKeyword(_) => test_data_factory::boolean_expr(&self.ast_builder, None),
            TSType::TSNullKeyword(_) => test_data_factory::null_expr(&self.ast_builder),
            TSType::TSNumberKeyword(_) => {
                test_data_factory::number_expr(&self.ast_builder, None, None, None)
            }
            TSType::TSBigIntKeyword(_) => test_data_factory::bigint_expr(&self.ast_builder),
            TSType::TSObjectKeyword(_) => test_data_factory::object_expr(&self.ast_builder),
            TSType::TSVoidKeyword(_) => test_data_factory::null_expr(&self.ast_builder),
            TSType::TSFunctionType(_) => test_data_factory::function_expr(&self.ast_builder),
            TSType::TSUndefinedKeyword(_) => test_data_factory::undefined_expr(&self.ast_builder),
            TSType::TSUnknownKeyword(_) => test_data_factory::undefined_expr(&self.ast_builder),
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

                // fallback
                test_data_factory::null_expr(&self.ast_builder)
            }
            TSType::TSNeverKeyword(_) => test_data_factory::null_expr(&self.ast_builder),
            TSType::TSArrayType(_) => test_data_factory::array_expr(&self.ast_builder),
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
                test_data_factory::get_expr_with_ts_literal_type(
                    &self.ast_builder,
                    &literal_type.literal,
                )
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

    pub fn get_ts_alias_properties(
        &mut self,
    ) -> Vec<&mut allocator::Box<'a, TSPropertySignature<'a>>> {
        match &mut self.ts_type_alias.type_annotation {
            TSType::TSTypeLiteral(ts_type_literal) => {
                let result: Vec<_> = ts_type_literal
                    .members
                    .iter_mut()
                    .filter_map(|ts_signature| match ts_signature {
                        TSSignature::TSPropertySignature(ts_prop_signature) => {
                            Some(ts_prop_signature)
                        }
                        _ => None,
                    })
                    .collect();

                return result;
            }
            _ => Vec::new(),
        }
    }

    pub fn get_object_property_kind(&mut self) -> Vec<ObjectPropertyKind<'a>> {
        let mut target_ts_types_vec = Vec::new();

        let mut properties = match &mut self.ts_type_alias.type_annotation {
            TSType::TSTypeLiteral(ts_type_literal) => {
                let result: Vec<_> = ts_type_literal
                    .members
                    .iter_mut()
                    .filter_map(|ts_signature| match ts_signature {
                        TSSignature::TSPropertySignature(ts_prop_signature) => {
                            Some(ts_prop_signature)
                        }
                        _ => None,
                    })
                    .collect();

                result
            }
            _ => Vec::new(),
        };

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

impl<'a> VisitMut<'a> for TSTypeAliasBuilder<'a> {
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
