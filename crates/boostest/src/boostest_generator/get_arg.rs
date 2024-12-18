use std::sync::Arc;

use oxc::{
    allocator,
    ast::{
        ast::{
            Argument, ArrayExpressionElement, BindingRestElement, FormalParameterKind,
            ObjectPropertyKind, TSLiteral, TSTupleElement, TSType, TSTypeAnnotation, TSTypeName,
            TSTypeParameterInstantiation,
        },
        AstBuilder,
    },
    span::SPAN,
};

use crate::OutputOption;

use super::{
    super::boostest_utils::ast_utils,
    get_expression::{
        get_first_call_signature, get_first_call_signature_from_call_sig,
        handle_ts_signatures_with_args,
    },
    test_data_factory::{
        self, any_arg, bigint_arg, boolean_arg, null_arg, number_arg, string_arg, symbol_arg,
        undefined_arg,
    },
};
use super::{
    extends_ast_builder::AstBuilderExt,
    get_expression::get_expression,
    test_data_factory::{
        array_arg, function_arg, function_expr, get_arg_with_ts_literal_type, object_arg,
    },
};

pub fn get_arg<'a>(
    ast_builder: &AstBuilder<'a>,
    mut ts_type: TSType<'a>,
    mock_func_name: &str,
    generic: Vec<String>,
    output_option_arc: Arc<OutputOption>,
) -> Argument<'a> {
    match ts_type {
        TSType::TSAnyKeyword(_) => any_arg(
            ast_builder,
            Some(&output_option_arc.default_value_option.any),
        ),
        TSType::TSBigIntKeyword(_) => {
            let bigint_atom = ast_builder.atom(&output_option_arc.default_value_option.bigint);
            bigint_arg(ast_builder, Some(&bigint_atom), None)
        }
        TSType::TSBooleanKeyword(_) => boolean_arg(
            ast_builder,
            Some(output_option_arc.default_value_option.boolean),
        ),
        TSType::TSNullKeyword(_) => null_arg(ast_builder),
        TSType::TSNumberKeyword(_) => number_arg(
            ast_builder,
            Some(output_option_arc.default_value_option.number),
            None,
        ),
        TSType::TSStringKeyword(_) => string_arg(
            ast_builder,
            Some(&output_option_arc.default_value_option.string),
        ),

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
            let expr = ast_builder.expression_new(SPAN, new_callee, arguments, type_parameters);
            Argument::from(expr)
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_function_type(&ts_type_ref) => {
            function_arg(ast_builder, None, None)
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_array_type(&ts_type_ref) => {
            // TODO: Array
            array_arg(ast_builder, None)
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_true_type(&ts_type_ref) => {
            boolean_arg(ast_builder, Some(true))
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_false_type(&ts_type_ref) => {
            boolean_arg(ast_builder, Some(false))
        }
        TSType::TSTypeReference(_) => {
            // Unused
            object_arg(ast_builder, None)
        }
        TSType::TSLiteralType(literal_type) => {
            // string, number, boolean, null...
            get_arg_with_ts_literal_type(ast_builder, &literal_type.literal)
        }

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

            function_arg(
                ast_builder,
                Some(alloced_formal_parameters),
                return_expression,
            )
        }
        TSType::TSUnionType(box_ts_union_type) => {
            let ts_union_type = &mut box_ts_union_type.unbox();

            let non_null_types = ts_union_type.types.iter_mut().find(|x| {
                if let TSType::TSNullKeyword(_) = x {
                    return false;
                }
                if let TSType::TSUndefinedKeyword(_) = x {
                    return false;
                }
                true
            });

            if let Some(target_ts_type) = non_null_types {
                let ts_type = ast_builder.move_ts_type(target_ts_type);
                return get_arg(
                    ast_builder,
                    ts_type,
                    mock_func_name,
                    generic,
                    output_option_arc,
                );
            }
            // fallback
            null_arg(ast_builder)
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

                                            let new = get_arg(
                                                ast_builder,
                                                ts_type,
                                                mock_func_name,
                                                vec![],
                                                output_option_arc.clone(),
                                            );
                                            arguments.push(new);
                                        }
                                    }

                                    let new_name = ast_builder.atom(&second_id.name);
                                    let new_callee =
                                        ast_builder.expression_identifier_reference(SPAN, new_name);

                                    let type_parameters: Option<
                                        allocator::Box<TSTypeParameterInstantiation<'a>>,
                                    > = None;

                                    let expr = ast_builder.expression_new(
                                        SPAN,
                                        new_callee,
                                        arguments,
                                        type_parameters,
                                    );
                                    return Argument::from(expr);
                                }
                            }
                            // type main = ["classTypeofReference", ClassName]
                            // return) ClassName
                            if first_literal.value == "classTypeofReference" {
                                let new_name = ast_builder.atom(&second_id.name);
                                let expr =
                                    ast_builder.expression_identifier_reference(SPAN, new_name);
                                return Argument::from(expr);
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
                let array_expr = ArrayExpressionElement::from(new);
                new_elements.push(array_expr);
            }
            array_arg(ast_builder, Some(new_elements))
        }
        TSType::TSNamedTupleMember(ref mut ts_named_tuple_member) => {
            // type Point = [x: number, y: number];
            let ts_type =
                ast_builder.move_ts_type(ts_named_tuple_member.element_type.to_ts_type_mut());
            get_arg(
                ast_builder,
                ts_type,
                mock_func_name,
                generic,
                output_option_arc,
            )
        }
        TSType::TSTypeLiteral(ref mut ts_type_literal) => {
            // {name: string, age: number}
            // { x: number; y: number; }`

            if test_data_factory::has_call_signature(&ts_type_literal) {
                let first_call_expr = get_first_call_signature_from_call_sig(
                    ast_builder,
                    ts_type_literal,
                    mock_func_name,
                    output_option_arc.clone(),
                );

                if let Some(first_call_expr) = first_call_expr {
                    return Argument::from(first_call_expr);
                }
            }

            handle_ts_signatures_with_args(
                ast_builder,
                &mut ts_type_literal.members,
                None,
                mock_func_name,
                Some("test".to_string()),
                generic,
                output_option_arc.clone(),
            )
        }
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

            object_arg(ast_builder, Some(temp_expr))
        }

        TSType::TSParenthesizedType(ref mut ts_parenthesized_type) => {
            let ts_type = ast_builder.move_ts_type(&mut ts_parenthesized_type.type_annotation);
            get_arg(
                ast_builder,
                ts_type,
                mock_func_name,
                vec![],
                output_option_arc,
            )

            // ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSVoidKeyword(_) => null_arg(ast_builder),
        TSType::TSSymbolKeyword(_) => symbol_arg(ast_builder),
        TSType::TSNeverKeyword(_) => null_arg(ast_builder),
        TSType::TSArrayType(_) => array_arg(ast_builder, None),
        TSType::TSUndefinedKeyword(_) => undefined_arg(
            ast_builder,
            Some(&output_option_arc.default_value_option.undefined),
        ),
        TSType::TSUnknownKeyword(_) => undefined_arg(ast_builder, None),

        /***********************************************************/
        /***********************************************************/
        /******************** Unused Types *************************/
        /***********************************************************/
        /***********************************************************/
        TSType::TSConditionalType(ref mut ts_conditional_type) => object_arg(ast_builder, None),
        TSType::TSObjectKeyword(_) => object_arg(ast_builder, None),
        TSType::TSTypeOperatorType(_) => object_arg(ast_builder, None),
        TSType::TSThisType(_) => object_arg(ast_builder, None),
        TSType::TSMappedType(_) => {
            // {[K in keyof T]: T[K]}
            object_arg(ast_builder, None)
        }
        TSType::TSQualifiedName(_) => {
            // Namespace.MyType
            object_arg(ast_builder, None)
        }
        TSType::TSTypePredicate(_) => {
            // x is string
            object_arg(ast_builder, None)
        }
        TSType::TSTypeQuery(ts_type_query) => object_arg(ast_builder, None),
        TSType::TSTemplateLiteralType(_) => {
            // `${string}`, \`hello ${string}\`
            object_arg(ast_builder, None)
        }
        TSType::TSConstructorType(_) => object_arg(ast_builder, None),
        TSType::TSIndexedAccessType(ts_indexed_access_type) => object_arg(ast_builder, None),
        TSType::TSInferType(_) => {
            // infer R ? R : never
            object_arg(ast_builder, None)
        }
        TSType::JSDocNullableType(_) => object_arg(ast_builder, None),
        TSType::JSDocUnknownType(_) => object_arg(ast_builder, None),
        TSType::TSImportType(_) => object_arg(ast_builder, None),
        TSType::JSDocNonNullableType(_) => object_arg(ast_builder, None),
        TSType::TSIntrinsicKeyword(_) => object_arg(ast_builder, None),
    }
}
