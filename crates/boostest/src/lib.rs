use boostest_oxc_utils::{ExpressionExt, IntoIn, OxcAst, OxcCompiler, StatementExt};

use oxc::ast::ast::{Declaration, Program};
use oxc::ast::Visit;
use oxc::ast::{ast::Argument, AstKind};
use oxc_resolver::{AliasValue, ResolveOptions, Resolver};

use oxc::{
    ast::ast::{
        Argument::{ObjectExpression, SpreadElement},
        Declaration::{
            ClassDeclaration, TSInterfaceDeclaration, TSTypeAliasDeclaration, VariableDeclaration,
        },
        Expression::{CallExpression, Identifier},
        ImportDeclaration, ImportDeclarationSpecifier, Statement, StringLiteral,
        TSPropertySignature,
        TSType::TSTypeReference,
        TSTypeAnnotation,
        TSTypeName::IdentifierReference,
    },
    syntax::identifier,
};

use oxc::span::SourceType;

use std::fs::File;
use std::io;
use std::io::prelude::*;
use std::path::Path;
use std::{fs, io::ErrorKind};

struct Property<'a> {
    signature: &'a TSPropertySignature<'a>,
    annotation: &'a TSTypeAnnotation<'a>,
}

#[derive(Debug)]
enum MockTarget<'a> {
    Type {
        name: &'a str,
        declaration: Option<&'a Declaration<'a>>,
    },
    Class {
        name: &'a str,
        declaration: Option<&'a Declaration<'a>>,
    },
    None,
}

struct Mock<'a> {
    name: String,
    properties: Vec<Property<'a>>,
    target: MockTarget<'a>,
}

impl<'a> Mock<'a> {
    fn new(name: String) -> Self {
        Mock {
            name,
            properties: Vec::new(),
            target: MockTarget::None,
        }
    }

    fn add_ts_type(&mut self, ts_type: &'a str) {
        self.target = MockTarget::Type {
            name: ts_type,
            declaration: None,
        };
    }

    fn add_class(&mut self, class: &'a str) {
        self.target = MockTarget::Class {
            name: class,
            declaration: None,
        };
    }

    fn get_unresolved_target_name(&self) -> Option<&str> {
        match &self.target {
            MockTarget::Type { name, declaration } => {
                if declaration.is_none() {
                    return Some(name);
                }
                return None;
            }
            MockTarget::Class { name, declaration } => {
                if declaration.is_none() {
                    return Some(name);
                }
                return None;
            }
            _ => return None,
        }
    }

    fn add_declaration(&mut self, declaration: &'a Declaration<'a>) {
        match &mut self.target {
            MockTarget::Type {
                declaration: decl, ..
            } => {
                *decl = Some(declaration);
            }
            MockTarget::Class {
                declaration: decl, ..
            } => {
                *decl = Some(declaration);
            }
            _ => {}
        }
    }

    fn debug(&self) {
        println!("name: {:?}", self.name);
        println!("target: {:?}", self.target);
    }

    // fn add_property(&mut self, property: Property) {
    //     self.properties.push(property);
    // }
}

struct MockBuilder<'a> {
    mocks: Vec<Mock<'a>>,
    root_file_declarations: Vec<&'a Declaration<'a>>,
}

impl<'a> MockBuilder<'a> {
    fn new() -> Self {
        MockBuilder {
            mocks: Vec::new(),
            root_file_declarations: Vec::new(),
        }
    }

    fn add_mock(&mut self, mock: Mock<'a>) {
        self.mocks.push(mock);
    }

    fn debug(&self) {
        for mock in &self.mocks {
            println!("-------------------------------------");
            mock.debug();
            println!("-------------------------------------");
        }
    }

    fn get_unresolved_target_names(&self) -> Vec<&str> {
        let mut unresolved_target_names: Vec<&str> = Vec::new();

        for mock in &self.mocks {
            if let Some(name) = mock.get_unresolved_target_name() {
                println!("Unresolved target name: {:?}", name);
                unresolved_target_names.push(name);
            }
        }
        unresolved_target_names
    }

