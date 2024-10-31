use std::mem;

use oxc::{
    allocator::Box,
    ast::{
        ast::{TSType, TSTypeAliasDeclaration, TSTypeParameterDeclaration},
        AstBuilder,
    },
    span::Span,
};

pub trait AstBuilderExt<'a> {
    fn move_ts_type_alias_declatration<'c>(
        self,
        decl: &'c mut TSTypeAliasDeclaration<'a>,
    ) -> TSTypeAliasDeclaration<'a>;

    fn move_ts_type<'c>(self, decl: &'c mut TSType<'a>) -> TSType<'a>;
}

impl<'a> AstBuilderExt<'a> for AstBuilder<'a> {
    fn move_ts_type_alias_declatration<'c>(
        self,
        decl: &'c mut TSTypeAliasDeclaration<'a>,
    ) -> TSTypeAliasDeclaration<'a> {
        let type_parameters: Option<Box<TSTypeParameterDeclaration>> = None;
        let empty_decl = self.ts_type_alias_declaration(
            Span::default(),
            self.binding_identifier(Span::default(), ""),
            type_parameters,
            TSType::TSNullKeyword(self.alloc_ts_null_keyword(Span::default())),
            false,
        );
        // let empty_decl = Declaration::TSTypeAliasDeclaration(self.alloc(empty_decl));
        mem::replace(decl, empty_decl)
    }

    fn move_ts_type<'c>(self, ts_type: &'c mut TSType<'a>) -> TSType<'a> {
        let empty_ts_type = TSType::TSNullKeyword(self.alloc_ts_null_keyword(Span::default()));
        mem::replace(ts_type, empty_ts_type)
    }
}
