use std::{
    path::PathBuf,
    sync::{Arc, Mutex},
};

use oxc::{
    ast::ast::{TSSignature, TSTupleElement, TSType, TSTypeName},
    span::Span,
};

use super::super::boostest_utils::ast_utils;
use crate::new::boostest_target::target::{Target, TargetReference};

#[derive(Debug, Clone)]
pub struct TargetReferenceInfo {
    pub file_path: PathBuf,
}

fn ts_signature_assign(
    target: Arc<Mutex<Target>>,
    target_reference_info: TargetReferenceInfo,
    read_file_span: Option<Span>,
    key: String,
    ts_signature: &TSSignature<'_>,
) {
    match ts_signature {
        TSSignature::TSPropertySignature(ts_prop_signature) => {
            if let Some(ts_type_annotation) = &ts_prop_signature.type_annotation {
                if let Some(child_key) = ts_prop_signature.key.name() {
                    let new_key = format!("{}_{}", key, child_key);
                    ts_type_assign_as_property(
                        target,
                        target_reference_info,
                        read_file_span,
                        &ts_type_annotation.type_annotation,
                        new_key,
                    )
                }
            }
        }
        TSSignature::TSIndexSignature(_) => {}
        _ => {}
    }
}

pub fn ts_type_assign_as_property(
    target: Arc<Mutex<Target>>,
    target_reference_info: TargetReferenceInfo,
    read_file_span: Option<Span>,
    ts_type: &TSType,
    key: String,
) {
    let TargetReferenceInfo { file_path } = target_reference_info.clone();

    match ts_type {
        TSType::TSTypeReference(ty_ref) if ast_utils::is_defined_type(&ty_ref) => {}
        TSType::TSTypeReference(ty_ref) if ast_utils::is_function_type(&ty_ref) => {}
        TSType::TSTypeReference(ty_ref) if ast_utils::is_array_type(&ty_ref) => {}
        TSType::TSTypeReference(ty_ref) if ast_utils::is_boolean_type(&ty_ref) => {}
        TSType::TSTypeReference(ty_ref) => {
            if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                let new_key = format!("{}_{}", key, identifier.name.clone().into_string());
                target.lock().unwrap().add_property_ts_type(
                    identifier.name.clone().into_string(),
                    new_key,
                    TargetReference {
                        span: calc_prop_span(identifier.span, read_file_span),
                        file_path,
                    },
                );
            }
        }

        TSType::TSConditionalType(ts_condition_type) => {
            if let TSType::TSTypeReference(ty_ref) = &ts_condition_type.true_type {
                // exclude boolean type
                if ast_utils::is_true_type(ty_ref) {
                    return;
                }

                if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                    let new_key = format!("{}_{}", key, identifier.name.clone().into_string());
                    target.lock().unwrap().add_property_ts_type(
                        identifier.name.clone().into_string(),
                        new_key,
                        TargetReference {
                            span: calc_prop_span(identifier.span, read_file_span),
                            file_path,
                        },
                    );
                }
            }
        }
        TSType::TSUnionType(ts_union_type) => {
            if let Some(first_union_type) = ts_union_type.types.first() {
                if let TSType::TSTypeReference(ty_ref) = first_union_type {
                    // exclude boolean type
                    if ast_utils::is_true_type(ty_ref) {
                        return;
                    }
                    if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                        let new_key = format!("{}_{}", key, identifier.name.clone().into_string());
                        target.lock().unwrap().add_property_ts_type(
                            identifier.name.clone().into_string(),
                            new_key,
                            TargetReference {
                                span: calc_prop_span(identifier.span, read_file_span),
                                file_path,
                            },
                        );
                    }
                }
            }
        }
        TSType::TSTypeLiteral(ts_type_literal) => {
            for member in &ts_type_literal.members {
                ts_signature_assign(
                    target.clone(),
                    target_reference_info.clone(),
                    read_file_span,
                    key.clone(),
                    &member,
                );
            }
        }
        TSType::TSTupleType(ts_tuple_type) => {
            for element in &ts_tuple_type.element_types {
                ts_type_assign_as_property(
                    target.clone(),
                    target_reference_info.clone(),
                    read_file_span,
                    element.to_ts_type(),
                    key.clone(),
                );
            }
        }
        TSType::TSNamedTupleMember(ts_named_tuple_member) => {
            match &ts_named_tuple_member.element_type {
                TSTupleElement::TSOptionalType(_) => {
                    // &ts_named_tuple_member.element_type,
                }
                TSTupleElement::TSRestType(_) => {}
                ts_tuple_type => {
                    ts_type_assign_as_property(
                        target,
                        target_reference_info,
                        read_file_span,
                        ts_tuple_type.to_ts_type(),
                        key.clone(),
                    );
                }
            }
        }
        TSType::TSIntersectionType(ts_intersection_type) => {
            for ts_type in &ts_intersection_type.types {
                ts_type_assign_as_property(
                    target.clone(),
                    target_reference_info.clone(),
                    read_file_span,
                    ts_type,
                    key.clone(),
                );
            }
        }
        _ => {}
    }
}

/*************/
/** PRIVATE **/
/*************/
pub fn calc_prop_span(span: Span, read_file_span: Option<Span>) -> Span {
    if let Some(read_file_span) = read_file_span {
        return Span::new(
            span.start + read_file_span.start,
            span.end + read_file_span.start,
        );
    };

    span
}
