use std::fs::File;
use std::io::{self, Read};
use std::path::Path;

use anyhow::{anyhow, Result};

use oxc::ast::ast::{ExportNamedDeclaration, ExportSpecifier, StringLiteral};
use oxc::ast::Visit;
use oxc::ast::{ast::Argument, AstKind};
use oxc::syntax::identifier;
use oxc::{
    ast::ast::{
        Argument::{ObjectExpression, SpreadElement},
        Declaration,
        Expression::{self, CallExpression},
        ImportDeclaration, ImportDeclarationSpecifier, Program, Statement,
        TSType::TSTypeReference,
        TSTypeName::IdentifierReference,
        VariableDeclaration,
    },
    parser::Parser,
    span::SourceType,
};
use oxc_resolver::{Resolution, ResolveOptions, Resolver};

use crate::boostest_mock::mock_builder::MockBuilder;
use crate::boostest_mock::{
    mock::{self, BoostestMock},
    mock_target::MockTargetAST,
};

fn read(path: &Path) -> io::Result<String> {
    let mut f = File::open(path)?;
    let mut s = String::new();
    match f.read_to_string(&mut s) {
        Ok(_) => Ok(s),
        Err(e) => Err(e),
    }
}

fn resolve_specifier(path: &Path, specifier: &str) -> Result<Resolution> {
    // println!("parent_path: {:?}", path);
    // println!("specifier: {:?}", specifier);

    let options = ResolveOptions {
        // alias_fields: vec![vec!["browser".into()]],
        // alias: vec![("asdf".into(), vec![AliasValue::from("./test.js")])],
        extensions: vec![".ts".into(), ".tsx".into()],
        ..ResolveOptions::default()
    };

    match Resolver::new(options).resolve(path, &specifier) {
        Err(error) => {
            println!("Error: {error}");
            return Err(anyhow!("ファイル読み込みでエラー"));
        }
        Ok(resolution) => {
            return Ok(resolution);
        }
    }
}

struct ExportNamedSpecifier<'a> {
    inner: ExportSpecifier<'a>,
    source: Option<StringLiteral<'a>>,
}

pub fn resolve_mock_target_ast(mock_target_ast: &mut MockTargetAST, program: Program, path: &Path) {
    if mock_target_ast.has_ast() {
        return;
    };

    let target_name = mock_target_ast.get_decl_name_for_resolve().clone();
    let mut import_declarations: Vec<ImportDeclaration> = Vec::new();
    let mut export_specifiers: Vec<ExportNamedSpecifier> = Vec::new();

    for stmt in program.body.into_iter() {
        match stmt {
            Statement::ImportDeclaration(import) => {
                import_declarations.push(import.unbox());
            }

            Statement::ExportNamedDeclaration(box_export_named_decl) => {
                let export_named_decl = box_export_named_decl.unbox();

                let ExportNamedDeclaration {
                    declaration,
                    specifiers,
                    source,
                    ..
                } = export_named_decl;

                for specifier in specifiers.into_iter() {
                    export_specifiers.push(ExportNamedSpecifier {
                        inner: specifier,
                        source: source.clone(),
                    });
                }

                if let Some(export_named_decl) = declaration {
                    match export_named_decl {
                        Declaration::ClassDeclaration(class_decl) => {
                            if let Some(identifier) = &class_decl.id {
                                if identifier.name.to_string() == target_name {
                                    mock_target_ast.set_decl(String::from("class"));
                                }
                            }
                        }
                        Declaration::TSTypeAliasDeclaration(ts_type_alias_decl) => {
                            if ts_type_alias_decl.id.name.to_string() == target_name {
                                mock_target_ast.set_decl(String::from("type alias"));
                            }
                        }
                        Declaration::TSInterfaceDeclaration(ts_interface_decl) => {
                            if ts_interface_decl.id.name.to_string() == target_name {
                                mock_target_ast.set_decl(String::from("type interface"));
                            }
                        }
                        _ => {
                            // println!("Another Statement {:?}", export_named_decl);
                        }
                    }
                }
            }

            Statement::ClassDeclaration(class_decl) => {
                if let Some(identifier) = &class_decl.id {
                    if identifier.name.to_string() == target_name {
                        mock_target_ast.set_decl(String::from("class"));
                    }
                }
            }
            Statement::TSTypeAliasDeclaration(ts_type_alias_decl) => {
                if ts_type_alias_decl.id.name.to_string() == target_name {
                    mock_target_ast.set_decl(String::from("type alias"));
                }
            }
            Statement::TSInterfaceDeclaration(ts_interface_decl) => {
                if ts_interface_decl.id.name.to_string() == target_name {
                    mock_target_ast.set_decl(String::from("type interface"));
                }
            }

            _ => {
                // println!("Another Statement {:?}", stmt);
            }
        }
    }

    if !mock_target_ast.has_ast() {
        for import_decl in import_declarations {
            add_import(import_decl, |local, full_path, imported| {
                if local == target_name {
                    mock_target_ast.add_import(local, full_path, imported);
                };
            });
        }

        for export_specifier in export_specifiers {
            let name = export_specifier.inner.exported.name().to_string();
            let imported = export_specifier.inner.local.name().to_string();
            let source = export_specifier.source;

            if name == target_name {
                if let Some(source) = source {
                    mock_target_ast.add_import(name, source.value.to_string(), Some(imported));
                } else {
                    println!("failed source value{}", target_name);
                }
                // mock_target_ast.add_import(name, full_path, Some(imported));
            }
            // if export_specifier.exported.name.to_string() == target_name {
            //     mock_target_ast.add_export(export_specifier.local.name.to_string());
            // }
        }

        if let Ok(module_path) = path.canonicalize() {
            if let Some(parent_path) = module_path.parent() {
                if let Some(specifier) = mock_target_ast.get_next_path() {
                    let resolution_result = resolve_specifier(parent_path, &specifier);
                    if let Ok(resolution) = resolution_result {
                        if let Ok(file) = read(&resolution.full_path()) {
                            let source_type = SourceType::default()
                                .with_always_strict(true)
                                .with_module(true)
                                .with_typescript(true);

                            let allocator = oxc::allocator::Allocator::default();
                            let parser = Parser::new(&allocator, &file, source_type);
                            let program = parser.parse().program;
                            let new_path = resolution.full_path();
                            // println!("new_path: {:?}", new_path);

                            resolve_mock_target_ast(mock_target_ast, program, new_path.as_path());
                        }
                    }
                }
            }
        }

        //TODO: importを利用して次のASTをresolveしてloopさせる
    }
}

