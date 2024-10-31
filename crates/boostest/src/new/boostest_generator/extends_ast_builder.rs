use std::mem;

use oxc::{
    allocator::Box,
    ast::{
        ast::{
            Class, ClassType, TSInterfaceBody, TSInterfaceDeclaration, TSType,
            TSTypeAliasDeclaration, TSTypeParameterDeclaration, TSTypeParameterInstantiation,
        },
        AstBuilder,
    },
    span::Span,
};

pub trait AstBuilderExt<'a> {
    fn move_ts_type_alias_declatration<'c>(
        self,
        decl: &'c mut TSTypeAliasDeclaration<'a>,
    ) -> TSTypeAliasDeclaration<'a>;

    fn move_ts_interface_declatration<'c>(
        self,
        decl: &'c mut TSInterfaceDeclaration<'a>,
    ) -> TSInterfaceDeclaration<'a>;

    fn move_class<'c>(self, decl: &'c mut Class<'a>) -> Class<'a>;

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

    fn move_ts_interface_declatration<'c>(
        self,
        decl: &'c mut TSInterfaceDeclaration<'a>,
    ) -> TSInterfaceDeclaration<'a> {
        let type_parameters: Option<Box<TSTypeParameterDeclaration>> = None;
        let body_signature = self.vec();
        let body = self.alloc_ts_interface_body(Span::default(), body_signature);

        let empty_decl = self.ts_interface_declaration(
            Span::default(),
            self.binding_identifier(Span::default(), ""),
            None,
            type_parameters,
            body,
            false,
        );
        // let empty_decl = Declaration::TSTypeAliasDeclaration(self.alloc(empty_decl));
        mem::replace(decl, empty_decl)
    }

    fn move_class<'c>(self, class: &'c mut Class<'a>) -> Class<'a> {
        let decl: Option<Box<TSTypeParameterDeclaration>> = None;
        let ts_type_param: Option<Box<TSTypeParameterInstantiation>> = None;
        let body = self.class_body(Span::default(), self.vec());

        let empty_class = self.class(
            ClassType::ClassDeclaration,
            Span::default(),
            self.vec(),
            None,
            decl,
            None,
            ts_type_param,
            None,
            body,
            false,
            false,
        );
        // let empty_decl = Declaration::TSTypeAliasDeclaration(self.alloc(empty_decl));
        mem::replace(class, empty_class)
    }

    fn move_ts_type<'c>(self, ts_type: &'c mut TSType<'a>) -> TSType<'a> {
        let empty_ts_type = TSType::TSNullKeyword(self.alloc_ts_null_keyword(Span::default()));
        mem::replace(ts_type, empty_ts_type)
    }
}
