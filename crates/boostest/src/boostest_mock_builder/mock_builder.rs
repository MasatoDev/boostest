use oxc::{
    allocator::Allocator,
    ast::ast::{Class, TSInterfaceDeclaration, TSTypeAliasDeclaration},
    span::SourceType,
};

use super::{
    class_builder::ClassBuilder, ts_interface_builder::TSInterfaceBuilder,
    ts_type_alias_builder::TSTypeAliasBuilder,
};

pub struct MockBuilder {
    source_type: SourceType,
}

impl MockBuilder {
    pub fn new() -> Self {
        Self {
            source_type: SourceType::default()
                .with_always_strict(true)
                .with_module(true)
                .with_typescript(true)
                .with_typescript_definition(true),
        }
    }

    pub fn generate_class_code(&mut self, mock_func_name: String, class: &Class) -> String {
        let allocator = Allocator::default();
        let mut class_builder = ClassBuilder::new(&allocator, mock_func_name);

        class_builder.generate_code(&allocator, self.source_type, class)
    }

    pub fn generate_ts_type_alias_code(
        &mut self,
        mock_func_name: String,
        ts_type_alias: &TSTypeAliasDeclaration,
    ) -> String {
        let allocator = Allocator::default();
        let mut ts_type_alias_builder = TSTypeAliasBuilder::new(&allocator, mock_func_name);

        ts_type_alias_builder.generate_code(&allocator, self.source_type, ts_type_alias)
    }

    pub fn generate_ts_interface_code(
        &mut self,
        mock_func_name: String,
        ts_interface: &TSInterfaceDeclaration,
    ) -> String {
        let allocator = Allocator::default();
        let mut ts_interface_builder = TSInterfaceBuilder::new(&allocator, mock_func_name);

        ts_interface_builder.generate_code(&allocator, self.source_type, ts_interface)
    }
}
