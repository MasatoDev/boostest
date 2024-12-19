mod boostest_bundler;
mod boostest_generator;
mod boostest_manager;
mod boostest_resolver;
mod boostest_utils;

use boostest_bundler::output::handle_output_main_task;
use boostest_manager::{target_detector::TargetDetector, task::handle_main_task};
use boostest_resolver::main_target_resolver::main_targets_resolve;
use boostest_utils::file_utils::handle_reset_and_create_files;
pub use boostest_utils::{
    file_utils,
    napi::OutputCode,
    napi::OutputOption,
    napi::ResolvedResult,
    setting::{self, Setting},
    tsserver::TSServerCache,
};
use colored::*;
use spinoff::{spinners, Color, Spinner};
use std::{
    collections::HashMap,
    path::{Path, PathBuf},
    sync::{Arc, Mutex},
};

pub fn resolve_target(
    path: String,
    ts_config_path: Option<&Path>,
    default_lib_file_path: &Path,
) -> ResolvedResult {
    let output_dir_name = "boostest_output";
    let mut spinner = Spinner::new(spinners::Dots, "Boostest parsing has started.", Color::Blue);
    let mut setting = Setting::new();

    if let Err(e) = setting.get_setting(Some(default_lib_file_path.to_path_buf())) {
        println!("{}: {}", "\nSetting file could not be read".blue(), e);

        if path.is_empty() {
            std::process::exit(0);
        }
    };

    // Preference for command line argument target path if it exists
    if !path.is_empty() {
        setting.set_target_path(path);
    }

    // Preference for command line argument tsconfig path if it exists
    if let Some(ts_config_path) = ts_config_path {
        let ts_config_path = ts_config_path.to_path_buf();
        setting.set_tsconfig(ts_config_path);
    }

    let target = &mut setting.target.clone().unwrap_or_else(|| {
        println!("{}", "\nNot found target files".red());
        std::process::exit(0);
    });
    target.retain(|s| !s.is_empty());
    let all_empty = target.iter().all(|s| s.is_empty());
    if all_empty {
        println!("{}", "\nNot found target files".red());
        std::process::exit(0);
    }

    let contents = file_utils::read_matching_files(target, output_dir_name).unwrap_or_else(|e| {
        println!("{}: {}", "\nTarget files cloud not parsed".red(), e);
        std::process::exit(0);
    });

    if contents.is_empty() {
        println!("{}", "\nNot found target code".red());
        std::process::exit(0);
    }

    let tsserver_cache = Arc::new(Mutex::new(TSServerCache::new()));

    let mut result: HashMap<String, OutputCode> = HashMap::new();

    let setting_arc = Arc::new(setting);

    for (path_buf, _file) in contents {
        // update console output spinner
        spinner.update(
            spinners::Dots2,
            format!(
                "Parsing File: {}",
                path_buf.file_name().unwrap().to_string_lossy()
            ),
            None,
        );

        let mut detector = TargetDetector::new(setting_arc.name.clone());
        detector.detect(&path_buf);

        let mut main_targets = detector.main_targets;

        // sort targets by function name
        main_targets.sort_by(|a, b| {
            let a = a.lock().unwrap().target.lock().unwrap().func_name.clone();
            let b = b.lock().unwrap().target.lock().unwrap().func_name.clone();
            a.cmp(&b)
        });

        main_targets_resolve(&main_targets, setting_arc.clone(), tsserver_cache.clone());

        let output = handle_output_main_task(main_targets, &path_buf);
        if let Some(output) = output {
            result.extend(output);
        }
    }
    spinner.success("Parsing Complete");

    ResolvedResult {
        output_code: Some(result),
        output_option: setting_arc.output_option.clone(),
    }
}

pub fn generate(output: HashMap<String, OutputCode>, output_option: OutputOption) {
    let mut spinner = Spinner::new(
        spinners::Dots,
        "Boostest generating has started",
        Color::Blue,
    );
    let mut single_output_dir_path = None;

    if let Some(project_root_path) = output_option.project_root_path.clone() {
        match output_option.single {
            true => {
                // clean and create files
                match handle_reset_and_create_files(&project_root_path, false) {
                    Ok(path) => single_output_dir_path = Some(path),
                    Err(e) => {
                        println!("\n Failed to create test data: {}", e);
                        std::process::exit(0);
                    }
                }
            }
            // only clean
            false => match handle_reset_and_create_files(&project_root_path, true) {
                Ok(_) => (),
                Err(e) => {
                    println!("\n Failed clean files: {}", e);
                }
            },
        }
    }

    let prepared_output: Vec<(String, OutputCode, PathBuf)> = output
        .iter()
        .map(|(func_name, output_code)| {
            let OutputCode {
                code,
                path,
                target_type,
            } = output_code;

            let mut new_return_val = (
                func_name.clone(),
                OutputCode {
                    code: code.clone(),
                    path: path.clone(),
                    target_type: *target_type,
                },
                PathBuf::new(),
            );

            if single_output_dir_path.is_some() {
                if let Err(e) = handle_reset_and_create_files(path, true) {
                    println!("\n Failed clean files: {}", e);
                }
                return new_return_val;
            }

            match handle_reset_and_create_files(path, false) {
                Ok(output_dir_path) => {
                    new_return_val.2 = output_dir_path.clone();
                    new_return_val
                }
                Err(e) => {
                    println!("\n Failed clean files: {}", e);
                    new_return_val
                }
            }
        })
        .collect();

    let output_option_arc = Arc::new(output_option);

    for (func_name, output_code, output_dir_path) in prepared_output {
        spinner.update(spinners::Dots2, format!("Generating: {}", func_name), None);

        let dir_path = single_output_dir_path.clone().unwrap_or(output_dir_path);

        if let Err(e) =
            handle_main_task(output_option_arc.clone(), func_name, output_code, dir_path)
        {
            println!("\n Failed to create test data: {}", e);
        }
    }

    spinner.success("Creation Complete");
}
