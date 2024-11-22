use std::path::PathBuf;

use oxc::{
    ast::Visit,
    parser::Parser,
    span::{SourceType, Span},
};

use crate::boostest_utils::file_utils;

pub struct InferResolver {
    infer: Option<String>,
}

impl InferResolver {
    pub fn new() -> Self {
        Self { infer: None }
    }

    pub fn resolve(&mut self, file_path: PathBuf, span: Span) -> Option<String> {
        let target_source = file_utils::read(&file_path).unwrap_or_default();
        let target_source_text = span.source_text(&target_source);
        let allocator = oxc::allocator::Allocator::default();

        let parser = Parser::new(&allocator, target_source_text, SourceType::ts());
        let mut program = parser.parse().program;

        self.visit_statements(&mut program.body);

        self.infer.clone()
    }
}

impl<'a> Visit<'a> for InferResolver {
    fn visit_ts_infer_type(&mut self, it: &oxc::ast::ast::TSInferType<'a>) {
        self.infer = Some(it.type_parameter.name.to_string());
    }
}
