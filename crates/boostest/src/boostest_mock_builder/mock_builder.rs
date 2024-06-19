use oxc::{
    allocator::Allocator,
    ast::{ast::Class, AstBuilder},
    span::SourceType,
};

use super::class_builder::{ClassASTBuilder, ClassMockData};

pub struct MockBuilder {
    source_type: SourceType,
}

impl MockBuilder {
    pub fn new() -> Self {
        Self {
            source_type: SourceType::default()
                .with_always_strict(true)
                .with_module(true)
                .with_typescript(true),
        }
    }

    pub fn generate_class_code(&mut self, class: &Class) -> String {
        let allocator = Allocator::default();
        let mut class_ast_builder = ClassASTBuilder::new(&allocator);

        class_ast_builder.generate_code(&allocator, self.source_type, class)
    }
}
