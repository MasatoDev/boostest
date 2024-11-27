use oxc::allocator::{self, Allocator, Vec as AllocVec};
use oxc::ast::visit::walk_mut::{
    walk_class, walk_ts_interface_declaration, walk_ts_type, walk_ts_type_alias_declaration,
    walk_ts_type_name, walk_variable_declarator,
};
use oxc::codegen::Codegen;
use oxc::parser::Parser;
use oxc::span::{SourceType, Span};

use oxc::ast::ast::{
    Class, ExportDefaultDeclaration, ExportDefaultDeclarationKind, ExportNamedDeclaration,
    TSInterfaceDeclaration, TSType, TSTypeAliasDeclaration, TSTypeAnnotation, TSTypeName,
};
use oxc::ast::ast::{Declaration, Statement};
use oxc::ast::{AstBuilder, VisitMut};

use crate::boostest_manager::propety_assignment::calc_prop_span;
use crate::boostest_target::target::TargetSupplement;
use crate::boostest_utils::ast_utils::{self, ignore_ref_name};
use crate::boostest_utils::id_name::get_id_with_hash;

pub struct OutputGenerator<'a> {
    pub is_main_target: bool,
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
        is_main_target: bool,
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
            is_main_target,
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

                walk_class(self, class);
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

            // if let Some(type_parameters) = &mut decl.type_parameters {
            //     for param in type_parameters.params.iter_mut() {
            //         println!("param {:?}", param.name);
            //         param.name = self
            //             .ast_builder
            //             .binding_identifier(Span::default(), self.get_name(param.name.to_string()));
            //     }
            // }

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

            walk_ts_interface_declaration(self, decl);
        }
    }

    fn visit_ts_type_name(&mut self, it: &mut TSTypeName<'a>) {
        if let TSTypeName::IdentifierReference(identifier) = it {
            let id_name = identifier.name.clone();

            if ignore_ref_name(&id_name) {
                return;
            }

            if !self.defined_generics.contains(&id_name.to_string()) {
                let span = calc_prop_span(identifier.span, Some(self.target_def_span));
                let var_name = get_id_with_hash(self.target_file_path.clone(), span);

                identifier.name = self.ast_builder.atom(&var_name);
            }
        }
        walk_ts_type_name(self, it);
    }

    // fn visit_ts_type(&mut self, it: &mut TSType<'a>) {
    //     match it {
    //         TSType::TSTypeReference(ty_ref) if ast_utils::is_defined_type(&ty_ref) => {}
    //         TSType::TSTypeReference(ty_ref) if ast_utils::is_function_type(&ty_ref) => {}
    //         TSType::TSTypeReference(ty_ref) if ast_utils::is_boolean_type(&ty_ref) => {}
    //         TSType::TSTypeReference(ts_type_ref) if ast_utils::is_array_type(ts_type_ref) => {}
    //         TSType::TSTypeReference(ref mut ts_type_ref) => {
    //             if let TSTypeName::IdentifierReference(identifier) = &mut ts_type_ref.type_name {
    //                 let id_name = identifier.name.clone();
    //
    //                 if !self.defined_generics.contains(&id_name.to_string()) {
    //                     let span = calc_prop_span(identifier.span, Some(self.target_def_span));
    //                     let var_name = get_id_with_hash(self.target_file_path.clone(), span);
    //
    //                     identifier.name = self.ast_builder.atom(&var_name);
    //                 }
    //             }
    //
    //             // if let Some(type_params) = &mut ts_type_ref.type_parameters {
    //             //     for param in type_params.params.iter_mut() {
    //             //
    //             //
    //             //
    //             //         if let TSType::TSTypeReference(ref mut ts_type_ref) = param {
    //             //             if let TSTypeName::IdentifierReference(identifier) =
    //             //                 &mut ts_type_ref.type_name
    //             //             {
    //             //                 let id_name = identifier.name.clone();
    //             //
    //             //                 let new_parent_key = match parent_key_name.clone() {
    //             //                     Some(p_key) if p_key.is_empty() => id_name.to_string(),
    //             //                     Some(p_key) => format!("{}_{}", p_key, id_name),
    //             //                     None => id_name.to_string(),
    //             //                 };
    //             //
    //             //                 println!("main_key_name {:?}", main_key_name);
    //             //                 println!("parent_key_name {:?}", parent_key_name);
    //             //
    //             //                 identifier.name = self.ast_builder.atom(&new_parent_key);
    //             //             }
    //             //         }
    //             //     }
    //             // }
    //         }
    //         // ts_type_literal.members = ts_signatures;
    //         _ => {}
    //     };
    //
    //     walk_ts_type(self, it);
    // }
}
