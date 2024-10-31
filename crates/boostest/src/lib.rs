// pub mod boostest_mock_builder;
// pub mod boostest_mock_loader;
// mod boostest_tsserver;
mod boostest_utils;
mod new;

// use boostest_mock_loader::mock_loader::MockLoader;
use boostest_utils::{
    setting::{self, Setting},
    utils,
};
use colored::*;
use indicatif::{ProgressBar, ProgressStyle};
use oxc::{parser::Parser, span::SourceType};
use std::path::Path;

pub fn call_boostest(path: String, ts_config_path: Option<&Path>) {
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

    let source_type = SourceType::ts();
    let target = setting.target.unwrap_or_else(|| {
        println!("{}", "Not found target files".red());
        std::process::exit(0);
    });

    let contents = utils::read_matching_files(target, &out_file_name).unwrap_or_else(|e| {
        println!("{}:{}", "Target files cloud not parsed".red(), e);
        std::process::exit(0);
    });

    if contents.is_empty() {
        println!("{}", "Not found target code".red());
        return;
    }

    let pb = ProgressBar::new(contents.len() as u64);
    pb.set_style(
        ProgressStyle::with_template("{bar:40.cyan/blue} {pos:>7}/{len:7} {msg}")
            .unwrap()
            .progress_chars("##-"),
    );

    for (path_buf, file) in contents {
        let path = path_buf.as_path();

        println!(
            "target file: {}",
            format!("{}", path.to_string_lossy()).green()
        );

        let mut detector =
            new::boostest_manager::target_detector::TargetDetector::new(setting.name.clone());
        detector.detect(path);
        let mut main_targets = detector.main_targets;

        new::boostest_target::main_target_resolver::main_targets_resolve(
            &main_targets,
            &setting.tsconfig,
            &setting.project_root_path,
        );

        for main_target in &main_targets {
            match &main_target
                .lock()
                .unwrap()
                .target
                .lock()
                .unwrap()
                .target_definition
            {
                Some(main_target) => {
                    // println!("{}:{:?}", "main target".green(), main_target);

                    let target_source =
                        utils::read(&main_target.file_path).unwrap_or(String::new());
                    let target_source_text = main_target.span.source_text(&target_source);
                    let allocator = oxc::allocator::Allocator::default();

                    let mut find_ast = new::boostest_generator::code_generator::CodeGenerator::new(
                        &allocator,
                        &main_target.specifier,
                        None,
                        &target_source_text,
                        &main_target.target_type,
                    );

                    find_ast.find();

                    // println!("{}:{}", "target source".green(), target_source_text);
                }

                _ => {
                    println!("{}:{}", "main target".red(), "not found target definition");
                }
            }
        }

        // let mut mock_loader = Arc::new(Mutex::new(MockLoader::new(
        //     path_buf.clone(),
        //     setting.name.clone(),
        // )));
        //

        // let mut mock_loader = MockLoader::new(path_buf.clone(), setting.name.clone());
        //
        // let allocator = oxc::allocator::Allocator::default();
        // let parser = Parser::new(&allocator, &file, source_type);
        // let mut program = parser.parse().program;

        // boostest_utils::module_resolver::load_mock(
        //     &mut mock_loader,
        //     &mut program,
        //     path,
        //     &setting.tsconfig,
        //     &setting.project_root_path,
        // );

        // if let Err(e) = task::handle_main_task(&mut mock_loader, path, &out_file_name) {
        //     println!(
        //         "{}:{}",
        //         format!("failed to create test data at :{}", path.to_string_lossy()).green(),
        //         e
        //     );
        // }

        pb.inc(1);
    }

    pb.finish();
}
