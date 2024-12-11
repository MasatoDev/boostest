use std::sync::{Arc, Mutex};

use oxc::allocator::{self, Allocator};
use oxc::ast::visit::walk_mut::{
    walk_ts_type, walk_ts_type_alias_declaration, walk_ts_type_name, walk_variable_declarator,
};
use oxc::codegen::Codegen;
use oxc::parser::Parser;
use oxc::span::{SourceType, Span, SPAN};

use oxc::ast::ast::{
    Class, TSInterfaceDeclaration, TSType, TSTypeAliasDeclaration, TSTypeAnnotation, TSTypeName,
};
use oxc::ast::{AstBuilder, VisitMut};

use crate::boostest_generator::extends_ast_builder::AstBuilderExt;
use crate::boostest_resolver::target::ResolvedDefinitions;
use crate::boostest_utils::ast_utils::{calc_prop_span, ignore_ref_name};
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

        self.code = Some(Codegen::new().build(&program).code);
    }
}

impl<'a> VisitMut<'a> for OutputGenerator<'a> {
    /*************************************************/
    /*************************************************/
    /*                Handle Targets                 */
    /*************************************************/
    /*************************************************/

    fn visit_variable_declarator(&mut self, it: &mut oxc::ast::ast::VariableDeclarator<'a>) {
        if let Some(id) = it.id.get_identifier() {
            if id == self.specifier {
                let binding_id = self.ast_builder.binding_pattern_kind_binding_identifier(
                    Span::default(),
                    self.var_name.clone(),
                );
                let none: Option<allocator::Box<TSTypeAnnotation<'a>>> = None;

                it.id = self.ast_builder.binding_pattern(binding_id, none, false);

                walk_variable_declarator(self, it);
            }
        }
    }

    fn visit_class(&mut self, class: &mut Class<'a>) {
        if let Some(identifier) = &class.id {
            if identifier.name.to_string() == self.specifier {
                // let new_name = if self.is_main_target {
                //     self.func_name.to_string()
                // } else {
                //     self.var_name.clone()
                // };

                class.id = Some(
                    self.ast_builder
                        .binding_identifier(Span::default(), self.var_name.clone()),
                );

                if let Some(id) = &mut class.id {
                    self.visit_binding_identifier(id);
                }

                if let Some(type_parameters) = &mut class.type_parameters {
                    self.visit_ts_type_parameter_declaration(type_parameters);
                }

                class.super_class = None;
                // if let Some(super_class) = &mut class.super_class {
                //     self.visit_expression(super_class);
                // }
                // if let Some(super_type_parameters) = &mut class.super_type_parameters {
                //     self.visit_ts_type_parameter_instantiation(super_type_parameters);
                // }
                if let Some(implements) = &mut class.implements {
                    self.visit_ts_class_implementses(implements);
                }
                self.visit_class_body(&mut class.body);
            }
        }
    }

    // handle mock target is type alias
    fn visit_ts_type_alias_declaration(&mut self, decl: &mut TSTypeAliasDeclaration<'a>) {
        if decl.id.name.to_string() == self.specifier {
            // let new_name = if self.is_main_target {
            //     self.func_name.to_string()
            // } else {
            //     self.var_name.clone()
            // };

            decl.id = self
                .ast_builder
                .binding_identifier(Span::default(), self.var_name.clone());

            if let Some(type_parameters) = &mut decl.type_parameters {
                self.visit_ts_type_parameter_declaration(type_parameters);
            }

            walk_ts_type_alias_declaration(self, decl);
        }
    }

    fn visit_ts_interface_declaration(&mut self, decl: &mut TSInterfaceDeclaration<'a>) {
        if decl.id.name.to_string() == self.specifier {
            // let new_name = if self.is_main_target {
            //     self.func_name.to_string()
            // } else {
            //     self.var_name.clone()
            // };

            decl.id = self
                .ast_builder
                .binding_identifier(Span::default(), self.var_name.clone());

            decl.extends = None;
            // if let Some(extends) = &mut decl.extends {
            //     self.visit_ts_interface_heritages(extends);
            // }
            if let Some(type_parameters) = &mut decl.type_parameters {
                self.visit_ts_type_parameter_declaration(type_parameters);
            }
            self.visit_ts_interface_body(&mut decl.body);
        }

        // if let Some(extends) = &mut decl.extends {
        //     for extend in extends.iter_mut() {
        //         if let Expression::Identifier(id) = &mut extend.expression {
        //             let id_name = id.name.clone().into_string();
        //
        //             let span = calc_prop_span(id.span, Some(self.target_def_span));
        //             let var_name = get_id_with_hash(self.target_file_path.clone(), span);
        //
        //             id.name = self.ast_builder.atom(&var_name);
        //         }
        //     }
        // }
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
                    .get_target_def_hash_name_with_key(&key_name);

                let id_name = self.ast_builder.alloc_identifier_reference(
                    Span::default(),
                    &var_name.unwrap_or(id_name.to_string()),
                );

                new_type_name = Some(TSTypeName::IdentifierReference(id_name));
            }
        }

        if let TSTypeName::QualifiedName(qualified_name) = it {
            let span = calc_prop_span(qualified_name.right.span, Some(self.target_def_span));
            let key_name = get_id_with_hash(self.target_file_path.clone(), span);
            let var_name = self
                .resolved_definitions
                .lock()
                .unwrap()
                .get_target_def_hash_name_with_key(&key_name);

            let id_name = self.ast_builder.alloc_identifier_reference(
                Span::default(),
                &var_name.unwrap_or(qualified_name.to_string()),
            );

            new_type_name = Some(TSTypeName::IdentifierReference(id_name));
        }

        if let Some(new_type_name) = new_type_name {
            *it = new_type_name;
        }

        walk_ts_type_name(self, it);
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
}
