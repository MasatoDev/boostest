use anyhow::{anyhow, Result};
use oxc::ast::Visit;
use oxc::{ast::ast::Program, parser::Parser, span::SourceType};
use oxc_resolver::{Resolution, ResolveOptions, Resolver, TsconfigOptions, TsconfigReferences};
use std::fs::File;
use std::io::{self, Read};
use std::path::{Path, PathBuf};

use crate::boostest_mock_loader::mock_ast_loader::MockAstLoader;
use crate::boostest_mock_loader::mock_loader::MockLoader;

fn read(path: &Path) -> io::Result<String> {
    let mut f = File::open(path)?;
    let mut s = String::new();
    match f.read_to_string(&mut s) {
        Ok(_) => Ok(s),
        Err(e) => Err(e),
    }
}

fn resolve_specifier(
    path: &Path,
    specifier: &str,
    ts_config_path: &Option<PathBuf>,
) -> Result<Resolution> {
    let tsconfig = match ts_config_path {
        Some(ts_config_path) => Some(TsconfigOptions {
            config_file: PathBuf::from(ts_config_path),
            references: TsconfigReferences::Auto,
        }),
        None => None,
    };

    println!("tsconfig: {:?}", tsconfig);

    let options = ResolveOptions {
        extensions: vec![".ts".into(), ".tsx".into()],
        tsconfig: tsconfig,
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
    mock_ast_loader: &mut MockAstLoader,
    program: &Program,
    path: &Path,
    ts_config_path: &Option<PathBuf>,
) {
    if mock_ast_loader.resolved {
        return;
    };

    mock_ast_loader.analysis_start();
    mock_ast_loader.visit_statements(&program.body);

    /*
     * NOTE:
     * start analysis for ref_properties after original mock_target_ast analysis is started
     */
    for prop in mock_ast_loader.get_needs_start_analysis_properties() {
        prop.analysis_start();
        resolve_mock_target_ast(prop, program, path, ts_config_path);
    }

    if !mock_ast_loader.resolved {
        mock_ast_loader.set_import_source();

        if let Ok(module_path) = path.canonicalize() {
            if let Some(parent_path) = module_path.parent() {
                if let Some(specifier) = mock_ast_loader.get_next_path() {
                    let resolution_result =
                        resolve_specifier(parent_path, &specifier, ts_config_path);
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

                            resolve_mock_target_ast(
                                mock_ast_loader,
                                &program,
                                new_path.as_path(),
                                ts_config_path,
                            );
                        }
                    }
                }
            }
        }

        //TODO: importを利用して次のASTをresolveしてloopさせる
    }
}

pub fn load_mock<'a>(
    mock_loader: &mut MockLoader,
    program: &Program,
    path: &Path,
    ts_config_path: &Option<PathBuf>,
) {
    mock_loader.visit_statements(&program.body);

    for (_, mock_ast_loader) in mock_loader.mocks.iter_mut() {
        resolve_mock_target_ast(mock_ast_loader, &program, path, ts_config_path);
    }

    // println!("--------INIT---------");
    // mock_loader.debug();
    // println!("-----------------");
}
