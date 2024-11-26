use crate::boostest_target::target::{MainTarget, PropertyTarget, Target};
use crate::boostest_utils::file_utils;
use crate::boostest_utils::id_name::get_id_with_hash;
use crate::boostest_utils::napi::OutputCode;

use anyhow::Result;
use colored::*;
use std::collections::HashMap;
use std::path::Path;
use std::sync::{Arc, Mutex};

use super::output_generator::OutputGenerator;

pub fn handle_output_main_task(
    main_targets: Vec<Arc<Mutex<MainTarget>>>,
    path: &Path,
) -> Option<HashMap<String, OutputCode>> {
    if main_targets.is_empty() {
        println!("{}", format!("not found target function: {:?}", path).red());

        return None;
    }

    let mut hash_map: HashMap<String, OutputCode> = HashMap::new();

    // NOTE: if this loop change to multi-thread, the f(file) is need change to Arc<Mutex<File>>
    for main_target in main_targets {
        let mut output = String::new();

        let locked_main_target = main_target.lock().unwrap();
        let target = locked_main_target.target.clone();
        let func_name = locked_main_target.target.lock().unwrap().func_name.clone();

        let code = get_code(true, target.clone(), None);

        match code {
            Some((code, _var)) => {
                output.push_str(&code);
                output.push_str("\n");
            }
            None => {
                println!(
                    "{}",
                    format!(
                        "failed to create test data: {} of {}",
                        target.clone().lock().unwrap().func_name,
                        func_name
                    )
                    .red()
                );
            }
        }

        write_ref_properties(target.lock().unwrap().ref_properties.clone(), &mut output);

        hash_map.insert(
            func_name,
            OutputCode {
                code: output,
                path: path.to_string_lossy().to_string(),
            },
        );
    }

    Some(hash_map)
}

pub fn write_ref_properties(
    property_targets: Vec<Arc<Mutex<PropertyTarget>>>,
    output: &mut String,
) -> Result<()> {
    let mut writed = Vec::new();

    for children_prop in property_targets.iter() {
        let locked_prop = children_prop.lock().unwrap();

        let code = get_code(
            false,
            locked_prop.target.clone(),
            locked_prop.parent_key_name.clone(),
        );

        match code {
            Some((code, var_name)) => {
                if writed.contains(&var_name) {
                    continue;
                }

                output.push_str(&code);
                output.push_str("\n");
                writed.push(var_name);
            }
            None => {
                // let allocator = oxc::allocator::Allocator::default();
                // let source_type = SourceType::ts();
                // let fallback_code = FallbackFuncBuilder::new(
                //     &allocator,
                //     locked_prop.target.lock().unwrap().func_name.clone(),
                //     locked_prop.parent_key_name.clone(),
                // )
                // .generate_code(source_type);
                //
                // f.write_all(fallback_code.as_bytes())?;
                // f.write_all(b"\n")?;
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
            output,
        )?;
    }
    Ok(())
}

fn get_code(
    is_main_target: bool,
    target: Arc<Mutex<Target>>,
    key_name: Option<String>,
) -> Option<(String, String)> {
    let locked_target = target.lock().unwrap();
    match &locked_target.target_definition {
        Some(target_definition) => {
            let target_source =
                file_utils::read(&target_definition.file_path).unwrap_or(String::new());
            let target_source_text = target_definition.span.source_text(&target_source);
            let allocator = oxc::allocator::Allocator::default();

            let var_name = get_id_with_hash(
                locked_target
                    .target_reference
                    .file_path
                    .to_string_lossy()
                    .to_string(),
                locked_target.target_reference.span,
            );

            let mut code_generator = OutputGenerator::new(
                is_main_target,
                &allocator,
                &target_definition.specifier,
                &locked_target.func_name,
                var_name.clone(),
                target_definition.span.clone(),
                target_definition.file_path.to_string_lossy().to_string(),
                target_definition.defined_generics.clone(),
                &target_source_text,
            );

            code_generator.generate();

            if let Some(code) = code_generator.code {
                return Some((code, var_name));
            }

            return None;
        }

        _ => {
            // println!(
            //     "{} of {}:{}",
            //     &locked_target.name.red(),
            //     &locked_target.func_name.red(),
            //     "not found target definition",
            // );
        }
    }
    None
}
