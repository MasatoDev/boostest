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
        let source_code: &str;

        if self.is_ts_type_literal() {
            let bytes = include_bytes!("./template/tsTypeLiteralAlias.ts");
            source_code = std::str::from_utf8(bytes).unwrap();
        } else {
            let bytes = include_bytes!("./template/tsTypeAlias.ts");
            source_code = std::str::from_utf8(bytes).unwrap();
        };

        let parser = Parser::new(self.ast_builder.allocator, source_code, source_type);
        let program = &mut parser.parse().program;

        self.visit_program(program);

        let mut codegen_options = CodegenOptions::default();
        codegen_options.enable_typescript = true;

        Codegen::<false>::new("", "", codegen_options)
            .build(program)
            .source_text
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

    pub fn is_ts_type_literal(&self) -> bool {
        match &self.ts_type_alias.type_annotation {
            TSType::TSTypeLiteral(_) => true,
            _ => false,
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
            let val = test_data_factory::get_expression(
                &self.ast_builder,
                ts_type,
                key.as_str(),
                &self.mock_data.mock_func_name,
            );
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
        /*
        * early handle type Hoge = string

           type JOB = {
             name: string;
             salary: number;
           };

           type Hoge = string; < -- early handle
        */
        if !self.is_ts_type_literal() {
            let ts_annotation = self.ast_builder.copy(&self.ts_type_alias.type_annotation);
            let new_expr = test_data_factory::get_expression(
                &self.ast_builder,
                ts_annotation,
                "key_name",
                &self.mock_data.mock_func_name,
            );

            let _ = std::mem::replace(expr, new_expr);
            return;
        }

        /*
        * handle type_literal as bellow

           type JOB = {
             name: string;
             salary: number;
           };

        */
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
