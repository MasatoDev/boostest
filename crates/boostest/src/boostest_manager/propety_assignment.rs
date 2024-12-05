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
