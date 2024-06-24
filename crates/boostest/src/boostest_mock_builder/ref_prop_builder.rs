use oxc::ast::ast::{
    BigIntLiteral, BooleanLiteral, NullLiteral, NumericLiteral, RegExpLiteral, StringLiteral,
};

pub enum Literal<'a> {
    String(StringLiteral<'a>),
    Number(NumericLiteral<'a>),
    BigInt(BigIntLiteral<'a>),
    Bool(BooleanLiteral),
    Null(NullLiteral),
    RegExp(RegExpLiteral<'a>),
}

pub struct RefPropBuilder<'a> {
    key: String,
    val: Literal<'a>,
}

impl<'a> RefPropBuilder<'a> {
    pub fn new(key: String, val: Literal<'a>) -> Self {
        Self { key, val }
    }
}
