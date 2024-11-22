use std::{
    path::PathBuf,
    sync::{Arc, Mutex},
};

use oxc::{
    ast::ast::{TSSignature, TSTupleElement, TSType, TSTypeName, TSTypeQueryExprName},
    span::Span,
};

use super::super::boostest_utils::ast_utils;
use crate::boostest_target::target::{Target, TargetReference, TargetSupplement};

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
    defined_generics: Vec<String>,
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
                        defined_generics,
                        false,
                        false,
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
    defined_generics: Vec<String>,

    // NOTE: for refer inner generic type
    skip_id_name_of_key: bool,
    is_generic_property: bool,
) {
    let TargetReferenceInfo { file_path } = target_reference_info.clone();

    match ts_type {
        TSType::TSTypeReference(ty_ref) if ast_utils::is_defined_type(&ty_ref) => {}
        TSType::TSTypeReference(ty_ref) if ast_utils::is_function_type(&ty_ref) => {}
        TSType::TSTypeReference(ty_ref) if ast_utils::is_array_type(&ty_ref) => {}
        TSType::TSTypeReference(ty_ref) if ast_utils::is_boolean_type(&ty_ref) => {}
        TSType::TSTypeReference(ty_ref) => {
            if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                // NOTE: handle generic type parameters
                // key: Partial<HugaType>;
                if let Some(type_parameters) = &ty_ref.type_parameters {
                    for param in type_parameters.params.iter() {
                        ts_type_assign_as_property(
                            target.clone(),
                            target_reference_info.clone(),
                            read_file_span,
                            param,
                            key.clone(),
                            defined_generics.clone(),
                            false,
                            true,
                        );
                    }
                }

                let new_key: String;
                if skip_id_name_of_key {
                    new_key = key;
                } else {
                    new_key = format!("{}_{}", key, identifier.name.clone().into_string());
                }

                if !defined_generics.contains(&identifier.name.to_string()) {
                    target.lock().unwrap().add_property(
                        identifier.name.clone().into_string(),
                        new_key,
                        TargetReference {
                            span: calc_prop_span(identifier.span, read_file_span),
                            file_path,
                            target_supplement: gen_target_supplement(false, is_generic_property),
                        },
                    );
                }
            }
        }

        TSType::TSConditionalType(ts_condition_type) => {
            ts_type_assign_as_property(
                target.clone(),
                target_reference_info.clone(),
                read_file_span,
                &ts_condition_type.check_type,
                key.clone(),
                defined_generics.clone(),
                false,
                is_generic_property,
            );

            ts_type_assign_as_property(
                target.clone(),
                target_reference_info.clone(),
                read_file_span,
                &ts_condition_type.extends_type,
                key.clone(),
                defined_generics.clone(),
                false,
                is_generic_property,
            );

            ts_type_assign_as_property(
                target.clone(),
                target_reference_info.clone(),
                read_file_span,
                &ts_condition_type.true_type,
                key.clone(),
                defined_generics.clone(),
                false,
                is_generic_property,
            );

            ts_type_assign_as_property(
                target.clone(),
                target_reference_info.clone(),
                read_file_span,
                &ts_condition_type.false_type,
                key.clone(),
                defined_generics.clone(),
                false,
                is_generic_property,
            );
        }
        TSType::TSUnionType(ts_union_type) => {
            for ts_type in ts_union_type.types.iter() {
                let cloned_file_path = file_path.clone();

                if let TSType::TSTypeReference(ty_ref) = ts_type {
                    // exclude boolean type
                    // if ast_utils::is_true_type(ty_ref) {
                    //     return;
                    // }
                    if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                        let new_key = format!("{}_{}", key, identifier.name.clone().into_string());
                        target.lock().unwrap().add_property(
                            identifier.name.clone().into_string(),
                            new_key,
                            TargetReference {
                                span: calc_prop_span(identifier.span, read_file_span),
                                file_path: cloned_file_path,
                                target_supplement: gen_target_supplement(
                                    false,
                                    is_generic_property,
                                ),
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
                    defined_generics.clone(),
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
                    defined_generics.clone(),
                    false,
                    is_generic_property,
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
                        defined_generics.clone(),
                        false,
                        is_generic_property,
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
                    defined_generics.clone(),
                    false,
                    is_generic_property,
                );
            }
        }
        TSType::TSTypeQuery(ts_type_query) => {
            if let TSTypeQueryExprName::IdentifierReference(identifier) = &ts_type_query.expr_name {
                let new_key = format!("{}_{}", key, identifier.name.clone().into_string());

                target.lock().unwrap().add_property(
                    identifier.name.clone().into_string(),
                    new_key,
                    TargetReference {
                        span: calc_prop_span(identifier.span, read_file_span),
                        file_path,
                        target_supplement: gen_target_supplement(false, is_generic_property),
                    },
                )
            }
        }
        TSType::TSTypeOperatorType(ts_type_operator_type) => {
            if let TSType::TSTypeReference(ts_type_ref) = &ts_type_operator_type.type_annotation {
                let new_key = format!("{}_{}", key, ts_type_ref.type_name);
                target.lock().unwrap().add_property(
                    ts_type_ref.type_name.to_string(),
                    new_key,
                    TargetReference {
                        span: calc_prop_span(ts_type_ref.span, read_file_span),
                        file_path,
                        target_supplement: gen_target_supplement(false, is_generic_property),
                    },
                )
            }
        }
        TSType::TSIndexedAccessType(ts_indexed_access_type) => {
            if let TSType::TSTypeReference(ts_object_type_ref) = &ts_indexed_access_type.object_type
            {
                let new_key = format!("{}_{}", key, ts_object_type_ref.type_name);
                target.lock().unwrap().add_property(
                    ts_object_type_ref.type_name.to_string(),
                    new_key,
                    TargetReference {
                        span: calc_prop_span(ts_indexed_access_type.span, read_file_span),
                        file_path,
                        target_supplement: gen_target_supplement(false, is_generic_property),
                    },
                )
            }
        }
        TSType::TSMappedType(ts_mapped_type) => {
            if let Some(ts_type) = &ts_mapped_type.type_parameter.constraint {
                match ts_type {
                    TSType::TSTypeReference(ts_type_ref) => {
                        let new_key = format!("{}_{}", key, ts_type_ref.type_name);

                        // TODO: generic type
                        if ["T", "K", "P", "U"]
                            .contains(&ts_type_ref.type_name.to_string().as_str())
                        {
                            return;
                        }

                        target.lock().unwrap().add_property(
                            ts_type_ref.type_name.to_string(),
                            new_key,
                            TargetReference {
                                span: calc_prop_span(ts_type_ref.span, read_file_span),
                                file_path,
                                target_supplement: gen_target_supplement(true, is_generic_property),
                            },
                        )
                    }
                    TSType::TSTypeOperatorType(ts_type_operator_type) => {
                        if let TSType::TSTypeReference(ts_type_ref) =
                            &ts_type_operator_type.type_annotation
                        {
                            let new_key = format!("{}_{}", key, ts_type_ref.type_name);

                            // TODO: generic type
                            if ["T", "K", "P", "U"]
                                .contains(&ts_type_ref.type_name.to_string().as_str())
                            {
                                return;
                            }

                            target.lock().unwrap().add_property(
                                ts_type_ref.type_name.to_string(),
                                new_key,
                                TargetReference {
                                    span: calc_prop_span(ts_type_ref.span, read_file_span),
                                    file_path,
                                    target_supplement: gen_target_supplement(
                                        true,
                                        is_generic_property,
                                    ),
                                },
                            )
                        }
                    }

                    _ => {}
                }
            }

            // {[K in keyof T]: T[K]}
            // TODO
            // ts_mapped_type.type_parameter.constraint
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

pub fn gen_target_supplement(
    is_mapped_type: bool,
    is_generic_property: bool,
) -> Option<TargetSupplement> {
    if !is_mapped_type && !is_generic_property {
        return None;
    }

    Some(TargetSupplement {
        is_mapped_type,
        is_generic_property,
    })
}
