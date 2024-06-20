use std::{
    borrow::{Borrow, BorrowMut},
    ops::Deref,
};

use oxc::{
    allocator::Allocator,
    ast::{
        ast::{
            Argument, BindingIdentifier, BindingPattern, BindingPatternKind, Class, ClassElement,
            Declaration, Expression, FunctionBody, IdentifierName, NewExpression, NullLiteral,
            ObjectExpression, ObjectProperty, ObjectPropertyKind, Program, PropertyKind, Statement,
            TSPropertySignature, TSSignature, TSType, TSTypeAliasDeclaration, TSTypeAnnotation,
        },
        AstBuilder, Visit, VisitMut,
    },
    codegen::{self, Codegen, CodegenOptions},
    parser::Parser,
    span::{Atom, SourceType, Span},
    syntax,
};

use oxc::allocator;

const SPAN: Span = Span::new(0, 0);

pub struct ClassArg {
    pub key: String,
    pub val: String,
}

pub struct TypeAliasMockData<'a> {
    pub mock_func_name: String,
    pub properties: std::vec::Vec<&'a TSPropertySignature<'a>>,
}

pub struct TSTypeAliasBuilder<'a> {
    mock_data: TypeAliasMockData<'a>,
    ast_builder: AstBuilder<'a>,
}

impl<'a> TSTypeAliasBuilder<'a> {
    pub fn new(allocator: &'a Allocator, mock_func_name: String) -> Self {
        let ast_builder = AstBuilder::new(allocator);
        let mock_data = TypeAliasMockData {
            mock_func_name,
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
        ts_type_alias: &'a TSTypeAliasDeclaration<'a>,
    ) -> String {
        let bytes = include_bytes!("./template/tsTypeAlias.ts");
        let source_code = std::str::from_utf8(bytes).unwrap();
        let parser = Parser::new(allocator, source_code, source_type);
        let program = &mut parser.parse().program;

        self.set_ts_alias_properties(&ts_type_alias);
        self.visit_program(program);

        let mut codegen_options = CodegenOptions::default();
        codegen_options.enable_typescript = true;

        Codegen::<false>::new("", "", codegen_options)
            .build(program)
            .source_text
    }

    pub fn set_ts_alias_properties(&mut self, ts_type_alias_decl: &'a TSTypeAliasDeclaration<'a>) {
        match &ts_type_alias_decl.type_annotation {
            TSType::TSTypeLiteral(ts_type_literal) => {
                for ts_signature in ts_type_literal.members.iter() {
                    match ts_signature {
                        TSSignature::TSPropertySignature(ts_prop_signature) => {
                            self.mock_data.properties.push(ts_prop_signature);
                        }
                        _ => {}
                    }
                }
            }
            _ => {}
        }
    }

    pub fn get_object_property_kind(&mut self) -> Vec<ObjectPropertyKind<'a>> {
        let mut temp_properties = Vec::new();

        for property in &self.mock_data.properties {
            println!("property: {:?}", property.type_annotation);

            if let Some(key) = property.key.name() {
                let new_key = self.ast_builder.string_literal(SPAN, key.as_str());
                let new_key_expr = self.ast_builder.literal_string_expression(new_key);
                let key = self.ast_builder.property_key_expression(new_key_expr);

                if let Some(val_type_annotation) = &property.type_annotation {
                    let val = match val_type_annotation.type_annotation {
                        TSType::TSStringKeyword(_) => {
                            let new_val = self.ast_builder.string_literal(SPAN, "mock_val");
                            self.ast_builder.literal_string_expression(new_val)
                        }
                        _ => {
                            let new_val = self.ast_builder.string_literal(SPAN, "default_new_val");
                            self.ast_builder.literal_string_expression(new_val)
                        }
                    };

                    let object_expr = self.ast_builder.object_property(
                        SPAN,
                        PropertyKind::Init,
                        key,
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
                        let name = self.ast_builder.new_atom(&self.mock_data.mock_func_name);
                        let new_binding = BindingIdentifier::new(SPAN, name);

                        std::mem::replace(id, new_binding);
                    }
                }

                // for param in &mut func.params.items.iter_mut() {
                //     self.visit_binding_pattern(&mut param.pattern);
                // }

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
        println!("temp_obj_expr: {:?}", temp_obj_expr);

        match &mut temp_obj_expr {
            Expression::ObjectExpression(obj_expr) => {
                let mock_properties = self.get_object_property_kind();

                if let Some(last) = obj_expr.properties.pop() {
                    let mut properties = self.ast_builder.new_vec();

                    for mock_prop in mock_properties {
                        properties.push(mock_prop);
                    }
                    properties.push(last);

                    let new_obj_expr = self.ast_builder.object_expression(SPAN, properties, None);

                    std::mem::replace(expr, new_obj_expr);
                }
            }
            Expression::TSAsExpression(ts_as_expr) => match &mut ts_as_expr.expression {
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

                        std::mem::replace(expr, new_obj_expr);
                    }
                }
                _ => {}
            },
            _ => {}
        }
    }
}
