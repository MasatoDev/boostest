use oxc::{
    allocator::Allocator,
    ast::{
        ast::{
            BindingIdentifier, Declaration, Expression, FunctionBody, NullLiteral,
            ObjectPropertyKind, Program, PropertyKind, Statement, TSAnyKeyword,
            TSInterfaceDeclaration, TSPropertySignature, TSSignature, TSType,
        },
        AstBuilder, VisitMut,
    },
    codegen::{Codegen, CodegenOptions},
    parser::Parser,
    span::{SourceType, Span},
    syntax::number::NumberBase,
};

use oxc::allocator;

const SPAN: Span = Span::new(0, 0);

pub struct ClassArg {
    pub key: String,
    pub val: String,
}

pub struct TypeAliasMockData<'a> {
    pub mock_func_name: String,
    pub key_name: Option<String>,
    pub properties: std::vec::Vec<&'a TSPropertySignature<'a>>,
}

pub struct TSInterfaceBuilder<'a> {
    mock_data: TypeAliasMockData<'a>,
    ast_builder: AstBuilder<'a>,
}

impl<'a> TSInterfaceBuilder<'a> {
    pub fn new(allocator: &'a Allocator, mock_func_name: String, key_name: Option<String>) -> Self {
        let ast_builder = AstBuilder::new(allocator);
        let mock_data = TypeAliasMockData {
            mock_func_name,
            key_name,
            properties: Vec::new(),
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
        ts_interface: &'a TSInterfaceDeclaration<'a>,
    ) -> String {
        let bytes = include_bytes!("./template/tsInterface.ts");
        let source_code = std::str::from_utf8(bytes).unwrap();
        let parser = Parser::new(allocator, source_code, source_type);
        let program = &mut parser.parse().program;

        self.set_ts_interface_properties(&ts_interface);
        self.visit_program(program);

        let mut codegen_options = CodegenOptions::default();
        codegen_options.enable_typescript = true;
        Codegen::<false>::new("", "", codegen_options)
            .build(program)
            .source_text
    }

    pub fn set_ts_interface_properties(&mut self, ts_interface: &'a TSInterfaceDeclaration<'a>) {
        for ts_signature in &ts_interface.body.body {
            match ts_signature {
                TSSignature::TSPropertySignature(ts_prop_signature) => {
                    self.mock_data.properties.push(ts_prop_signature);
                }
                _ => {}
            }
        }
    }

    pub fn get_object_property_kind(&mut self) -> Vec<ObjectPropertyKind<'a>> {
        let mut temp_properties = Vec::new();

        for property in &self.mock_data.properties {
            if let Some(key) = property.key.name() {
                let new_key = self.ast_builder.string_literal(SPAN, key.as_str());
                let new_key_expr = self.ast_builder.literal_string_expression(new_key);
                let new_prop_key = self.ast_builder.property_key_expression(new_key_expr);

                if let Some(val_type_annotation) = &property.type_annotation {
                    let val = match val_type_annotation.type_annotation {
                        TSType::TSStringKeyword(_) => {
                            let str_literal = self.ast_builder.string_literal(SPAN, "string_val");
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
                            let num_literal = self.ast_builder.number_literal(
                                SPAN,
                                42.0,
                                "42",
                                NumberBase::Decimal,
                            );
                            self.ast_builder.literal_number_expression(num_literal)
                        }
                        TSType::TSTypeReference(_) => {
                            let new_name =
                                format!("{}_{}", key.as_str(), &self.mock_data.mock_func_name);
                            let new_id = self.ast_builder.identifier_reference(SPAN, &new_name);
                            let new_callee =
                                self.ast_builder.identifier_reference_expression(new_id);
                            let arg = self.ast_builder.new_vec();
                            self.ast_builder
                                .call_expression(SPAN, new_callee, arg, false, None)
                        }
                        _ => {
                            let new_val = self
                                .ast_builder
                                .string_literal(SPAN, "default_val(unimplemented)");
                            self.ast_builder.literal_string_expression(new_val)
                        }
                    };

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
            }
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
                    // TODO: as T が反映されないためカバーする
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
