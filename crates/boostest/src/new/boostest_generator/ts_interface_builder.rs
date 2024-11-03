use oxc::{
    allocator::Allocator,
    ast::{
        ast::{
            Declaration, Expression, FunctionBody, Program, Statement, TSAnyKeyword,
            TSInterfaceDeclaration, TSType,
        },
        AstBuilder, VisitMut,
    },
    codegen::Codegen,
    parser::Parser,
    span::{SourceType, Span},
};

use oxc::allocator;

use super::{extends_ast_builder::AstBuilderExt, test_data_factory};

const SPAN: Span = Span::new(0, 0);

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
    pub fn new<'c>(
        allocator: &'a Allocator,
        ts_interface: &'c mut TSInterfaceDeclaration<'a>,
        mock_func_name: String,
        key_name: Option<String>,
    ) -> Self {
        let ast_builder = AstBuilder::new(allocator);
        let copied = ast_builder.move_ts_interface_declatration(ts_interface);

        let mock_data = TypeAliasMockData {
            mock_func_name,
            key_name,
        };

        Self {
            ast_builder,
            mock_data,
            target_ts_interface: copied,
        }
    }

    pub fn generate_code(&mut self, source_type: SourceType) -> String {
        let bytes = include_bytes!("./template/tsInterface.ts");
        let source_code = std::str::from_utf8(bytes).unwrap();
        let allocator = self.ast_builder.allocator;
        let parser = Parser::new(allocator, source_code, source_type);
        let program = &mut parser.parse().program;

        self.visit_program(program);

        Codegen::new().build(program).code
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

                        let name = self.ast_builder.atom(&new_name);
                        let new_binding = self.ast_builder.binding_identifier(SPAN, name);

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

            // Expression::ObjectExpression(obj_expr) => {
            //     let mock_properties = self.get_object_property_kind();

            //     if let Some(last) = obj_expr.properties.pop() {
            //         let mut properties = self.ast_builder.new_vec();

            //         for mock_prop in mock_properties {
            //             properties.push(mock_prop);
            //         }
            //         properties.push(last);

            //         let new_obj_expr = self.ast_builder.object_expression(SPAN, properties, None);

            //         let _ = std::mem::replace(expr, new_obj_expr);
            //     }
            // }
            Expression::TSAsExpression(ts_as_expr) => {
                match &mut ts_as_expr.expression {
                    Expression::ObjectExpression(obj_expr) => {
                        if let Some(last) = obj_expr.properties.pop() {
                            let ts_signatures = &mut self.target_ts_interface.body.body;
                            let new_obj_expr = test_data_factory::handle_ts_signatures(
                                &self.ast_builder,
                                ts_signatures,
                                Some(last),
                                &self.mock_data.mock_func_name,
                                None,
                            );

                            // move_ts_annotation
                            let ts_any_keyword = TSAnyKeyword { span: SPAN };
                            let allocated = self.ast_builder.alloc(ts_any_keyword);
                            let ts_any_ts_type = TSType::TSAnyKeyword(allocated);
                            let new_ts_type =
                                std::mem::replace(&mut ts_as_expr.type_annotation, ts_any_ts_type);

                            let new_ts_as_expr =
                                self.ast_builder
                                    .expression_ts_as(SPAN, new_obj_expr, new_ts_type);

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
