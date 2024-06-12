use anyhow::{anyhow, Result};

use oxc::ast::ast::{
    Argument::{ObjectExpression, SpreadElement},
    Declaration, Expression,
    Expression::CallExpression,
    ImportDeclaration, ImportDeclarationSpecifier, Program, Statement,
    TSType::TSTypeReference,
    TSTypeName::IdentifierReference,
    VariableDeclaration,
};
use oxc::ast::{ast::Argument, AstKind};

use crate::boostest_mock::mock_builder::MockBuilder;
use crate::boostest_mock::{
    mock::{self, BoostestMock},
    mock_target::MockTargetAST,
};

pub fn resolve_mock_target_ast(mock_target_ast: &mut MockTargetAST, program: Program) {
    if mock_target_ast.has_ast() {
        return;
    };

    let target_name = mock_target_ast.get_decl_name_for_resolve().clone();
    let mut import_declarations: Vec<ImportDeclaration> = Vec::new();

    for stmt in program.body.into_iter() {
        match stmt {
            Statement::ImportDeclaration(import) => {
                import_declarations.push(import.unbox());
            }

            Statement::ClassDeclaration(class_decl) => {
                if let Some(identifier) = &class_decl.id {
                    if identifier.name.to_string() == target_name {
                        println!("ClassDeclaration");
                        mock_target_ast.set_decl(String::from("class"));
                    }
                }
            }
            Statement::TSTypeAliasDeclaration(ts_type_alias_decl) => {
                if ts_type_alias_decl.id.name.to_string() == target_name {
                    println!("TSTypeAliasDeclaration");
                    mock_target_ast.set_decl(String::from("type alias"));
                }
            }
            Statement::TSInterfaceDeclaration(ts_interface_decl) => {
                if ts_interface_decl.id.name.to_string() == target_name {
                    println!("TSInterfaceDeclaration");
                    mock_target_ast.set_decl(String::from("type interface"));
                }
            }
            _ => {}
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

        //TODO: importを利用して次のASTをresolveしてloopさせる
    }
}

pub fn init_mock_builder<'a>(mock_builder: &mut MockBuilder, program: Program) {
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
                            Argument::Identifier(ident) => {
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
                    println!("namespace: {:?}", namespace.local.name);
                    let name = namespace.local.name.to_string();
                    let full_path = stmt.source.value.clone().into_string();
                    let local = namespace.local.name.clone().into_string();
                    let imported = None;
                    mock_builder.add_import_mock(&name, local, full_path, imported);
                }
                ImportDeclarationSpecifier::ImportSpecifier(normal) => {
                    println!("normal: {:?}", normal.local.name);
                    let name = normal.local.name.to_string();
                    let full_path = stmt.source.value.clone().into_string();
                    let local = normal.local.name.clone().into_string();
                    let imported = Some(normal.imported.to_string());
                    mock_builder.add_import_mock(&name, local, full_path, imported);
                }
                ImportDeclarationSpecifier::ImportDefaultSpecifier(default) => {
                    println!("default: {:?}", default.local.name);
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
                    println!("namespace: {:?}", namespace.local.name);
                    let full_path = stmt.source.value.clone().into_string();
                    let local = namespace.local.name.clone().into_string();
                    let imported = None;
                    set_callback(local, full_path, imported);
                }
                ImportDeclarationSpecifier::ImportSpecifier(normal) => {
                    println!("normal: {:?}", normal.local.name);
                    let full_path = stmt.source.value.clone().into_string();
                    let local = normal.local.name.clone().into_string();
                    let imported = Some(normal.imported.to_string());
                    set_callback(local, full_path, imported);
                }
                ImportDeclarationSpecifier::ImportDefaultSpecifier(default) => {
                    println!("default: {:?}", default.local.name);
                    let full_path = stmt.source.value.clone().into_string();
                    let local = default.local.name.clone().into_string();
                    let imported = None;
                    set_callback(local, full_path, imported);
                }
            }
        }
    }
}
