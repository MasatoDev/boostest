use oxc::ast::ast::{TSSignature, TSType};

struct InitValue;

pub fn get_test_value(ts_type: &TSType) -> String {
    match ts_type {
        TSType::TSAnyKeyword(_) => "'any'".to_string(),
        TSType::TSBigIntKeyword(_) => "12345678901234567890n".to_string(),
        TSType::TSBooleanKeyword(_) => "true".to_string(),
        TSType::TSNeverKeyword(_) => "/* never */".to_string(), // never を表現
        TSType::TSNullKeyword(_) => "null".to_string(),
        TSType::TSNumberKeyword(_) => "42".to_string(),
        TSType::TSObjectKeyword(_) => "{}".to_string(),
        TSType::TSStringKeyword(_) => "'Hello, world!'".to_string(),
        TSType::TSSymbolKeyword(_) => "Symbol('foo')".to_string(),
        TSType::TSThisType(_) => "this".to_string(),
        TSType::TSUndefinedKeyword(_) => "undefined".to_string(),
        TSType::TSUnknownKeyword(_) => "'unknown'".to_string(), // unknown を表現
        TSType::TSVoidKeyword(_) => "/* void */".to_string(),   // void を表現

        TSType::TSArrayType(arr_type) => {
            let element_type: String = get_test_value(&arr_type.element_type);
            format!("[{}]", element_type)
        }
        TSType::TSFunctionType(_) => "() => {}".to_string(),
        TSType::TSTypeLiteral(type_literal) => {
            let members = type_literal
                .members
                .iter()
                .filter_map(|ts_signature| {
                    match ts_signature {
                        TSSignature::TSPropertySignature(ts_prop_signature) => {
                            if let Some(name) = ts_prop_signature.key.name() {
                                let value = get_test_value(
                                    &ts_prop_signature
                                        .type_annotation
                                        .as_ref()
                                        .unwrap()
                                        .type_annotation,
                                );
                                return Some(format!("{}: {}", name, value));
                            }
                        }
                        _ => {
                            return None;
                        }
                    }
                    None
                })
                .collect::<Vec<String>>()
                .join(", ");

            format!("{{ {} }}", members)
        }

        // TSType::JSDocNullableType(_) => todo!(),
        // TSType::TSUnionType(_) => todo!(),
        // TSType::TSIntersectionType(_) => todo!(),
        // TSType::TSTypeOperatorType(_) => todo!(),
        // TSType::TSTypePredicate(_) => todo!(),
        // TSType::TSTypeQuery(_) => todo!(),
        // TSType::TSTypeReference(_) => todo!(),
        // TSType::TSIndexedAccessType(_) => todo!(),
        // TSType::TSConstructorType(_) => todo!(),
        // TSType::TSConditionalType(_) => todo!(),
        // TSType::TSInferType(_) => todo!(),
        // TSType::JSDocUnknownType(_) => todo!(),
        // TSType::TSTemplateLiteralType(_) => todo!(),
        // TSType::TSMappedType(_) => todo!(),
        // TSType::TSTupleType(_) => todo!(),
        // TSType::TSNamedTupleMember(_) => todo!(),
        // TSType::TSImportType(_) => todo!(),
        // TSType::TSQualifiedName(_) => todo!(),
        // TSType::TSLiteralType(_) => todo!(),
        _ => "not implemented".to_string(),
    }
}
