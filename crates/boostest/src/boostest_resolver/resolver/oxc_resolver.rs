use anyhow::Result;
use colored::*;
use oxc::parser::Parser;
use oxc::span::{SourceType, Span, SPAN};
use rayon::prelude::*;
use std::fs;
use std::path::PathBuf;
use std::sync::{Arc, Mutex};

use crate::boostest_resolver::resolver::tsserver_resolver::resolve_target_ast_with_tsserver;
use crate::boostest_resolver::target::{DeclType, TargetDefinition};
use crate::boostest_resolver::visit_mut::TargetResolver;
use crate::boostest_utils::module_resolver::resolve_specifier;
use crate::boostest_utils::napi::TargetType;
use oxc::ast::VisitMut;

use crate::boostest_utils::file_utils;
use crate::{Setting, TSServerCache};

/*************************/
/* main func for resolve */
/*************************/
pub fn resolve_target(
    is_recursive: bool,
    target_resolver: &mut TargetResolver,
    target_file_path: PathBuf,
    setting: Arc<Setting>,
    depth: u8,
    ts_server_cache: Arc<Mutex<TSServerCache>>,
) -> Result<()> {
    // println!("\nname: {}", target_resolver.target.lock().unwrap().name);
    // prevent infinite loop
    if depth > 50 {
        output_loop_error(
            &target_resolver.target.lock().unwrap().name,
            target_file_path.to_str().unwrap_or("unknown file"),
        );
        return Ok(());
    }

    // save current read file path
    target_resolver.temp_current_read_file_path = target_file_path
        .canonicalize()
        .unwrap_or(target_file_path.clone());

    // [START] read file and visit AST
    let file = file_utils::read(&target_file_path).unwrap_or_default();
    let source_type = SourceType::ts();
    let allocator = oxc::allocator::Allocator::default();
    let parser = Parser::new(&allocator, &file, source_type);
    let mut program = parser.parse().program;
    target_resolver.visit_statements(&mut program.body);
    // [END] read file and visit AST

    if !is_recursive {
        return Ok(());
    }
    if target_resolver.resolved() {
        return Ok(());
    };

    target_resolver.set_import_source();

    match target_resolver.get_next_read_import() {
        Some(next_import) => {
            let mut read_file_path: PathBuf = PathBuf::new();

            // resolve module path
            if !next_import.loaded {
                next_import.loaded = true;
                let resolution_result = resolve_specifier(
                    &next_import.parent_path,
                    &next_import.full_path,
                    &setting.tsconfig,
                );

                if let Ok(resolution) = resolution_result {
                    // println!("\n✅resolution: {:?}", resolution);
                    let resolution_path = resolution.full_path();

                    read_file_path = resolution_path.clone();
                    next_import.canonical_path = Some(resolution_path);

                    if let Some(file_name) = read_file_path.file_name() {
                        if file_name == "index.ts"
                            || file_name == "index.js"
                            || file_name == "index.d.ts"
                        {
                            next_import.default_import = true;
                        }
                    }
                }
            }

            // reload if specifier of module path is changed
            if next_import.need_reload {
                next_import.need_reload = false;
                read_file_path = target_file_path;
            }

            if !read_file_path.exists() {
                if let Some(project_root_path) = &setting.project_root_path {
                    resolve_target_ast_with_tsserver(
                        target_resolver,
                        &Some(project_root_path.clone()),
                        depth + 1,
                        ts_server_cache.clone(),
                    )?;
                }
                return Ok(());
            }

            resolve_target(
                true,
                target_resolver,
                read_file_path,
                setting,
                depth + 1,
                ts_server_cache.clone(),
            )?;
            Ok(())
        }

        // if no next import, resolve typescript lib file
        None => {
            let path_vec = target_resolver.get_all_flag_paths();

            if path_vec.len() > 1 {
                let mut added = false;

                for path in &path_vec {
                    let target_def = TargetDefinition {
                        specifier: "".to_string(),
                        span: Span::default(),
                        file_path: path.clone(),
                        target_type: TargetType::ImportAll,
                        defined_generics: vec![],
                    };

                    let is_setable = target_resolver
                        .resolved_definitions
                        .lock()
                        .unwrap()
                        .is_setable_target_definition(
                            &target_resolver.target.lock().unwrap().target_reference,
                            TargetType::ImportAll,
                            DeclType::ImportAll,
                        );
                    if is_setable {
                        added = true;
                        target_resolver
                            .resolved_definitions
                            .lock()
                            .unwrap()
                            .set_target_definition(
                                &target_resolver.target.lock().unwrap().target_reference,
                                target_def,
                            );
                    }
                }

                if added {
                    target_resolver.set_resolved();
                    target_resolver.skip_set_definition = true;
                    target_resolver.skip_id_check = true;
                    target_resolver.target.lock().unwrap().is_namespace = true;

                    path_vec.iter().for_each(|path| {
                        resolve_target(
                            false,
                            target_resolver,
                            path.clone(),
                            setting.clone(),
                            depth + 1,
                            ts_server_cache.clone(),
                        )
                        .unwrap();
                    });

                    return Ok(());
                }
            }

            if !target_resolver.typescript_default_lib_file_loaded {
                target_resolver.typescript_default_lib_file_loaded = true;
                if let Some(lib_file_path) = &setting.default_lib_file_path {
                    resolve_target(
                        true,
                        target_resolver,
                        lib_file_path.clone(),
                        setting,
                        depth + 1,
                        ts_server_cache.clone(),
                    )?;
                }
                return Ok(());
            }

            if !target_resolver.typescript_lib_files_loaded {
                target_resolver.typescript_lib_files_loaded = true;

                if target_resolver.typescript_lib_files.is_empty() {
                    if let Some(lib_file_path) = &setting.default_lib_file_path {
                        if let Some(parent_dir_path) = lib_file_path.parent() {
                            if let Ok(lib_files) = fs::read_dir(parent_dir_path) {
                                for entry in lib_files.into_iter().flatten() {
                                    let path = entry.path();

                                    if path.is_file() {
                                        if let Some(file_name) = path.file_name() {
                                            let file_name_str = file_name.to_string_lossy();
                                            if file_name_str.starts_with("lib") {
                                                target_resolver.typescript_lib_files.push(path);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                for lib_file in target_resolver.typescript_lib_files.clone() {
                    resolve_target(
                        false,
                        target_resolver,
                        lib_file,
                        setting.clone(),
                        depth + 1,
                        ts_server_cache.clone(),
                    )?;
                }

                Ok(())
            } else {
                if let Some(project_root_path) = &setting.project_root_path {
                    resolve_target_ast_with_tsserver(
                        target_resolver,
                        &Some(project_root_path.clone()),
                        depth + 1,
                        ts_server_cache.clone(),
                    )?;
                }
                Ok(())
            }
        }
    }
}

fn output_loop_error(target_name: &str, target_file_path: &str) {
    println!(
        "{}",
        format!(
            "module resolution depth is too deep: {} of {}",
            target_name, target_file_path
        )
        .red()
    );
}
