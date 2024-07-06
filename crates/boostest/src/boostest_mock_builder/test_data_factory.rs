use std::cell::Cell;

use oxc::{
    allocator,
    ast::{
        ast::{
            Argument, ArrayExpression, ArrowFunctionExpression, BigIntLiteral, BooleanLiteral,
            CallExpression, Expression, FormalParameterKind, FormalParameters, FunctionBody,
            IdentifierReference, NullLiteral, NumericLiteral, ObjectExpression, ObjectPropertyKind,
            PropertyKind, StringLiteral, TSLiteral, TSSignature, TSType,
        },
        AstBuilder,
    },
    span::{Atom, Span},
    syntax::number::{BigintBase, NumberBase},
};

use crate::boostest_utils;

const SPAN: Span = Span::new(0, 0);

// TSType::TSStringKeyword
fn string_literal<'a>(
    ast_builder: &AstBuilder<'a>,
    default_str: Option<&str>,
) -> StringLiteral<'a> {
    let val = default_str.unwrap_or("test string data");
    ast_builder.string_literal(SPAN, val)
}
pub fn string_expr<'a>(ast_builder: &AstBuilder<'a>, default_str: Option<&str>) -> Expression<'a> {
    ast_builder.literal_string_expression(string_literal(ast_builder, default_str))
}
pub fn string_arg<'a>(ast_builder: &AstBuilder<'a>, default_str: Option<&str>) -> Argument<'a> {
    let r = ast_builder.alloc(string_literal(ast_builder, default_str));
    Argument::StringLiteral(r)
}

// TSType::TSNumberKeyword
fn number_literal<'a>(
    ast_builder: &AstBuilder<'a>,
    value: Option<f64>,
    raw: Option<&'a str>,
    base: Option<NumberBase>,
) -> NumericLiteral<'a> {
    let v = value.unwrap_or(10.0);
    let r = raw.unwrap_or("10");
    let b = base.unwrap_or(NumberBase::Decimal);

    ast_builder.number_literal(SPAN, v, r, b)
}
pub fn number_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    value: Option<f64>,
    raw: Option<&'a str>,
    base: Option<NumberBase>,
) -> Expression<'a> {
    ast_builder.literal_number_expression(number_literal(ast_builder, value, raw, base))
}
pub fn number_arg<'a>(
    ast_builder: &AstBuilder<'a>,
    value: Option<f64>,
    raw: Option<&'a str>,
    base: Option<NumberBase>,
) -> Argument<'a> {
    let r = ast_builder.alloc(number_literal(ast_builder, value, raw, base));
    Argument::NumericLiteral(r)
}

// TSType::TSBigIntKeyword
fn bigint_literal<'a>(
    ast_builder: &AstBuilder<'a>,
    raw: Option<&Atom<'a>>,
    base: Option<BigintBase>,
) -> BigIntLiteral<'a> {
    let fallback_atom = ast_builder.new_atom("9007199254740991");
    let r = raw.unwrap_or(&fallback_atom);
    let b = base.unwrap_or(BigintBase::Decimal);
    ast_builder.bigint_literal(SPAN, ast_builder.new_atom(r), b)
}
pub fn bigint_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    raw: Option<&Atom<'a>>,
    base: Option<BigintBase>,
) -> Expression<'a> {
    ast_builder.literal_bigint_expression(bigint_literal(ast_builder, raw, base))
}
pub fn bigint_arg<'a>(
    ast_builder: &AstBuilder<'a>,
    raw: Option<&Atom<'a>>,
    base: Option<BigintBase>,
) -> Argument<'a> {
    let r = ast_builder.alloc(bigint_literal(ast_builder, raw, base));
    Argument::BigintLiteral(r)
}

