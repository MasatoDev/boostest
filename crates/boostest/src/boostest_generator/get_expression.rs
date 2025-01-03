use std::sync::Arc;

use oxc::{
    allocator,
    ast::{
        ast::{
            Argument, ArrayExpressionElement, BindingRestElement, Expression, FormalParameterKind,
            ObjectExpression, ObjectPropertyKind, PropertyKey, PropertyKind,
            TSCallSignatureDeclaration, TSLiteral, TSSignature, TSTupleElement, TSType,
            TSTypeAnnotation, TSTypeLiteral, TSTypeName, TSTypeParameterInstantiation,
        },
        AstBuilder,
    },
    span::SPAN,
};

use crate::OutputOption;

use super::{
    super::boostest_utils::ast_utils,
    get_arg::get_arg,
    handle_ts_signatures::{handle_ts_signature, handle_ts_signatures},
    test_data_factory::{
        self, any_expr, as_any_empty_object_expr, bigint_expr, boolean_expr, function_expr,
        get_expr_with_ts_literal_type, handle_tuple_type, null_expr, number_expr, object_expr,
        string_expr, symbol_expr, undefined_expr,
    },
};
use super::{extends_ast_builder::AstBuilderExt, test_data_factory::array_expr};

/**
 *
 *
 * get_expression
 *
 *
 */
