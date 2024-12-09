use std::cell::Cell;

use oxc::{
    allocator,
    ast::{
        ast::{
            Argument, ArrayExpression, ArrayExpressionElement, ArrowFunctionExpression,
            BigIntLiteral, BindingRestElement, BooleanLiteral, CallExpression,
            ComputedMemberExpression, Expression, FormalParameterKind, FormalParameters,
            FunctionBody, IdentifierReference, NullLiteral, NumericLiteral, ObjectExpression,
            ObjectPropertyKind, ParenthesizedExpression, PropertyKey, PropertyKind, StringLiteral,
            TSCallSignatureDeclaration, TSLiteral, TSLiteralType, TSMappedType, TSSignature,
            TSTupleElement, TSType, TSTypeAnnotation, TSTypeName, TSTypeParameterDeclaration,
            TSTypeParameterInstantiation, TSTypeQueryExprName,
        },
        AstBuilder,
    },
    span::{Atom, Span},
    syntax::{
        identifier,
        number::{BigintBase, NumberBase},
    },
};

use crate::boostest_utils::ast_utils::get_generic_prefix;

use super::super::boostest_utils::ast_utils;
use super::extends_ast_builder::AstBuilderExt;

pub fn handle_tuple_type<'a>(
    ast_builder: &AstBuilder<'a>,
    members: &mut allocator::Vec<'a, TSSignature<'a>>,
) -> Option<TSType<'a>> {
    let mut tuple_length = None;

    if let Some(TSSignature::TSPropertySignature(last)) = members.last_mut() {
        if let PropertyKey::StaticIdentifier(id) = &last.key {
            if id.to_string() == "length" {
                if let Some(type_annotation) = &last.type_annotation {
                    if let TSType::TSLiteralType(ts_literal_type) = &type_annotation.type_annotation
                    {
                        if let TSLiteral::NumericLiteral(numeric_literal) = &ts_literal_type.literal
                        {
                            tuple_length = Some(numeric_literal.value as usize);
                        }
                    }
                }
            }
        }
    }

    if let Some(length) = tuple_length {
        let (tuple_elements, _) = members.split_at_mut(length);
        let mut element_types = ast_builder.vec();

        for tuple_ele in tuple_elements.iter_mut() {
            if let TSSignature::TSPropertySignature(ts_prop_signature) = tuple_ele {
                if let Some(ts_type_annotation) = &mut ts_prop_signature.type_annotation {
                    let ts_type = ast_builder.move_ts_type(&mut ts_type_annotation.type_annotation);
                    let ele_type = TSTupleElement::from(ts_type);

                    element_types.push(ele_type);
                }
            }
        }

        return Some(ast_builder.ts_type_tuple_type(SPAN, element_types));
    }
    None
}

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
                false,
                ast_builder,
                ts_type,
                key_name,
                mock_func_name,
                false,
                false,
                vec![],
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

// Identifier
pub fn identifier_expr<'a>(ast_builder: &AstBuilder<'a>, id: &str) -> Expression<'a> {
    ast_builder.expression_identifier_reference(SPAN, id)
}
pub fn identifier_arg<'a>(ast_builder: &AstBuilder<'a>, id: &str) -> Argument<'a> {
    let id_ref = ast_builder.identifier_reference(SPAN, id);
    let r = ast_builder.alloc(id_ref);
    Argument::Identifier(r)
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
    let fallback_atom = ast_builder.atom("9007199254740991n");
    let r = raw.unwrap_or(&fallback_atom);
    let b = base.unwrap_or(BigintBase::Decimal);
    ast_builder.big_int_literal(SPAN, r, b)
}
pub fn bigint_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    raw: Option<&Atom<'a>>,
    base: Option<BigintBase>,
) -> Expression<'a> {
    let fallback_atom = ast_builder.atom("9007199254740991n");
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
pub fn function_arg<'a>(
    ast_builder: &AstBuilder<'a>,
    formal_parameters: Option<allocator::Box<'a, FormalParameters<'a>>>,
    return_expression: Option<Expression<'a>>,
) -> Argument<'a> {
    let (params, body) = function_parts(ast_builder, formal_parameters, return_expression);

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

fn computed_member_expression<'a>(
    ast_builder: &AstBuilder<'a>,
    call_expr: Expression<'a>,
    index_literal_expr: Expression<'a>,
) -> Expression<'a> {
    let computed_member_expr =
        ast_builder.alloc_computed_member_expression(SPAN, call_expr, index_literal_expr, false);
    Expression::ComputedMemberExpression(computed_member_expr)
}

fn computed_member_arg<'a>(
    ast_builder: &AstBuilder<'a>,
    call_expr: Expression<'a>,
    index_literal_expr: Expression<'a>,
) -> Argument<'a> {
    let computed_member_expr =
        ast_builder.alloc_computed_member_expression(SPAN, call_expr, index_literal_expr, false);
    Argument::ComputedMemberExpression(computed_member_expr)
}

//  Object.keys(user)[0];
fn computed_object_key_member<'a>(
    ast_builder: &AstBuilder<'a>,
    arg: Argument<'a>,
) -> allocator::Box<'a, ComputedMemberExpression<'a>> {
    // Create Identifier nodes
    let object_id = ast_builder.expression_identifier_reference(SPAN, "Object");
    let keys_id = ast_builder.identifier_name(SPAN, "keys");

    // Create StaticMemberExpression node
    let alloc_static_member_expr =
        ast_builder.alloc_static_member_expression(SPAN, object_id, keys_id, false);
    let static_member_expr = Expression::StaticMemberExpression(alloc_static_member_expr);

    // Create CallExpression node
    let mut args = ast_builder.vec();
    args.push(arg);

    let type_parameters: Option<allocator::Box<TSTypeParameterInstantiation<'a>>> = None;
    let call_expr =
        ast_builder.expression_call(SPAN, static_member_expr, type_parameters, args, false);

    // Create NumericLiteral node
    let numeric_literal = ast_builder.expression_numeric_literal(
        SPAN,
        0.0,
        "0",
        oxc::syntax::number::NumberBase::Decimal,
    );

    ast_builder.alloc_computed_member_expression(SPAN, call_expr, numeric_literal, false)
}

