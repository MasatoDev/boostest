mod boostest_generator;
mod boostest_manager;
mod boostest_target;
mod boostest_utils;

use boostest_manager::{target_detector::TargetDetector, task::handle_main_task};
use boostest_target::{
    main_target_resolver::main_targets_resolve, output::handle_output_main_task,
};
pub use boostest_utils::{
    file_utils,
    napi::OutputCode,
    setting::{self, Setting},
    tsserver::TSServerCache,
};
use colored::*;
use spinoff::{spinners, Color, Spinner};
use std::{
    collections::HashMap,
    fs,
    path::{Path, PathBuf},
    sync::{Arc, Mutex},
};

pub fn resolve_target(
    path: String,
    ts_config_path: Option<&Path>,
    lib_file_path: &Path,
) -> Option<HashMap<String, OutputCode>> {
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
        return None;
    }

    let tsserver_cache = Arc::new(Mutex::new(TSServerCache::new()));

    let mut result: HashMap<String, OutputCode> = HashMap::new();

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
            &lib_file_path.to_path_buf(),
        );

        println!("resolved ✅✅✅✅✅✅");

        spinner.update(
            spinners::Dots2,
            format!(
                "Handling File:  {}",
                path_buf.file_name().unwrap().to_string_lossy()
            ),
            None,
        );

        let output = handle_output_main_task(main_targets, path);
        // {
        //     println!(
        //         "{}:{}",
        //         format!("failed to create test data at :{}", path.to_string_lossy()).green(),
        //         e
        //     );
        // }
        if let Some(output) = output {
            result.extend(output);
        }
    }
    spinner.success("Done!");

    Some(result)
}

pub fn generate(output: HashMap<String, OutputCode>) {
    for (_, output_code) in &output {
        let OutputCode {
            code,
            path,
            target_type,
            ..
        } = output_code;

        let path = Path::new(&path);
        let canonical_path = path.canonicalize();

        if let Ok(canonical_path) = canonical_path {
            let parent_path = canonical_path.parent();

            if let Some(parent_path) = parent_path {
                let dir_path = parent_path.join("boostest_output");
                match manage_directory(&dir_path.to_string_lossy()) {
                    Ok(_) => {}
                    Err(e) => {
                        println!("{}:{}", format!("failed to create test data"), e);
                    }
                }
            }
        }
    }

    for (func_name, output_code) in output {
        if let Err(e) = handle_main_task(output_code, func_name) {
            println!("{}:{}", format!("failed to create test data"), e);
        }
    }
}

fn manage_directory(path: &str) -> std::io::Result<()> {
    let dir_path = Path::new(path);

    if dir_path.exists() {
        // ディレクトリが存在する場合、中身を全て削除
        for entry in fs::read_dir(dir_path)? {
            let entry = entry?;
            let entry_path = entry.path();

            if entry_path.is_dir() {
                fs::remove_dir_all(entry_path)?; // サブディレクトリを再帰的に削除
            } else {
                fs::remove_file(entry_path)?; // ファイルを削除
            }
        }
    } else {
        // ディレクトリが存在しない場合、新規作成
        fs::create_dir_all(dir_path)?;
    }

    Ok(())
}
