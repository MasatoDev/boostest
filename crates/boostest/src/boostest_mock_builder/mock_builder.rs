use oxc::{
    allocator::{self, Allocator},
    ast::ast::{
        Class, TSInterfaceDeclaration, TSTypeAliasDeclaration, TSTypeName, TSTypeReference,
    },
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

    pub fn generate_class_code(
        &mut self,
        mock_func_name: String,
        key_name: Option<String>,
        class: &mut Class,
    ) -> String {
        let allocator = Allocator::default();
        let mut class_builder = ClassBuilder::new(&allocator, class, mock_func_name, key_name);

        class_builder.generate_code(self.source_type)
    }

    pub fn generate_ts_type_alias_code(
        &mut self,
        mock_func_name: String,
        key_name: Option<String>,
        ts_type_alias: &mut TSTypeAliasDeclaration,
    ) -> String {
        let allocator = Allocator::default();

        let mut ts_type_alias_builder =
            TSTypeAliasBuilder::new(&allocator, ts_type_alias, mock_func_name, key_name);

        ts_type_alias_builder.generate_code(self.source_type)
    }

    pub fn generate_ts_interface_code(
        &mut self,
        mock_func_name: String,
        key_name: Option<String>,
        ts_interface: &mut TSInterfaceDeclaration,
    ) -> String {
        let allocator = Allocator::default();
        let mut ts_interface_builder =
            TSInterfaceBuilder::new(&allocator, ts_interface, mock_func_name, key_name);

        ts_interface_builder.generate_code(self.source_type)
    }

    // common functions
    pub fn is_this_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "ThisType" {
                return true;
            }
        }
        false
    }

    pub fn is_array_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "Array" {
                return true;
            }
        }
        false
    }

    // TODO: handle correctly
    pub fn is_defined_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        MockBuilder::is_partial_type(ts_type_ref)
            || MockBuilder::is_this_type(ts_type_ref)
            || MockBuilder::is_required_type(ts_type_ref)
            || MockBuilder::is_readonly_type(ts_type_ref)
            || MockBuilder::is_pick_type(ts_type_ref)
            || MockBuilder::is_omit_type(ts_type_ref)
            || MockBuilder::is_record_type(ts_type_ref)
            || MockBuilder::is_exclude_type(ts_type_ref)
            || MockBuilder::is_extract_type(ts_type_ref)
            || MockBuilder::is_nonnullable_type(ts_type_ref)
            || MockBuilder::is_parameters_type(ts_type_ref)
            || MockBuilder::is_returntype_type(ts_type_ref)
            || MockBuilder::is_constructor_parameters_type(ts_type_ref)
            || MockBuilder::is_instancetype_type(ts_type_ref)
            || MockBuilder::is_promise_type(ts_type_ref)
    }

    pub fn is_partial_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "Partial" {
                return true;
            }
        }
        false
    }

    pub fn is_required_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "Required" {
                return true;
            }
        }
        false
    }

    pub fn is_readonly_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "Readonly" {
                return true;
            }
        }
        false
    }

    pub fn is_pick_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "Pick" {
                return true;
            }
        }
        false
    }

    pub fn is_omit_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "Omit" {
                return true;
            }
        }
        false
    }

    pub fn is_record_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "Record" {
                return true;
            }
        }
        false
    }

    pub fn is_exclude_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "Exclude" {
                return true;
            }
        }
        false
    }

    pub fn is_extract_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "Extract" {
                return true;
            }
        }
        false
    }

    pub fn is_nonnullable_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "NonNullable" {
                return true;
            }
        }
        false
    }

    pub fn is_parameters_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "Parameters" {
                return true;
            }
        }
        false
    }

    pub fn is_returntype_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "ReturnType" {
                return true;
            }
        }
        false
    }

    pub fn is_constructor_parameters_type<'a>(
        ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>,
    ) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "ConstructorParameters" {
                return true;
            }
        }
        false
    }

    pub fn is_instancetype_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "InstanceType" {
                return true;
            }
        }
        false
    }

    pub fn is_promise_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
        if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
            if id.name.to_string() == "Promise" {
                return true;
            }
        }
        false
    }
}