fn computed_object_full_key_member_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    arg: Argument<'a>,
) -> Expression<'a> {
    // Create Identifier nodes
    let object_id = ast_builder.expression_identifier_reference(SPAN, "Object");
    let keys_id = ast_builder.identifier_name(SPAN, "keys");

    // Create StaticMemberExpression node
    let alloc_static_member_expr =
        ast_builder.alloc_static_member_expression(SPAN, object_id, keys_id, false);
    let static_member_expr = Expression::StaticMemberExpression(alloc_static_member_expr);

    // Create CallExpression node
    let mut args = ast_builder.vec();
    args.push(arg);

    let type_parameters: Option<allocator::Box<TSTypeParameterInstantiation<'a>>> = None;

    ast_builder.expression_call(SPAN, static_member_expr, type_parameters, args, false)
}

fn computed_object_full_key_member_arg<'a>(
    ast_builder: &AstBuilder<'a>,
    arg: Argument<'a>,
) -> Argument<'a> {
    // Create Identifier nodes
    let object_id = ast_builder.expression_identifier_reference(SPAN, "Object");
    let keys_id = ast_builder.identifier_name(SPAN, "keys");

    // Create StaticMemberExpression node
    let alloc_static_member_expr =
        ast_builder.alloc_static_member_expression(SPAN, object_id, keys_id, false);
    let static_member_expr = Expression::StaticMemberExpression(alloc_static_member_expr);

    // Create CallExpression node
    let mut args = ast_builder.vec();
    args.push(arg);

    let type_parameters: Option<allocator::Box<TSTypeParameterInstantiation<'a>>> = None;

    Argument::CallExpression(ast_builder.alloc(CallExpression {
        span: SPAN,
        callee: static_member_expr,
        arguments: args,
        optional: false,
        type_parameters,
    }))
}

fn computed_object_key_member_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    arg: Argument<'a>,
) -> Expression<'a> {
    let computed_member_expression = computed_object_key_member(ast_builder, arg);
    Expression::ComputedMemberExpression(computed_member_expression)
}

fn computed_object_key_member_arg<'a>(
    ast_builder: &AstBuilder<'a>,
    arg: Argument<'a>,
) -> Argument<'a> {
    let computed_member_expression = computed_object_key_member(ast_builder, arg);
    Argument::ComputedMemberExpression(computed_member_expression)
}

// obj_expr.reduce((acc, cur) => ({ ...acc, [cur]: '' }), {});
fn union_full_member_obj_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    obj_expr: Argument<'a>,
    value: Expression<'a>,
) -> Expression<'a> {
    let keys_id = ast_builder.identifier_name(SPAN, "reduce");

    let mut temp_expr = ast_builder.vec();
    temp_expr.push(obj_expr);
    let new_callee = ast_builder.expression_identifier_reference(SPAN, "ensureArray");
    let type_parameters: Option<allocator::Box<TSTypeParameterInstantiation<'a>>> = None;
    let wrapped_obj_expr =
        ast_builder.expression_call(SPAN, new_callee, type_parameters, temp_expr, false);

    // Create StaticMemberExpression node
    let alloc_static_member_expr =
        ast_builder.alloc_static_member_expression(SPAN, wrapped_obj_expr, keys_id, false);
    let static_member_expr = Expression::StaticMemberExpression(alloc_static_member_expr);

    let pattern_acc_kind = ast_builder.binding_pattern_kind_binding_identifier(SPAN, "acc");
    let any = ast_builder.ts_type_any_keyword(SPAN);
    let type_annotation_acc = ast_builder.alloc_ts_type_annotation(SPAN, any);
    let pattern_acc =
        ast_builder.binding_pattern(pattern_acc_kind, Some(type_annotation_acc), false);
    let formal_parameter_acc =
        ast_builder.formal_parameter(SPAN, ast_builder.vec(), pattern_acc, None, false, false);

    let pattern_cur_kind = ast_builder.binding_pattern_kind_binding_identifier(SPAN, "cur");
    let none_type_annotatin_cur: Option<allocator::Box<TSTypeAnnotation<'a>>> = None;
    let pattern_cur = ast_builder.binding_pattern(pattern_cur_kind, none_type_annotatin_cur, false);

    let formal_parameter_cur =
        ast_builder.formal_parameter(SPAN, ast_builder.vec(), pattern_cur, None, false, false);

    let mut formal_parameters = ast_builder.vec();
    formal_parameters.push(formal_parameter_acc);
    formal_parameters.push(formal_parameter_cur);

    let property_key = ast_builder.property_key_identifier_name(SPAN, "cur");
    let object_prop = ast_builder.object_property_kind_object_property(
        SPAN,
        PropertyKind::Init,
        property_key,
        value,
        false,
        false,
        true,
    );

    let spred_expr = ast_builder.expression_identifier_reference(SPAN, "acc");
    let spred_prop = ast_builder.object_property_kind_spread_element(SPAN, spred_expr);

    let mut expression_obj_properties = ast_builder.vec();
    expression_obj_properties.push(spred_prop);
    expression_obj_properties.push(object_prop);

    let parenthesized_inner_expr =
        ast_builder.expression_object(SPAN, expression_obj_properties, None);
    let parenthesized_expr = ast_builder.expression_parenthesized(SPAN, parenthesized_inner_expr);
    let expression_stmt = ast_builder.statement_return(SPAN, Some(parenthesized_expr));

    let mut func_body_expr_statements = ast_builder.vec();
    let directives = ast_builder.vec();
    func_body_expr_statements.push(expression_stmt);

    let func_body_expr = ast_builder.function_body(SPAN, directives, func_body_expr_statements);

    let none_binding_rest_ele: Option<allocator::Box<BindingRestElement<'a>>> = None;
    let alloc_formal_parameters = ast_builder.alloc_formal_parameters(
        SPAN,
        FormalParameterKind::ArrowFormalParameters,
        formal_parameters,
        none_binding_rest_ele,
    );

    let none_ts_type_parameter_decl: Option<allocator::Box<TSTypeParameterDeclaration<'a>>> = None;
    let none_type_annotatin_func: Option<allocator::Box<TSTypeAnnotation<'a>>> = None;
    let arrow_func_expr = ast_builder.alloc_arrow_function_expression(
        SPAN,
        false,
        false,
        none_ts_type_parameter_decl,
        alloc_formal_parameters,
        none_type_annotatin_func,
        func_body_expr,
    );
    let arrow_func_expr_arg = Argument::ArrowFunctionExpression(arrow_func_expr);
    let obj_expr = ast_builder.alloc_object_expression(SPAN, ast_builder.vec(), None);
    let obj_expr_arg = Argument::ObjectExpression(obj_expr);

    // Create CallExpression node
    let mut args = ast_builder.vec();
    args.push(arrow_func_expr_arg);
    args.push(obj_expr_arg);

    let type_parameters: Option<allocator::Box<TSTypeParameterInstantiation<'a>>> = None;
    ast_builder.expression_call(SPAN, static_member_expr, type_parameters, args, false)
}