// TSType::TSBooleanKeyword
fn boolean_literal<'a>(ast_builder: &AstBuilder<'a>, default_val: Option<bool>) -> BooleanLiteral {
    let v = default_val.unwrap_or(true);
    ast_builder.boolean_literal(SPAN, v)
}
pub fn boolean_expr<'a>(ast_builder: &AstBuilder<'a>, default_val: Option<bool>) -> Expression<'a> {
    ast_builder.literal_boolean_expression(boolean_literal(ast_builder, default_val))
}
pub fn boolean_arg<'a>(ast_builder: &AstBuilder<'a>, default_val: Option<bool>) -> Argument<'a> {
    let r = ast_builder.alloc(boolean_literal(ast_builder, default_val));
    Argument::BooleanLiteral(r)
}

// TSType::TSNullKeyword
fn null_literal() -> NullLiteral {
    NullLiteral::new(SPAN)
}
pub fn null_expr<'a>(ast_builder: &AstBuilder<'a>) -> Expression<'a> {
    ast_builder.literal_null_expression(null_literal())
}
pub fn null_arg<'a>(ast_builder: &AstBuilder<'a>) -> Argument<'a> {
    let r = ast_builder.alloc(null_literal());
    Argument::NullLiteral(r)
}

// TSType::TSUndefinedKeyword
fn undefined_id<'a>(ast_builder: &AstBuilder<'a>) -> IdentifierReference<'a> {
    ast_builder.identifier_reference(SPAN, "undefined")
}
pub fn undefined_expr<'a>(ast_builder: &AstBuilder<'a>) -> Expression<'a> {
    ast_builder.identifier_reference_expression(undefined_id(ast_builder))
}
pub fn undefined_arg<'a>(ast_builder: &AstBuilder<'a>) -> Argument<'a> {
    let r = ast_builder.alloc(undefined_id(ast_builder));
    Argument::Identifier(r)
}

// TSType::TSAnyKeyword
fn any_literal<'a>(ast_builder: &AstBuilder<'a>) -> StringLiteral<'a> {
    ast_builder.string_literal(SPAN, "any")
}
pub fn any_expr<'a>(ast_builder: &AstBuilder<'a>) -> Expression<'a> {
    ast_builder.literal_string_expression(any_literal(ast_builder))
}
pub fn any_arg<'a>(ast_builder: &AstBuilder<'a>) -> Argument<'a> {
    let r = ast_builder.alloc(any_literal(ast_builder));
    Argument::StringLiteral(r)
}

// TSType::TSObjectKeyword
pub fn object_expr<'a>(ast_builder: &AstBuilder<'a>) -> Expression<'a> {
    ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
}
pub fn object_arg<'a>(ast_builder: &AstBuilder<'a>) -> Argument<'a> {
    let object_expr = ObjectExpression {
        span: SPAN,
        properties: ast_builder.new_vec(),
        trailing_comma: None,
    };
    let argument_item = ast_builder.alloc(object_expr);
    Argument::ObjectExpression(argument_item)
}

// TSType::TSFunctionType
fn function_parts<'a>(
    ast_builder: &AstBuilder<'a>,
) -> (
    allocator::Box<'a, FormalParameters<'a>>,
    allocator::Box<'a, FunctionBody<'a>>,
) {
    let params = ast_builder.formal_parameters(
        SPAN,
        FormalParameterKind::ArrowFormalParameters,
        ast_builder.new_vec(),
        None,
    );
    let body = ast_builder.function_body(SPAN, ast_builder.new_vec(), ast_builder.new_vec());

    (params, body)
}
pub fn function_expr<'a>(ast_builder: &AstBuilder<'a>) -> Expression<'a> {
    let (params, body) = function_parts(ast_builder);
    ast_builder.arrow_function_expression(SPAN, false, false, params, body, None, None)
}
pub fn function_arg<'a>(ast_builder: &AstBuilder<'a>) -> Argument<'a> {
    let (params, body) = function_parts(ast_builder);

    let arrow_func_expr = ArrowFunctionExpression {
        span: SPAN,
        expression: false,
        r#async: false,
        params,
        body,
        type_parameters: None,
        return_type: None,
        scope_id: Cell::default(),
    };
    let r = ast_builder.alloc(arrow_func_expr);
    Argument::ArrowFunctionExpression(r)
}

