use std::sync::{Arc, Mutex};

use oxc::allocator::{self, Allocator};
use oxc::ast::visit::walk_mut::{
    walk_ts_type, walk_ts_type_name, walk_ts_type_parameter_instantiation,
};
use oxc::codegen::Codegen;
use oxc::parser::Parser;
use oxc::span::{SourceType, Span, SPAN};

use crate::boostest_generator::extends_ast_builder::AstBuilderExt;
use crate::boostest_resolver::target::ResolvedDefinitions;
use crate::boostest_utils::napi::TargetType;
use oxc::ast::ast::{Statement, TSType, TSTypeName, TSTypeParameterDeclaration};
use oxc::ast::{AstBuilder, VisitMut};

use crate::boostest_utils::ast_utils::{calc_prop_span, ignore_ref_name};
use crate::boostest_utils::id_name::get_id_with_hash;

pub struct OutputMainGenerator<'a> {
    pub resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
    target_type: TargetType,
    target_def_span: Span,
    target_file_path: String,

    source_text: &'a str,
    allocator: &'a Allocator,
    ast_builder: AstBuilder<'a>,
    source_type: SourceType,
    target_ts_type: Option<TSType<'a>>,

    renamed: bool,

    pub code: Option<String>,
}

impl<'a, 'b: 'a> OutputMainGenerator<'a> {
    pub fn new(
        allocator: &'b Allocator,
        resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
        target_type: TargetType,
        target_def_span: Span,
        target_file_path: String,
        source_text: &'a str,
    ) -> Self {
        let ast_builder = AstBuilder::new(allocator);
        Self {
            resolved_definitions,
            source_text,
            target_type,
            target_file_path,
            target_def_span,
            allocator,
            renamed: false,
            target_ts_type: None,
            ast_builder,
            source_type: SourceType::ts(),
            code: None,
        }
    }

    pub fn generate(&mut self) {
        let parser = Parser::new(self.allocator, self.source_text, self.source_type);
        let mut program = parser.parse().program;

        self.visit_statements(&mut program.body);
        self.renamed = true;
        self.visit_statements(&mut program.body);

        if let Some(ts_type) = &mut self.target_ts_type {
            let none_ts_type_parameter_decl: Option<
                allocator::Box<TSTypeParameterDeclaration<'a>>,
            > = None;

            match self.target_type {
                // TargetType::Class => {
                //     let constructor_parameters =
                //         self.ast_builder.ts_type_name_identifier_reference(
                //             Span::default(),
                //             "ConstructorParameters",
                //         );
                //     let id = self.ast_builder.binding_identifier(Span::default(), "main");
                //     let ts_type = self.ast_builder.move_ts_type(ts_type);
                //     let mut params = self.ast_builder.vec();
                //     params.push(ts_type);
                //
                //     let ts_type_parameter_instantiation = self
                //         .ast_builder
                //         .ts_type_parameter_instantiation(Span::default(), params);
                //     let ts_ref_type = self.ast_builder.ts_type_type_reference(
                //         Span::default(),
                //         constructor_parameters,
                //         Some(ts_type_parameter_instantiation),
                //     );
                //
                //     let ts_decl = self.ast_builder.declaration_ts_type_alias(
                //         Span::default(),
                //         id,
                //         none_ts_type_parameter_decl,
                //         ts_ref_type,
                //         false,
                //     );
                //     let stmt = self.ast_builder.statement_declaration(ts_decl);
                //     let mut statements = self.ast_builder.vec();
                //
                //     statements.push(stmt);
                //
                //     program.body = statements;
                // }
                _ => {
                    let id = self.ast_builder.binding_identifier(Span::default(), "main");
                    let ts_type = self.ast_builder.move_ts_type(ts_type);

                    let ts_decl = self.ast_builder.declaration_ts_type_alias(
                        Span::default(),
                        id,
                        none_ts_type_parameter_decl,
                        ts_type,
                        false,
                    );
                    let stmt = Statement::from(ts_decl);
                    let mut statements = self.ast_builder.vec();

                    statements.push(stmt);

                    program.body = statements;
                }
            }
        }

        self.code = Some(Codegen::new().build(&program).code);
    }
}

impl<'a> VisitMut<'a> for OutputMainGenerator<'a> {
    fn visit_ts_type_parameter_instantiation(
        &mut self,
        it: &mut oxc::ast::ast::TSTypeParameterInstantiation<'a>,
    ) {
        if (self.renamed) {
            if let Some(first_type) = it.params.first_mut() {
                let ts_type = self.ast_builder.move_ts_type(first_type);
                self.target_ts_type = Some(ts_type);
            }
        } else {
            walk_ts_type_parameter_instantiation(self, it)
        }
    }

    fn visit_ts_type_name(&mut self, it: &mut TSTypeName<'a>) {
        let mut new_type_name = None;

        if let TSTypeName::IdentifierReference(identifier) = it {
            let id_name = identifier.name.clone();
            if ignore_ref_name(&id_name) {
                return;
            }

            let span = calc_prop_span(identifier.span, Some(self.target_def_span));
            let key_name = get_id_with_hash(self.target_file_path.clone(), span);
            let var_name = self
                .resolved_definitions
                .lock()
                .unwrap()
                .get_target_def_hash_name_with_key(&key_name);

            let id_name = self.ast_builder.alloc_identifier_reference(
                Span::default(),
                &var_name.unwrap_or(id_name.to_string()),
            );

            new_type_name = Some(TSTypeName::IdentifierReference(id_name));
        }

        if let TSTypeName::QualifiedName(qualified_name) = it {
            let span = calc_prop_span(qualified_name.right.span, Some(self.target_def_span));
            let key_name = get_id_with_hash(self.target_file_path.clone(), span);
            let var_name = self
                .resolved_definitions
                .lock()
                .unwrap()
                .get_target_def_hash_name_with_key(&key_name);

            let id_name = self.ast_builder.alloc_identifier_reference(
                Span::default(),
                &var_name.unwrap_or(qualified_name.to_string()),
            );

            new_type_name = Some(TSTypeName::IdentifierReference(id_name));
        }

        if let Some(new_type_name) = new_type_name {
            *it = new_type_name;
        }

        walk_ts_type_name(self, it);
    }

    fn visit_ts_type(&mut self, it: &mut TSType<'a>) {
        let mut new_ts_type: Option<TSType> = None;

        match it {
            TSType::TSArrayType(ts_array_type) => {
                let new_element_ts_type = self
                    .ast_builder
                    .move_ts_type(&mut ts_array_type.element_type);
                let new_name = self
                    .ast_builder
                    .ts_type_name_identifier_reference(SPAN, "Array");
                let mut params = self.ast_builder.vec();
                params.push(new_element_ts_type);
                let ts_type_parameter_instantiation = self
                    .ast_builder
                    .ts_type_parameter_instantiation(SPAN, params);

                new_ts_type = Some(self.ast_builder.ts_type_type_reference(
                    SPAN,
                    new_name,
                    Some(ts_type_parameter_instantiation),
                ));
            }
            _ => {}
        };

        if let Some(new_ts_type) = new_ts_type {
            *it = new_ts_type;
        }
        walk_ts_type(self, it);
    }
}
