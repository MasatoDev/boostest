use std::cell::Cell;

use oxc::{
    allocator,
    ast::{
        ast::{
            Argument, ArrayExpression, ArrowFunctionExpression, BigIntLiteral, BooleanLiteral,
            CallExpression, Expression, FormalParameterKind, FormalParameters, FunctionBody,
            IdentifierReference, NullLiteral, NumericLiteral, ObjectExpression, StringLiteral,
            TSLiteral,
        },
        AstBuilder,
    },
    span::Span,
    syntax::number::{BigintBase, NumberBase},
};

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
pub fn string_arg<'a>(ast_builder: &AstBuilder<'a>) -> Argument<'a> {
    let r = ast_builder.alloc(string_literal(ast_builder, None));
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
pub fn number_arg<'a>(ast_builder: &AstBuilder<'a>) -> Argument<'a> {
    let r = ast_builder.alloc(number_literal(ast_builder, None, None, None));
    Argument::NumericLiteral(r)
}

// TSType::TSBigIntKeyword
fn bigint_literal<'a>(ast_builder: &AstBuilder<'a>) -> BigIntLiteral<'a> {
    ast_builder.bigint_literal(
        SPAN,
        ast_builder.new_atom("9007199254740991"),
        BigintBase::Decimal,
    )
}
pub fn bigint_expr<'a>(ast_builder: &AstBuilder<'a>) -> Expression<'a> {
    ast_builder.literal_bigint_expression(bigint_literal(ast_builder))
}
pub fn bigint_arg<'a>(ast_builder: &AstBuilder<'a>) -> Argument<'a> {
    let r = ast_builder.alloc(bigint_literal(ast_builder));
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
pub fn boolean_arg<'a>(ast_builder: &AstBuilder<'a>) -> Argument<'a> {
    let r = ast_builder.alloc(boolean_literal(ast_builder, None));
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
        _ => object_expr(ast_builder),
    }
}
