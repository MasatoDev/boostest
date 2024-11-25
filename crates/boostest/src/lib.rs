mod boostest_generator;
mod boostest_manager;
mod boostest_target;
mod boostest_utils;

use boostest_manager::{target_detector::TargetDetector, task::handle_main_task};
use boostest_target::main_target_resolver::main_targets_resolve;
use boostest_utils::{
    file_utils,
    setting::{self, Setting},
    tsserver::TSServerCache,
};
use colored::*;
use spinoff::{spinners, Color, Spinner};
use std::{
    path::Path,
    sync::{Arc, Mutex},
};

pub fn call_boostest(path: String, ts_config_path: Option<&Path>) {
    let mut spinner = Spinner::new(spinners::Dots, "Start!", Color::Blue);

    let mut setting = setting::get_setting().unwrap_or(Setting {
        target: None,
        name: None,
        tsconfig: None,
        project_root_path: None,
        out_file_name: None,
    });

    // Preference for command line arguments
    setting.set_target_path(path);

    // Preference for command line arguments
    if let Some(ts_config_path) = ts_config_path {
        let ts_config_path = ts_config_path.to_path_buf();
        // tsserver(ts_config_path.clone());
        setting.set_tsconfig(ts_config_path);
    }

    let out_file_name = setting.out_file_name.unwrap_or(String::from("boostest"));

    let target = setting.target.unwrap_or_else(|| {
        println!("{}", "Not found target files".red());
        std::process::exit(0);
    });

    let contents = file_utils::read_matching_files(target, &out_file_name).unwrap_or_else(|e| {
        println!("{}:{}", "Target files cloud not parsed".red(), e);
        std::process::exit(0);
    });

    if contents.is_empty() {
        println!("{}", "Not found target code".red());
        return;
    }

    let tsserver_cache = Arc::new(Mutex::new(TSServerCache::new()));

    for (path_buf, _file) in contents {
        spinner.update(
            spinners::Dots2,
            format!(
                "Handling File: {}",
                path_buf.file_name().unwrap().to_string_lossy()
            ),
            None,
        );

        let path = path_buf.as_path();

        let mut detector = TargetDetector::new(setting.name.clone());
        detector.detect(path);
        let mut main_targets = detector.main_targets;

        main_targets.sort_by(|a, b| {
            let a = a.lock().unwrap().target.lock().unwrap().func_name.clone();
            let b = b.lock().unwrap().target.lock().unwrap().func_name.clone();
            a.cmp(&b)
        });

        spinner.update(
            spinners::Dots2,
            format!(
                "Handling File:  {}",
                path_buf.file_name().unwrap().to_string_lossy()
            ),
            None,
        );

        main_targets_resolve(
            &main_targets,
            &setting.tsconfig,
            &setting.project_root_path,
            tsserver_cache.clone(),
        );

        spinner.update(
            spinners::Dots2,
            format!(
                "Handling File:  {}",
                path_buf.file_name().unwrap().to_string_lossy()
            ),
            None,
        );

        if let Err(e) = handle_main_task(main_targets, path, &out_file_name) {
            println!(
                "{}:{}",
                format!("failed to create test data at :{}", path.to_string_lossy()).green(),
                e
            );
        }
    }
    spinner.success("Done!");
}

pub fn generate() -> String {
    println!("generate");
    "hoge".to_string()
}
