use crate::{boostest_mock_loader::mock_ast_loader::MockAstLoader, boostest_utils};
use oxc::ast::ast::{TSSignature, TSType, TSTypeName};

fn ts_signature_assign(
    mock_ast_loader: &mut MockAstLoader,
    key: String,
    ts_signature: &TSSignature<'_>,
) {
    match ts_signature {
        TSSignature::TSPropertySignature(ts_prop_signature) => {
            if let Some(ts_type_annotation) = &ts_prop_signature.type_annotation {
                if let Some(child_key) = ts_prop_signature.key.name() {
                    let new_key = format!("{}_{}", key, child_key);
                    ts_type_assign_as_property(
                        mock_ast_loader,
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
    mock_ast_loader: &mut MockAstLoader,
    ts_type: &TSType,
    key: String,
) {
    match ts_type {
        TSType::TSTypeReference(ty_ref) if boostest_utils::ast_utils::is_defined_type(&ty_ref) => {}
        TSType::TSTypeReference(ty_ref) if boostest_utils::ast_utils::is_array_type(&ty_ref) => {}
        TSType::TSTypeReference(ty_ref) => {
            if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                let new_key = format!("{}_{}", key, identifier.name.clone().into_string());
                mock_ast_loader
                    .add_property_ts_type(identifier.name.clone().into_string(), new_key);
            }
        }
        TSType::TSConditionalType(ts_condition_type) => {
            if let TSType::TSTypeReference(ty_ref) = &ts_condition_type.true_type {
                if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                    let new_key = format!("{}_{}", key, identifier.name.clone().into_string());
                    mock_ast_loader
                        .add_property_ts_type(identifier.name.clone().into_string(), new_key);
                }
            }
        }
        TSType::TSUnionType(ts_union_type) => {
            if let Some(first_union_type) = ts_union_type.types.first() {
                if let TSType::TSTypeReference(ty_ref) = first_union_type {
                    if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                        let new_key = format!("{}_{}", key, identifier.name.clone().into_string());
                        mock_ast_loader
                            .add_property_ts_type(identifier.name.clone().into_string(), new_key);
                    }
                }
            }
        }
        TSType::TSTypeLiteral(ts_type_literal) => {
            for member in &ts_type_literal.members {
                ts_signature_assign(mock_ast_loader, key.clone(), &member);
            }
        }
        TSType::TSTupleType(ts_tuple_type) => {
            for element in &ts_tuple_type.element_types {
                ts_type_assign_as_property(mock_ast_loader, element.to_ts_type(), key.clone());
            }
        }
        TSType::TSNamedTupleMember(ts_named_tuple_member) => {
            ts_type_assign_as_property(
                mock_ast_loader,
                &ts_named_tuple_member.element_type,
                key.clone(),
            );
        }
        TSType::TSIntersectionType(ts_intersection_type) => {
            for ts_type in &ts_intersection_type.types {
                ts_type_assign_as_property(mock_ast_loader, ts_type, key.clone());
            }
        }
        _ => {}
    }
}
