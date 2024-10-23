use colored::*;

use anyhow::{anyhow, Result};
use oxc::ast::VisitMut;
use oxc::span::Span;
use oxc::{ast::ast::Program, parser::Parser, span::SourceType};
use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex};
use std::thread;

use crate::boostest_debug::tsserver;
use crate::boostest_mock_loader::mock_ast_loader::{self, MockAstLoader};
use crate::boostest_mock_loader::mock_loader::MockLoader;
use crate::boostest_utils::utils;

use ropey::Rope;

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
            for (i, c) in chunk.chars().enumerate() {
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

pub fn resolve_mock_target_ast<'a>(
    mock_ast_loader: Arc<Mutex<MockAstLoader>>,
    path: &Path,
    project_root_path: &Option<PathBuf>,
    depth: u8,
) -> Result<()> {
    let mut mock_ast_loader = mock_ast_loader.lock().unwrap();

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
            // let target_source_text = span.source_text(&target_source);

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
                    if let Err(e) = resolve_mock_target_ast(
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

pub fn load_mock(
    mock_loader: Arc<Mutex<MockLoader>>,
    program: &mut Program,
    path: &Path,
    ts_config_path: &Option<PathBuf>,
    project_root_path: &Option<PathBuf>,
) {
    {
        let mut mock_loader_ref = mock_loader.lock().unwrap();
        mock_loader_ref.visit_statements(&mut program.body);
    }

    {
        let mut handles = vec![];

        let mocks = {
            let mock_loader_ref = mock_loader.lock().unwrap();
            mock_loader_ref.mocks.clone()
        };

        for (_, mock_ast_loader) in mocks.iter() {
            let path = path.to_path_buf();
            let project_root_path = project_root_path.clone();
            let mock_ast_loader = mock_ast_loader.clone();

            let handle = thread::spawn(move || {
                if let Err(e) =
                    resolve_mock_target_ast(mock_ast_loader, &path, &project_root_path, 1)
                {
                    println!("{}", e);
                }
            });
            handles.push(handle);
        }

        for handle in handles {
            handle.join().unwrap();
        }
    }
}
