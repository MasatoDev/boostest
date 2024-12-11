use crate::boostest_resolver::target::{MainTarget, ResolvedDefinitions, Target};
use crate::boostest_utils::file_utils;
use crate::boostest_utils::id_name::get_id_with_hash;
use crate::boostest_utils::napi::{OutputCode, TargetType};

use anyhow::Result;
use colored::*;
use oxc::span::Span;
use std::collections::HashMap;
use std::path::Path;
use std::sync::{Arc, Mutex};

use super::output_generator::OutputGenerator;
use super::output_main_generator::OutputMainGenerator;

pub fn handle_output_main_task(
    main_targets: Vec<Arc<Mutex<MainTarget>>>,
    path: &Path,
) -> Option<HashMap<String, OutputCode>> {
    if main_targets.is_empty() {
        println!("{}", format!("not found target function: {:?}", path).red());

        return None;
    }

    let mut hash_map: HashMap<String, OutputCode> = HashMap::new();

    // TODO:
    // targetがPromiseなどの場合は除外する。main_targetには混ざってしまう...orz
    // Promise系でも<>で型を指定している場合は、その型を取得しないと除外しちゃダメだ

    // NOTE: if this loop change to multi-thread, the f(file) is need change to Arc<Mutex<File>>
    for main_target in main_targets {
        let writed = Arc::new(Mutex::new(Vec::new()));

        let mut output = String::new();

        // locked
        let locked_main_target = main_target.lock().unwrap();
        let locked_target = locked_main_target.target.lock().unwrap();
        let resolved_definitions = &locked_main_target.resolved_definitions;

        let func_name = locked_target.func_name.clone();
        let original_target_ref = locked_main_target.original_target_ref.clone();

        let mut target_type = TargetType::TSTypeAlias;

        if let Some(def_target_type) = resolved_definitions
            .lock()
            .unwrap()
            .get_target_type(&locked_target.target_reference)
        {
            target_type = def_target_type;
        }

        drop(locked_target);

        let code = get_code(
            locked_main_target.target.clone(),
            resolved_definitions.clone(),
        );

        if let Some(original_decl_code) = get_original_code(
            &original_target_ref.file_path,
            original_target_ref.span,
            target_type,
            resolved_definitions.clone(),
        ) {
            output.push_str(&original_decl_code);
        }
        match code {
            Some((code, _var_name)) => {
                output.push_str(&code);
                output.push_str("\n");
            }
            None => {
                println!(
                    "{}",
                    format!("failed to create test data: {}", func_name).red()
                );
            }
        }

        write_ref_properties(
            locked_main_target
                .target
                .lock()
                .unwrap()
                .ref_properties
                .clone(),
            resolved_definitions.clone(),
            &mut output,
            writed.clone(),
        );

        // println!("\n🎉🎉🎉🎉BEFORE: {}", output);

        hash_map.insert(
            func_name,
            OutputCode {
                target_type,
                code: output,
                path: path.to_string_lossy().to_string(),
            },
        );
    }

    Some(hash_map)
}

pub fn write_ref_properties(
    property_targets: Vec<Arc<Mutex<Target>>>,
    resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
    output: &mut String,
    writed: Arc<Mutex<Vec<String>>>,
) -> Result<()> {
    for children_prop in property_targets.iter() {
        let code = get_code(children_prop.clone(), resolved_definitions.clone());

        match code {
            Some((code, var_name)) => {
                if writed.lock().unwrap().contains(&var_name) {
                    continue;
                }

                output.push_str(&code);
                output.push('\n');
                writed.lock().unwrap().push(var_name);
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

        write_ref_properties(
            children_prop.lock().unwrap().ref_properties.clone(),
            resolved_definitions.clone(),
            output,
            writed.clone(),
        )?;
    }
    Ok(())
}

fn get_code(
    target: Arc<Mutex<Target>>,
    resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
) -> Option<(String, String)> {
    let locked_target = target.lock().unwrap();

    let target_definition = &resolved_definitions
        .lock()
        .unwrap()
        .get_target_definition(&locked_target.target_reference);

    if let Some(target_definition) = target_definition {
        let target_source = file_utils::read(&target_definition.file_path).unwrap_or_default();

        let target_source_text = target_definition.span.source_text(&target_source);
        let allocator = oxc::allocator::Allocator::default();

        let var_name = get_id_with_hash(
            target_definition.file_path.to_string_lossy().to_string(),
            target_definition.span,
        );

        let mut code_generator = OutputGenerator::new(
            resolved_definitions.clone(),
            &allocator,
            &target_definition.specifier,
            var_name.clone(),
            target_definition.span,
            target_definition.file_path.to_string_lossy().to_string(),
            target_definition.defined_generics.clone(),
            target_source_text,
        );

        code_generator.generate();

        if let Some(code) = code_generator.code {
            return Some((code, var_name));
        }
    }

    return None;
}

fn get_original_code(
    file_path: &Path,
    span: Span,
    target_type: TargetType,
    resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
) -> Option<String> {
    let target_source = file_utils::read(file_path).unwrap_or_default();
    let target_source_text = span.source_text(&target_source);

    let allocator = oxc::allocator::Allocator::default();

    let mut code_generator = OutputMainGenerator::new(
        &allocator,
        resolved_definitions.clone(),
        target_type,
        span,
        file_path.to_string_lossy().to_string(),
        target_source_text,
    );

    code_generator.generate();

    if let Some(code) = code_generator.code {
        return Some(code);
    }

    None
}