/****** reference ******/
pub fn ref_parts<'a>(
    ast_builder: &AstBuilder<'a>,
    key_name: &str,
    mock_func_name: &str,
    arguments: Option<allocator::Vec<'a, Argument<'a>>>,
    ref_function_name: Option<&str>,
) -> (Expression<'a>, allocator::Vec<'a, Argument<'a>>) {
    let new_name = match ref_function_name {
        Some(ref_func_name) => ref_func_name.to_string(),
        None => {
            // 'key_name':[key_name]_boostestHoge(),
            format!("{}_{}", key_name, mock_func_name)
        }
    };
    let new_callee = ast_builder.expression_identifier_reference(SPAN, new_name);

    if let Some(arguments) = arguments {
        return (new_callee, arguments);
    }

    let arg = ast_builder.vec();

    (new_callee, arg)
}
pub fn ref_expr<'a>(
    ast_builder: &AstBuilder<'a>,
    key_name: &str,
    mock_func_name: &str,
    generic_types: Option<allocator::Vec<'a, TSType<'a>>>,
    arguments: Option<allocator::Vec<'a, Argument<'a>>>,
    ref_function_name: Option<&str>,
) -> Expression<'a> {
    let (new_callee, arg) = ref_parts(
        ast_builder,
        key_name,
        mock_func_name,
        arguments,
        ref_function_name,
    );

    if let Some(generic_types) = generic_types {
        // let ts_type = TSType::TSAnyKeyword(ast_builder.alloc_ts_any_keyword(SPAN));
        // let mut ts_params = ast_builder.vec();
        // ts_params.push(ts_type);
        let ts_type_arg = ast_builder.ts_type_parameter_instantiation(SPAN, generic_types);

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
    generic_types: Option<allocator::Vec<'a, TSType<'a>>>,
    arguments: Option<allocator::Vec<'a, Argument<'a>>>,
    ref_function_name: Option<&str>,
) -> Argument<'a> {
    let (new_callee, arg) = ref_parts(
        ast_builder,
        key_name,
        mock_func_name,
        arguments,
        ref_function_name,
    );

    if let Some(generic_types) = generic_types {
        // let ts_type = TSType::TSAnyKeyword(ast_builder.alloc_ts_any_keyword(SPAN));
        // let mut ts_params = ast_builder.vec();
        // ts_params.push(ts_type);

        let ts_type_arg = ast_builder.alloc_ts_type_parameter_instantiation(SPAN, generic_types);

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
                                    &new_parent_key,
                                    mock_func_name,
                                    false,
                                    false,
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
                    get_expression(
                        false,
                        ast_builder,
                        ts_type,
                        "",
                        mock_func_name,
                        false,
                        false,
                        vec![],
                    ),
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
        TSSignature::TSMethodSignature(ts_method_singature) => None,
        TSSignature::TSConstructSignatureDeclaration(ts_construct_signature) => None,
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
            &parent_key_name.unwrap_or_default(),
            mock_func_name,
            false,
            false,
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

/**
 *
 *
 * get_expression
 *
 *
 */
pub fn get_expression<'a>(
    is_main_target: bool,
    ast_builder: &AstBuilder<'a>,
    mut type_annotation: TSType<'a>,
    key_name: &str,
    mock_func_name: &str,
    is_mapped_type: bool,
    is_array: bool,
    generic: Vec<String>,
) -> Expression<'a> {
    let val = match type_annotation {
        TSType::TSTypeReference(mut ts_type_ref) if ast_utils::is_promise_type(&ts_type_ref) => {
            let mut arguments = ast_builder.vec();

            if let Some(type_parameters) = &mut ts_type_ref.type_parameters {
                if let Some(param_type) = type_parameters.params.first_mut() {
                    let ts_type = ast_builder.move_ts_type(param_type);

                    let result_expr = get_arg(
                        is_main_target,
                        ast_builder,
                        ts_type,
                        key_name,
                        mock_func_name,
                        generic,
                        false,
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
            // TODO: Array
            function_expr(ast_builder, None, None)
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_array_type(&ts_type_ref) => {
            array_expr(ast_builder, None)
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_true_type(&ts_type_ref) => {
            boolean_expr(ast_builder, Some(true))
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_false_type(&ts_type_ref) => {
            boolean_expr(ast_builder, Some(false))
        }
        TSType::TSTypeReference(mut ts_type_ref) => {
            let mut ref_arguments = None;
            if is_array {
                let true_literal = ast_builder.alloc_boolean_literal(SPAN, true);
                let mut temp_ref_arguments = ast_builder.vec();
                temp_ref_arguments.push(Argument::BooleanLiteral(true_literal));
                ref_arguments = Some(temp_ref_arguments);
            } else {
                let ref_is_array = ast_builder.alloc_identifier_reference(SPAN, "isArray");
                let mut temp_ref_arguments = ast_builder.vec();
                temp_ref_arguments.push(Argument::Identifier(ref_is_array));
                ref_arguments = Some(temp_ref_arguments);
            }

            if let TSTypeName::IdentifierReference(identifier) = &ts_type_ref.type_name {
                // handle generic
                if is_main_target {
                    let position = generic
                        .iter()
                        .position(|x| x == &identifier.name.to_string());

                    if let Some(index) = position {
                        let new_key = get_generic_prefix(index).to_string();
                        return ref_expr(ast_builder, &new_key, mock_func_name, None, None, None);
                    }
                }

                let new_key = format!("{}_{}", key_name, identifier.name.clone().into_string());

                if let Some(allocated_type_parameters) = &mut ts_type_ref.type_parameters {
                    let mut type_parameters =
                        ast_builder.move_ts_type_parameter_instantiation(allocated_type_parameters);

                    let mut arguments = ast_builder.vec();

                    for parameter in type_parameters.params.iter_mut() {
                        let arg_ts_type = ast_builder.move_ts_type(parameter);
                        let arg_expr = get_expression(
                            is_main_target,
                            ast_builder,
                            arg_ts_type,
                            key_name,
                            mock_func_name,
                            false,
                            true,
                            generic.clone(),
                        );

                        /* NOTE: generic_assigned_val is called, so prop is needed wrapping.

                                "key": partial_Partial_boostestLiteralAliasType(() => {
                                    return generic_assigned_val();
                                }),
                        */

                        let any_type_annotation = ast_builder.ts_type_any_keyword(SPAN);
                        let formal_parameter =
                            ast_builder.get_formal_parameter("isArray", any_type_annotation, true);

                        let mut items = ast_builder.vec();
                        items.push(formal_parameter);

                        let rest: Option<allocator::Box<BindingRestElement<'a>>> = None;
                        let allocated_formal_parameters =
                            ast_builder.alloc(ast_builder.formal_parameters(
                                SPAN,
                                FormalParameterKind::ArrowFormalParameters,
                                items,
                                rest,
                            ));

                        let (params, body) = function_parts(
                            ast_builder,
                            Some(allocated_formal_parameters),
                            Some(arg_expr),
                        );
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
                        let arg = Argument::ArrowFunctionExpression(r);

                        arguments.push(arg);
                    }

                    return ref_expr(
                        ast_builder,
                        &new_key,
                        mock_func_name,
                        None,
                        Some(arguments),
                        None,
                    );
                    // let new_generic_key = format!("{}_{}", key, parameter.);
                }

                return ref_expr(
                    ast_builder,
                    &new_key,
                    mock_func_name,
                    None,
                    ref_arguments,
                    None,
                );
            }

            ref_expr(
                ast_builder,
                key_name,
                mock_func_name,
                None,
                ref_arguments,
                None,
            )
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
                    false,
                    ast_builder,
                    ts_type,
                    key_name,
                    mock_func_name,
                    false,
                    false,
                    vec![],
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
            // check_type extends extends_type ? true_type : false_type;
            let true_type = ast_builder.move_ts_type(&mut ts_conditional_type.true_type);
            let false_type = ast_builder.move_ts_type(&mut ts_conditional_type.false_type);
            let check_type = ast_builder.move_ts_type(&mut ts_conditional_type.check_type);
            let extends_type = ast_builder.move_ts_type(&mut ts_conditional_type.extends_type);

            let true_expr = get_arg(
                false,
                ast_builder,
                true_type,
                key_name,
                mock_func_name,
                vec![],
                true,
            );

            let false_expr = get_arg(
                false,
                ast_builder,
                false_type,
                key_name,
                mock_func_name,
                vec![],
                true,
            );

            let check_expr = get_arg(
                false,
                ast_builder,
                check_type,
                key_name,
                mock_func_name,
                vec![],
                true,
            );

            let extends_expr = get_arg(
                false,
                ast_builder,
                extends_type,
                key_name,
                mock_func_name,
                vec![],
                true,
            );

            let mut temp_expr = ast_builder.vec();
            temp_expr.push(check_expr);
            temp_expr.push(extends_expr);
            temp_expr.push(true_expr);
            temp_expr.push(false_expr);

            if is_array {
                let true_literal = ast_builder.alloc_boolean_literal(SPAN, true);
                temp_expr.push(Argument::BooleanLiteral(true_literal));
            }

            let new_callee = ast_builder.expression_identifier_reference(SPAN, "extendsUtil");
            let type_parameters: Option<allocator::Box<TSTypeParameterInstantiation<'a>>> = None;
            ast_builder.expression_call(SPAN, new_callee, type_parameters, temp_expr, false)
        }
        TSType::TSUnionType(box_ts_union_type) => {
            let ts_union_type = &mut box_ts_union_type.unbox();
            let first_union_type = ts_union_type.types.first_mut();
            if let Some(first_type) = first_union_type {
                let ts_type = ast_builder.move_ts_type(first_type);
                let new = get_expression(
                    false,
                    ast_builder,
                    ts_type,
                    key_name,
                    mock_func_name,
                    false,
                    false,
                    vec![],
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

                                            let new = get_arg(
                                                false,
                                                ast_builder,
                                                ts_type,
                                                key_name,
                                                mock_func_name,
                                                vec![],
                                                false,
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
                    false,
                    ast_builder,
                    ts_type,
                    key_name,
                    mock_func_name,
                    false,
                    false,
                    vec![],
                );
                let array_expr = ArrayExpressionElement::from(new);
                new_elements.push(array_expr);
            }
            array_expr(ast_builder, Some(new_elements))
        }
        TSType::TSNamedTupleMember(ref mut ts_named_tuple_member) => {
            let ts_type =
                ast_builder.move_ts_type(ts_named_tuple_member.element_type.to_ts_type_mut());
            get_expression(
                false,
                ast_builder,
                ts_type,
                key_name,
                mock_func_name,
                false,
                false,
                vec![],
            )
        }
        TSType::TSTypeLiteral(ref mut ts_type_literal) => {
            // {name: string, age: number}
            // { x: number; y: number; }`

            handle_ts_signatures(
                is_main_target,
                ast_builder,
                &mut ts_type_literal.members,
                None,
                mock_func_name,
                Some(key_name.to_string()),
                generic,
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
                    false,
                    ast_builder,
                    new_ts_type,
                    key_name,
                    mock_func_name,
                    false,
                    false,
                    vec![],
                );
                let spread_expr = ast_builder.alloc_spread_element(SPAN, expr);
                let obj_prop_expr = ObjectPropertyKind::SpreadProperty(spread_expr);
                temp_expr.push(obj_prop_expr);
            }

            ast_builder.expression_object(SPAN, temp_expr, None)
        }
        TSType::TSTypeOperatorType(ts_type_operator_type) => {
            // keyof T
            if let TSType::TSTypeReference(ts_type_ref) = &ts_type_operator_type.type_annotation {
                let new_key = format!("{}_{}", key_name, ts_type_ref.type_name);
                let arg = ref_arg(ast_builder, &new_key, mock_func_name, None, None, None);

                if is_array {
                    return computed_object_full_key_member_expr(ast_builder, arg);
                }
                return computed_object_key_member_expr(ast_builder, arg);
            }
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSInferType(_ts_infer_type) => {
            // infer R ? R : never
            // TODO
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSMappedType(ts_mapped_type) => {
            let TSMappedType {
                type_parameter,
                mut type_annotation,
                ..
            } = ts_mapped_type.unbox();

            if let Some(value_ts_type) = &mut type_annotation {
                if let Some(constraint_ts_type) = &type_parameter.constraint {
                    // TODO: 全てhogehoge()[cur]になっているため、普通の参照のパターンの場合もサポートする
                    // keyが[P in keyof T]: T[P]のようにキー一致の場合はcurを使う
                    // [P in keyof T]: Hoge[P]の場合はcurを使う, Hogeの参照をおく必要がある
                    // [P in keyof T]: stringなどの場合は適宜
                    // [P in keyof T]: Hoge[otherkey]の場合は存在するのか？
                    // [P in Huga]: Huga[P]の場合？
                    // [P in Huga]: Huga[otherkey]の場合？そんなことある？

                    let moved_value_ts_type = ast_builder.move_ts_type(value_ts_type);

                    match constraint_ts_type {
                        /*
                         * NOTE: handle [K in Hoge]: ???
                         * case4: { [P in HogeRef]: HogeRef }
                         * case5: { [P in HogeRef]: string }
                         * case6: { [P in HogeRef]: T }
                         * x-case: { [P in T]: ??? } // Type 'T' is not assignable to type 'string' | 'number' | "symbol"
                         */
                        TSType::TSTypeReference(constraint_ts_type_ref) => {
                            let mut value_expr: Option<Expression<'a>> = None;
                            if let TSType::TSIndexedAccessType(ts_indexed_access_type) =
                                &moved_value_ts_type
                            {
                                if let TSType::TSTypeReference(index_type) =
                                    &ts_indexed_access_type.index_type
                                {
                                    let base_key_name = &type_parameter.name;
                                    let param_key_name = &index_type.type_name;

                                    if base_key_name.to_string() == param_key_name.to_string() {
                                        if let TSType::TSTypeReference(object_type) =
                                            &ts_indexed_access_type.object_type
                                        {
                                            /*
                                                type Pick<T, K extends keyof T> = {
                                                    [P in K]: T[P];
                                                };
                                            */
                                            let new_key =
                                                format!("{}_{}", key_name, object_type.type_name);
                                            let obj_expr = ref_expr(
                                                ast_builder,
                                                &new_key,
                                                mock_func_name,
                                                None,
                                                None,
                                                None,
                                            );
                                            let cur = ast_builder
                                                .expression_identifier_reference(SPAN, "cur");
                                            value_expr = Some(computed_member_expression(
                                                ast_builder,
                                                obj_expr,
                                                cur,
                                            ))
                                        }
                                    }
                                }
                            }

                            if value_expr.is_none() {
                                value_expr = Some(get_expression(
                                    is_main_target,
                                    ast_builder,
                                    moved_value_ts_type,
                                    key_name,
                                    mock_func_name,
                                    is_mapped_type,
                                    false,
                                    generic,
                                ));
                            }

                            let new_key = format!(
                                "{}_{}_{}",
                                key_name, constraint_ts_type_ref.type_name, mock_func_name
                            );
                            let object_id =
                                ast_builder.expression_identifier_reference(SPAN, new_key);
                            let type_parameters: Option<
                                allocator::Box<TSTypeParameterInstantiation<'a>>,
                            > = None;

                            let true_literal = ast_builder.alloc_boolean_literal(SPAN, true);
                            let mut temp_ref_arguments = ast_builder.vec();
                            temp_ref_arguments.push(Argument::BooleanLiteral(true_literal));

                            let object_call_expr =
                                Argument::CallExpression(ast_builder.alloc(CallExpression {
                                    span: SPAN,
                                    callee: object_id,
                                    arguments: temp_ref_arguments,
                                    optional: false,
                                    type_parameters,
                                }));

                            return union_full_member_obj_expr(
                                ast_builder,
                                object_call_expr,
                                value_expr.unwrap(),
                            );
                        }

                        /*
                         * NOTE: handle [K in keyof T]: ???
                         * case1: { [P in keyof T]: T[P] }
                         * case2: { [P in keyof T]: HogeRef[P] }
                         * case3: { [P in keyof T]: string }
                         * x-case: { [P in keyof T]: T[otherkey] }
                         * x-case: { [P in keyof T]: HogeRef[otherkey] }
                         */
                        TSType::TSTypeOperatorType(ts_type_operator_type) => {
                            if let TSType::TSTypeReference(ts_type_ref) =
                                &ts_type_operator_type.type_annotation
                            {
                                let new_key = format!("{}_{}", key_name, ts_type_ref.type_name);
                                let mut value_expr: Option<Expression<'a>> = None;

                                if let TSType::TSIndexedAccessType(ts_indexed_access_type) =
                                    &moved_value_ts_type
                                {
                                    if let TSType::TSTypeReference(index_type) =
                                        &ts_indexed_access_type.index_type
                                    {
                                        let base_key_name = &type_parameter.name;
                                        let param_key_name = &index_type.type_name;

                                        if base_key_name.to_string() == param_key_name.to_string() {
                                            let obj_expr = ref_expr(
                                                ast_builder,
                                                &new_key,
                                                mock_func_name,
                                                None,
                                                None,
                                                None,
                                            );
                                            let cur = ast_builder
                                                .expression_identifier_reference(SPAN, "cur");
                                            value_expr = Some(computed_member_expression(
                                                ast_builder,
                                                obj_expr,
                                                cur,
                                            ))
                                        }
                                    }
                                }

                                if value_expr.is_none() {
                                    value_expr = Some(get_expression(
                                        is_main_target,
                                        ast_builder,
                                        moved_value_ts_type,
                                        key_name,
                                        mock_func_name,
                                        is_mapped_type,
                                        false,
                                        generic,
                                    ));
                                }

                                let arg_expression_main = ref_arg(
                                    ast_builder,
                                    &new_key,
                                    mock_func_name,
                                    None,
                                    None,
                                    None,
                                );
                                let obj_arg = computed_object_full_key_member_arg(
                                    ast_builder,
                                    arg_expression_main,
                                );
                                return union_full_member_obj_expr(
                                    ast_builder,
                                    obj_arg,
                                    value_expr.unwrap(),
                                );
                            }
                        }
                        _ => {}
                    }
                }
            }
            ref_expr(ast_builder, key_name, mock_func_name, None, None, None)
        }
        TSType::TSQualifiedName(_) => {
            // TODO
            // Namespace.MyType
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSTypeQuery(ts_type_query) => {
            if let TSTypeQueryExprName::IdentifierReference(identifier) = &ts_type_query.expr_name {
                let new_key = format!("{}_{}", key_name, identifier.name.clone().into_string());
                return ref_expr(ast_builder, &new_key, mock_func_name, None, None, None);
            }
            ref_expr(ast_builder, key_name, mock_func_name, None, None, None)
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
            // TODO
            ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
        TSType::TSIndexedAccessType(ts_indexed_access_type) => {
            // person["name"]
            if let TSType::TSTypeReference(ts_object_type_ref) = &ts_indexed_access_type.object_type
            {
                match &ts_indexed_access_type.index_type {
                    TSType::TSLiteralType(ts_literal_type) => {
                        let literal_expr =
                            get_expr_with_ts_literal_type(ast_builder, &ts_literal_type.literal);
                        let new_key = format!("{}_{}", key_name, ts_object_type_ref.type_name);
                        let call_expr =
                            ref_expr(ast_builder, &new_key, mock_func_name, None, None, None);

                        return computed_member_expression(ast_builder, call_expr, literal_expr);
                    }
                    TSType::TSTypeReference(ts_type_ref) => {}

                    (_) => {}
                }
            }
            // person["name"]
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
            get_expression(
                false,
                ast_builder,
                ts_type,
                key_name,
                mock_func_name,
                false,
                false,
                vec![],
            )

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
    is_main_target: bool,
    ast_builder: &AstBuilder<'a>,
    ts_signatures: &mut allocator::Vec<'a, TSSignature<'a>>,
    last: Option<ObjectPropertyKind<'a>>,
    mock_func_name: &str,
    parent_key: Option<String>,
    generic: Vec<String>,
) -> Argument<'a> {
    let mut props_expr: Vec<(PropertyKey, Expression)> = Vec::new();

    if let Some(ts_tuple_type) = handle_tuple_type(ast_builder, ts_signatures) {
        return get_arg(
            is_main_target,
            ast_builder,
            ts_tuple_type,
            &parent_key.unwrap_or_default(),
            mock_func_name,
            generic,
            false,
        );
    }

    for member in ts_signatures.iter_mut() {
        if let Some((key, expr)) = handle_ts_signature(
            is_main_target,
            ast_builder,
            member,
            mock_func_name,
            parent_key.clone(),
            generic.clone(),
        ) {
            props_expr.push((key, expr));
        }
    }

    let obj_expr = get_obj_arg(ast_builder, props_expr, last);
    let argument_item = ast_builder.alloc(obj_expr);
    Argument::ObjectExpression(argument_item)
}

pub fn get_arg<'a>(
    is_main_target: bool,
    ast_builder: &AstBuilder<'a>,
    mut ts_type: TSType<'a>,
    key_name: &str,
    mock_func_name: &str,
    generic: Vec<String>,
    is_array: bool,
) -> Argument<'a> {
    match ts_type {
        TSType::TSAnyKeyword(_) => any_arg(ast_builder),
        TSType::TSBigIntKeyword(_) => bigint_arg(ast_builder, None, None),
        TSType::TSBooleanKeyword(_) => boolean_arg(ast_builder, None),
        TSType::TSNullKeyword(_) => null_arg(ast_builder),
        TSType::TSNumberKeyword(_) => number_arg(ast_builder, None, None, None),
        TSType::TSStringKeyword(_) => string_arg(ast_builder, None),
        TSType::TSTypeReference(mut ts_type_ref) if ast_utils::is_promise_type(&ts_type_ref) => {
            let mut arguments = ast_builder.vec();

            if let Some(type_parameters) = &mut ts_type_ref.type_parameters {
                if let Some(param_type) = type_parameters.params.first_mut() {
                    let ts_type = ast_builder.move_ts_type(param_type);

                    let result_expr = get_arg(
                        is_main_target,
                        ast_builder,
                        ts_type,
                        key_name,
                        mock_func_name,
                        generic,
                        false,
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
            return Argument::from(expr);
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_function_type(&ts_type_ref) => {
            // TODO: Array
            function_arg(ast_builder, None, None)
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_array_type(&ts_type_ref) => {
            array_arg(ast_builder, None)
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_true_type(&ts_type_ref) => {
            boolean_arg(ast_builder, Some(true))
        }
        TSType::TSTypeReference(ts_type_ref) if ast_utils::is_false_type(&ts_type_ref) => {
            boolean_arg(ast_builder, Some(false))
        }
        TSType::TSTypeReference(mut ts_type_ref) => {
            let mut ref_arguments = None;
            if is_array {
                let true_literal = ast_builder.alloc_boolean_literal(SPAN, true);
                let mut temp_ref_arguments = ast_builder.vec();
                temp_ref_arguments.push(Argument::BooleanLiteral(true_literal));
                ref_arguments = Some(temp_ref_arguments);
            } else {
                let ref_is_array = ast_builder.alloc_identifier_reference(SPAN, "isArray");
                let mut temp_ref_arguments = ast_builder.vec();
                temp_ref_arguments.push(Argument::Identifier(ref_is_array));
                ref_arguments = Some(temp_ref_arguments);
            }

            if let TSTypeName::IdentifierReference(identifier) = &ts_type_ref.type_name {
                // create generic position function like zero_boostestHoge when main target generic
                if is_main_target {
                    let position = generic
                        .iter()
                        .position(|x| x == &identifier.name.to_string());

                    if let Some(index) = position {
                        let new_key = get_generic_prefix(index).to_string();
                        return ref_arg(ast_builder, &new_key, mock_func_name, None, None, None);
                    }
                }

                let new_key = format!("{}_{}", key_name, identifier.name.clone().into_string());

                if let Some(allocated_type_parameters) = &mut ts_type_ref.type_parameters {
                    let mut type_parameters =
                        ast_builder.move_ts_type_parameter_instantiation(allocated_type_parameters);

                    let mut arguments = ast_builder.vec();

                    for parameter in type_parameters.params.iter_mut() {
                        let arg_ts_type = ast_builder.move_ts_type(parameter);
                        let arg_expr = get_expression(
                            is_main_target,
                            ast_builder,
                            arg_ts_type,
                            key_name,
                            mock_func_name,
                            false,
                            false,
                            generic.clone(),
                        );

                        /* NOTE: generic_assigned_val is called, so prop is needed wrapping.

                                "key": partial_Partial_boostestLiteralAliasType(() => {
                                    return generic_assigned_val();
                                }),
                        */

                        let any_type_annotation = ast_builder.ts_type_any_keyword(SPAN);
                        let formal_parameter =
                            ast_builder.get_formal_parameter("isArray", any_type_annotation, true);

                        let mut items = ast_builder.vec();
                        items.push(formal_parameter);
                        let rest: Option<allocator::Box<BindingRestElement<'a>>> = None;

                        let allocated_formal_parameters =
                            ast_builder.alloc(ast_builder.formal_parameters(
                                SPAN,
                                FormalParameterKind::ArrowFormalParameters,
                                items,
                                rest,
                            ));

                        let (params, body) = function_parts(
                            ast_builder,
                            Some(allocated_formal_parameters),
                            Some(arg_expr),
                        );
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
                        let arg = Argument::ArrowFunctionExpression(r);

                        arguments.push(arg);
                    }

                    return ref_arg(
                        ast_builder,
                        &new_key,
                        mock_func_name,
                        None,
                        Some(arguments),
                        None,
                    );
                    // let new_generic_key = format!("{}_{}", key, parameter.);
                }

                return ref_arg(
                    ast_builder,
                    &new_key,
                    mock_func_name,
                    None,
                    ref_arguments,
                    None,
                );
            }
            ref_arg(
                ast_builder,
                key_name,
                mock_func_name,
                None,
                ref_arguments,
                None,
            )
        }
        TSType::TSObjectKeyword(_) => object_arg(ast_builder, None),
        TSType::TSVoidKeyword(_) => null_arg(ast_builder),

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
                    false,
                    ast_builder,
                    ts_type,
                    key_name,
                    mock_func_name,
                    false,
                    false,
                    vec![],
                ));
            }

            function_arg(
                ast_builder,
                Some(alloced_formal_parameters),
                return_expression,
            )
        }
        TSType::TSUndefinedKeyword(_) => undefined_arg(ast_builder),
        TSType::TSUnknownKeyword(_) => undefined_arg(ast_builder),
        TSType::TSConditionalType(ref mut ts_conditional_type) => {
            let mut ts_type = ast_builder.move_ts_type(&mut ts_conditional_type.true_type);

            if let TSType::TSTypeReference(_) = ts_type {
                ts_type = ast_builder.move_ts_type(&mut ts_conditional_type.false_type);
            }

            get_arg(
                is_main_target,
                ast_builder,
                ts_type,
                key_name,
                mock_func_name,
                generic,
                false,
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
                    is_main_target,
                    ast_builder,
                    ts_type,
                    key_name,
                    mock_func_name,
                    generic,
                    false,
                );
            }
            // fallback
            null_arg(ast_builder)
        }
        TSType::TSNeverKeyword(_) => null_arg(ast_builder),
        TSType::TSArrayType(_) => array_arg(ast_builder, None),
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
                                                false,
                                                ast_builder,
                                                ts_type,
                                                key_name,
                                                mock_func_name,
                                                vec![],
                                                false,
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
                    false,
                    ast_builder,
                    ts_type,
                    key_name,
                    mock_func_name,
                    false,
                    false,
                    vec![],
                );
                let array_expr = ArrayExpressionElement::from(new);
                new_elements.push(array_expr);
            }
            array_arg(ast_builder, Some(new_elements))
        }
        TSType::TSNamedTupleMember(ref mut ts_named_tuple_member) => {
            let ts_type =
                ast_builder.move_ts_type(ts_named_tuple_member.element_type.to_ts_type_mut());
            get_arg(
                is_main_target,
                ast_builder,
                ts_type,
                key_name,
                mock_func_name,
                generic,
                false,
            )
        }
        TSType::TSTypeLiteral(ref mut ts_type_literal) => {
            // {name: string, age: number}
            // { x: number; y: number; }`
            handle_ts_signatures_with_args(
                is_main_target,
                ast_builder,
                &mut ts_type_literal.members,
                None,
                mock_func_name,
                Some(key_name.to_string()),
                generic,
            )
        }
        TSType::TSIntersectionType(ref mut ts_intersection_type) => {
            let mut temp_expr = ast_builder.vec();

            for ts_type in ts_intersection_type.types.iter_mut() {
                let new_ts_type = ast_builder.move_ts_type(ts_type);
                let expr = get_expression(
                    false,
                    ast_builder,
                    new_ts_type,
                    key_name,
                    mock_func_name,
                    false,
                    false,
                    vec![],
                );
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
        TSType::TSTypeOperatorType(ts_type_operator_type) => {
            // keyof T
            if let TSType::TSTypeReference(ts_type_ref) = &ts_type_operator_type.type_annotation {
                let new_key = format!("{}_{}", key_name, ts_type_ref.type_name);
                let arg_expression =
                    ref_arg(ast_builder, &new_key, mock_func_name, None, None, None);

                if is_array {
                    return computed_object_full_key_member_arg(ast_builder, arg_expression);
                }
                return computed_object_key_member_arg(ast_builder, arg_expression);
            }
            object_arg(ast_builder, None)
        }
        TSType::TSTypePredicate(_) => {
            // x is string
            // TODO
            object_arg(ast_builder, None)
        }
        TSType::TSTypeQuery(ts_type_query) => {
            if let TSTypeQueryExprName::IdentifierReference(identifier) = &ts_type_query.expr_name {
                let new_key = format!("{}_{}", key_name, identifier.name.clone().into_string());
                return ref_arg(ast_builder, &new_key, mock_func_name, None, None, None);
            }
            ref_arg(ast_builder, key_name, mock_func_name, None, None, None)
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
        TSType::TSIndexedAccessType(ts_indexed_access_type) => {
            // person["name"]
            if let TSType::TSTypeReference(ts_object_type_ref) = &ts_indexed_access_type.object_type
            {
                if let TSType::TSLiteralType(ts_literal_type) = &ts_indexed_access_type.index_type {
                    let literal_expr =
                        get_expr_with_ts_literal_type(ast_builder, &ts_literal_type.literal);
                    let new_key = format!("{}_{}", key_name, ts_object_type_ref.type_name);
                    let call_expr =
                        ref_expr(ast_builder, &new_key, mock_func_name, None, None, None);

                    return computed_member_arg(ast_builder, call_expr, literal_expr);
                }
            }
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
        TSType::TSParenthesizedType(ref mut ts_parenthesized_type) => {
            let ts_type = ast_builder.move_ts_type(&mut ts_parenthesized_type.type_annotation);
            get_arg(
                false,
                ast_builder,
                ts_type,
                key_name,
                mock_func_name,
                vec![],
                false,
            )

            // ast_builder.expression_object(SPAN, ast_builder.vec(), None)
        }
    }
}
