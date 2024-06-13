use std::fs::File;
use std::io::{self, Read};
use std::path::Path;

use anyhow::{anyhow, Result};

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

pub fn resolve_mock_target_ast(mock_target_ast: &mut MockTargetAST, program: Program, path: &Path) {
    if mock_target_ast.has_ast() {
        return;
    };

    let target_name = mock_target_ast.get_decl_name_for_resolve().clone();
    let mut import_declarations: Vec<ImportDeclaration> = Vec::new();

    for stmt in program.body.into_iter() {
        // println!("Statement {:?}", stmt);

        match stmt {
            Statement::ImportDeclaration(import) => {
                import_declarations.push(import.unbox());
            }

            Statement::ExportNamedDeclaration(export_named_decl) => {
                if let Some(export_named_decl) = export_named_decl.unbox().declaration {
                    match export_named_decl {
                        Declaration::ClassDeclaration(class_decl) => {
                            if let Some(identifier) = &class_decl.id {
                                if identifier.name.to_string() == target_name {
                                    println!("ClassDeclaration");
                                    mock_target_ast.set_decl(String::from("class"));
                                }
                            }
                        }
                        Declaration::TSTypeAliasDeclaration(ts_type_alias_decl) => {
                            if ts_type_alias_decl.id.name.to_string() == target_name {
                                println!("TSTypeAliasDeclaration");
                                mock_target_ast.set_decl(String::from("type alias"));
                            }
                        }
                        Declaration::TSInterfaceDeclaration(ts_interface_decl) => {
                            if ts_interface_decl.id.name.to_string() == target_name {
                                println!("TSInterfaceDeclaration");
                                mock_target_ast.set_decl(String::from("type interface"));
                            }
                        }
                        _ => {
                            // println!("Another Statement {:?}", export_named_decl);
                        }
                    }
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

        if let Ok(module_path) = path.canonicalize() {
            if let Some(parent_path) = module_path.parent() {
                if let Some(specifier) = mock_target_ast.get_next_path() {
                    println!("import {:?}", mock_target_ast.import);
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
        create_mock_target(mock_builder, var_decl_item);
    }

    for import_decl_item in import_decl {
        add_imports(mock_builder, import_decl_item);
    }

    for (_, val) in mock_builder.mocks.iter_mut() {
        let allocator = oxc::allocator::Allocator::default();
        if let Ok(file) = read(path) {
            let source_type = SourceType::default()
                .with_always_strict(true)
                .with_module(true)
                .with_typescript(true);

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

fn create_mock_target<'a>(
    mock_builder: &mut MockBuilder,
    var_decl: VariableDeclaration,
) -> Result<String> {
    let pattern = "boostest";

    for decl in &var_decl.declarations {
        if let Some(CallExpression(call_expr)) = &decl.init {
            if let Expression::Identifier(identifier) = &call_expr.callee {
                if identifier.name.contains(pattern) {
                    let target_mock_name = identifier.name.clone().into_string();
                    let mock = mock::BoostestMock::new(target_mock_name.clone());
                    mock_builder.add_mock(mock);

                    call_expr.type_parameters.iter().for_each(|type_params| {
                        for param in &type_params.params {
                            if let TSTypeReference(ty_ref) = param {
                                if let IdentifierReference(identifier) = &ty_ref.type_name {
                                    mock_builder.add_ts_type_ref_mock(
                                        &target_mock_name,
                                        identifier.name.clone().into_string(),
                                    );
                                }
                            }
                        }
                    });
                    for arg in &call_expr.arguments {
                        match arg {
                            Argument::Identifier(identifier) => {
                                mock_builder.add_class_ref_mock(
                                    &target_mock_name,
                                    identifier.name.clone().into_string(),
                                );
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

                    return Ok(target_mock_name);
                }
            }
        }
    }

    return Err(anyhow!("何か問題が発生しました"));
}

fn add_imports(mock_builder: &mut MockBuilder, stmt: ImportDeclaration) {
    if let Some(specifiers) = &stmt.specifiers {
        for specifier in specifiers {
            match specifier {
                ImportDeclarationSpecifier::ImportNamespaceSpecifier(namespace) => {
                    let name = namespace.local.name.to_string();
                    let full_path = stmt.source.value.clone().into_string();
                    let local = namespace.local.name.clone().into_string();
                    let imported = None;
                    mock_builder.add_import_mock(&name, local, full_path, imported);
                }
                ImportDeclarationSpecifier::ImportSpecifier(normal) => {
                    let name = normal.local.name.to_string();
                    let full_path = stmt.source.value.clone().into_string();
                    let local = normal.local.name.clone().into_string();
                    let imported = Some(normal.imported.to_string());
                    mock_builder.add_import_mock(&name, local, full_path, imported);
                }
                ImportDeclarationSpecifier::ImportDefaultSpecifier(default) => {
                    let name = default.local.name.to_string();
                    let full_path = stmt.source.value.clone().into_string();
                    let local = default.local.name.clone().into_string();
                    let imported = None;
                    mock_builder.add_import_mock(&name, local, full_path, imported);
                }
            }
        }
    }
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