pub fn get_expression<'a>(
    ast_builder: &AstBuilder<'a>,
    mut type_annotation: TSType<'a>,
    mock_func_name: &str,
    generic: Vec<String>,
    output_option_arc: Arc<OutputOption>,
) -> Expression<'a> {
    let val = match type_annotation {
        TSType::TSTypeReference(mut ts_type_ref) if ast_utils::is_promise_type(&ts_type_ref) => {
            let mut arguments = ast_builder.vec();

            if let Some(type_parameters) = &mut ts_type_ref.type_parameters {
                if let Some(param_type) = type_parameters.params.first_mut() {
                    let ts_type = ast_builder.move_ts_type(param_type);

                    let result_expr = get_arg(
                        ast_builder,
                        ts_type,
                        mock_func_name,
                        generic,
                        output_option_arc,
                    );
                    let mut result_args = ast_builder.vec();
                    result_args.push(result_expr);

                    let new_name = ast_builder.atom("resolve");
                    let new_callee = ast_builder.expression_identifier_reference(SPAN, new_name);

                    let type_parameters: Option<allocator::Box<TSTypeParameterInstantiation<'a>>> =
                        None;
                    let call_expr = ast_builder.expression_call(
                        SPAN,
                        new_callee,
                        type_parameters,
                        result_args,
                        false,
                    );

                    let binding_kind =
                        ast_builder.binding_pattern_kind_binding_identifier(SPAN, "resolve");
                    let ts_type_annotation: Option<allocator::Box<TSTypeAnnotation<'a>>> = None;
                    let binding_paramter =
                        ast_builder.binding_pattern(binding_kind, ts_type_annotation, false);
                    let formal_parameter = ast_builder.formal_parameter(
                        SPAN,
                        ast_builder.vec(),
                        binding_paramter,
                        None,
                        false,
                        false,
                    );

                    let mut formal_parameters = ast_builder.vec();
                    formal_parameters.push(formal_parameter);

                    let none_binding_rest_ele: Option<allocator::Box<BindingRestElement<'a>>> =
                        None;
                    let alloc_formal_parameters = ast_builder.alloc_formal_parameters(
                        SPAN,
                        FormalParameterKind::ArrowFormalParameters,
                        formal_parameters,
                        none_binding_rest_ele,
                    );

                    let function_expr =
                        function_expr(ast_builder, Some(alloc_formal_parameters), Some(call_expr));
                    arguments.push(Argument::from(function_expr));
                }
            }

            let new_name = ast_builder.atom("Promise");
            let new_callee = ast_builder.expression_identifier_reference(SPAN, new_name);
            let type_parameters: Option<allocator::Box<TSTypeParameterInstantiation<'a>>> = None;
            ast_builder.expression_new(SPAN, new_callee, arguments, type_parameters)
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_function_type(&ts_type_ref) => {
            function_expr(ast_builder, None, None)
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_array_type(&ts_type_ref) => {
            // TODO: Array
            array_expr(ast_builder, None)
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_true_type(&ts_type_ref) => {
            boolean_expr(ast_builder, Some(true))
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_false_type(&ts_type_ref) => {
            boolean_expr(ast_builder, Some(false))
        }
        TSType::TSTypeReference(_) => as_any_empty_object_expr(ast_builder),
        TSType::TSStringKeyword(_) => string_expr(
            ast_builder,
            Some(&output_option_arc.default_value_option.string),
        ),
        TSType::TSAnyKeyword(_) => any_expr(
            ast_builder,
            Some(&output_option_arc.default_value_option.any),
        ),
        TSType::TSBooleanKeyword(_) => boolean_expr(
            ast_builder,
            Some(output_option_arc.default_value_option.boolean),
        ),
        TSType::TSNullKeyword(_) => null_expr(ast_builder),
        TSType::TSNumberKeyword(_) => number_expr(
            ast_builder,
            Some(output_option_arc.default_value_option.number),
            None,
        ),
        TSType::TSBigIntKeyword(_) => {
            let bigint_atom = ast_builder.atom(&output_option_arc.default_value_option.bigint);
            return bigint_expr(ast_builder, Some(&bigint_atom), None);
        }
        TSType::TSObjectKeyword(_) => object_expr(ast_builder, None),
        TSType::TSVoidKeyword(_) => null_expr(ast_builder),
        TSType::TSFunctionType(ref mut ts_function_type) => {
            let formal_parameters =
                ast_builder.move_formal_parameters(&mut ts_function_type.params);
            let alloced_formal_parameters = ast_builder.alloc(formal_parameters);
            let ts_type =
                ast_builder.move_ts_type(&mut ts_function_type.return_type.type_annotation);
            let return_expression;
            if let TSType::TSVoidKeyword(_) = ts_type {
                return_expression = None;
            } else {
                return_expression = Some(get_expression(
                    ast_builder,
                    ts_type,
                    mock_func_name,
                    vec![],
                    output_option_arc,
                ));
            }
            function_expr(
                ast_builder,
                Some(alloced_formal_parameters),
                return_expression,
            )
        }
        TSType::TSUndefinedKeyword(_) => undefined_expr(
            ast_builder,
            Some(&output_option_arc.default_value_option.undefined),
        ),
        TSType::TSUnknownKeyword(_) => undefined_expr(ast_builder, None),
        TSType::TSConditionalType(_) => as_any_empty_object_expr(ast_builder),
        TSType::TSUnionType(box_ts_union_type) => {
            let ts_union_type = &mut box_ts_union_type.unbox();
            let first_union_type = ts_union_type.types.first_mut();
            if let Some(first_type) = first_union_type {
                let ts_type = ast_builder.move_ts_type(first_type);
                let new = get_expression(
                    ast_builder,
                    ts_type,
                    mock_func_name,
                    vec![],
                    output_option_arc,
                );
                return new;
            }
            // fallback
            null_expr(ast_builder)
        }
        TSType::TSTupleType(ref mut ts_tuple_type) => {
            let first_element = ts_tuple_type
                .element_types
                .first_mut()
                .map(|x| ast_builder.move_ts_tuple_element(x));
            let second_element = ts_tuple_type
                .element_types
                .get_mut(1)
                .map(|x| ast_builder.move_ts_tuple_element(x));
            let third_element = ts_tuple_type
                .element_types
                .get_mut(2)
                .map(|x| ast_builder.move_ts_tuple_element(x));

            if let Some(TSTupleElement::TSLiteralType(first_ts_type_ref)) = &first_element {
                if let TSLiteral::StringLiteral(first_literal) = &first_ts_type_ref.literal {
                    if let Some(TSTupleElement::TSTypeReference(second_ts_type_ref)) =
                        &second_element
                    {
                        if let TSTypeName::IdentifierReference(second_id) =
                            &second_ts_type_ref.type_name
                        {
                            // type main = ["classReference", ClassName, ["string", number]]
                            // return) new ClassName("string", number)
                            if first_literal.value == "classReference" {
                                if let Some(third_element) = third_element {
                                    let mut arguments = ast_builder.vec();

                                    if let TSTupleElement::TSTupleType(mut third_ts_tuple) =
                                        third_element
                                    {
                                        for element in third_ts_tuple.element_types.iter_mut() {
                                            let ts_type =
                                                ast_builder.move_ts_type(element.to_ts_type_mut());

                                            let new = get_expression(
                                                ast_builder,
                                                ts_type,
                                                mock_func_name,
                                                vec![],
                                                output_option_arc.clone(),
                                            );
                                            let any_type = ast_builder.ts_type_any_keyword(SPAN);
                                            let new_as_any =
                                                ast_builder.expression_ts_as(SPAN, new, any_type);
                                            arguments.push(Argument::from(new_as_any));
                                        }
                                    }

                                    let new_name = ast_builder.atom(&second_id.name);
                                    let new_callee =
                                        ast_builder.expression_identifier_reference(SPAN, new_name);

                                    let type_parameters: Option<
                                        allocator::Box<TSTypeParameterInstantiation<'a>>,
                                    > = None;

                                    return ast_builder.expression_new(
                                        SPAN,
                                        new_callee,
                                        arguments,
                                        type_parameters,
                                    );
                                }
                            }
                            // type main = ["classTypeofReference", ClassName]
                            // return) ClassName
                            if first_literal.value == "classTypeofReference" {
                                let new_name = ast_builder.atom(&second_id.name);
                                return ast_builder.expression_identifier_reference(SPAN, new_name);
                            }
                        }
                    }
                }
            }

            // back
            if let Some(mut first_element) = first_element {
                if let Some(first) = ts_tuple_type.element_types.get_mut(0) {
                    std::mem::swap(first, &mut first_element);
                }
            }

            if let Some(mut second_element) = second_element {
                if let Some(second) = ts_tuple_type.element_types.get_mut(1) {
                    std::mem::swap(second, &mut second_element);
                }
            }

            if let Some(mut third_element) = third_element {
                if let Some(third) = ts_tuple_type.element_types.get_mut(2) {
                    std::mem::swap(third, &mut third_element);
                }
            }

            let mut new_elements = ast_builder.vec();
            for element in ts_tuple_type.element_types.iter_mut() {
                let ts_type = ast_builder.move_ts_type(element.to_ts_type_mut());
                let new = get_expression(
                    ast_builder,
                    ts_type,
                    mock_func_name,
                    vec![],
                    output_option_arc.clone(),
                );
                let any_type = ast_builder.ts_type_any_keyword(SPAN);
                let new_as_any = ast_builder.expression_ts_as(SPAN, new, any_type);
                let array_expr = ArrayExpressionElement::from(new_as_any);
                new_elements.push(array_expr);
            }
            array_expr(ast_builder, Some(new_elements))
        }
        TSType::TSNamedTupleMember(ref mut ts_named_tuple_member) => {
            // type main = [name: "string", age: "number"]
            let ts_type =
                ast_builder.move_ts_type(ts_named_tuple_member.element_type.to_ts_type_mut());
            get_expression(
                ast_builder,
                ts_type,
                mock_func_name,
                vec![],
                output_option_arc,
            )
        }
        TSType::TSTypeLiteral(ref mut ts_type_literal) => {
            if test_data_factory::has_call_signature(&ts_type_literal) {
                let first_call_expr = get_first_call_signature_from_call_sig(
                    ast_builder,
                    ts_type_literal,
                    mock_func_name,
                    output_option_arc.clone(),
                );

                if let Some(first_call_expr) = first_call_expr {
                    return first_call_expr;
                }
            }

            handle_ts_signatures(
                ast_builder,
                &mut ts_type_literal.members,
                None,
                mock_func_name,
                Some("test".to_string()),
                generic,
                output_option_arc.clone(),
            )
        }
        TSType::TSNeverKeyword(_) => null_expr(ast_builder),
        TSType::TSArrayType(_) => array_expr(ast_builder, None),
        TSType::TSLiteralType(literal_type) => {
            get_expr_with_ts_literal_type(ast_builder, &literal_type.literal)
        }
        TSType::TSSymbolKeyword(_) => symbol_expr(ast_builder),
        TSType::TSIntersectionType(ref mut ts_intersection_type) => {
            let mut temp_expr = ast_builder.vec();

            for ts_type in ts_intersection_type.types.iter_mut() {
                let new_ts_type = ast_builder.move_ts_type(ts_type);
                let expr = get_expression(
                    ast_builder,
                    new_ts_type,
                    mock_func_name,
                    vec![],
                    output_option_arc.clone(),
                );
                let spread_expr = ast_builder.alloc_spread_element(SPAN, expr);
                let obj_prop_expr = ObjectPropertyKind::SpreadProperty(spread_expr);
                temp_expr.push(obj_prop_expr);
            }

            ast_builder.expression_object(SPAN, temp_expr, None)
        }
        TSType::TSTypeOperatorType(_) => {
            // keyof T
            as_any_empty_object_expr(ast_builder)
        }
        TSType::TSInferType(_ts_infer_type) => {
            // infer R ? R : never
            as_any_empty_object_expr(ast_builder)
        }
        TSType::TSMappedType(_) => as_any_empty_object_expr(ast_builder),
        TSType::TSQualifiedName(_) => {
            // Namespace.MyType
            as_any_empty_object_expr(ast_builder)
        }
        TSType::TSTypeQuery(_ts_type_query) => as_any_empty_object_expr(ast_builder),
        TSType::TSTypePredicate(_) => {
            // x is string
            as_any_empty_object_expr(ast_builder)
        }
        TSType::TSTemplateLiteralType(_) => {
            // `${string}`, \`hello ${string}\`
            as_any_empty_object_expr(ast_builder)
        }
        TSType::TSThisType(_) => {
            // error
            as_any_empty_object_expr(ast_builder)
        }
        TSType::TSConstructorType(_) => as_any_empty_object_expr(ast_builder),
        TSType::TSIndexedAccessType(_ts_indexed_access_type) => {
            // person["name"]
            as_any_empty_object_expr(ast_builder)
        }
        TSType::TSParenthesizedType(ref mut ts_parenthesized_type) => {
            let ts_type = ast_builder.move_ts_type(&mut ts_parenthesized_type.type_annotation);
            get_expression(
                ast_builder,
                ts_type,
                mock_func_name,
                vec![],
                output_option_arc,
            )

            // as_any_empty_object_expr(ast_builder)
        }

        /***********************************************************/
        /***********************************************************/
        /******************** Unused Types *************************/
        /***********************************************************/
        /***********************************************************/
        TSType::JSDocNullableType(_) => as_any_empty_object_expr(ast_builder),
        TSType::JSDocUnknownType(_) => as_any_empty_object_expr(ast_builder),
        TSType::TSImportType(_) => as_any_empty_object_expr(ast_builder),
        TSType::TSIntrinsicKeyword(_) => as_any_empty_object_expr(ast_builder),
        TSType::JSDocNonNullableType(_) => as_any_empty_object_expr(ast_builder),
    };

    val
}

/**
 *
 *
 *
 *
 *
 */

pub fn get_obj_arg<'a>(
    ast_builder: &AstBuilder<'a>,
    expressions: Vec<(PropertyKey<'a>, Expression<'a>)>,
    last: Option<ObjectPropertyKind<'a>>,
) -> ObjectExpression<'a> {
    let mut new_props = ast_builder.vec();

    for (key, expression) in expressions {
        let object_expr = ast_builder.alloc_object_property(
            SPAN,
            PropertyKind::Init,
            key,
            expression,
            false,
            false,
            false,
        );
        new_props.push(ObjectPropertyKind::ObjectProperty(object_expr));
    }

    if let Some(last_prop) = last {
        new_props.push(last_prop);
    }

    ObjectExpression {
        span: SPAN,
        properties: new_props,
        trailing_comma: None,
    }
}

pub fn handle_ts_signatures_with_args<'a>(
    ast_builder: &AstBuilder<'a>,
    ts_signatures: &mut allocator::Vec<'a, TSSignature<'a>>,
    last: Option<ObjectPropertyKind<'a>>,
    mock_func_name: &str,
    parent_key: Option<String>,
    generic: Vec<String>,
    output_option_arc: Arc<OutputOption>,
) -> Argument<'a> {
    let mut props_expr: Vec<(PropertyKey, Expression)> = Vec::new();

    if let Some(ts_tuple_type) = handle_tuple_type(ast_builder, ts_signatures) {
        return get_arg(
            ast_builder,
            ts_tuple_type,
            mock_func_name,
            generic,
            output_option_arc,
        );
    }

    for member in ts_signatures.iter_mut() {
        if let Some((key, expr)) = handle_ts_signature(
            ast_builder,
            member,
            mock_func_name,
            parent_key.clone(),
            generic.clone(),
            output_option_arc.clone(),
        ) {
            props_expr.push((key, expr));
        }
    }

    let obj_expr = get_obj_arg(ast_builder, props_expr, last);
    let argument_item = ast_builder.alloc(obj_expr);
    Argument::ObjectExpression(argument_item)
}

