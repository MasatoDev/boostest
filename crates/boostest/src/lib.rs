use boostest_oxc_utils::{OxcAst, OxcCompiler};
use oxc;
use oxc::ast::ast;

use oxc::span::SourceType;

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

pub fn callBoostest(path: &Path) {
    if let Ok(file) = read(path) {
        let source_type = SourceType::default()
            .with_always_strict(true)
            .with_module(true)
            .with_typescript(true);
        // .with_jsx(true)

        let ast = OxcCompiler::parse(file, source_type);
        let program = ast.program();

        // let semantic = OxcAst::make_semantic(ast.source(), ast.program(), source_type);
        // let (mut symbol_table, scope) = ast.make_symbol_table_and_scope_tree();

        // println!("ast: {:?}", ast);
        // println!("program: {:?}", program);

        // program.body.iter().for_each(|stmt| {
        //     println!("{:?}\n", stmt);
        // });

        program.body.iter().for_each(|stmt| match stmt {
            ast::Statement::VariableDeclaration(stmt) => {
                println!("{:?}\n", stmt);
            }
            _ => {}
        });

        // println!("symbol_table: {:?}", symbol_table);
        let code = OxcCompiler::print(&ast, "", false).source_text;
        println!("-------------------------------------");
        println!("result:");
        println!("{:?}", code);
    }
}
