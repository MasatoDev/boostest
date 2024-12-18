use anyhow::{anyhow, Result};
use colored::*;
use oxc::parser::Parser;
use oxc::span::SourceType;
use std::path::PathBuf;
use std::sync::{Arc, Mutex};

use oxc::ast::VisitMut;

use crate::boostest_resolver::visit_mut::TargetResolver;
use crate::boostest_utils::buf::{source_text_from_span, utf16_span_to_utf8_span};
use crate::boostest_utils::file_utils;
use crate::boostest_utils::tsserver::{tsserver, TSServerCache};

pub fn resolve_target_ast_with_tsserver(
    target_resolver: &mut TargetResolver,
    project_root_path: &Option<PathBuf>,
    depth: u8,
    ts_server_cache: Arc<Mutex<TSServerCache>>,
) -> Result<()> {
    let target_file_path = target_resolver
        .target
        .lock()
        .unwrap()
        .target_reference
        .file_path
        .clone();

    if depth > 10 {
        println!(
            "{}",
            format!(
                "module resolution depth is too deep on tsserver: {} of {}",
                target_resolver.target.lock().unwrap().name,
                target_file_path.to_str().unwrap_or("unknown file")
            )
            .red()
        );
        return Ok(());
    }

    // clean up
    target_resolver.temp_renamed_var_decl_span = None;
    if target_resolver.resolved() {
        return Ok(());
    };

    let absolute_path = target_file_path.canonicalize().unwrap();
    target_resolver.temp_current_read_file_path = absolute_path.clone();

    if let Some(project_root_path) = project_root_path {
        let target = target_resolver.target.lock().unwrap();
        let name = target.name.clone();
        let span = target.target_reference.span.clone();
        drop(target);

        target_resolver.use_tsserver = true;

        if let Some(result) = tsserver(
            project_root_path,
            &absolute_path,
            span,
            &name,
            ts_server_cache.clone(),
        ) {
            let mut target_source_text = String::new();

            for (target_file_path, result_span) in result.iter() {
                let target_source = file_utils::read(&target_file_path).unwrap_or(String::new());
                let utf8_span = utf16_span_to_utf8_span(result_span.clone(), &target_source);

                // NOTE: 対象ファイルから定義元のspanを取得
                // それをsouce_textとしてast visitするため完全なファイルではない
                // 抽出位置からのspanとなるため、抽出地点のSPANを加えられるよう一時保存する
                target_resolver.read_file_span = Some(utf8_span);
                target_resolver.temp_current_read_file_path = target_file_path.clone();

                target_source_text.push_str(source_text_from_span(span, &target_source));
            }

            let source_type = SourceType::ts();
            let allocator = oxc::allocator::Allocator::default();
            let parser = Parser::new(&allocator, &target_source_text, source_type);
            let mut program = parser.parse().program;

            target_resolver.visit_statements(&mut program.body);

            if let Some(span) = target_resolver.temp_renamed_var_decl_span {
                let mut target = target_resolver.target.lock().unwrap();
                target.target_reference.span = span;
                target.target_reference.file_path = target_file_path.clone();
                drop(target);
                resolve_target_ast_with_tsserver(
                    target_resolver,
                    &Some(project_root_path.clone()),
                    depth + 1,
                    ts_server_cache.clone(),
                )?;
            }
        } else {
            return Err(anyhow!("ファイル読み込みでエラー"));
        }
    }
    Ok(())
}
