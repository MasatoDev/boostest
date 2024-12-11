use oxc::{
    allocator,
    ast::{
        ast::{Expression, ObjectPropertyKind, PropertyKey, TSSignature, TSType},
        AstBuilder,
    },
    span::SPAN,
    syntax::number::NumberBase,
};

use super::{
    extends_ast_builder::AstBuilderExt,
    get_expression::get_expression,
    test_data_factory::{get_obj_expr, handle_tuple_type},
};

pub fn handle_ts_signature<'a>(
    is_main_target: bool,
    ast_builder: &AstBuilder<'a>,
    ts_signature: &mut TSSignature<'a>,
    mock_func_name: &str,
    parent_key_name: Option<String>,
    generic: Vec<String>,
) -> Option<(PropertyKey<'a>, Expression<'a>)> {
    match ts_signature {
        TSSignature::TSPropertySignature(ref mut ts_prop_signature) => {
            if let Some(prop_key) = ts_prop_signature.key.name() {
                if let Some(ts_type_annotation) = &mut ts_prop_signature.type_annotation {
                    let new_parent_key: String;

                    if let Some(p_key) = parent_key_name {
                        new_parent_key = format!("{}_{}", p_key, prop_key);
                    } else {
                        new_parent_key = prop_key.to_string();
                    }

                    let new_prop_key =
                        ast_builder.property_key_identifier_name(SPAN, prop_key.to_string());

                    match &mut ts_type_annotation.type_annotation {
                        TSType::TSTypeLiteral(ts_type_literal) => {
                            return Some((
                                new_prop_key,
                                handle_ts_signatures(
                                    is_main_target,
                                    ast_builder,
                                    &mut ts_type_literal.members,
                                    None,
                                    mock_func_name,
                                    Some(new_parent_key.clone()),
                                    generic,
                                ),
                            ));
                        }
                        other => {
                            let ts_type = ast_builder.move_ts_type(other);

                            Some((
                                new_prop_key,
                                get_expression(
                                    is_main_target,
                                    ast_builder,
                                    ts_type,
                                    mock_func_name,
                                    generic,
                                ),
                            ))
                        }
                    }
                } else {
                    None
                }
            } else {
                None
            }
        }
        TSSignature::TSIndexSignature(ts_index_signature) => {
            let ts_type =
                ast_builder.move_ts_type(&mut ts_index_signature.type_annotation.type_annotation);

            if let Some(first) = ts_index_signature.parameters.first_mut() {
                let key_ts_type =
                    ast_builder.move_ts_type(&mut first.type_annotation.type_annotation);

                /*
                 * TODO: Not supported
                 * [Symbol_Key: symbol]: boolean;
                 */
                if let TSType::TSSymbolKeyword(_) = key_ts_type {
                    return None;
                }

                let key = match key_ts_type {
                    TSType::TSStringKeyword(_) => {
                        ast_builder.string_literal(SPAN, "key").to_string()
                    }
                    TSType::TSNumberKeyword(_) => ast_builder
                        .numeric_literal(SPAN, 0.0, "0", NumberBase::Decimal)
                        .to_string(),
                    _ => ast_builder.string_literal(SPAN, "key").to_string(),
                };

                let new_prop_key = ast_builder.property_key_identifier_name(SPAN, key);

                return Some((
                    new_prop_key,
                    get_expression(false, ast_builder, ts_type, mock_func_name, vec![]),
                ));
            }
            None
        }

        /*
         * NOTE: Not support yet
         *
         * interface Hoge { (): void // callsignature }
         * Because functions without key cannot be added using interface
         * const hoge: Hoge = { (): => {} } // cannot be added
         */
        // TSSignature::TSCallSignatureDeclaration(ts_call_signature_decl) => {
        //     println!("TSCallSignatureDeclaration:{:?}", ts_call_signature_decl);
        //     if let Some(func_expr) = get_func_expr_from_call_signature_decl(
        //         ast_builder,
        //         ts_call_signature_decl,
        //         "call_signature",
        //         mock_func_name,
        //     ) {
        //         let new_key = ast_builder.string_literal(SPAN, "call_signature");
        //         let new_key_expr = ast_builder.literal_string_expression(new_key);
        //         let new_prop_key = ast_builder.property_key_expression(new_key_expr);

        //         return Some((new_prop_key, func_expr));
        //     }

        //     None
        // }
        TSSignature::TSMethodSignature(_ts_method_singature) => None,
        TSSignature::TSConstructSignatureDeclaration(_ts_construct_signature) => None,
        _ => None,
    }
}

pub fn handle_ts_signatures<'a>(
    is_main_target: bool,
    ast_builder: &AstBuilder<'a>,
    ts_signatures: &mut allocator::Vec<'a, TSSignature<'a>>,
    last: Option<ObjectPropertyKind<'a>>,
    mock_func_name: &str,
    parent_key_name: Option<String>,
    generic: Vec<String>,
) -> Expression<'a> {
    let mut props_expr: Vec<(PropertyKey, Expression)> = Vec::new();

    if let Some(ts_tuple_type) = handle_tuple_type(ast_builder, ts_signatures) {
        return get_expression(
            is_main_target,
            ast_builder,
            ts_tuple_type,
            mock_func_name,
            generic,
        );
    }

    for member in ts_signatures.iter_mut() {
        if let Some((key, expr)) = handle_ts_signature(
            is_main_target,
            ast_builder,
            member,
            mock_func_name,
            parent_key_name.clone(),
            generic.clone(),
        ) {
            props_expr.push((key, expr));
        }
    }

    get_obj_expr(ast_builder, props_expr, last)
}
