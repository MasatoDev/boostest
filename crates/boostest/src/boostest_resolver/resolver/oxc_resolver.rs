use anyhow::{anyhow, Result};
use colored::*;
use oxc::parser::Parser;
use oxc::span::{SourceType, Span};
use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex};

use crate::boostest_resolver::resolver::tsserver_resolver::resolve_target_ast_with_tsserver;
use crate::boostest_resolver::visit_mut::TargetResolver;
use crate::boostest_utils::module_resolver::resolve_specifier;
use oxc::ast::VisitMut;

use crate::boostest_utils::file_utils;
use crate::TSServerCache;

/*************************/
/* main func for resolve */
/*************************/
pub fn resolve_target(
    target_resolver: &mut TargetResolver,
    target_file_path: PathBuf,
    ts_config_path: &Option<PathBuf>,
    lib_file_path: &PathBuf,
    project_root_path: &Option<PathBuf>,
    depth: u8,
    ts_server_cache: Arc<Mutex<TSServerCache>>,
) -> Result<()> {
    // prevent infinite loop
    if depth > 50 {
        println!(
            "{}",
            format!(
                "module resolution depth is too deep: {} of {}",
                target_resolver.target.lock().unwrap().name,
                target_file_path.to_str().unwrap_or("unknown file")
            )
            .red()
        );
        return Ok(());
    }

    target_resolver.temp_current_read_file_path = target_file_path.clone();
    let file = file_utils::read(&target_file_path).unwrap_or_default();
    let source_type = SourceType::ts();
    let allocator = oxc::allocator::Allocator::default();
    let parser = Parser::new(&allocator, &file, source_type);

    let mut program = parser.parse().program;
    target_resolver.visit_statements(&mut program.body);

    println!(
        "\ntarget_name: {:?} TO resolved: {:?}",
        target_resolver.get_target_name(),
        target_resolver.resolved()
    );

    // /*
    //  * NOTE:
    //  * start analysis for ref_properties after original mock_target_ast analysis is started
    //  */
    // for prop in self.get_needs_start_analysis_properties() {
    //     prop.lock().unwrap().analysis_start();
    //     resolve_mock_target_ast(prop, program, path, ts_config_path, project_root_path, 1)?;
    // }

    if target_resolver.resolved() {
        return Ok(());
    };

    target_resolver.set_import_source();

    if let Ok(module_path) = target_file_path.canonicalize() {
        println!("module_path");
        if let Some(parent_path) = module_path.parent() {
            println!("parent_path");
            if let Some(next_import) = target_resolver.get_next_import() {
                println!("next_import{:?}", depth);

                let mut read_file_path: PathBuf = PathBuf::new();
                let parent_path_buf = parent_path.to_path_buf();

                // important the order of is_loaded_hogehoge() because these func handle loaded flag
                if TargetResolver::is_loaded_index_d_ts(next_import) {
                    println!("index_d_ts_loaded");
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

                if TargetResolver::is_loaded_full_path(next_import) {
                    println!("full_path_loaded");
                    next_import.index_d_ts_loaded = true;
                    read_file_path = parent_path_buf.join("index.d.ts");
                }

                if TargetResolver::is_unloaded_import(next_import) {
                    println!("unloaded_import");
                    next_import.loaded = true;

                    let resolution_result =
                        resolve_specifier(parent_path, &next_import.full_path, ts_config_path);

                    if let Ok(resolution) = resolution_result {
                        read_file_path = resolution.full_path();
                    }
                }

                if next_import.need_reload {
                    read_file_path = target_file_path;
                }

                if !read_file_path.exists() {
                    if let Some(project_root_path) = project_root_path {
                        resolve_target_ast_with_tsserver(
                            target_resolver,
                            &Some(project_root_path.clone()),
                            depth + 1,
                            ts_server_cache.clone(),
                        )?;
                    }

                    return Ok(());
                }

                println!("re resolve");
                resolve_target(
                    target_resolver,
                    read_file_path,
                    ts_config_path,
                    lib_file_path,
                    project_root_path,
                    depth + 1,
                    ts_server_cache.clone(),
                )?;
                return Ok(());
            }

            if !target_resolver.lib_file_loaded {
                target_resolver.lib_file_loaded = true;
                println!("use lib path");
                resolve_target(
                    target_resolver,
                    lib_file_path.clone(),
                    ts_config_path,
                    lib_file_path,
                    project_root_path,
                    depth + 1,
                    ts_server_cache.clone(),
                )?;
                return Ok(());
            } else {
                if let Some(project_root_path) = project_root_path {
                    println!("outer tsserver");
                    resolve_target_ast_with_tsserver(
                        target_resolver,
                        &Some(project_root_path.clone()),
                        depth + 1,
                        ts_server_cache.clone(),
                    )?;
                }
                return Ok(());
            }
        }
    }

    Ok(())
}