pub fn get_func_expr_from_call_signature_decl<'a>(
    ast_builder: &AstBuilder<'a>,
    ts_call_signature: &mut TSCallSignatureDeclaration<'a>,
    mock_func_name: &str,
    output_option_arc: Arc<OutputOption>,
) -> Option<Expression<'a>> {
    let mut formal_parameters = ast_builder.move_formal_parameters(&mut ts_call_signature.params);

    for param in formal_parameters.items.iter_mut() {
        if let Some(ref mut type_annotation) = param.pattern.type_annotation {
            match &mut type_annotation.type_annotation {
                TSType::TSTypeReference(ref mut ts_type_ref) => {
                    let type_name = ast_builder.ts_type_name_identifier_reference(SPAN, "any");
                    ts_type_ref.type_name = type_name;
                }
                _ => {}
            }
        }
    }

    let boxed_formal_parameters = ast_builder.alloc(formal_parameters);

    if let Some(return_type) = &mut ts_call_signature.return_type {
        let ts_type = ast_builder.move_ts_type(&mut return_type.type_annotation);

        let return_expression;

        if let TSType::TSVoidKeyword(_) = ts_type {
            return_expression = None;
        } else {
            return_expression = Some(get_expression(
                ast_builder,
                ts_type,
                mock_func_name,
                vec![],
                output_option_arc,
            ));
        }

        return Some(function_expr(
            ast_builder,
            Some(boxed_formal_parameters),
            return_expression,
        ));
    }

    return Some(function_expr(
        ast_builder,
        Some(boxed_formal_parameters),
        None,
    ));
}

