use std::cell::Cell;

use oxc::{
    allocator,
    ast::{
        ast::{
            Argument, ArrayExpression, ArrayExpressionElement, ArrowFunctionExpression,
            BigIntLiteral, BindingRestElement, BooleanLiteral, CallExpression, Expression,
            FormalParameterKind, FormalParameters, FunctionBody, IdentifierReference, NullLiteral,
            NumericLiteral, ObjectExpression, ObjectPropertyKind, PropertyKey, PropertyKind,
            StringLiteral, TSCallSignatureDeclaration, TSLiteral, TSSignature, TSType,
            TSTypeAnnotation, TSTypeName, TSTypeParameterDeclaration, TSTypeParameterInstantiation,
        },
        AstBuilder,
    },
    span::{Atom, Span},
    syntax::number::{BigintBase, NumberBase},
};

use super::super::boostest_utils::ast_utils;
use super::extends_ast_builder::AstBuilderExt;

pub fn is_ts_type_literal(ts_type: &TSType) -> bool {
    match ts_type {
        TSType::TSTypeLiteral(_) => true,
        _ => false,
    }
}

pub fn is_call_signature(ts_type: &TSType) -> bool {
    match ts_type {
        TSType::TSTypeLiteral(ts_type_literal) => {
            ts_type_literal
                .members
                .iter()
                .any(|ts_signature| match ts_signature {
                    TSSignature::TSCallSignatureDeclaration(_) => true,
                    _ => false,
                })
        }
        _ => false,
    }
}

pub fn get_func_expr_from_call_signature_decl<'a>(
    ast_builder: &AstBuilder<'a>,
    ts_call_signature: &mut TSCallSignatureDeclaration<'a>,
    key_name: &str,
    mock_func_name: &str,
) -> Option<Expression<'a>> {
    let formal_parameters = ast_builder.move_formal_parameters(&mut ts_call_signature.params);
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
                key_name,
                mock_func_name,
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

pub fn get_first_call_signature<'a>(
    ast_builder: &AstBuilder<'a>,
    ts_type: TSType<'a>,
    key_name: &str,
    mock_func_name: &str,
) -> Option<Expression<'a>> {
    match ts_type {
        TSType::TSTypeLiteral(mut ts_type_literal) => {
            for ts_type_literal in ts_type_literal.members.iter_mut() {
                match ts_type_literal {
                    TSSignature::TSCallSignatureDeclaration(ts_call_signature) => {
                        return get_func_expr_from_call_signature_decl(
                            ast_builder,
                            ts_call_signature,
                            key_name,
                            mock_func_name,
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

const SPAN: Span = Span::new(0, 0);

fn symbol_expr<'a>(ast_builder: &AstBuilder<'a>) -> Expression<'a> {
    let new_callee = ast_builder.expression_identifier_reference(SPAN, "Symbol");
    let args = ast_builder.vec();
    let type_parameters: Option<allocator::Box<TSTypeParameterInstantiation<'a>>> = None;
    ast_builder.expression_call(SPAN, new_callee, type_parameters, args, false)
}

fn symbol_arg<'a>(ast_builder: &AstBuilder<'a>) -> Argument<'a> {
    let new_callee = ast_builder.expression_identifier_reference(SPAN, "Symbol");
    let args = ast_builder.vec();

    let callee_expr = CallExpression {
        span: SPAN,
        callee: new_callee,
        arguments: args,
        optional: false,
        type_parameters: None,
    };

    let allocated_callee_expr = ast_builder.alloc(callee_expr);
    Argument::CallExpression(allocated_callee_expr)
}

// TSType::TSStringKeyword
fn string_literal<'a>(
    ast_builder: &AstBuilder<'a>,
    default_str: Option<&str>,
) -> StringLiteral<'a> {
    let val = default_str.unwrap_or("test string data");
    ast_builder.string_literal(SPAN, val)
}
pub fn string_expr<'a>(ast_builder: &AstBuilder<'a>, default_str: Option<&str>) -> Expression<'a> {
    ast_builder.expression_string_literal(SPAN, default_str.unwrap_or("test string data"))
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

    ast_builder.numeric_literal(SPAN, v, r, b)
}
pub fn number_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    value: Option<f64>,
    raw: Option<&'a str>,
    base: Option<NumberBase>,
) -> Expression<'a> {
    let v = value.unwrap_or(10.0);
    let r = raw.unwrap_or("10");
    let b = base.unwrap_or(NumberBase::Decimal);

    ast_builder.expression_numeric_literal(SPAN, v, r, b)
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
    let fallback_atom = ast_builder.atom("9007199254740991");
    let r = raw.unwrap_or(&fallback_atom);
    let b = base.unwrap_or(BigintBase::Decimal);
    ast_builder.big_int_literal(SPAN, r, b)
}
pub fn bigint_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    raw: Option<&Atom<'a>>,
    base: Option<BigintBase>,
) -> Expression<'a> {
    let fallback_atom = ast_builder.atom("9007199254740991");
    let r = raw.unwrap_or(&fallback_atom);
    let b = base.unwrap_or(BigintBase::Decimal);
    ast_builder.expression_big_int_literal(SPAN, r, b)
}
pub fn bigint_arg<'a>(
    ast_builder: &AstBuilder<'a>,
    raw: Option<&Atom<'a>>,
    base: Option<BigintBase>,
) -> Argument<'a> {
    let r = ast_builder.alloc(bigint_literal(ast_builder, raw, base));
    Argument::BigIntLiteral(r)
}

