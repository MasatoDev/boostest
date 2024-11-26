use oxc::allocator::{self, Allocator, Vec as AllocVec};
use oxc::ast::visit::walk_mut::{
    walk_class, walk_ts_interface_declaration, walk_ts_type, walk_ts_type_alias_declaration,
};
use oxc::codegen::Codegen;
use oxc::parser::Parser;
use oxc::span::{SourceType, Span};

use oxc::ast::ast::{
    Class, ExportDefaultDeclaration, ExportDefaultDeclarationKind, ExportNamedDeclaration,
    TSInterfaceDeclaration, TSType, TSTypeAliasDeclaration, TSTypeName,
};
use oxc::ast::ast::{Declaration, Statement};
use oxc::ast::{AstBuilder, VisitMut};

use crate::boostest_manager::propety_assignment::calc_prop_span;
use crate::boostest_target::target::TargetSupplement;
use crate::boostest_utils::ast_utils;
use crate::boostest_utils::id_name::get_id_with_hash;

pub struct OutputGenerator<'a> {
    pub is_main_target: bool,
    pub specifier: &'a str,
    pub func_name: &'a str,
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
        func_name: &'a str,
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
            func_name,
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
    fn visit_statements(&mut self, stmts: &mut AllocVec<'a, Statement<'a>>) {
        for stmt in stmts.iter_mut() {
            match stmt {
                /**********/
                /* Import */
                /**********/
                Statement::ExportNamedDeclaration(export_named_decl) => {
                    self.visit_export_named_declaration(export_named_decl);
                }
                Statement::ExportDefaultDeclaration(export_default_decl) => {
                    self.visit_export_default_declaration(export_default_decl);
                }

                /***************/
                /* Declaration */
                /***************/
                Statement::ClassDeclaration(class) => self.visit_class(class),
                Statement::TSTypeAliasDeclaration(decl) => {
                    self.visit_ts_type_alias_declaration(decl);
                }
                Statement::TSInterfaceDeclaration(decl) => {
                    self.visit_ts_interface_declaration(decl);
                }

                _ => {
                    // println!("Another Statement {:?}", stmt);
                }
            }
        }
    }

    fn visit_export_default_declaration(&mut self, decl: &mut ExportDefaultDeclaration<'a>) {
        match &mut decl.declaration {
            ExportDefaultDeclarationKind::ClassDeclaration(class) => {
                self.visit_class(class);
            }
            ExportDefaultDeclarationKind::TSInterfaceDeclaration(ts_interface_decl) => {
                self.visit_ts_interface_declaration(ts_interface_decl);
            }
            ExportDefaultDeclarationKind::FunctionDeclaration(_) => {}
            _ => {}
        }
    }

    /*************************************************/
    /*************************************************/
    /*                Import / Export                */
    /*************************************************/
    /*************************************************/

    fn visit_export_named_declaration(&mut self, decl: &mut ExportNamedDeclaration<'a>) {
        let ExportNamedDeclaration { declaration, .. } = decl;

        if let Some(export_named_decl) = declaration {
            match export_named_decl {
                Declaration::ClassDeclaration(class) => {
                    self.visit_class(class);
                }
                Declaration::TSTypeAliasDeclaration(decl) => {
                    self.visit_ts_type_alias_declaration(decl);
                }
                Declaration::TSInterfaceDeclaration(decl) => {
                    self.visit_ts_interface_declaration(decl)
                }
                _ => {
                    // println!("Another Statement {:?}", export_named_decl);
                }
            }
        }
    }

    /*************************************************/
    /*************************************************/
    /*                Handle Targets                 */
    /*************************************************/
    /*************************************************/

    fn visit_class(&mut self, class: &mut Class<'a>) {
        if let Some(identifier) = &class.id {
            if identifier.name.to_string() == self.specifier {
                let new_name = if self.is_main_target {
                    self.func_name.to_string()
                } else {
                    self.var_name.clone()
                };

                class.id = Some(
                    self.ast_builder
                        .binding_identifier(Span::default(), new_name),
                );

                walk_class(self, class);
            }
        }
    }

    // handle mock target is type alias
    fn visit_ts_type_alias_declaration(&mut self, decl: &mut TSTypeAliasDeclaration<'a>) {
        if decl.id.name.to_string() == self.specifier {
            let new_name = if self.is_main_target {
                self.func_name.to_string()
            } else {
                self.var_name.clone()
            };

            decl.id = self
                .ast_builder
                .binding_identifier(Span::default(), new_name);

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
            let new_name = if self.is_main_target {
                self.func_name.to_string()
            } else {
                self.var_name.clone()
            };

            decl.id = self
                .ast_builder
                .binding_identifier(Span::default(), new_name);

            walk_ts_interface_declaration(self, decl);
        }
    }

    fn visit_ts_type(&mut self, it: &mut TSType<'a>) {
        match it {
            TSType::TSTypeReference(ty_ref) if ast_utils::is_defined_type(&ty_ref) => {}
            TSType::TSTypeReference(ty_ref) if ast_utils::is_function_type(&ty_ref) => {}
            TSType::TSTypeReference(ty_ref) if ast_utils::is_boolean_type(&ty_ref) => {}
            TSType::TSTypeReference(ts_type_ref) if ast_utils::is_array_type(ts_type_ref) => {}
            TSType::TSTypeReference(ref mut ts_type_ref) => {
                if let TSTypeName::IdentifierReference(identifier) = &mut ts_type_ref.type_name {
                    let id_name = identifier.name.clone();

                    if !self.defined_generics.contains(&id_name.to_string()) {
                        let span = calc_prop_span(identifier.span, Some(self.target_def_span));
                        let var_name = get_id_with_hash(self.target_file_path.clone(), span);

                        identifier.name = self.ast_builder.atom(&var_name);
                    }
                }

                // if let Some(type_params) = &mut ts_type_ref.type_parameters {
                //     for param in type_params.params.iter_mut() {
                //
                //
                //
                //         if let TSType::TSTypeReference(ref mut ts_type_ref) = param {
                //             if let TSTypeName::IdentifierReference(identifier) =
                //                 &mut ts_type_ref.type_name
                //             {
                //                 let id_name = identifier.name.clone();
                //
                //                 let new_parent_key = match parent_key_name.clone() {
                //                     Some(p_key) if p_key.is_empty() => id_name.to_string(),
                //                     Some(p_key) => format!("{}_{}", p_key, id_name),
                //                     None => id_name.to_string(),
                //                 };
                //
                //                 println!("main_key_name {:?}", main_key_name);
                //                 println!("parent_key_name {:?}", parent_key_name);
                //
                //                 identifier.name = self.ast_builder.atom(&new_parent_key);
                //             }
                //         }
                //     }
                // }
            }
            // ts_type_literal.members = ts_signatures;
            _ => {}
        };

        walk_ts_type(self, it);
    }
}