use oxc::{allocator::Allocator, ast::AstBuilder, span::SourceType};

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

    pub fn generate_class_code(&mut self, mock_data: ClassMockData) -> String {
        let allocator = Allocator::default();
        let mut class_ast_builder = ClassASTBuilder::new(mock_data, &allocator);

        class_ast_builder.generate_code(&allocator, self.source_type)
    }
}
