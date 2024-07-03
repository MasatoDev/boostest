use oxc::{
    allocator::{self},
    ast::ast::{TSTypeName, TSTypeReference},
};

// common functions
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
    is_partial_type(ts_type_ref)
        || is_this_type(ts_type_ref)
        || is_required_type(ts_type_ref)
        || is_readonly_type(ts_type_ref)
        || is_pick_type(ts_type_ref)
        || is_omit_type(ts_type_ref)
        || is_record_type(ts_type_ref)
        || is_exclude_type(ts_type_ref)
        || is_extract_type(ts_type_ref)
        || is_nonnullable_type(ts_type_ref)
        || is_parameters_type(ts_type_ref)
        || is_returntype_type(ts_type_ref)
        || is_constructor_parameters_type(ts_type_ref)
        || is_instancetype_type(ts_type_ref)
        || is_promise_type(ts_type_ref)
}

pub fn is_this_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
    if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
        if id.name.to_string() == "ThisType" {
            return true;
        }
    }
    false
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
