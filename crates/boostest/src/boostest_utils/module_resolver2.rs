use colored::*;

use anyhow::{anyhow, Result};
use oxc::ast::VisitMut;
use oxc::{ast::ast::Program, parser::Parser, span::SourceType};
use oxc_resolver::{Resolution, ResolveOptions, Resolver, TsconfigOptions, TsconfigReferences};
use std::path::{Path, PathBuf};

use crate::boostest_debug::tsserver;
use crate::boostest_mock_loader::mock_ast_loader2::{self, MockAstLoader};
use crate::boostest_mock_loader::mock_loader::MockLoader;
use crate::boostest_utils::utils;

pub fn resolve_mock_target_ast(
    mock_ast_loader: &mut MockAstLoader,
    path: &Path,
    project_root_path: &Option<PathBuf>,
    depth: u8,
) -> Result<()> {
    if depth > 50 {
        if let Some(target) = &mock_ast_loader.mock_target_name {
            println!(
                "{}",
                format!(
                    "module resolution depth is too deep: {} of {}",
                    target, mock_ast_loader.mock_func_name
                )
                .red()
            );
        }
        return Ok(());
    }

    mock_ast_loader.analysis_start();

    let absolute_path = path.canonicalize().unwrap();

    if let Some(project_root_path) = project_root_path {
        println!(
            "identifying target file: {:?}",
            &mock_ast_loader.mock_target_name
        );

        if let Some(hoge) = tsserver(project_root_path, &absolute_path, mock_ast_loader.span) {
            let (target_file_path, span) = hoge;

            // spanから定義元のテキストを取得できる。
            // TODO: 定義の中に参照があると、そのspanはファイルのものではない(定義元の中でのspan)になるため、それを利用してtsserverに渡すことができない。
            // tsserverはファイルとそのspanを渡す必要があるため
            mock_ast_loader.set_target_definition_span(span);

            let target_source = utils::read(&target_file_path).unwrap_or(String::new());
            let target_source_text = span.source_text(&target_source);

            let source_type = SourceType::default()
                .with_always_strict(true)
                .with_module(true)
                .with_typescript(true);

            let allocator = oxc::allocator::Allocator::default();
            let parser = Parser::new(&allocator, &target_source_text, source_type);
            let mut program = parser.parse().program;

            mock_ast_loader.visit_statements(&mut program.body);

            /*
             * NOTE:
             * start analysis for ref_properties after original mock_target_ast analysis is started
             */
            for prop in mock_ast_loader.get_needs_start_analysis_properties() {
                resolve_mock_target_ast(
                    prop,
                    target_file_path.as_path(),
                    &Some(project_root_path.clone()),
                    depth + 1,
                )?;
            }
        } else {
            return Err(anyhow!("ファイル読み込みでエラー"));
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
        if let Err(e) = resolve_mock_target_ast(mock_ast_loader, path, project_root_path, 1) {
            let name = &mock_ast_loader.mock_func_name;
            println!("{}: {}", format!("{}", name.red()), e);
        }
    }

    // println!("--------INIT---------");
    // mock_loader.debug();
    // println!("-----------------");
}