pub fn get_first_call_signature_from_call_sig<'a>(
    ast_builder: &AstBuilder<'a>,
    ts_type_literal: &mut TSTypeLiteral<'a>,
    mock_func_name: &str,
    output_option_arc: Arc<OutputOption>,
) -> Option<Expression<'a>> {
    for ts_type_literal in ts_type_literal.members.iter_mut() {
        match ts_type_literal {
            TSSignature::TSCallSignatureDeclaration(ts_call_signature) => {
                return get_func_expr_from_call_signature_decl(
                    ast_builder,
                    ts_call_signature,
                    mock_func_name,
                    output_option_arc,
                );
            }
            _ => {
                continue;
            }
        }
    }
    None
}

pub fn get_first_call_signature<'a>(
    ast_builder: &AstBuilder<'a>,
    ts_type: TSType<'a>,
    mock_func_name: &str,
    output_option_arc: Arc<OutputOption>,
) -> Option<Expression<'a>> {
    match ts_type {
        TSType::TSTypeLiteral(mut ts_type_literal) => {
            for ts_type_literal in ts_type_literal.members.iter_mut() {
                match ts_type_literal {
                    TSSignature::TSCallSignatureDeclaration(ts_call_signature) => {
                        return get_func_expr_from_call_signature_decl(
                            ast_builder,
                            ts_call_signature,
                            mock_func_name,
                            output_option_arc,
                        );
                    }
                    _ => {
                        continue;
                    }
                }
            }
            None
        }
        _ => None,
    }
}
