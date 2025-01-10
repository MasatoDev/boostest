use std::sync::{Arc, Mutex};

use oxc::allocator::{self, Allocator, Vec as AllocVec};
use oxc::ast::visit::walk_mut::{
    walk_class, walk_function, walk_statements, walk_ts_enum_declaration,
    walk_ts_interface_declaration, walk_ts_module_declaration, walk_ts_type,
    walk_ts_type_alias_declaration, walk_ts_type_name, walk_variable_declarator,
};
use oxc::codegen::Codegen;
use oxc::parser::Parser;
use oxc::span::{SourceType, Span, SPAN};

use oxc::ast::ast::{
    BindingPatternKind, Class, IdentifierName, IdentifierReference, PropertyKey, Statement,
    TSInterfaceDeclaration, TSType, TSTypeAliasDeclaration, TSTypeAnnotation, TSTypeName,
    TSTypeQueryExprName,
};
use oxc::ast::{match_expression, match_ts_type_name, AstBuilder, VisitMut};

use crate::boostest_generator::extends_ast_builder::AstBuilderExt;
use crate::boostest_resolver::target::ResolvedDefinitions;
use crate::boostest_utils::ast_utils::{calc_prop_span, ignore_name, ignore_ref_name};
use crate::boostest_utils::id_name::get_id_with_hash;

pub struct OutputGenerator<'a> {
    pub resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
    pub specifier: &'a str,
    var_name: String,
    target_def_span: Span,
    target_file_path: String,

    defined_generics: Vec<String>,
    source_text: &'a str,
    allocator: &'a Allocator,
    ast_builder: AstBuilder<'a>,
    source_type: SourceType,

    pub code: Option<String>,
}

impl<'a, 'b: 'a> OutputGenerator<'a> {
    pub fn new(
        resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
        allocator: &'b Allocator,
        specifier: &'a str,
        var_name: String,
        target_def_span: Span,
        target_file_path: String,
        defined_generics: Vec<String>,
        source_text: &'a str,
    ) -> Self {
        let ast_builder = AstBuilder::new(allocator);
        Self {
            resolved_definitions,
            specifier,
            source_text,
            var_name,
            target_file_path,
            target_def_span,
            defined_generics,
            allocator,
            ast_builder,
            source_type: SourceType::ts(),
            code: None,
        }
    }

    pub fn generate(&mut self) {
        let parser = Parser::new(self.allocator, self.source_text, self.source_type);
        let mut program = parser.parse().program;

        self.visit_statements(&mut program.body);
        program.comments = AllocVec::new_in(self.allocator);

        self.code = Some(Codegen::new().build(&program).code);
    }
}

