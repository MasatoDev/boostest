use anyhow::{anyhow, Result};
use oxc::ast::Visit;
use oxc::{ast::ast::Program, parser::Parser, span::SourceType};
use oxc_resolver::{Resolution, ResolveOptions, Resolver};
use std::fs::File;
use std::io::{self, Read};
use std::path::Path;

use crate::boostest_mock::mock_builder::MockBuilder;
use crate::boostest_mock::mock_target::MockTargetAST;

fn read(path: &Path) -> io::Result<String> {
    let mut f = File::open(path)?;
    let mut s = String::new();
    match f.read_to_string(&mut s) {
        Ok(_) => Ok(s),
        Err(e) => Err(e),
    }
}

fn resolve_specifier(path: &Path, specifier: &str) -> Result<Resolution> {
    let options = ResolveOptions {
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

pub fn resolve_mock_target_ast(
    mock_target_ast: &mut MockTargetAST,
    program: &Program,
    path: &Path,
) {
    if mock_target_ast.has_ast() {
        return;
    };

    mock_target_ast.visit_statements(&program.body);

    if !mock_target_ast.has_ast() {
        mock_target_ast.set_import_source();

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

                            resolve_mock_target_ast(mock_target_ast, &program, new_path.as_path());
                        }
                    }
                }
            }
        }

        //TODO: importを利用して次のASTをresolveしてloopさせる
    }
}

pub fn init_mock_builder<'a>(mock_builder: &mut MockBuilder, program: &Program, path: &Path) {
    mock_builder.visit_statements(&program.body);

    for (_, val) in mock_builder.mocks.iter_mut() {
        if let Some(mock_target_ast) = val.target_ast.as_mut() {
            resolve_mock_target_ast(mock_target_ast, &program, path)
        }
    }

    println!("--------INIT---------");
    mock_builder.debug();
    println!("-----------------");
}