// TSType::TSBooleanKeyword
fn boolean_literal<'a>(ast_builder: &AstBuilder<'a>, default_val: Option<bool>) -> BooleanLiteral {
    let v = default_val.unwrap_or(true);
    ast_builder.boolean_literal(SPAN, v)
}
pub fn boolean_expr<'a>(ast_builder: &AstBuilder<'a>, default_val: Option<bool>) -> Expression<'a> {
    ast_builder.expression_boolean_literal(SPAN, default_val.unwrap_or(true))
}
pub fn boolean_arg<'a>(ast_builder: &AstBuilder<'a>, default_val: Option<bool>) -> Argument<'a> {
    let r = ast_builder.alloc(boolean_literal(ast_builder, default_val));
    Argument::BooleanLiteral(r)
}

// TSType::TSNullKeyword
fn null_literal() -> NullLiteral {
    NullLiteral { span: SPAN }
}
pub fn null_expr<'a>(ast_builder: &AstBuilder<'a>) -> Expression<'a> {
    ast_builder.expression_null_literal(SPAN)
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
    ast_builder.expression_identifier_reference(SPAN, "undefined")
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
    ast_builder.expression_string_literal(SPAN, "any")
}
pub fn any_arg<'a>(ast_builder: &AstBuilder<'a>) -> Argument<'a> {
    let r = ast_builder.alloc(any_literal(ast_builder));
    Argument::StringLiteral(r)
}

// TSType::TSFunctionType
fn function_parts<'a>(
    ast_builder: &AstBuilder<'a>,
    formal_parameters: Option<allocator::Box<'a, FormalParameters<'a>>>,
    return_expression: Option<Expression<'a>>,
) -> (
    allocator::Box<'a, FormalParameters<'a>>,
    allocator::Box<'a, FunctionBody<'a>>,
) {
    let new_params;

    if let Some(params) = formal_parameters {
        new_params = params;
    } else {
        let rest: Option<allocator::Box<BindingRestElement<'a>>> = None;

        new_params = ast_builder.alloc(ast_builder.formal_parameters(
            SPAN,
            FormalParameterKind::ArrowFormalParameters,
            ast_builder.vec(),
            rest,
        ));
    }

    let mut statements = ast_builder.vec();

    if let Some(return_expr) = return_expression {
        let return_statement = ast_builder.statement_return(SPAN, Some(return_expr));
        statements.push(return_statement);
    }

    let body = ast_builder.alloc(ast_builder.function_body(SPAN, ast_builder.vec(), statements));

    (new_params, body)
}
pub fn function_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    formal_parameters: Option<allocator::Box<'a, FormalParameters<'a>>>,
    return_expression: Option<Expression<'a>>,
) -> Expression<'a> {
    let (params, body) = function_parts(ast_builder, formal_parameters, return_expression);

    let type_parameters: Option<allocator::Box<TSTypeParameterDeclaration<'a>>> = None;
    let return_type: Option<allocator::Box<TSTypeAnnotation<'a>>> = None;

    ast_builder.expression_arrow_function(
        SPAN,
        false,
        false,
        type_parameters,
        params,
        return_type,
        body,
    )
}
pub fn function_arg<'a>(ast_builder: &AstBuilder<'a>) -> Argument<'a> {
    let (params, body) = function_parts(ast_builder, None, None);

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
pub fn array_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    elements: Option<allocator::Vec<'a, ArrayExpressionElement<'a>>>,
) -> Expression<'a> {
    if let Some(elements) = elements {
        return ast_builder.expression_array(SPAN, elements, None);
    }
    ast_builder.expression_array(SPAN, ast_builder.vec(), None)
}
pub fn array_arg<'a>(
    ast_builder: &AstBuilder<'a>,
    elements: Option<allocator::Vec<'a, ArrayExpressionElement<'a>>>,
) -> Argument<'a> {
    let new_elements;

    if let Some(elements) = elements {
        new_elements = elements;
    } else {
        new_elements = ast_builder.vec();
    }

    let array_expr = ArrayExpression {
        span: SPAN,
        elements: new_elements,
        trailing_comma: None,
    };
    let r = ast_builder.alloc(array_expr);
    Argument::ArrayExpression(r)
}