// TSType::TSArrayType
pub fn array_expr<'a>(ast_builder: &AstBuilder<'a>) -> Expression<'a> {
    ast_builder.array_expression(SPAN, ast_builder.new_vec(), None)
}
pub fn array_arg<'a>(ast_builder: &AstBuilder<'a>) -> Argument<'a> {
    let array_expr = ArrayExpression {
        span: SPAN,
        elements: ast_builder.new_vec(),
        trailing_comma: None,
    };
    let r = ast_builder.alloc(array_expr);
    Argument::ArrayExpression(r)
}

/****** reference ******/
pub fn ref_parts<'a>(
    ast_builder: &AstBuilder<'a>,
    key_name: &str,
    mock_func_name: &str,
) -> (Expression<'a>, allocator::Vec<'a, Argument<'a>>) {
    // 'key_name':[key_name]_boostestHoge(),
    let new_name = format!("{}_{}", key_name, mock_func_name);
    let new_id = ast_builder.identifier_reference(SPAN, &new_name);
    let new_callee = ast_builder.identifier_reference_expression(new_id);
    let arg = ast_builder.new_vec();

    (new_callee, arg)
}
pub fn ref_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    key_name: &str,
    mock_func_name: &str,
) -> Expression<'a> {
    let (new_callee, arg) = ref_parts(ast_builder, key_name, mock_func_name);
    ast_builder.call_expression(SPAN, new_callee, arg, false, None)
}
pub fn ref_arg<'a>(
    ast_builder: &AstBuilder<'a>,
    key_name: &str,
    mock_func_name: &str,
) -> Argument<'a> {
    let (new_callee, arg) = ref_parts(ast_builder, key_name, mock_func_name);
    Argument::CallExpression(ast_builder.alloc(CallExpression {
        span: SPAN,
        callee: new_callee,
        arguments: arg,
        optional: false,
        type_parameters: None,
    }))
}

/**
 *
 *
 * expr with ts_literal_type
 *
 *
 */
pub fn get_expr_with_ts_literal_type<'a>(
    ast_builder: &AstBuilder<'a>,
    ts_literal: &TSLiteral<'a>,
) -> Expression<'a> {
    match ts_literal {
        TSLiteral::StringLiteral(string_literal) => {
            string_expr(ast_builder, Some(string_literal.value.as_str()))
        }
        TSLiteral::NumericLiteral(numeric_literal) => number_expr(
            ast_builder,
            Some(numeric_literal.value),
            Some(numeric_literal.raw),
            Some(numeric_literal.base),
        ),
        TSLiteral::BooleanLiteral(boolean_literal) => {
            boolean_expr(ast_builder, Some(boolean_literal.value))
        }
        TSLiteral::NullLiteral(_) => null_expr(ast_builder),
        TSLiteral::BigintLiteral(bigint_literal) => bigint_expr(
            ast_builder,
            Some(&bigint_literal.raw),
            Some(bigint_literal.base),
        ),
        _ => object_expr(ast_builder),
    }
}

/**
 *
 *
 * arg with ts_literal_type
 *
 *
 */
pub fn get_arg_with_ts_literal_type<'a>(
    ast_builder: &AstBuilder<'a>,
    ts_literal: &TSLiteral<'a>,
) -> Argument<'a> {
    match ts_literal {
        TSLiteral::StringLiteral(string_literal) => {
            string_arg(ast_builder, Some(string_literal.value.as_str()))
        }
        TSLiteral::NumericLiteral(numeric_literal) => number_arg(
            ast_builder,
            Some(numeric_literal.value),
            Some(numeric_literal.raw),
            Some(numeric_literal.base),
        ),
        TSLiteral::BooleanLiteral(boolean_literal) => {
            boolean_arg(ast_builder, Some(boolean_literal.value))
        }
        TSLiteral::NullLiteral(_) => null_arg(ast_builder),
        TSLiteral::BigintLiteral(bigint_literal) => bigint_arg(
            ast_builder,
            Some(&bigint_literal.raw),
            Some(bigint_literal.base),
        ),
        _ => object_arg(ast_builder),
    }
}

