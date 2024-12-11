use std::cell::Cell;

use super::extends_ast_builder::AstBuilderExt;
use oxc::{
    allocator,
    ast::{
        ast::{
            Argument, ArrayExpression, ArrayExpressionElement, ArrowFunctionExpression,
            BigIntLiteral, BindingRestElement, BooleanLiteral, CallExpression,
            ComputedMemberExpression, Expression, FormalParameterKind, FormalParameters,
            FunctionBody, IdentifierReference, NullLiteral, NumericLiteral, ObjectExpression,
            ObjectPropertyKind, PropertyKey, PropertyKind, StringLiteral, TSLiteral, TSSignature,
            TSTupleElement, TSType, TSTypeAnnotation, TSTypeName, TSTypeParameterDeclaration,
            TSTypeParameterInstantiation,
        },
        AstBuilder,
    },
    span::{Atom, Span},
    syntax::number::{BigintBase, NumberBase},
};

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

const SPAN: Span = Span::new(0, 0);

pub fn symbol_expr<'a>(ast_builder: &AstBuilder<'a>) -> Expression<'a> {
    let new_callee = ast_builder.expression_identifier_reference(SPAN, "Symbol");
    let args = ast_builder.vec();
    let type_parameters: Option<allocator::Box<TSTypeParameterInstantiation<'a>>> = None;
    ast_builder.expression_call(SPAN, new_callee, type_parameters, args, false)
}

pub fn symbol_arg<'a>(ast_builder: &AstBuilder<'a>) -> Argument<'a> {
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