    fn attach_declaration_only_root(&mut self) {
        for mock in &mut self.mocks {
            for decl in &self.root_file_declarations {
                match decl {
                    ClassDeclaration(class_decl) => {
                        if let Some(identifier) = &class_decl.id {
                            if let MockTarget::Class { name, .. } = &mock.target {
                                if identifier.name == *name {
                                    println!("ClassDeclaration");
                                    mock.add_declaration(decl);
                                }
                            }
                        }
                    }
                    TSInterfaceDeclaration(ts_interface_decl) => {
                        if let MockTarget::Type { name, .. } = &mock.target {
                            if ts_interface_decl.id.name == *name {
                                println!("TSInterfaceDeclaration");
                                mock.add_declaration(decl);
                            }
                        }
                    }
                    TSTypeAliasDeclaration(ts_type_alias_decl) => {
                        if let MockTarget::Type { name, .. } = &mock.target {
                            if ts_type_alias_decl.id.name == *name {
                                println!("TSTypeAliasDeclaration");
                                mock.add_declaration(decl);
                            }
                        }
                    }
                    _ => {}
                }
            }
        }
    }

    fn attach_declaration(&mut self) {
        for mock in &mut self.mocks {
            for decl in &self.root_file_declarations {
                match decl {
                    ClassDeclaration(class_decl) => {
                        if let Some(identifier) = &class_decl.id {
                            if let MockTarget::Class { name, .. } = &mock.target {
                                if identifier.name == *name {
                                    println!("ClassDeclaration");
                                    mock.add_declaration(decl);
                                }
                            }
                        }
                    }
                    TSInterfaceDeclaration(ts_interface_decl) => {
                        if let MockTarget::Type { name, .. } = &mock.target {
                            if ts_interface_decl.id.name == *name {
                                println!("TSInterfaceDeclaration");
                                mock.add_declaration(decl);
                            }
                        }
                    }
                    TSTypeAliasDeclaration(ts_type_alias_decl) => {
                        if let MockTarget::Type { name, .. } = &mock.target {
                            if ts_type_alias_decl.id.name == *name {
                                println!("TSTypeAliasDeclaration");
                                mock.add_declaration(decl);
                            }
                        }
                    }
                    _ => {}
                }
            }
        }
    }
}

fn boostest_mock<'a>(stmt: &'a Statement<'a>) -> io::Result<Mock<'a>> {
    if let Some(stmt) = stmt.as_declaration() {
        if let VariableDeclaration(decl) = stmt {
            for decl in &decl.declarations {
                if let Some(CallExpression(call_expr)) = &decl.init {
                    if let Some(identifier) = call_expr.callee.as_identifier() {
                        if identifier.name.contains("boostest") {
                            let mut mock = Mock::new(identifier.name.clone().into_string());

                            call_expr.type_parameters.iter().for_each(|type_params| {
                                for param in &type_params.params {
                                    if let TSTypeReference(ty_ref) = param {
                                        if let IdentifierReference(identifier) = &ty_ref.type_name {
                                            mock.add_ts_type(&identifier.name);
                                        }
                                    }
                                }
                            });
                            for arg in &call_expr.arguments {
                                match arg {
                                    Argument::Identifier(ident) => {
                                        mock.add_class(&ident.name);
                                    }
                                    ObjectExpression(ident) => {
                                        println!("arg: {:?}", ident);
                                    }
                                    SpreadElement(ident) => {
                                        println!("arg: {:?}", ident);
                                    }
                                    _ => {
                                        println!("other arg: {:?}", arg);
                                    }
                                }
                            }

                            return Ok(mock);
                        }
                    }
                }
            }
        }
    }

    Err(io::Error::new(ErrorKind::Other, "Noone boostestMock"))
}