// TSType::TSObjectKeyword
pub fn object_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    elements: Option<allocator::Vec<'a, ObjectPropertyKind<'a>>>,
) -> Expression<'a> {
    let new_elements;
    if let Some(elements) = elements {
        new_elements = elements;
    } else {
        new_elements = ast_builder.vec();
    }
    ast_builder.expression_object(SPAN, new_elements, None)
}
pub fn object_arg<'a>(
    ast_builder: &AstBuilder<'a>,
    elements: Option<allocator::Vec<'a, ObjectPropertyKind<'a>>>,
) -> Argument<'a> {
    let new_elements;
    if let Some(elements) = elements {
        new_elements = elements;
    } else {
        new_elements = ast_builder.vec();
    }
    let object_expr = ObjectExpression {
        span: SPAN,
        properties: new_elements,
        trailing_comma: None,
    };
    let argument_item = ast_builder.alloc(object_expr);
    Argument::ObjectExpression(argument_item)
}

/****** reference ******/
pub fn ref_parts<'a>(
    ast_builder: &AstBuilder<'a>,
    key_name: &str,
    mock_func_name: &str,
) -> (Expression<'a>, allocator::Vec<'a, Argument<'a>>) {
    // 'key_name':[key_name]_boostestHoge(),
    let new_name = format!("{}_{}", key_name, mock_func_name);
    let new_callee = ast_builder.expression_identifier_reference(SPAN, new_name);
    let arg = ast_builder.vec();

    (new_callee, arg)
}
pub fn ref_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    key_name: &str,
    mock_func_name: &str,
    add_generic: bool,
) -> Expression<'a> {
    let (new_callee, arg) = ref_parts(ast_builder, key_name, mock_func_name);

    if add_generic {
        let ts_type = TSType::TSAnyKeyword(ast_builder.alloc_ts_any_keyword(SPAN));
        let mut ts_params = ast_builder.vec();
        ts_params.push(ts_type);

        let ts_type_arg = ast_builder.ts_type_parameter_instantiation(SPAN, ts_params);

        ast_builder.expression_call(SPAN, new_callee, Some(ts_type_arg), arg, false)
    } else {
        let ts_type_arg: Option<allocator::Box<TSTypeParameterInstantiation<'a>>> = None;
        ast_builder.expression_call(SPAN, new_callee, ts_type_arg, arg, false)
    }
}
pub fn ref_arg<'a>(
    ast_builder: &AstBuilder<'a>,
    key_name: &str,
    mock_func_name: &str,
    add_generic: bool,
) -> Argument<'a> {
    let (new_callee, arg) = ref_parts(ast_builder, key_name, mock_func_name);

    if add_generic {
        let ts_type = TSType::TSAnyKeyword(ast_builder.alloc_ts_any_keyword(SPAN));
        let mut ts_params = ast_builder.vec();
        ts_params.push(ts_type);

        let ts_type_arg = ast_builder.alloc_ts_type_parameter_instantiation(SPAN, ts_params);

        Argument::CallExpression(ast_builder.alloc(CallExpression {
            span: SPAN,
            callee: new_callee,
            arguments: arg,
            optional: false,
            type_parameters: Some(ts_type_arg),
        }))
    } else {
        Argument::CallExpression(ast_builder.alloc(CallExpression {
            span: SPAN,
            callee: new_callee,
            arguments: arg,
            optional: false,
            type_parameters: None,
        }))
    }
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
        TSLiteral::BigIntLiteral(bigint_literal) => bigint_expr(
            ast_builder,
            Some(&bigint_literal.raw),
            Some(bigint_literal.base),
        ),
        _ => object_expr(ast_builder, None),
    }
}

