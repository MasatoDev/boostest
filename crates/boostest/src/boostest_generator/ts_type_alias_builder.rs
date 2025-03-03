use std::sync::Arc;

use oxc::{
    allocator::Allocator,
    ast::{
        ast::{
            BindingRestElement, Declaration, Expression, FormalParameterKind, FunctionBody,
            Program, Statement, TSPropertySignature, TSSignature, TSType, TSTypeAliasDeclaration,
            TSTypeParameterInstantiation,
        },
        AstBuilder, VisitMut,
    },
    codegen::Codegen,
    parser::Parser,
    span::{SourceType, Span},
};

use oxc::allocator;

use crate::{
    boostest_resolver::target::{self, TargetSupplement},
    OutputOption,
};

use super::{
    extends_ast_builder::AstBuilderExt, get_expression::get_expression,
    handle_ts_signatures::handle_ts_signatures,
};
use super::{get_expression::get_first_call_signature, test_data_factory};

const SPAN: Span = Span::new(0, 0);

pub struct TypeAliasMockData {
    pub mock_func_name: String,
    pub target_name: String,
    pub key_name: Option<String>,
    pub target_supplement: Option<TargetSupplement>,
    pub generic: Vec<String>,
}

pub struct TSTypeAliasBuilder<'a> {
    pub output_option_arc: Arc<OutputOption>,
    mock_data: TypeAliasMockData,
    ast_builder: AstBuilder<'a>,
    ts_type_alias: TSTypeAliasDeclaration<'a>,
}

impl<'a> TSTypeAliasBuilder<'a> {
    pub fn new<'c>(
        output_option_arc: Arc<OutputOption>,
        allocator: &'a Allocator,
        ts_type_alias: &'c mut TSTypeAliasDeclaration<'a>,
        mock_func_name: String,
        target_name: String,
        target_supplement: Option<TargetSupplement>,
    ) -> Self {
        let ast_builder = AstBuilder::new(allocator);
        let copied = ast_builder.move_ts_type_alias_declatration(ts_type_alias);

        let mock_data = TypeAliasMockData {
            mock_func_name,
            target_name,
            key_name: None,
            target_supplement,
            generic: Vec::new(),
        };

        Self {
            output_option_arc,
            ast_builder,
            mock_data,
            ts_type_alias: copied,
        }
    }

    pub fn generate_code(&mut self, source_type: SourceType) -> String {
        let source_code: &str;

        if !test_data_factory::is_ts_type_literal(&self.ts_type_alias.type_annotation) {
            let bytes = include_bytes!("./template/tsTypeAlias.ts");
            source_code = std::str::from_utf8(bytes).unwrap();
        } else if test_data_factory::is_call_signature(&self.ts_type_alias.type_annotation) {
            let bytes = include_bytes!("./template/tsTypeAlias.ts");
            source_code = std::str::from_utf8(bytes).unwrap();
        } else {
            let bytes = include_bytes!("./template/tsTypeLiteralAlias.ts");
            source_code = std::str::from_utf8(bytes).unwrap();
        };

        let parser = Parser::new(self.ast_builder.allocator, source_code, source_type);
        let program = &mut parser.parse().program;

        self.visit_program(program);

        Codegen::new().build(program).code
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
        /*
        * early handle type Hoge = string

           type JOB = {
             name: string;
             salary: number;
           };

           type Hoge = string; < -- early handle
        */

        if !test_data_factory::is_ts_type_literal(&self.ts_type_alias.type_annotation) {
            let ts_annotation = self
                .ast_builder
                .move_ts_type(&mut self.ts_type_alias.type_annotation);

            let new_expr = get_expression(
                &self.ast_builder,
                ts_annotation,
                &self.mock_data.mock_func_name,
                self.mock_data.generic.clone(),
                self.output_option_arc.clone(),
            );

            let _ = std::mem::replace(expr, new_expr);

            return;
        }

        if test_data_factory::is_call_signature(&self.ts_type_alias.type_annotation) {
            let ts_annotation = self
                .ast_builder
                .move_ts_type(&mut self.ts_type_alias.type_annotation);

            // NOTE: call signatureは...argにしてreturnだけちゃんとしたい
            if let Some(call_signature_expr) = get_first_call_signature(
                &self.ast_builder,
                ts_annotation,
                &self.mock_data.mock_func_name,
                self.output_option_arc.clone(),
            ) {
                let _ = std::mem::replace(expr, call_signature_expr);
                return;
            }
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

            // Expression::ObjectExpression(obj_expr) => {
            //     if let Some(last) = obj_expr.properties.pop() {
            //         let vec = self.ast_builder.new_vec();

            //         let ts_signatures = match &mut self.ts_type_alias.type_annotation {
            //             TSType::TSTypeLiteral(ts_type_literal) => &ts_type_literal.members,
            //             _ => &vec,
            //         };

            //         let new_obj_expr = test_data_factory::handle_ts_signatures(
            //             &self.ast_builder,
            //             &ts_signatures,
            //             Some(last),
            //             &self.mock_data.mock_func_name,
            //         );

            //         let _ = std::mem::replace(expr, new_obj_expr);
            //     }
            // }
            Expression::TSAsExpression(ts_as_expr) => match &mut ts_as_expr.expression {
                Expression::ObjectExpression(obj_expr) => {
                    if let Some(last) = obj_expr.properties.pop() {
                        let mut vec = self.ast_builder.vec();

                        let ts_signatures = match &mut self.ts_type_alias.type_annotation {
                            TSType::TSTypeLiteral(ref mut ts_type_literal) => {
                                &mut ts_type_literal.members
                            }
                            _ => &mut vec,
                        };

                        let new_obj_expr = handle_ts_signatures(
                            &self.ast_builder,
                            ts_signatures,
                            Some(last),
                            &self.mock_data.mock_func_name,
                            None,
                            self.mock_data.generic.clone(),
                            self.output_option_arc.clone(),
                        );

                        let new_ts_as_expr =
                            test_data_factory::add_ts_as_expr(&self.ast_builder, new_obj_expr);
                        let _ = std::mem::replace(expr, new_ts_as_expr);
                    }
                }
                _ => {}
            },
            _ => {}
        }
    }
}
