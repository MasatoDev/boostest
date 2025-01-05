use crate::boostest_resolver::target::{MainTarget, ResolvedDefinitions, Target, TargetDefinition};
use crate::boostest_utils::file_utils;
use crate::boostest_utils::id_name::get_id_with_hash;
use crate::boostest_utils::napi::{OutputCode, TargetType};

use anyhow::Result;
use colored::*;
use oxc::allocator::{Allocator, Vec as AllocVec};
use oxc::span::{SourceType, Span};
use rayon::prelude::*;
use std::collections::{HashMap, HashSet};
use std::path::Path;
use std::sync::{Arc, Mutex};

use super::output_generator::OutputGenerator;
use super::output_main_generator::OutputMainGenerator;

pub fn handle_output_main_task(
    main_targets: Vec<Arc<Mutex<MainTarget>>>,
    path: &Path,
) -> Option<HashMap<String, OutputCode>> {
    if main_targets.is_empty() {
        return None;
    }

    let hash_map: Arc<Mutex<HashMap<String, OutputCode>>> = Arc::new(Mutex::new(HashMap::new()));

    // TODO:
    // targetがPromiseなどの場合は除外する。main_targetには混ざってしまう...orz
    // Promise系でも<>で型を指定している場合は、その型を取得しないと除外しちゃダメだ

    // NOTE: if this loop change to multi-thread, the f(file) is need change to Arc<Mutex<File>>
    main_targets.par_iter().for_each(|main_target| {
        let writed = Arc::new(Mutex::new(HashSet::new()));

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
            writed.clone(),
        );

        if let Some(original_decl_code) = get_original_code(
            &original_target_ref.file_path,
            original_target_ref.span,
            resolved_definitions.clone(),
        ) {
            output.push_str(&original_decl_code);
        }
        if let Some(code) = code {
            output.push_str(&code);
            output.push('\n');
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

        hash_map.lock().unwrap().insert(
            func_name,
            OutputCode {
                target_type,
                code: output,
                path: path.to_string_lossy().to_string(),
            },
        );
    });

    match Arc::try_unwrap(hash_map) {
        Ok(mutex) => {
            let hashmap = mutex.into_inner().unwrap();
            return Some(hashmap);
        }
        Err(_) => {
            println!("{}", "\nFailed resolving".red());
        }
    }

    Some(HashMap::new())
}

pub fn write_ref_properties(
    property_targets: Vec<Arc<Mutex<Target>>>,
    resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
    output: &mut String,
    writed: Arc<Mutex<HashSet<String>>>,
) -> Result<()> {
    for children_prop in property_targets.iter() {
        let code = get_code(
            children_prop.clone(),
            resolved_definitions.clone(),
            writed.clone(),
        );

        let locked_prop = children_prop.lock().unwrap();
        if locked_prop.is_namespace {
            let prefix = format!("namespace {} {{", locked_prop.name);
            output.push_str(prefix.as_str());
        }
        drop(locked_prop);

        match code {
            Some(code) => {
                output.push_str(&code);
                output.push('\n');
            }
            None => {}
        }

        if children_prop.lock().unwrap().is_namespace {
            output.push_str("}\n");
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
    writed: Arc<Mutex<HashSet<String>>>,
) -> Option<String> {
    let locked_target = target.lock().unwrap();
    let allocator = oxc::allocator::Allocator::default();

    let target_definitions = &resolved_definitions
        .lock()
        .unwrap()
        .get_target_definition(&locked_target.target_reference);

    if let Some(target_definitions) = target_definitions {
        if let Some(last_target_def) = target_definitions.last() {
            let mut locked_writed = writed.lock().unwrap();
            let mut generated_code = String::new();

            let file_path = last_target_def.file_path.to_string_lossy().to_string();
            let var_name = get_id_with_hash(file_path.clone(), last_target_def.span);

            //NOTE: if target is ImportAll, bundle all target definitions to merge definitions
            if locked_target.is_namespace && last_target_def.target_type == TargetType::ImportAll {
                for target_def in target_definitions.iter() {
                    let target_hash = locked_target.name.clone()
                        + &get_id_with_hash(
                            target_def.file_path.to_string_lossy().to_string(),
                            Span::default(),
                        );

                    if locked_writed.insert(target_hash) {
                        let code = generate_code_from_definition(
                            &allocator,
                            target_def,
                            resolved_definitions.clone(),
                            true,
                            None,
                        );

                        if let Some(code) = code {
                            generated_code.push_str(&code);
                        }
                    }
                }

                return Some(generated_code);
            }

            if !locked_writed.insert(var_name.clone()) {
                return None;
            }

            let main_code = generate_code_from_definition(
                &allocator,
                last_target_def,
                resolved_definitions.clone(),
                false,
                Some(var_name.clone()),
            );

            if let Some(main_code) = main_code {
                generated_code.push_str(&main_code);
            } else {
                return None;
            }

            // NOTE: if target is TSInterface, bundle all target definitions to merge interfaces
            if last_target_def.target_type == TargetType::TSInterface {
                for target_def in &target_definitions[1..] {
                    if locked_writed.insert(get_id_with_hash(
                        target_def.file_path.to_string_lossy().to_string(),
                        target_def.span,
                    )) && target_def.target_type == TargetType::TSInterface
                    {
                        let code = generate_code_from_definition(
                            &allocator,
                            target_def,
                            resolved_definitions.clone(),
                            false,
                            None,
                        );
                        if let Some(code) = code {
                            generated_code.push_str(&code);
                        }
                    }
                }
            }

            drop(locked_writed);
            return Some(generated_code);
        }
    }

    None
}

fn get_original_code(
    file_path: &Path,
    span: Span,
    resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
) -> Option<String> {
    let target_source = file_utils::read(file_path).unwrap_or_default();
    let target_source_text = span.source_text(&target_source);
    let allocator = oxc::allocator::Allocator::default();

    let mut code_generator = OutputMainGenerator::new(
        &allocator,
        resolved_definitions.clone(),
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

fn generate_code_from_definition(
    allocator: &Allocator,
    target_def: &TargetDefinition,
    resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
    is_full: bool,
    var_name: Option<String>,
) -> Option<String> {
    let target_file_full_text = file_utils::read(&target_def.file_path).unwrap_or_default();
    let target_code = if is_full {
        &target_file_full_text
    } else {
        target_def.span.source_text(&target_file_full_text)
    };

    let mut code_generator = OutputGenerator::new(
        resolved_definitions.clone(),
        allocator,
        &target_def.specifier,
        var_name.unwrap_or(target_def.specifier.clone()),
        target_def.span,
        target_def.file_path.to_string_lossy().to_string(),
        target_def.defined_generics.clone(),
        target_code,
    );
    code_generator.generate();
    code_generator.code
}
