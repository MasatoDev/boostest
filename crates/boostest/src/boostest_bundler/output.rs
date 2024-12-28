use crate::boostest_resolver::target::{
    bundle_target_defs, MainTarget, ResolvedDefinitions, Target,
};
use crate::boostest_utils::file_utils;
use crate::boostest_utils::id_name::get_id_with_hash;
use crate::boostest_utils::napi::{OutputCode, TargetType};

use anyhow::Result;
use colored::*;
use oxc::allocator::{Allocator, Vec as AllocVec};
use oxc::ast::ast::Statement;
use oxc::ast::VisitMut;
use oxc::codegen::Codegen;
use oxc::parser::Parser;
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
                output.push('\n');
            }
            None => {}
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

    let target_definitions = &resolved_definitions
        .lock()
        .unwrap()
        .get_target_definition(&locked_target.target_reference);

    if let Some(target_definitions) = target_definitions {
        if let Some(last_target_def) = target_definitions.last() {
            println!("last_target_def: {:?}", last_target_def);
            let target_source = file_utils::read(&last_target_def.file_path).unwrap_or_default();

            let mut target_source_text =
                last_target_def.span.source_text(&target_source).to_string();

            // NOTE: if target is TSInterface, bundle all target definitions to merge interfaces
            if last_target_def.target_type == TargetType::TSInterface {
                for target_def in &target_definitions[1..] {
                    target_source_text.push_str(
                        target_def.span.source_text(
                            &file_utils::read(&target_def.file_path).unwrap_or_default(),
                        ),
                    );
                }
            }

            //NOTE: if target is ImportAll, bundle all target definitions to merge definitions
            if locked_target.is_namespace {
                let prefix = format!("namespace {} {{", locked_target.name);

                let mut unique_paths = HashSet::new();

                for target_def in &target_definitions[1..] {
                    if unique_paths.insert(&target_def.file_path) {
                        target_source_text
                            .push_str(&file_utils::read(&target_def.file_path).unwrap_or_default());
                    }
                }

                let code = CleanupVisitor::new().cleanup(&target_source_text);
                target_source_text = format!("{}\n{}\n}}", prefix, code);
            }

            let allocator = oxc::allocator::Allocator::default();

            if let Some((file_path, span, defined_generics, _)) =
                bundle_target_defs(target_definitions)
            {
                let var_name = get_id_with_hash(file_path.clone(), span);

                let mut code_generator = OutputGenerator::new(
                    resolved_definitions.clone(),
                    &allocator,
                    &last_target_def.specifier,
                    var_name.clone(),
                    span,
                    file_path,
                    defined_generics,
                    &target_source_text,
                );

                code_generator.generate();

                if let Some(code) = code_generator.code {
                    return Some((code, var_name));
                }
            }
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

struct CleanupVisitor {}

impl CleanupVisitor {
    fn new() -> Self {
        Self {}
    }

    fn cleanup(&mut self, code: &str) -> String {
        let source_type = SourceType::ts();
        let allocator = Allocator::default();
        let source_text_parser = Parser::new(&allocator, code, source_type);
        let mut program = source_text_parser.parse().program;
        self.visit_program(&mut program);
        program.comments = AllocVec::new_in(&allocator);

        let code = Codegen::new().build(&program).code;
        code
    }
}

impl<'a> VisitMut<'a> for CleanupVisitor {
    fn visit_statements(&mut self, it: &mut AllocVec<'a, Statement<'a>>) {
        it.retain(|stmt| {
            let result: bool = match stmt {
                Statement::ImportDeclaration(_) => false,
                Statement::TSImportEqualsDeclaration(_) => false,
                _ => true,
            };
            result
        });
    }
}