pub fn add_ts_as_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    ts_as_expr: Expression<'a>,
) -> Expression<'a> {
    let id_ref = ast_builder.identifier_reference(SPAN, "T");
    let allocated_id_ref = ast_builder.alloc(id_ref);
    let ts_type_name = TSTypeName::IdentifierReference(allocated_id_ref);

    let type_parameters: Option<allocator::Box<TSTypeParameterInstantiation<'a>>> = None;
    let ts_type = TSType::TSTypeReference(ast_builder.alloc_ts_type_reference(
        SPAN,
        ts_type_name,
        type_parameters,
    ));

    ast_builder.expression_ts_as(SPAN, ts_as_expr, ts_type)
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
        TSLiteral::BigIntLiteral(bigint_literal) => bigint_arg(
            ast_builder,
            Some(&bigint_literal.raw),
            Some(bigint_literal.base),
        ),
        _ => object_arg(ast_builder, None),
    }
}

pub fn get_obj_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    expressions: Vec<(PropertyKey<'a>, Expression<'a>)>,
    last: Option<ObjectPropertyKind<'a>>,
) -> Expression<'a> {
    let mut new_props = ast_builder.vec();

    for (key, expression) in expressions {
        let object_expr = ast_builder.alloc_object_property(
            SPAN,
            PropertyKind::Init,
            key,
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

    ast_builder.expression_object(SPAN, new_props, None)
}

pub fn handle_ts_signature<'a>(
    ast_builder: &AstBuilder<'a>,
    ts_signature: &mut TSSignature<'a>,
    mock_func_name: &str,
    parent_key_name: Option<String>,
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

                    let new_key_expr =
                        ast_builder.expression_string_literal(SPAN, prop_key.to_string());
                    let new_prop_key = ast_builder.property_key_expression(new_key_expr);

                    match &mut ts_type_annotation.type_annotation {
                        TSType::TSTypeLiteral(ts_type_literal) => {
                            return Some((
                                new_prop_key,
                                handle_ts_signatures(
                                    ast_builder,
                                    &mut ts_type_literal.members,
                                    None,
                                    mock_func_name,
                                    Some(new_parent_key.clone()),
                                ),
                            ));
                        }
                        other => {
                            let ts_type = ast_builder.move_ts_type(other);

                            Some((
                                new_prop_key,
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
        TSSignature::TSIndexSignature(ts_index_signature) => {
            let ts_type =
                ast_builder.move_ts_type(&mut ts_index_signature.type_annotation.type_annotation);
            if let Some(first) = ts_index_signature.parameters.first_mut() {
                let new_parent_key: String;

                if let Some(p_key) = parent_key_name {
                    new_parent_key = format!("{}_{}", p_key, first.name.as_str());
                } else {
                    new_parent_key = first.name.to_string();
                }

                let key_ts_type =
                    ast_builder.move_ts_type(&mut first.type_annotation.type_annotation);

                /*
                 * TODO: Not supported
                 * [Symbol_Key: symbol]: boolean;
                 */
                if let TSType::TSSymbolKeyword(_) = key_ts_type {
                    return None;
                }

                let key = get_expression(
                    ast_builder,
                    key_ts_type,
                    first.name.as_str(),
                    mock_func_name,
                );

                let new_prop_key = ast_builder.property_key_expression(key);

                return Some((
                    new_prop_key,
                    get_expression(ast_builder, ts_type, &new_parent_key, mock_func_name),
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
        TSSignature::TSMethodSignature(ts_method_singature) => {
            println!("TSMethodSignature:{:?}", ts_method_singature);
            None
        }
        TSSignature::TSConstructSignatureDeclaration(ts_construct_signature) => {
            println!(
                "TSConstructSignatureDeclaration:{:?}",
                ts_construct_signature
            );
            None
        }
        _ => None,
    }
}

pub fn handle_ts_signatures<'a>(
    ast_builder: &AstBuilder<'a>,
    ts_signatures: &mut allocator::Vec<'a, TSSignature<'a>>,
    last: Option<ObjectPropertyKind<'a>>,
    mock_func_name: &str,
    parent_key_name: Option<String>,
) -> Expression<'a> {
    let mut props_expr: Vec<(PropertyKey, Expression)> = Vec::new();

    for member in ts_signatures.iter_mut() {
        if let Some((key, expr)) =
            handle_ts_signature(ast_builder, member, mock_func_name, parent_key_name.clone())
        {
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
    mut type_annotation: TSType<'a>,
    key_name: &str,
    mock_func_name: &str,
) -> Expression<'a> {
    let val = match type_annotation {
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_defined_type(&ts_type_ref) => {
            // TODO: Defined type
            object_expr(ast_builder, None)
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_function_type(&ts_type_ref) => {
            // TODO: Array
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
        TSType::TSTypeReference(ts_type_ref) => {
            if let TSTypeName::IdentifierReference(identifier) = &ts_type_ref.type_name {
                let new_key = format!("{}_{}", key_name, identifier.name.clone().into_string());
                return ref_expr(ast_builder, &new_key, mock_func_name, true);
            }
            ref_expr(ast_builder, key_name, mock_func_name, true)
        }
        TSType::TSStringKeyword(_) => string_expr(ast_builder, None),
        TSType::TSAnyKeyword(_) => any_expr(ast_builder),
        TSType::TSBooleanKeyword(_) => boolean_expr(ast_builder, None),
        TSType::TSNullKeyword(_) => null_expr(ast_builder),
        TSType::TSNumberKeyword(_) => number_expr(ast_builder, None, None, None),
        TSType::TSBigIntKeyword(_) => bigint_expr(ast_builder, None, None),
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
                    key_name,
                    mock_func_name,
                ));
            }
            function_expr(
                ast_builder,
                Some(alloced_formal_parameters),
                return_expression,
            )
        }
        TSType::TSUndefinedKeyword(_) => undefined_expr(ast_builder),
        TSType::TSUnknownKeyword(_) => undefined_expr(ast_builder),
        TSType::TSConditionalType(ref mut ts_conditional_type) => {
            let ts_type = ast_builder.move_ts_type(&mut ts_conditional_type.true_type);
            let new = get_expression(ast_builder, ts_type, key_name, mock_func_name);
            return new;
        }
        TSType::TSUnionType(box_ts_union_type) => {
            let ts_union_type = &mut box_ts_union_type.unbox();
            let first_union_type = ts_union_type.types.first_mut();
            if let Some(first_type) = first_union_type {
                let ts_type = ast_builder.move_ts_type(first_type);
                let new = get_expression(ast_builder, ts_type, key_name, mock_func_name);
                return new;
            }
            // fallback
            null_expr(ast_builder)
        }
        TSType::TSTupleType(ref mut ts_tuple_type) => {
            let mut new_elements = ast_builder.vec();
            for element in ts_tuple_type.element_types.iter_mut() {
                let ts_type = ast_builder.move_ts_type(element.to_ts_type_mut());
                let new = get_expression(ast_builder, ts_type, key_name, mock_func_name);
                let array_expr = ArrayExpressionElement::from(new);
                new_elements.push(array_expr);
            }
            array_expr(ast_builder, Some(new_elements))
        }
        TSType::TSNamedTupleMember(ref mut ts_named_tuple_member) => {
            let ts_type =
                ast_builder.move_ts_type(ts_named_tuple_member.element_type.to_ts_type_mut());
            get_expression(ast_builder, ts_type, key_name, mock_func_name)
        }
        TSType::TSTypeLiteral(ref mut ts_type_literal) => {
            // {name: string, age: number}
            // { x: number; y: number; }`
            handle_ts_signatures(
                ast_builder,
                &mut ts_type_literal.members,
                None,
                mock_func_name,
                Some(key_name.to_string()),
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
                let expr = get_expression(ast_builder, new_ts_type, key_name, mock_func_name);
                let spread_expr = ast_builder.alloc_spread_element(SPAN, expr);
                let obj_prop_expr = ObjectPropertyKind::SpreadProperty(spread_expr);
                temp_expr.push(obj_prop_expr);
            }
            ast_builder.expression_object(SPAN, temp_expr, None)
        }
        TSType::TSTypeOperatorType(_) => {
            // keyof T
            // TODO
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSInferType(_ts_infer_type) => {
            // infer R ? R : never
            // TODO
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSMappedType(_) => {
            // {[K in keyof T]: T[K]}
            // TODO
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSQualifiedName(_) => {
            // TODO
            // Namespace.MyType
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSTypeQuery(_) => {
            // typeof x
            // TODO
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSTypePredicate(_) => {
            // x is string
            // TODO
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSTemplateLiteralType(_) => {
            // `${string}`, \`hello ${string}\`
            // TODO
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSThisType(_) => {
            // TODO
            // error
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSConstructorType(_) => {
            println!("TSConstructorType");
            // TODO
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSIndexedAccessType(_) => {
            // person["name"]
            // TODO
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::JSDocNullableType(_) => {
            // TODO
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::JSDocUnknownType(_) => {
            // TODO
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSImportType(_) => {
            // TODO
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSIntrinsicKeyword(_) => {
            // TODO
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSParenthesizedType(ref mut ts_parenthesized_type) => {
            let ts_type = ast_builder.move_ts_type(&mut ts_parenthesized_type.type_annotation);
            get_expression(ast_builder, ts_type, key_name, mock_func_name)

            // ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::JSDocNonNullableType(_) => {
            // TODO
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
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
    ts_signatures: &mut allocator::Vec<'a, TSSignature<'a>>,
    last: Option<ObjectPropertyKind<'a>>,
    mock_func_name: &str,
    parent_key: Option<String>,
) -> Argument<'a> {
    let mut props_expr: Vec<(PropertyKey, Expression)> = Vec::new();

    for member in ts_signatures.iter_mut() {
        if let Some((key, expr)) =
            handle_ts_signature(ast_builder, member, mock_func_name, parent_key.clone())
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
    mut ts_type: TSType<'a>,
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
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_defined_type(&ts_type_ref) => {
            // TODO
            object_arg(ast_builder, None)
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_function_type(&ts_type_ref) => {
            // TODO: Array
            function_arg(ast_builder)
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
        TSType::TSTypeReference(ts_type_ref) => {
            if let TSTypeName::IdentifierReference(identifier) = &ts_type_ref.type_name {
                let new_key = format!("{}_{}", key_name, identifier.name.clone().into_string());
                return ref_arg(ast_builder, &new_key, mock_func_name, true);
            }
            ref_arg(ast_builder, key_name, mock_func_name, true)
        }
        TSType::TSObjectKeyword(_) => object_arg(ast_builder, None),
        TSType::TSVoidKeyword(_) => null_arg(ast_builder),
        TSType::TSFunctionType(_) => function_arg(ast_builder),
        TSType::TSUndefinedKeyword(_) => undefined_arg(ast_builder),
        TSType::TSUnknownKeyword(_) => undefined_arg(ast_builder),
        TSType::TSConditionalType(ref mut ts_conditional_type) => {
            let ts_type = ast_builder.move_ts_type(&mut ts_conditional_type.true_type);
            get_arg(ast_builder, ts_type, key_name, mock_func_name)
        }
        TSType::TSUnionType(box_ts_union_type) => {
            let ts_union_type = &mut box_ts_union_type.unbox();
            let first_union_type = ts_union_type.types.first_mut();
            if let Some(first_type) = first_union_type {
                let ts_type = ast_builder.move_ts_type(first_type);
                return get_arg(ast_builder, ts_type, key_name, mock_func_name);
            }
            // fallback
            null_arg(ast_builder)
        }
        TSType::TSNeverKeyword(_) => null_arg(ast_builder),
        TSType::TSArrayType(_) => array_arg(ast_builder, None),
        TSType::TSTupleType(ref mut ts_tuple_type) => {
            let mut new_elements = ast_builder.vec();
            for element in ts_tuple_type.element_types.iter_mut() {
                let ts_type = ast_builder.move_ts_type(element.to_ts_type_mut());
                let new = get_expression(ast_builder, ts_type, key_name, mock_func_name);
                let array_expr = ArrayExpressionElement::from(new);
                new_elements.push(array_expr);
            }
            array_arg(ast_builder, Some(new_elements))
        }
        TSType::TSNamedTupleMember(ref mut ts_named_tuple_member) => {
            let ts_type =
                ast_builder.move_ts_type(ts_named_tuple_member.element_type.to_ts_type_mut());
            get_arg(ast_builder, ts_type, key_name, mock_func_name)
        }
        TSType::TSTypeLiteral(ref mut ts_type_literal) => {
            // {name: string, age: number}
            // { x: number; y: number; }`
            handle_ts_signatures_with_args(
                ast_builder,
                &mut ts_type_literal.members,
                None,
                mock_func_name,
                Some(key_name.to_string()),
            )
        }
        TSType::TSIntersectionType(ref mut ts_intersection_type) => {
            let mut temp_expr = ast_builder.vec();
            for ts_type in ts_intersection_type.types.iter_mut() {
                let new_ts_type = ast_builder.move_ts_type(ts_type);
                let expr = get_expression(ast_builder, new_ts_type, key_name, mock_func_name);
                let spread_expr = ast_builder.alloc_spread_element(SPAN, expr);
                let obj_prop_expr = ObjectPropertyKind::SpreadProperty(spread_expr);
                temp_expr.push(obj_prop_expr);
            }

            object_arg(ast_builder, Some(temp_expr))
        }
        TSType::TSLiteralType(literal_type) => {
            get_arg_with_ts_literal_type(ast_builder, &literal_type.literal)
        }
        TSType::TSSymbolKeyword(_) => symbol_arg(ast_builder),
        TSType::TSThisType(_) => {
            // TODO
            // error
            object_arg(ast_builder, None)
        }
        TSType::TSMappedType(_) => {
            // {[K in keyof T]: T[K]}
            // TODO
            object_arg(ast_builder, None)
        }
        TSType::TSQualifiedName(_) => {
            // TODO
            // Namespace.MyType
            object_arg(ast_builder, None)
        }
        TSType::TSTypeOperatorType(_) => {
            // keyof T
            // TODO
            object_arg(ast_builder, None)
        }
        TSType::TSTypePredicate(_) => {
            // x is string
            // TODO
            object_arg(ast_builder, None)
        }
        TSType::TSTypeQuery(_) => {
            // typeof x
            // TODO
            object_arg(ast_builder, None)
        }
        TSType::TSTemplateLiteralType(_) => {
            // `${string}`, \`hello ${string}\`
            // TODO
            object_arg(ast_builder, None)
        }
        TSType::TSConstructorType(_) => {
            // TODO
            object_arg(ast_builder, None)
        }
        TSType::TSIndexedAccessType(_) => {
            // person["name"]
            // TODO
            object_arg(ast_builder, None)
        }
        TSType::TSInferType(_) => {
            // infer R ? R : never
            // TODO
            object_arg(ast_builder, None)
        }
        TSType::JSDocNullableType(_) => {
            // TODO
            object_arg(ast_builder, None)
        }
        TSType::JSDocUnknownType(_) => {
            // TODO
            object_arg(ast_builder, None)
        }
        TSType::TSImportType(_) => {
            // TODO
            object_arg(ast_builder, None)
        }
        TSType::JSDocNonNullableType(_) => {
            // TODO
            object_arg(ast_builder, None)
        }
        TSType::TSIntrinsicKeyword(_) => {
            // TODO
            object_arg(ast_builder, None)
        }
        TSType::TSParenthesizedType(_) => {
            // TODO
            object_arg(ast_builder, None)
        }
    }
}
