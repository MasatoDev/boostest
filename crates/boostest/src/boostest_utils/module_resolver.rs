use colored::*;

use anyhow::{anyhow, Result};
use oxc::ast::VisitMut;
use oxc::span::Span;
use oxc::{ast::ast::Program, parser::Parser, span::SourceType};
use oxc_resolver::{Resolution, ResolveOptions, Resolver, TsconfigOptions, TsconfigReferences};
use ropey::Rope;
use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex};
use std::thread;

use crate::boostest_debug::tsserver;
use crate::boostest_mock_loader::mock_ast_loader::MockAstLoader;
use crate::boostest_mock_loader::mock_loader::MockLoader;
use crate::boostest_utils::utils;

/**
* NOTE:
* When the utf16_offset is within the current chunk, the function iterates through each character, updating the utf16_count and utf8_offset based on each character’s UTF-16 and UTF-8 lengths.
* If utf16_count matches utf16_offset, it returns the corresponding utf8_offset. This per-character check ensures precise conversion, as characters can vary in length between UTF-16 and UTF-8.
*
*/
fn utf16_to_utf8_offset(rope: &Rope, utf16_offset: usize) -> usize {
    let mut utf8_offset = 0;
    let mut utf16_count = 0;

    for chunk in rope.chunks() {
        let chunk_utf16_len = chunk.encode_utf16().count();
        if utf16_count + chunk_utf16_len > utf16_offset {
            for (_i, c) in chunk.chars().enumerate() {
                if utf16_count == utf16_offset {
                    return utf8_offset;
                }
                utf16_count += c.len_utf16();
                utf8_offset += c.len_utf8();
            }
        } else {
            utf16_count += chunk_utf16_len;
            utf8_offset += chunk.len();
        }
    }

    utf8_offset
}

fn source_text_from_span(span: Span, source_text: &str) -> &str {
    let rope = Rope::from_str(source_text);
    let start = utf16_to_utf8_offset(&rope, span.start as usize);
    let end = utf16_to_utf8_offset(&rope, span.end as usize);
    &source_text[start..end]
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
    mock_ast_loader: Arc<Mutex<MockAstLoader>>,
    program: &mut Program,
    path: &Path,
    ts_config_path: &Option<PathBuf>,
    project_root_path: &Option<PathBuf>,
    depth: u8,
) -> Result<()> {
    let mut locked_mock_ast_loader = mock_ast_loader.lock().unwrap();

    if depth == 1 {
        locked_mock_ast_loader.set_current_read_file_path(path.to_path_buf());
    }

    // prevent infinite loop
    if depth > 50 {
        if let Some(target) = &locked_mock_ast_loader.mock_target_name {
            println!(
                "{}",
                format!(
                    "module resolution depth is too deep: {} of {}",
                    target, locked_mock_ast_loader.mock_func_name
                )
                .red()
            );
        }
        return Ok(());
    }

    if locked_mock_ast_loader.resolved {
        return Ok(());
    };

    locked_mock_ast_loader.analysis_start();

    locked_mock_ast_loader.visit_statements(&mut program.body);

    /*
     * NOTE:
     * start analysis for ref_properties after original mock_target_ast analysis is started
     */
    for prop in locked_mock_ast_loader.get_needs_start_analysis_properties() {
        prop.lock().unwrap().analysis_start();
        resolve_mock_target_ast(prop, program, path, ts_config_path, project_root_path, 1)?;
    }

    if !locked_mock_ast_loader.resolved {
        locked_mock_ast_loader.set_import_source();

        if let Ok(module_path) = path.canonicalize() {
            if let Some(parent_path) = module_path.parent() {
                if let Some(next_import) = locked_mock_ast_loader.get_next_import() {
                    if MockAstLoader::is_loaded_file_d_ts(&next_import) {
                        // TODO: 呼ばれていない
                        // tried all possible patterns.

                        if let Some(project_root_path) = project_root_path {
                            if let Some(first_path) =
                                locked_mock_ast_loader.current_read_file_path.clone()
                            {
                                println!(
                                    "{}: {}",
                                    "using tsserver".green(),
                                    project_root_path.display()
                                );

                                // TODO: add using tsserver logic
                                drop(locked_mock_ast_loader);

                                resolve_mock_target_ast_with_tsserver(
                                    mock_ast_loader.clone(),
                                    first_path.as_path(),
                                    &Some(project_root_path.clone()),
                                    depth + 1,
                                )?;
                            }
                        }

                        return Ok(());
                    }

                    let mut read_file_path: PathBuf = PathBuf::new();
                    let parent_path_buf = parent_path.to_path_buf();

                    // important the order of is_loaded_hogehoge() because these func handle loaded flag
                    if MockAstLoader::is_loaded_index_d_ts(&next_import) {
                        next_import.file_d_ts_loaded = true;

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
                    }

                    if MockAstLoader::is_loaded_full_path(&next_import) {
                        next_import.index_d_ts_loaded = true;
                        read_file_path = parent_path_buf.join("index.d.ts");
                    }

                    if MockAstLoader::is_unloaded_import(&next_import) {
                        next_import.loaded = true;

                        let resolution_result =
                            resolve_specifier(parent_path, &next_import.full_path, ts_config_path);

                        if let Ok(resolution) = resolution_result {
                            read_file_path = resolution.full_path();
                        }
                    }

                    // TODO: use same program ast
                    if next_import.need_reload {
                        read_file_path = PathBuf::from(path);
                    }

                    if !read_file_path.exists() {
                        if let Some(project_root_path) = project_root_path {
                            if let Some(first_path) =
                                locked_mock_ast_loader.current_read_file_path.clone()
                            {
                                drop(locked_mock_ast_loader);

                                resolve_mock_target_ast_with_tsserver(
                                    mock_ast_loader.clone(),
                                    first_path.as_path(),
                                    &Some(project_root_path.clone()),
                                    depth + 1,
                                )?;
                            }
                        }

                        return Ok(());
                    }

                    let file = utils::read(&read_file_path).unwrap_or(String::new());

                    let source_type = SourceType::default()
                        .with_always_strict(true)
                        .with_module(true)
                        .with_typescript(true);

                    let allocator = oxc::allocator::Allocator::default();
                    let parser = Parser::new(&allocator, &file, source_type);
                    let mut program = parser.parse().program;

                    // TODO: manage lock
                    drop(locked_mock_ast_loader);

                    resolve_mock_target_ast(
                        mock_ast_loader.clone(),
                        &mut program,
                        read_file_path.as_path(),
                        ts_config_path,
                        project_root_path,
                        depth + 1,
                    )?;
                }
            }
        }
    }

    Ok(())
}

