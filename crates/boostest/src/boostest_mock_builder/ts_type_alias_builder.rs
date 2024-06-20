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
            TSSignature, TSType, TSTypeAliasDeclaration,
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

pub struct ClassMockData<'a> {
    pub mock_func_name: String,
    pub class_name: String,
    pub constructor_args: std::vec::Vec<&'a TSType<'a>>,
}

pub struct TSTypeAliasBuilder<'a> {
    mock_data: ClassMockData<'a>,
    ast_builder: AstBuilder<'a>,
}

impl<'a> TSTypeAliasBuilder<'a> {
    pub fn new(allocator: &'a Allocator, mock_func_name: String) -> Self {
        let ast_builder = AstBuilder::new(allocator);
        let mock_data = ClassMockData {
            mock_func_name,
            class_name: "".to_string(),
            constructor_args: Vec::new(),
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
        ts_type_alias: &TSTypeAliasDeclaration<'a>,
    ) -> String {
        let bytes = include_bytes!("./template/tsTypeAlias.ts");
        let source_code = std::str::from_utf8(bytes).unwrap();
        let parser = Parser::new(allocator, source_code, source_type);
        let program = &mut parser.parse().program;

        // self.get_ts_type_alias_declaration(&mut ts_type_alias);
        self.visit_program(program);

        let mut codegen_options = CodegenOptions::default();
        codegen_options.enable_typescript = true;

        Codegen::<false>::new("", "", codegen_options)
            .build(program)
            .source_text
    }

    pub fn get_object_property_kind(&mut self) -> ObjectPropertyKind<'a> {
        let new_key = self.ast_builder.string_literal(SPAN, "new_key");
        let new_key_expr = self.ast_builder.literal_string_expression(new_key);
        let key = self.ast_builder.property_key_expression(new_key_expr);

        let new_val = self.ast_builder.string_literal(SPAN, "new_val");
        let new_val_expr = self.ast_builder.literal_string_expression(new_val);

        let object_expr = self.ast_builder.object_property(
            SPAN,
            PropertyKind::Init,
            key,
            new_val_expr,
            None,
            false,
            false,
            false,
        );

        ObjectPropertyKind::ObjectProperty(object_expr)
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
                    if id.name.to_string() == "boostestClassTemplate" {
                        let name = self.ast_builder.new_atom(&self.mock_data.mock_func_name);
                        let new_binding = BindingIdentifier::new(SPAN, name);

                        std::mem::replace(id, new_binding);
                        println!("boostestClassTemplate");
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

        match &mut temp_obj_expr {
            Expression::ObjectExpression(obj_expr) => {
                let property = self.get_object_property_kind();

                if let Some(last) = obj_expr.properties.pop() {
                    let mut properties = self.ast_builder.new_vec();
                    properties.push(property);
                    properties.push(last);

                    let new_obj_expr = self.ast_builder.object_expression(SPAN, properties, None);

                    std::mem::replace(expr, new_obj_expr);
                }

                // for prop in obj_expr.properties.iter_mut() {
                //     if let ObjectExpression::Property(prop) = prop {
                //         if let Expression::Identifier(ident) = &mut prop.key {
                //             self.visit_identifier_reference(ident);
                //         }

                //         if let Expression::Identifier(ident) = &mut prop.value {
                //             self.visit_identifier_reference(ident);
                //         }
                //     }
                // }
            }

            // Expression::NewExpression(new_expr) => {
            //     if let Expression::Identifier(ident) = &mut new_expr.callee {
            //         self.visit_identifier_reference(ident);
            //     }

            //     let callee = self.ast_builder.move_expression(&mut new_expr.callee);
            //     let args = self.get_new_expression_argument();
            //     let new_expression = self.ast_builder.new_expression(SPAN, callee, args, None);

            //     // TODO: replaceでいいのか？
            //     std::mem::replace(expr, new_expression);
            // }
            _ => {}
        }
    }

    fn visit_ts_type_alias_declaration(&mut self, decl: &mut TSTypeAliasDeclaration<'a>) {
        match &mut decl.type_annotation {
            TSType::TSTypeLiteral(ts_type_literal) => {
                for ts_signature in ts_type_literal.members.iter_mut() {
                    self.visit_ts_signature(ts_signature);
                }
            }
            _ => {}
        }
    }

    fn visit_ts_signature(&mut self, signature: &mut oxc::ast::ast::TSSignature<'a>) {
        println!("signature: {:?}", signature);

        match signature {
            TSSignature::TSPropertySignature(ts_prop_signature) => {
                for annotation in &mut ts_prop_signature.type_annotation.iter_mut() {
                    self.visit_ts_type_annotation(annotation);
                }
            }
            _ => {}
        }
    }

    fn visit_ts_type_annotation(&mut self, annotation: &mut oxc::ast::ast::TSTypeAnnotation<'a>) {
        println!("annotation: {:?}", annotation);
    }
}