fn read(path: &Path) -> io::Result<String> {
    let mut f = File::open(path)?;
    let mut s = String::new();
    match f.read_to_string(&mut s) {
        Ok(_) => Ok(s),
        Err(e) => Err(e),
    }
}

pub fn callBoostest(path: &Path) {
    let mut mock_builder = MockBuilder::new();

    if let Ok(file) = read(path) {
        let source_type = SourceType::default()
            .with_always_strict(true)
            .with_module(true)
            .with_typescript(true);
        // .with_jsx(true)

        let ast = OxcCompiler::parse(file, source_type);
        let program = ast.program();

        // println!("-------------------------------------");
        // println!("ast:{:?}", program);
        // println!("-------------------------------------");

        let mut imports: Vec<&ImportDeclaration> = Vec::new();
        let mut ts_type_vec: Vec<&str> = Vec::new();
        let mut class_vec: Vec<&str> = Vec::new();

        for stmt in program.body.iter() {
            if let Some(decl) = stmt.as_declaration() {
                mock_builder.root_file_declarations.push(decl);
            }

            if let Some(stmt) = stmt.as_import_declaration() {
                imports.push(stmt);
            }

            if let Ok(mock) = boostest_mock(stmt) {
                mock_builder.add_mock(mock);
            }
        }

        // mock_builder.debug();
        mock_builder.attach_declaration_only_root();
        mock_builder.debug();

        let unresolved_targets = mock_builder.get_unresolved_target_names();
        let mut sources: Vec<&StringLiteral> = Vec::new();

        for import in imports {
            if let Some(specifiers) = &import.specifiers {
                for specifier in specifiers {
                    match specifier {
                        ImportDeclarationSpecifier::ImportNamespaceSpecifier(namespace) => {
                            if unresolved_targets.contains(&namespace.local.name.as_str()) {
                                sources.push(&import.source);
                            }
                        }
                        ImportDeclarationSpecifier::ImportSpecifier(normal) => {
                            if unresolved_targets.contains(&normal.local.name.as_str()) {
                                sources.push(&import.source);
                            }
                        }
                        ImportDeclarationSpecifier::ImportDefaultSpecifier(default) => {
                            if unresolved_targets.contains(&default.local.name.as_str()) {
                                sources.push(&import.source);
                            }
                        }
                    }
                }
            }
        }

        println!("sources{:?}", sources);

        let module_path = path.canonicalize().unwrap();
        let module_path = module_path.parent().unwrap();

        for source in sources {
            resolve_specifier(module_path, &source.value);
        }

        let code = OxcCompiler::print(&ast, "", false).source_text;
        println!("-------------------------------------");
        println!("result:");
        println!("{:?}", code);
    }
}

fn resolve_specifier(path: &Path, specifier: &str) {
    let options = ResolveOptions {
        // alias_fields: vec![vec!["browser".into()]],
        // alias: vec![("asdf".into(), vec![AliasValue::from("./test.js")])],
        extensions: vec![".ts".into(), ".tsx".into()],
        ..ResolveOptions::default()
    };

    match Resolver::new(options).resolve(path, &specifier) {
        Err(error) => println!("Error: {error}"),
        Ok(resolution) => {
            println!("Resolved: {:?}", resolution.full_path())
        }
    }
}

// ------------------------------------------------------------

// fn check_bus_definition_in_declaration(declaration: &Declaration) -> bool {
//     match &declaration.kind() {
//         AstKind::TSTypeAliasDeclaration(TSTypeAliasDeclaration { id, .. }) => id.name == "Bus",
//         AstKind::ClassDeclaration(ClassDeclaration { id: Some(id), .. }) => id.name == "Bus",
//         AstKind::TSInterfaceDeclaration(TSInterfaceDeclaration { id, .. }) => id.name == "Bus",
//         _ => false,
//     }
// }
