use colored::*;

use anyhow::{anyhow, Result};
use oxc::ast::VisitMut;
use oxc::{ast::ast::Program, parser::Parser, span::SourceType};
use oxc_resolver::{Resolution, ResolveOptions, Resolver, TsconfigOptions, TsconfigReferences};
use std::path::{Path, PathBuf};

use crate::boostest_mock_loader::mock_ast_loader::MockAstLoader;
use crate::boostest_mock_loader::mock_loader::MockLoader;
use crate::boostest_utils::utils;

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
    depth: u8,
) -> Result<()> {
    // prevent infinite loop
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

    if mock_ast_loader.resolved {
        return Ok(());
    };

    mock_ast_loader.analysis_start();
    mock_ast_loader.visit_statements(&mut program.body);

    /*
     * NOTE:
     * start analysis for ref_properties after original mock_target_ast analysis is started
     */
    for prop in mock_ast_loader.get_needs_start_analysis_properties() {
        prop.analysis_start();
        resolve_mock_target_ast(prop, program, path, ts_config_path, depth + 1)?;
    }

    if !mock_ast_loader.resolved {
        mock_ast_loader.set_import_source();

        if let Ok(module_path) = path.canonicalize() {
            if let Some(parent_path) = module_path.parent() {
                if let Some(next_import) = mock_ast_loader.get_next_import() {
                    if MockAstLoader::is_loaded_file_d_ts(&next_import) {
                        // tried all possible patterns.
                        return Ok(());
                    }

                    let mut read_file_path: PathBuf = PathBuf::new();
                    let parent_path_buf = parent_path.to_path_buf();

                    // important the order of is_loaded_hogehoge() because these func handle loaded flag
                    if MockAstLoader::is_loaded_index_d_ts(&next_import) {
                        let next_file_stem = Path::new(&next_import.full_path)
                            .file_stem()
                            .ok_or(anyhow!("next file is not found"))?;

                        let next_file_name = next_file_stem.to_string_lossy();

                        if next_file_name.ends_with(".d") {
                            read_file_path =
                                parent_path_buf.join(format!("{}{}", next_file_name, ".ts"));
                        } else {
                            read_file_path =
                                parent_path_buf.join(format!("{}{}", next_file_name, ".d.ts"));
                        }

                        next_import.file_d_ts_loaded = true;
                    }

                    if MockAstLoader::is_loaded_full_path(&next_import) {
                        read_file_path = parent_path_buf.join("index.d.ts");
                        next_import.index_d_ts_loaded = true;
                    }

                    if MockAstLoader::is_unloaded_import(&next_import) {
                        let resolution_result =
                            resolve_specifier(parent_path, &next_import.full_path, ts_config_path);

                        if let Ok(resolution) = resolution_result {
                            read_file_path = resolution.full_path();
                            next_import.loaded = true;
                        }
                    }

                    // TODO: use same program ast
                    if next_import.need_reload {
                        read_file_path = PathBuf::from(path);
                    }

                    // println!("{}: {}", "read_file_path".green(), read_file_path.display());

                    let file = utils::read(&read_file_path).unwrap_or(String::new());

                    let source_type = SourceType::default()
                        .with_always_strict(true)
                        .with_module(true)
                        .with_typescript(true);

                    let allocator = oxc::allocator::Allocator::default();
                    let parser = Parser::new(&allocator, &file, source_type);
                    let mut program = parser.parse().program;

                    resolve_mock_target_ast(
                        mock_ast_loader,
                        &mut program,
                        read_file_path.as_path(),
                        ts_config_path,
                        depth + 1,
                    )?;
                }
            }
        }
    }

    Ok(())
}

pub fn load_mock<'a>(
    mock_loader: &mut MockLoader,
    program: &mut Program,
    path: &Path,
    ts_config_path: &Option<PathBuf>,
) {
    // add target functions to mock ast loader
    mock_loader.visit_statements(&mut program.body);

    for (_, mock_ast_loader) in mock_loader.mocks.iter_mut() {
        if let Err(e) = resolve_mock_target_ast(mock_ast_loader, program, path, ts_config_path, 1) {
            let name = &mock_ast_loader.mock_func_name;
            println!("{}: {}", format!("{}", name.red()), e);
        }
    }

    // println!("--------INIT---------");
    // mock_loader.debug();
    // println!("-----------------");
}
