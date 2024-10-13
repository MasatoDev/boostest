use colored::*;

use anyhow::{anyhow, Result};
use oxc::ast::VisitMut;
use oxc::{ast::ast::Program, parser::Parser, span::SourceType};
use oxc_resolver::{Resolution, ResolveOptions, Resolver, TsconfigOptions, TsconfigReferences};
use std::path::{Path, PathBuf};

use crate::boostest_debug::tsserver;
use crate::boostest_mock_loader::mock_ast_loader2::MockAstLoader;
use crate::boostest_mock_loader::mock_loader::MockLoader;
use crate::boostest_utils::utils;

fn resolve_specifier(
    path: &Path,
    specifier: &str,
    ts_config_path: &Option<PathBuf>,
) -> Result<Resolution> {
    println!("path: {:?}", path);

    let tsconfig = match ts_config_path {
        Some(ts_config_path) => Some(TsconfigOptions {
            config_file: PathBuf::from(ts_config_path),
            references: TsconfigReferences::Auto,
        }),

        None => None,
    };

    let options = ResolveOptions {
        extensions: vec![".d.ts".into(), ".ts".into(), ".tsx".into()],
        main_files: vec!["index.d".into()],
        tsconfig: tsconfig,
        ..ResolveOptions::default()
    };

    match Resolver::new(options).resolve(path, &specifier) {
        Err(error) => {
            return Err(anyhow!("ファイル読み込みでエラー: {:?}", error));
        }
        Ok(resolution) => {
            return Ok(resolution);
        }
    }
}

pub fn resolve_mock_target_ast(
    mock_ast_loader: &mut MockAstLoader,
    program: &mut Program,
    path: &Path,
    ts_config_path: &Option<PathBuf>,
    project_root_path: &Option<PathBuf>,
    depth: u8,
) -> Result<()> {
    let absolute_path = path.canonicalize().unwrap();
    println!("target file{}", absolute_path.display());
    println!("trget span{:?}", mock_ast_loader.span);
    println!("trget func name{:?}", mock_ast_loader.mock_func_name);
    if let Some(project_root_path) = project_root_path {
        if let Some(hoge) = tsserver(project_root_path, &absolute_path, mock_ast_loader.span) {
            let (path, span) = hoge;
            println!("next path{}", path.display());
            println!("next span{:?}", span);
        }
    }

    Ok(())
}

pub fn load_mock<'a>(
    mock_loader: &mut MockLoader,
    program: &mut Program,
    path: &Path,
    ts_config_path: &Option<PathBuf>,
    project_root_path: &Option<PathBuf>,
) {
    // add target functions to mock ast loader
    mock_loader.visit_statements(&mut program.body);

    // NOTE: if this loop change to multi-thread, the program that is share mutation variable is need change to something like Arc<Mutex<Program>>
    for (_, mock_ast_loader) in mock_loader.mocks.iter_mut() {
        if let Err(e) = resolve_mock_target_ast(
            mock_ast_loader,
            program,
            path,
            ts_config_path,
            project_root_path,
            1,
        ) {
            let name = &mock_ast_loader.mock_func_name;
            println!("{}: {}", format!("{}", name.red()), e);
        }
    }

    // println!("--------INIT---------");
    // mock_loader.debug();
    // println!("-----------------");
}
