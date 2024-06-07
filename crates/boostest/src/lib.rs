use boostest_oxc_utils::{ExpressionExt, OxcAst, OxcCompiler};

use oxc::{
    ast::ast::{
        Declaration::VariableDeclaration,
        Expression::{CallExpression, Identifier},
    },
    syntax::identifier,
};

use oxc::span::SourceType;

use std::fs;
use std::fs::File;
use std::io;
use std::io::prelude::*;
use std::path::Path;

fn read(path: &Path) -> io::Result<String> {
    let mut f = File::open(path)?;
    let mut s = String::new();
    match f.read_to_string(&mut s) {
        Ok(_) => Ok(s),
        Err(e) => Err(e),
    }
}

// #[derive(Serialize, Deserialize, Debug)]
// struct Mock {
//     type_name: String,
//     data: serde_json::Value,
// }

// fn create_mock(type_name: &str) -> Mock {
//     // ここにジェネリックタイプやクラスに基づいたモック作成ロジックを追加
//     let data = match type_name {
//         "User" => json!({
//             "name": "John Doe",
//             "age": 30
//         }),
//         "JOB" => json!({
//             "title": "Developer",
//             "level": "Senior"
//         }),
//         "Customer" => json!({
//             "id": 1,
//             "name": "Alice",
//             "purchases": []
//         }),
//         _ => json!({}),
//     };

//     Mock {
//         type_name: type_name.to_string(),
//         data,
//     }
// }

pub fn callBoostest(path: &Path) {
    if let Ok(file) = read(path) {
        let source_type = SourceType::default()
            .with_always_strict(true)
            .with_module(true)
            .with_typescript(true);
        // .with_jsx(true)

        let ast = OxcCompiler::parse(file, source_type);
        let program = ast.program();

        for stmt in program.body.iter() {
            if let Some(stmt) = stmt.as_declaration() {
                if let VariableDeclaration(decl) = stmt {
                    for decl in &decl.declarations {
                        if let Some(CallExpression(call_expr)) = &decl.init {
                            if let Some(identifier) = call_expr.callee.as_identifier() {
                                if identifier.name.contains("boostestMock") {
                                    println!("identifier: {:?}", identifier.name);
                                }
                            }
                        }
                    }
                }
            }
        }
        // if let Node::Identifier(ident) = &*call_expr.callee {
        //     if ident.name == "boostestMock" {
        //         if let Some(type_params) = &call_expr.type_parameters {
        //             for param in &type_params.params {
        //                 if let Node::TSTypeReference(ty_ref) = param {
        //                     if let Node::Identifier(type_ident) = &*ty_ref.type_name {
        //                         let mock = create_mock(&type_ident.name);
        //                         println!("Generated mock: {:?}", mock);
        //                     }
        //                 }
        //             }
        //         } else if let Some(arg) = call_expr.arguments.first() {
        //             if let Node::Identifier(arg_ident) = arg {
        //                 let mock = create_mock(&arg_ident.name);
        //                 println!("Generated mock: {:?}", mock);
        //             }
        //         }
        //     }
        // }

        // program.body.iter().for_each(|stmt| match stmt {
        //     ast::Statement::VariableDeclaration(stmt) => {
        //         stmt.declarations.iter().for_each(|decl| {
        //             match decl {
        //                 ast::VariableDeclarator::Identifier(ident) => {
        //                     println!("{:?}\n", ident);
        //                 }
        //                 ast::VariableDeclarator::Pattern(pattern) => {
        //                     println!("{:?}\n", pattern);
        //                 }
        //             }
        //             println!("{:?}\n", decl);
        //         });
        //         println!("{:?}\n", stmt);
        //     }
        //     _ => {
        //         println!("{:?}\n", stmt);
        //     }
        // });

        // println!("symbol_table: {:?}", symbol_table);
        let code = OxcCompiler::print(&ast, "", false).source_text;
        println!("-------------------------------------");
        println!("result:");
        println!("{:?}", code);
    }
}