impl<'a> VisitMut<'a> for OutputGenerator<'a> {
    /*************************************************/
    /*************************************************/
    /*                Handle Targets                 */
    /*************************************************/
    /*************************************************/

    fn visit_statements(&mut self, it: &mut AllocVec<'a, Statement<'a>>) {
        it.retain(|stmt| {
            let result: bool = match stmt {
                Statement::ImportDeclaration(_) => false,
                Statement::TSImportEqualsDeclaration(_) => false,
                _ => true,
            };
            result
        });
        walk_statements(self, it);
    }

    fn visit_function(
        &mut self,
        it: &mut oxc::ast::ast::Function<'a>,
        flags: oxc::semantic::ScopeFlags,
    ) {
        if let Some(id) = &it.id {
            if id.name == self.specifier {
                let new_name = self.var_name.clone();
                it.id = Some(
                    self.ast_builder
                        .binding_identifier(Span::default(), new_name),
                );
            }
        }

        walk_function(self, it, flags);
    }

    fn visit_ts_enum_member_name(&mut self, _it: &mut oxc::ast::ast::TSEnumMemberName<'a>) {
        // skip enum member name
    }

    fn visit_ts_enum_declaration(&mut self, it: &mut oxc::ast::ast::TSEnumDeclaration<'a>) {
        if it.id.name == self.specifier {
            it.id = self
                .ast_builder
                .binding_identifier(Span::default(), self.var_name.clone());
        }
        walk_ts_enum_declaration(self, it);
    }

    fn visit_ts_module_declaration(&mut self, it: &mut oxc::ast::ast::TSModuleDeclaration<'a>) {
        if it.id.to_string() == self.specifier {
            it.id = self
                .ast_builder
                .ts_module_declaration_name_binding_identifier(SPAN, self.var_name.clone());
        }
        walk_ts_module_declaration(self, it);
    }

    fn visit_variable_declarator(&mut self, it: &mut oxc::ast::ast::VariableDeclarator<'a>) {
        if let Some(id) = it.id.get_identifier() {
            if id == self.specifier {
                match &mut it.id.kind {
                    BindingPatternKind::BindingIdentifier(binding_id) => {
                        let new_atom = self.ast_builder.atom(&self.var_name);
                        binding_id.name = new_atom;
                    }
                    _ => {}
                }
            }
        }
        walk_variable_declarator(self, it);
    }

    fn visit_class(&mut self, class: &mut Class<'a>) {
        if let Some(identifier) = &class.id {
            if identifier.name == self.specifier {
                class.id = Some(
                    self.ast_builder
                        .binding_identifier(Span::default(), self.var_name.clone()),
                );
            }
        }
        // class.super_class = None;
        walk_class(self, class);
    }

    // handle mock target is type alias
    fn visit_ts_type_alias_declaration(&mut self, decl: &mut TSTypeAliasDeclaration<'a>) {
        if decl.id.name == self.specifier {
            decl.id = self
                .ast_builder
                .binding_identifier(Span::default(), self.var_name.clone());
        }

        walk_ts_type_alias_declaration(self, decl);
    }

    fn visit_ts_interface_declaration(&mut self, decl: &mut TSInterfaceDeclaration<'a>) {
        if decl.id.name.to_string() == self.specifier {
            decl.id = self
                .ast_builder
                .binding_identifier(Span::default(), self.var_name.clone());
        }
        // decl.extends = None;
        walk_ts_interface_declaration(self, decl);
    }

    fn visit_ts_type(&mut self, it: &mut TSType<'a>) {
        let mut new_ts_type: Option<TSType> = None;

        match it {
            TSType::TSArrayType(ts_array_type) => {
                let new_element_ts_type = self
                    .ast_builder
                    .move_ts_type(&mut ts_array_type.element_type);
                let new_name = self
                    .ast_builder
                    .ts_type_name_identifier_reference(SPAN, "Array");
                let mut params = self.ast_builder.vec();
                params.push(new_element_ts_type);
                let ts_type_parameter_instantiation = self
                    .ast_builder
                    .ts_type_parameter_instantiation(SPAN, params);

                new_ts_type = Some(self.ast_builder.ts_type_type_reference(
                    SPAN,
                    new_name,
                    Some(ts_type_parameter_instantiation),
                ));
            }
            _ => {}
        };

        if let Some(new_ts_type) = new_ts_type {
            *it = new_ts_type;
        }
        walk_ts_type(self, it);
    }

    /*************************************************/
    /*************************************************/
    /*                Handle Property                */
    /*************************************************/
    /*************************************************/

    fn visit_property_key(&mut self, it: &mut oxc::ast::ast::PropertyKey<'a>) {
        match it {
            // PropertyKey::StaticIdentifier(it) => self.visit_identifier_name(it),
            // PropertyKey::PrivateIdentifier(it) => self.visit_private_identifier(it),
            match_expression!(PropertyKey) => self.visit_expression(it.to_expression_mut()),
            _ => {
                /* NOTE: skip property key name */
                // class SimpleClass {
                //   name: string; // Skip ‘name’ through visit_identifier_name.
                //   ver: number; // Skip ‘name’ through visit_identifier_name.
                //   constructor(name: string, ver: number) {
                //     this.name = name;
                //     this.ver = ver;
                //   }
                // }
            }
        }
    }

    fn visit_identifier_name(&mut self, identifier: &mut IdentifierName<'a>) {
        let id_name = identifier.name.clone().into_string();
        if ignore_name(&id_name) {
            return;
        }

        if !self.defined_generics.contains(&id_name.to_string()) {
            let span = calc_prop_span(identifier.span, Some(self.target_def_span));
            let key_name = get_id_with_hash(self.target_file_path.clone(), span);
            let var_name = self
                .resolved_definitions
                .lock()
                .unwrap()
                .get_target_def_hash_name_with_key(&key_name, &id_name);

            let id_name = self
                .ast_builder
                .identifier_name(Span::default(), &var_name.unwrap_or(id_name.to_string()));

            *identifier = id_name;
        }
    }

    fn visit_identifier_reference(&mut self, identifier: &mut IdentifierReference<'a>) {
        let id_name = identifier.name.clone();
        if ignore_ref_name(&id_name) {
            return;
        }

        if !self.defined_generics.contains(&id_name.to_string()) {
            let span = calc_prop_span(identifier.span, Some(self.target_def_span));
            let key_name = get_id_with_hash(self.target_file_path.clone(), span);
            let var_name = self
                .resolved_definitions
                .lock()
                .unwrap()
                .get_target_def_hash_name_with_key(&key_name, &id_name);

            let id_name = self
                .ast_builder
                .identifier_reference(Span::default(), &var_name.unwrap_or(id_name.to_string()));

            *identifier = id_name;
        }
    }

    fn visit_ts_qualified_name(&mut self, qualified_name: &mut oxc::ast::ast::TSQualifiedName<'a>) {
        let span = calc_prop_span(qualified_name.right.span, Some(self.target_def_span));
        let key_name = get_id_with_hash(self.target_file_path.clone(), span);
        let var_name = self
            .resolved_definitions
            .lock()
            .unwrap()
            .get_target_def_hash_name_with_key(&key_name, &qualified_name.left.to_string());

        let id_name = self.ast_builder.alloc_identifier_reference(
            Span::default(),
            &var_name.unwrap_or(qualified_name.left.to_string()),
        );

        qualified_name.left = TSTypeName::IdentifierReference(id_name);
    }
    fn visit_ts_type_name(&mut self, it: &mut TSTypeName<'a>) {
        let mut new_type_name = None;

        if let TSTypeName::IdentifierReference(identifier) = it {
            let id_name = identifier.name.clone();

            if ignore_ref_name(&id_name) {
                return;
            }

            if !self.defined_generics.contains(&id_name.to_string()) {
                let span = calc_prop_span(identifier.span, Some(self.target_def_span));
                let key_name = get_id_with_hash(self.target_file_path.clone(), span);
                let var_name = self
                    .resolved_definitions
                    .lock()
                    .unwrap()
                    .get_target_def_hash_name_with_key(&key_name, &id_name);

                let id_name = self.ast_builder.alloc_identifier_reference(
                    Span::default(),
                    &var_name.unwrap_or(id_name.to_string()),
                );

                new_type_name = Some(TSTypeName::IdentifierReference(id_name));
            }
        }

        if let Some(new_type_name) = new_type_name {
            *it = new_type_name;
        }

        if let TSTypeName::QualifiedName(qualified_name) = it {
            let span = calc_prop_span(qualified_name.right.span, Some(self.target_def_span));
            let key_name = get_id_with_hash(self.target_file_path.clone(), span);
            let var_name = self
                .resolved_definitions
                .lock()
                .unwrap()
                .get_target_def_hash_name_with_key(&key_name, &qualified_name.left.to_string());

            let id_name = self.ast_builder.alloc_identifier_reference(
                Span::default(),
                &var_name.unwrap_or(qualified_name.left.to_string()),
            );
            new_type_name = Some(TSTypeName::IdentifierReference(id_name));

            if let Some(new_type_name) = new_type_name {
                qualified_name.left = new_type_name;
            }
        }

        walk_ts_type_name(self, it);
    }
}
