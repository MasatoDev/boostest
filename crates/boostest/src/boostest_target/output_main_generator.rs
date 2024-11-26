use oxc::allocator::{self, Allocator};
use oxc::ast::visit::walk_mut::{
    walk_call_expression, walk_ts_type, walk_ts_type_parameter_instantiation,
};
use oxc::codegen::Codegen;
use oxc::parser::Parser;
use oxc::semantic::SemanticBuilder;
use oxc::span::{SourceType, Span};

use crate::boostest_generator::extends_ast_builder::AstBuilderExt;
use oxc::ast::ast::{TSType, TSTypeName, TSTypeParameterDeclaration, TSTypeQueryExprName};
use oxc::ast::{AstBuilder, AstKind, VisitMut};

use crate::boostest_manager::propety_assignment::calc_prop_span;
use crate::boostest_utils::ast_utils;
use crate::boostest_utils::id_name::get_id_with_hash;

pub struct OutputMainGenerator<'a> {
    target_def_span: Span,
    target_file_path: String,

    source_text: &'a str,
    allocator: &'a Allocator,
    ast_builder: AstBuilder<'a>,
    source_type: SourceType,
    target_type: Option<TSType<'a>>,

    renamed: bool,

    pub code: Option<String>,
}

impl<'a, 'b: 'a> OutputMainGenerator<'a> {
    pub fn new(
        allocator: &'b Allocator,
        target_def_span: Span,
        target_file_path: String,
        source_text: &'a str,
    ) -> Self {
        let ast_builder = AstBuilder::new(allocator);
        Self {
            source_text,
            target_file_path,
            target_def_span,
            allocator,
            renamed: false,
            target_type: None,
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

        if let Some(ts_type) = &mut self.target_type {
            let none_ts_type_parameter_decl: Option<
                allocator::Box<TSTypeParameterDeclaration<'a>>,
            > = None;
            let id = self.ast_builder.binding_identifier(Span::default(), "main");
            let ts_type = self.ast_builder.move_ts_type(ts_type);

            let ts_decl = self.ast_builder.declaration_ts_type_alias(
                Span::default(),
                id,
                none_ts_type_parameter_decl,
                ts_type,
                false,
            );
            let stmt = self.ast_builder.statement_declaration(ts_decl);
            let mut statements = self.ast_builder.vec();

            statements.push(stmt);

            program.body = statements;
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
                self.target_type = Some(ts_type);
            }
        } else {
            walk_ts_type_parameter_instantiation(self, it)
        }
    }

    fn visit_ts_type(&mut self, it: &mut TSType<'a>) {
        match it {
            TSType::TSTypeReference(ty_ref) if ast_utils::is_defined_type(&ty_ref) => {}
            TSType::TSTypeReference(ty_ref) if ast_utils::is_function_type(&ty_ref) => {}
            TSType::TSTypeReference(ty_ref) if ast_utils::is_boolean_type(&ty_ref) => {}
            TSType::TSTypeReference(ts_type_ref) if ast_utils::is_array_type(ts_type_ref) => {}
            TSType::TSTypeReference(ref mut ts_type_ref) => {
                if let TSTypeName::IdentifierReference(identifier) = &mut ts_type_ref.type_name {
                    let span = calc_prop_span(identifier.span, Some(self.target_def_span));
                    let var_name = get_id_with_hash(self.target_file_path.clone(), span);

                    identifier.name = self.ast_builder.atom(&var_name);
                }
            }
            TSType::TSTypeQuery(ref mut ts_query) => {
                if let TSTypeQueryExprName::IdentifierReference(identifier) =
                    &mut ts_query.expr_name
                {
                    let span = calc_prop_span(identifier.span, Some(self.target_def_span));
                    let var_name = get_id_with_hash(self.target_file_path.clone(), span);

                    identifier.name = self.ast_builder.atom(&var_name);
                }
            }
            _ => {}
        };

        walk_ts_type(self, it);
    }
}