pub fn resolve_mock_target_ast_with_tsserver<'a>(
    mock_ast_loader: Arc<Mutex<MockAstLoader>>,
    path: &Path,
    project_root_path: &Option<PathBuf>,
    depth: u8,
) -> Result<()> {
    let mut mock_ast_loader = mock_ast_loader.lock().unwrap();

    if depth > 15 {
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
            "identifying target file: {:?} \n target:{:?}",
            &mock_ast_loader.mock_target_name, &absolute_path
        );

        if let Some(result) = tsserver(project_root_path, &absolute_path, mock_ast_loader.span) {
            let (target_file_path, span) = result;

            // spanから定義元のテキストを取得できる。
            // TODO: 定義の中に参照があると、そのspanはファイルのものではない(定義元の中でのspan)になるため、それを利用してtsserverに渡すことができない。
            // tsserverはファイルとそのspanを渡す必要があるため
            mock_ast_loader.set_target_definition_span(span);

            let target_source = utils::read(&target_file_path).unwrap_or(String::new());
            // let target_source_text = span.source_text(&target_source);
            //

            let target_source_text = source_text_from_span(span, &target_source);

            let source_type = SourceType::default()
                .with_always_strict(true)
                .with_module(true)
                .with_typescript(true);

            let allocator = oxc::allocator::Allocator::default();
            let parser = Parser::new(&allocator, &target_source_text, source_type);
            let mut program = parser.parse().program;

            mock_ast_loader.visit_statements(&mut program.body);

            let mut handles = vec![];

            /*
             * NOTE:
             * start analysis for ref_properties after original mock_target_ast analysis is started
             */
            for prop in mock_ast_loader.get_needs_start_analysis_properties() {
                let cloned_mock_ast_loader = prop.clone();
                let target_file_path = target_file_path.clone();
                let project_root_path = project_root_path.clone();

                let handle = thread::spawn(move || {
                    if let Err(e) = resolve_mock_target_ast_with_tsserver(
                        cloned_mock_ast_loader,
                        target_file_path.as_path(),
                        &Some(project_root_path.clone()),
                        depth + 1,
                    ) {
                        println!("{}", e);
                    }
                });

                handles.push(handle);
            }

            for handle in handles {
                handle.join().unwrap();
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
        if let Err(e) = resolve_mock_target_ast(
            mock_ast_loader.clone(),
            program,
            path,
            ts_config_path,
            project_root_path,
            1,
        ) {
            let name = &mock_ast_loader.lock().unwrap().mock_func_name;
            println!("{}: {}", format!("{}", name.red()), e);
        }
    }

    // println!("--------INIT---------");
    // mock_loader.debug();
    // println!("-----------------");
}
