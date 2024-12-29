use oxc::{
    allocator::{self},
    ast::ast::{TSTupleElement, TSTupleType, TSTypeName, TSTypeReference},
    span::{Atom, Span},
};

pub fn ignore_name(name: &str) -> bool {
    let built_in = [
        "true",
        "false",
        "Function",
        "Array",
        "Promise",
        "Date",
        "Set",
        "Map",
        "Object",
        "String",
        "Number",
        "Boolean",
        "Symbol",
        "RegExp",
        "Error",
        "ArrayBuffer",
        "DataView",
        "Int8Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "Int16Array",
        "Uint16Array",
        "Int32Array",
        "Uint32Array",
        "Float32Array",
        "Float64Array",
        "BigInt64Array",
        "BigUint64Array",
        "IterableIterator",
        "SharedArrayBuffer",
        "Atomics",
        "WebAssembly",
    ];

    built_in.contains(&name)
}

pub fn ignore_ref_name(atom: &Atom) -> bool {
    let name = atom.to_string();
    ignore_name(&name)
}
// common functions
pub fn is_array_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
    if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
        if id.name.to_string() == "Array" {
            return true;
        }
    }
    false
}

pub fn is_function_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
    if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
        if id.name.to_string() == "Function" {
            return true;
        }
    }
    false
}

pub fn is_true_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
    if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
        if id.name == "true" {
            return true;
        }
    }
    false
}

pub fn is_false_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
    if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
        if id.name == "false" {
            return true;
        }
    }
    false
}

pub fn is_class_reference_type<'a>(ts_tuple_type: &allocator::Box<'a, TSTupleType<'a>>) -> bool {
    if let Some(element) = ts_tuple_type.element_types.first() {
        if let TSTupleElement::TSTypeReference(ts_type_ref) = element {
            if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
                if id.name == "classReference" {
                    return true;
                }
            }
        }
    }
    false
}

pub fn is_class_typeof_reference_type<'a>(
    ts_tuple_type: &allocator::Box<'a, TSTupleType<'a>>,
) -> bool {
    if let Some(element) = ts_tuple_type.element_types.first() {
        if let TSTupleElement::TSTypeReference(ts_type_ref) = element {
            if let TSTypeName::IdentifierReference(id) = &ts_type_ref.type_name {
                if id.name == "classTypeofReference" {
                    return true;
                }
            }
        }
    }
    false
}

pub fn is_boolean_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
    is_true_type(ts_type_ref) || is_false_type(ts_type_ref)
}

// TODO: remove this function
pub fn is_defined_type<'a>(ts_type_ref: &allocator::Box<'a, TSTypeReference<'a>>) -> bool {
    return false;
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

pub fn get_generic_prefix<'a>(n: usize) -> &'a str {
    match n {
        0 => "zero",
        1 => "first",
        2 => "second",
        3 => "third",
        4 => "fourth",
        5 => "fifth",
        6 => "sixth",
        7 => "seventh",
        8 => "eighth",
        9 => "ninth",
        10 => "tenth",
        11 => "eleventh",
        12 => "twelfth",
        13 => "thirteenth",
        14 => "fourteenth",
        15 => "fifteenth",
        16 => "sixteenth",
        17 => "seventeenth",
        18 => "eighteenth",
        19 => "nineteenth",
        20 => "twentieth",
        _ => "number out of range",
    }
}

pub fn calc_prop_span(span: Span, read_file_span: Option<Span>) -> Span {
    if let Some(read_file_span) = read_file_span {
        return Span::new(
            span.start + read_file_span.start,
            span.end + read_file_span.start,
        );
    };

    span
}
