use crate::boostest_generator::code_generator::CodeGenerator;
use crate::boostest_generator::fallback_func_builder::FallbackFuncBuilder;
use crate::boostest_target::target::{MainTarget, PropertyTarget, Target};
use crate::boostest_utils::file_utils;

use anyhow::Result;
use colored::*;
use oxc::span::SourceType;
use std::ffi::OsStr;
use std::fs::File;
use std::io::prelude::*;
use std::path::Path;
use std::sync::{Arc, Mutex};

pub fn handle_main_task(
    main_targets: Vec<Arc<Mutex<MainTarget>>>,
    path: &Path,
    out_file_name: &str,
) -> Result<()> {
    let file_name = path
        .file_stem()
        .unwrap_or(OsStr::new("none_file_name"))
        .to_str()
        .unwrap_or("none_file_name");

    if main_targets.is_empty() {
        println!(
            "{}",
            format!("not found target function: {}", file_name).red()
        );

        return Ok(());
    }

    let canonical_path = path.canonicalize()?;
    let parent_path = canonical_path
        .parent()
        .ok_or(anyhow::anyhow!("target path not resolved"))?;

    let path = parent_path.join(format!("{}_{}{}", file_name, out_file_name, ".ts")); // srcディレクトリ内のgreeting.ts

    let mut f: File = File::create(&path)?;

    // NOTE: if this loop change to multi-thread, the f(file) is need change to Arc<Mutex<File>>
    for main_target in main_targets {
        let target = main_target.lock().unwrap().target.clone();

        let code = get_code(target.clone(), None);

        match code {
            Some(code) => {
                f.write_all(code.as_bytes())?;
                f.write_all(b"\n")?;
            }
            None => {
                println!(
                    "{}",
                    format!(
                        "failed to create test data: {} of {}",
                        target.clone().lock().unwrap().func_name,
                        file_name
                    )
                    .red()
                );
            }
        }

        write_ref_properties(target.lock().unwrap().ref_properties.clone(), &mut f)?;
    }

    Ok(())
}

pub fn write_ref_properties(
    property_targets: Vec<Arc<Mutex<PropertyTarget>>>,
    f: &mut File,
) -> Result<()> {
    for children_prop in property_targets.iter() {
        let locked_prop = children_prop.lock().unwrap();

        let code = get_code(locked_prop.target.clone(), locked_prop.key_name.clone());

        match code {
            Some(code) => {
                f.write_all(code.as_bytes())?;
                f.write_all(b"\n")?;
            }
            None => {
                let allocator = oxc::allocator::Allocator::default();
                let source_type = SourceType::ts();
                let fallback_code = FallbackFuncBuilder::new(
                    &allocator,
                    locked_prop.target.lock().unwrap().func_name.clone(),
                    locked_prop.key_name.clone(),
                )
                .generate_code(source_type);

                f.write_all(fallback_code.as_bytes())?;
                f.write_all(b"\n")?;
            }
        }

        drop(locked_prop);
        write_ref_properties(
            children_prop
                .lock()
                .unwrap()
                .target
                .lock()
                .unwrap()
                .ref_properties
                .clone(),
            f,
        )?;
    }
    Ok(())
}

fn get_code(target: Arc<Mutex<Target>>, key_name: Option<String>) -> Option<String> {
    let locked_target = target.lock().unwrap();
    match &locked_target.target_definition {
        Some(target_definition) => {
            let target_source =
                file_utils::read(&target_definition.file_path).unwrap_or(String::new());
            let target_source_text = target_definition.span.source_text(&target_source);
            let allocator = oxc::allocator::Allocator::default();

            let mut code_generator = CodeGenerator::new(
                &allocator,
                &target_definition.specifier,
                &locked_target.func_name,
                key_name,
                &target_source_text,
                &target_definition.target_type,
            );

            code_generator.generate();

            return code_generator.code;
        }

        _ => {
            println!(
                "{}:{}",
                &locked_target.func_name.red(),
                "not found target definition",
            );
        }
    }
    None
}