pub fn get_obj_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    expressions: Vec<(String, Expression<'a>)>,
    last: Option<ObjectPropertyKind<'a>>,
) -> Expression<'a> {
    let mut new_props = ast_builder.new_vec();

    for (key, expression) in expressions {
        let new_key = ast_builder.string_literal(SPAN, key.as_str());
        let new_key_expr = ast_builder.literal_string_expression(new_key);
        let new_prop_key = ast_builder.property_key_expression(new_key_expr);

        let object_expr = ast_builder.object_property(
            SPAN,
            PropertyKind::Init,
            new_prop_key,
            expression,
            None,
            false,
            false,
            false,
        );
        new_props.push(ObjectPropertyKind::ObjectProperty(object_expr));
    }

    if let Some(last_prop) = last {
        new_props.push(last_prop);
    }

    ast_builder.object_expression(SPAN, new_props, None)
}

pub fn handle_ts_signature<'a>(
    ast_builder: &AstBuilder<'a>,
    ts_signature: &TSSignature<'a>,
    mock_func_name: &str,
    parent_key_name: Option<String>,
) -> Option<(String, Expression<'a>)> {
    match ts_signature {
        TSSignature::TSPropertySignature(ts_prop_signature) => {
            if let Some(ts_type_annotation) = &ts_prop_signature.type_annotation {
                if let Some(prop_key) = ts_prop_signature.key.name() {
                    let new_parent_key: String;

                    if let Some(p_key) = parent_key_name {
                        new_parent_key = format!("{}_{}", p_key, prop_key);
                    } else {
                        new_parent_key = prop_key.to_string();
                    }

                    match &ts_type_annotation.type_annotation {
                        TSType::TSTypeLiteral(ts_type_literal) => {
                            return Some((
                                prop_key.to_string(),
                                handle_ts_signatures(
                                    ast_builder,
                                    &ts_type_literal.members,
                                    None,
                                    mock_func_name,
                                    Some(new_parent_key.clone()),
                                ),
                            ));
                        }
                        other => {
                            let ts_type = ast_builder.copy(other);

                            Some((
                                prop_key.to_string(),
                                get_expression(
                                    ast_builder,
                                    ts_type,
                                    &new_parent_key,
                                    mock_func_name,
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
        TSSignature::TSIndexSignature(_) => None,
        _ => None,
    }
}

pub fn handle_ts_signatures<'a>(
    ast_builder: &AstBuilder<'a>,
    ts_signatures: &allocator::Vec<'a, TSSignature<'a>>,
    last: Option<ObjectPropertyKind<'a>>,
    mock_func_name: &str,
    parent_key_name: Option<String>,
) -> Expression<'a> {
    let mut props_expr: Vec<(String, Expression)> = Vec::new();

    for member in ts_signatures {
        if let Some((key, expr)) = handle_ts_signature(
            ast_builder,
            &member,
            mock_func_name,
            parent_key_name.clone(),
        ) {
            props_expr.push((key, expr));
        }
    }

    get_obj_expr(ast_builder, props_expr, last)
}

/**
 *
 *
 * get_expression
 *
 *
 */
pub fn get_expression<'a>(
    ast_builder: &AstBuilder<'a>,
    type_annotation: TSType<'a>,
    key_name: &str,
    mock_func_name: &str,
) -> Expression<'a> {
    let val = match type_annotation {
        TSType::TSTypeReference(ts_type_ref)
            if boostest_utils::ast_utils::is_defined_type(&ts_type_ref) =>
        {
            // TODO: Defined type
            object_expr(ast_builder)
        }
        TSType::TSTypeReference(ts_type_ref)
            if boostest_utils::ast_utils::is_function_type(&ts_type_ref) =>
        {
            // TODO: Array
            function_expr(ast_builder)
        }
        TSType::TSTypeReference(ts_type_ref)
            if boostest_utils::ast_utils::is_array_type(&ts_type_ref) =>
        {
            // TODO: Array
            array_expr(ast_builder)
        }
        TSType::TSTypeReference(_) => ref_expr(ast_builder, key_name, mock_func_name),
        TSType::TSStringKeyword(_) => string_expr(ast_builder, None),
        TSType::TSAnyKeyword(_) => any_expr(ast_builder),
        TSType::TSBooleanKeyword(_) => boolean_expr(ast_builder, None),
        TSType::TSNullKeyword(_) => null_expr(ast_builder),
        TSType::TSNumberKeyword(_) => number_expr(ast_builder, None, None, None),
        TSType::TSBigIntKeyword(_) => bigint_expr(ast_builder, None, None),
        TSType::TSObjectKeyword(_) => object_expr(ast_builder),
        TSType::TSVoidKeyword(_) => null_expr(ast_builder),
        TSType::TSFunctionType(_) => function_expr(ast_builder),
        TSType::TSUndefinedKeyword(_) => undefined_expr(ast_builder),
        TSType::TSUnknownKeyword(_) => undefined_expr(ast_builder),
        TSType::TSConditionalType(ts_conditional_type) => {
            let ts_type = ast_builder.copy(&ts_conditional_type.true_type);
            let new = get_expression(ast_builder, ts_type, key_name, mock_func_name);
            return new;
        }
        TSType::TSUnionType(box_ts_union_type) => {
            let ts_union_type = &mut box_ts_union_type.unbox();
            let first_union_type = ts_union_type.types.first_mut();

            if let Some(first_type) = first_union_type {
                let ts_type = ast_builder.copy(first_type);
                let new = get_expression(ast_builder, ts_type, key_name, mock_func_name);
                return new;
            }

            // fallback
            null_expr(ast_builder)
        }
        TSType::TSNeverKeyword(_) => null_expr(ast_builder),
        TSType::TSArrayType(_) => array_expr(ast_builder),
        TSType::TSThisType(_) => {
            // TODO
            // error
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::TSMappedType(_) => {
            // {[K in keyof T]: T[K]}
            // TODO
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::TSTupleType(_) => {
            // [string, number]
            // TODO

            ast_builder.array_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::TSNamedTupleMember(_) => {
            // [name: string, age: number]
            // TODO
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::TSQualifiedName(_) => {
            // TODO
            // Namespace.MyType
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::TSTypeLiteral(ts_type_literal) => {
            // {name: string, age: number}
            // { x: number; y: number; }`
            handle_ts_signatures(
                ast_builder,
                &ts_type_literal.members,
                None,
                mock_func_name,
                Some(key_name.to_string()),
            )
        }
        TSType::TSTypeOperatorType(_) => {
            // keyof T
            // TODO
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::TSTypePredicate(_) => {
            // x is string
            // TODO
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::TSTypeQuery(_) => {
            // typeof x
            // TODO
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::TSTemplateLiteralType(_) => {
            // `${string}`, \`hello ${string}\`
            // TODO
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::TSConstructorType(_) => {
            // TODO
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::TSIndexedAccessType(_) => {
            // person["name"]
            // TODO
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::TSInferType(_) => {
            // infer R ? R : never
            // TODO
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::TSIntersectionType(_ts_intersection_type) => {
            // TODO
            // for ts_type in ts_intersection_type.types.iter() {
            //     let new_ts_type = ast_builder.copy(ts_type);
            //     println!("TSIntersectionType {:?}", new_ts_type);
            //     let expr = get_expression(new_ts_type, key_name);
            //     println!("TSIntersectionType {:?}", expr);
            // }

            // println!("TSIntrsectionType {:?}", ts_intersection);
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::TSLiteralType(literal_type) => {
            get_expr_with_ts_literal_type(ast_builder, &literal_type.literal)
        }
        TSType::JSDocNullableType(_) => {
            // TODO
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::JSDocUnknownType(_) => {
            // TODO
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::TSSymbolKeyword(_) => {
            // TODO
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
        TSType::TSImportType(_) => {
            // TODO
            ast_builder.object_expression(SPAN, ast_builder.new_vec(), None)
        }
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
    expressions: Vec<(String, Expression<'a>)>,
    last: Option<ObjectPropertyKind<'a>>,
) -> ObjectExpression<'a> {
    let mut new_props = ast_builder.new_vec();

    for (key, expression) in expressions {
        let new_key = ast_builder.string_literal(SPAN, key.as_str());
        let new_key_expr = ast_builder.literal_string_expression(new_key);
        let new_prop_key = ast_builder.property_key_expression(new_key_expr);

        let object_expr = ast_builder.object_property(
            SPAN,
            PropertyKind::Init,
            new_prop_key,
            expression,
            None,
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
    ts_signatures: &allocator::Vec<'a, TSSignature<'a>>,
    last: Option<ObjectPropertyKind<'a>>,
    mock_func_name: &str,
    parent_key: Option<String>,
) -> Argument<'a> {
    let mut props_expr: Vec<(String, Expression)> = Vec::new();

    for member in ts_signatures {
        if let Some((key, expr)) =
            handle_ts_signature(ast_builder, &member, mock_func_name, parent_key.clone())
        {
            props_expr.push((key, expr));
        }
    }

    let obj_expr = get_obj_arg(ast_builder, props_expr, last);
    let argument_item = ast_builder.alloc(obj_expr);
    Argument::ObjectExpression(argument_item)
}

pub fn get_arg<'a>(
    ast_builder: &AstBuilder<'a>,
    ts_type: TSType<'a>,
    key_name: &str,
    mock_func_name: &str,
) -> Argument<'a> {
    match ts_type {
        TSType::TSAnyKeyword(_) => any_arg(ast_builder),
        TSType::TSBigIntKeyword(_) => bigint_arg(ast_builder, None, None),
        TSType::TSBooleanKeyword(_) => boolean_arg(ast_builder, None),
        TSType::TSNullKeyword(_) => null_arg(ast_builder),
        TSType::TSNumberKeyword(_) => number_arg(ast_builder, None, None, None),
        TSType::TSStringKeyword(_) => string_arg(ast_builder, None),
        TSType::TSTypeReference(ts_type_ref)
            if boostest_utils::ast_utils::is_defined_type(&ts_type_ref) =>
        {
            // TODO
            object_arg(ast_builder)
        }
        TSType::TSTypeReference(ts_type_ref)
            if boostest_utils::ast_utils::is_function_type(&ts_type_ref) =>
        {
            // TODO: Array
            function_arg(ast_builder)
        }
        TSType::TSTypeReference(ts_type_ref)
            if boostest_utils::ast_utils::is_array_type(&ts_type_ref) =>
        {
            // TODO: Array
            array_arg(ast_builder)
        }
        TSType::TSTypeReference(_) => ref_arg(ast_builder, key_name, mock_func_name),
        TSType::TSObjectKeyword(_) => object_arg(ast_builder),
        TSType::TSVoidKeyword(_) => null_arg(ast_builder),
        TSType::TSFunctionType(_) => function_arg(ast_builder),
        TSType::TSUndefinedKeyword(_) => undefined_arg(ast_builder),
        TSType::TSUnknownKeyword(_) => undefined_arg(ast_builder),
        TSType::TSConditionalType(_ts_conditional_type) => {
            // TODO
            let object_expr = ObjectExpression {
                span: SPAN,
                properties: ast_builder.new_vec(),
                trailing_comma: None,
            };
            let argument_item = ast_builder.alloc(object_expr);
            Argument::ObjectExpression(argument_item)

            // let ts_type = ast_builder.copy(&ts_conditional_type.true_type);
            // let new = get_expression(ts_type, key_name);
            // return new;
        }
        TSType::TSUnionType(_box_ts_union_type) => {
            // TODO
            let object_expr = ObjectExpression {
                span: SPAN,
                properties: ast_builder.new_vec(),
                trailing_comma: None,
            };
            let argument_item = ast_builder.alloc(object_expr);
            Argument::ObjectExpression(argument_item)

            // let ts_union_type = &mut box_ts_union_type.unbox();
            // let first_union_type = ts_union_type.types.first_mut();

            // if let Some(first_type) = first_union_type {
            //     let ts_type = ast_builder.copy(first_type);
            //     let new = get_expression(ts_type, key_name);
            //     return new;
            // }

            // let new_val = self
            //     .ast_builder
            //     .string_literal(SPAN, "default_val(unimplemented)");
            // ast_builder.literal_string_expression(new_val)
        }
        TSType::TSNeverKeyword(_) => null_arg(ast_builder),
        TSType::TSArrayType(_) => array_arg(ast_builder),
        TSType::TSThisType(_) => {
            // TODO
            // error
            object_arg(ast_builder)
        }
        TSType::TSMappedType(_) => {
            // {[K in keyof T]: T[K]}
            // TODO
            object_arg(ast_builder)
        }
        TSType::TSTupleType(_) => {
            // [string, number]
            // TODO
            array_arg(ast_builder)
        }
        TSType::TSNamedTupleMember(_) => {
            // [name: string, age: number]
            // TODO
            object_arg(ast_builder)
        }
        TSType::TSQualifiedName(_) => {
            // TODO
            // Namespace.MyType
            object_arg(ast_builder)
        }
        TSType::TSTypeLiteral(ts_type_literal) => {
            // {name: string, age: number}
            // { x: number; y: number; }`
            // TODO
            // object_arg(ast_builder)
            handle_ts_signatures_with_args(
                ast_builder,
                &ts_type_literal.members,
                None,
                mock_func_name,
                Some(key_name.to_string()),
            )
        }
        TSType::TSTypeOperatorType(_) => {
            // keyof T
            // TODO
            object_arg(ast_builder)
        }
        TSType::TSTypePredicate(_) => {
            // x is string
            // TODO
            object_arg(ast_builder)
        }
        TSType::TSTypeQuery(_) => {
            // typeof x
            // TODO
            object_arg(ast_builder)
        }
        TSType::TSTemplateLiteralType(_) => {
            // `${string}`, \`hello ${string}\`
            // TODO
            object_arg(ast_builder)
        }
        TSType::TSConstructorType(_) => {
            // TODO
            object_arg(ast_builder)
        }
        TSType::TSIndexedAccessType(_) => {
            // person["name"]
            // TODO
            object_arg(ast_builder)
        }
        TSType::TSInferType(_) => {
            // infer R ? R : never
            // TODO
            object_arg(ast_builder)
        }
        TSType::TSIntersectionType(_ts_intersection_type) => {
            // TODO
            // for ts_type in ts_intersection_type.types.iter() {
            //     let new_ts_type = ast_builder.copy(ts_type);
            //     println!("TSIntersectionType {:?}", new_ts_type);
            //     let expr = get_expression(new_ts_type, key_name);
            //     println!("TSIntersectionType {:?}", expr);
            // }

            // println!("TSIntrsectionType {:?}", ts_intersection);
            object_arg(ast_builder)
        }
        TSType::TSLiteralType(literal_type) => {
            get_arg_with_ts_literal_type(ast_builder, &literal_type.literal)
        }

        TSType::JSDocNullableType(_) => {
            // TODO
            object_arg(ast_builder)
        }
        TSType::JSDocUnknownType(_) => {
            // TODO
            object_arg(ast_builder)
        }
        TSType::TSSymbolKeyword(_) => {
            // TODO
            object_arg(ast_builder)
        }
        TSType::TSImportType(_) => {
            // TODO
            object_arg(ast_builder)
        }
    }
}
