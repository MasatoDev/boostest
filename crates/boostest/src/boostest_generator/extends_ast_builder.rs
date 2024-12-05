use std::mem;

use oxc::{
    allocator::{self, Box},
    ast::{
        ast::{
            Class, ClassType, FormalParameter, TSInterfaceDeclaration, TSSignature, TSTupleElement,
            TSTupleType, TSType, TSTypeAliasDeclaration, TSTypeAnnotation,
            TSTypeParameterDeclaration, TSTypeParameterInstantiation,
        },
        AstBuilder,
    },
    span::Span,
};

const SPAN: Span = Span::new(0, 0);

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

    fn move_ts_tuple_element<'c>(self, decl: &'c mut TSTupleElement<'a>) -> TSTupleElement<'a>;

    fn move_ts_type_parameter_instantiation<'c>(
        self,
        decl: &'c mut TSTypeParameterInstantiation<'a>,
    ) -> TSTypeParameterInstantiation<'a>;

    fn move_ts_signature<'c>(self, decl: &'c mut TSSignature<'a>) -> TSSignature<'a>;

    fn get_spread_arg(self) -> FormalParameter<'a>;

    fn get_formal_parameter(
        self,
        name: &str,
        type_annotation: TSType<'a>,
        optional: bool,
    ) -> FormalParameter<'a>;
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

    fn move_ts_tuple_element<'c>(
        self,
        ts_tuple_type: &'c mut TSTupleElement<'a>,
    ) -> TSTupleElement<'a> {
        let empty_ts_tuple_type =
            TSTupleElement::TSNullKeyword(self.alloc_ts_null_keyword(Span::default()));
        mem::replace(ts_tuple_type, empty_ts_tuple_type)
    }

    fn move_ts_type_parameter_instantiation<'c>(
        self,
        ts_type_parameter_instantiation: &'c mut TSTypeParameterInstantiation<'a>,
    ) -> TSTypeParameterInstantiation<'a> {
        let empty_ts_type_parameter_instantiation =
            self.ts_type_parameter_instantiation(Span::default(), self.vec());

        mem::replace(
            ts_type_parameter_instantiation,
            empty_ts_type_parameter_instantiation,
        )
    }

    fn move_ts_signature<'c>(self, ts_signature: &'c mut TSSignature<'a>) -> TSSignature<'a> {
        let prop_key = self.property_key_identifier_name(SPAN, "");
        let type_annotation: Option<allocator::Box<TSTypeAnnotation<'a>>> = None;
        let empty_ts_signature = self.ts_signature_property_signature(
            SPAN,
            false,
            false,
            false,
            prop_key,
            type_annotation,
        );
        mem::replace(ts_signature, empty_ts_signature)
    }

    fn get_spread_arg(self) -> FormalParameter<'a> {
        let pattern_kind = self.binding_pattern_kind_binding_identifier(SPAN, "args");

        let type_name = self.ts_type_name_identifier_reference(SPAN, "T");
        let type_parameters: Option<allocator::Box<TSTypeParameterInstantiation<'a>>> = None;
        let type_param = self.ts_type_type_reference(SPAN, type_name, type_parameters);
        let mut type_params = self.vec();
        type_params.push(type_param);
        let main_type_name = self.ts_type_name_identifier_reference(SPAN, "Partial");
        let ts_type_instantiation = self.ts_type_parameter_instantiation(SPAN, type_params);
        let type_ref =
            self.ts_type_type_reference(SPAN, main_type_name, Some(ts_type_instantiation));

        let type_annotation = self.ts_type_annotation(SPAN, type_ref);

        let pattern = self.binding_pattern(pattern_kind, Some(type_annotation), true);
        self.formal_parameter(SPAN, self.vec(), pattern, None, false, false)
    }

    fn get_formal_parameter(
        self,
        name: &str,
        type_annotation: TSType<'a>,
        optional: bool,
    ) -> FormalParameter<'a> {
        let pattern_kind = self.binding_pattern_kind_binding_identifier(SPAN, name);
        let allocated_type_annotation = self.alloc_ts_type_annotation(SPAN, type_annotation);
        let pattern = self.binding_pattern(pattern_kind, Some(allocated_type_annotation), optional);
        self.formal_parameter(SPAN, self.vec(), pattern, None, false, false)
    }
}