pub fn init_mock_builder<'a>(mock_builder: &mut MockBuilder, program: Program, path: &Path) {
    let mut var_decl: Vec<VariableDeclaration> = Vec::new();
    let mut import_decl: Vec<ImportDeclaration> = Vec::new();

    for stmt in program.body.into_iter() {
        match stmt {
            Statement::VariableDeclaration(decl) => {
                var_decl.push(decl.unbox());
            }
            Statement::ImportDeclaration(decl) => {
                import_decl.push(decl.unbox());
            }
            _ => {}
        }
    }

    for var_decl_item in var_decl {
        mock_builder.visit_variable_declaration(&var_decl_item);
    }

    for import_decl_item in import_decl {
        mock_builder.visit_import_declaration(&import_decl_item);
    }

    mock_builder.debug();

    for (_, val) in mock_builder.mocks.iter_mut() {
        let allocator = oxc::allocator::Allocator::default();
        if let Ok(file) = read(path) {
            let source_type = SourceType::default()
                .with_always_strict(true)
                .with_module(true)
                .with_typescript(true);

            //TODO: 毎回生成しないようにする(visit, walkを使う)
            let parser = Parser::new(&allocator, &file, source_type);
            let program = parser.parse().program;

            if let Some(mock_target_ast) = val.target_ast.as_mut() {
                resolve_mock_target_ast(mock_target_ast, program, path)
            }
        }
    }

    println!("--------INIT---------");
    mock_builder.debug();
    println!("-----------------");
}

fn add_import<F>(stmt: ImportDeclaration, mut set_callback: F)
where
    F: FnMut(String, String, Option<String>),
{
    if let Some(specifiers) = &stmt.specifiers {
        for specifier in specifiers {
            match specifier {
                ImportDeclarationSpecifier::ImportNamespaceSpecifier(namespace) => {
                    let full_path = stmt.source.value.clone().into_string();
                    let local = namespace.local.name.clone().into_string();
                    let imported = None;
                    set_callback(local, full_path, imported);
                }
                ImportDeclarationSpecifier::ImportSpecifier(normal) => {
                    // println!("normal: {:?}", normal);
                    let full_path = stmt.source.value.clone().into_string();
                    let local = normal.local.name.clone().into_string();
                    let imported = Some(normal.imported.to_string());
                    set_callback(local, full_path, imported);
                }
                ImportDeclarationSpecifier::ImportDefaultSpecifier(default) => {
                    let full_path = stmt.source.value.clone().into_string();
                    let local = default.local.name.clone().into_string();
                    let imported = None;
                    set_callback(local, full_path, imported);
                }
            }
        }
    }
}
