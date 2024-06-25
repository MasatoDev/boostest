pub mod boostest_mock_builder;
pub mod boostest_mock_loader;
mod boostest_utils;

use boostest_mock_loader::mock_loader::{self, MockLoader};

use oxc::{parser::Parser, span::SourceType};

use anyhow::{anyhow, Result};
use glob::glob;
use std::any;
use std::collections::HashMap;
use std::fs::{self, File};
use std::io::prelude::*;
use std::io::{self, BufReader};
use std::ops::Deref;
use std::path::{Path, PathBuf};

fn read(path: &Path) -> io::Result<String> {
    let mut f = File::open(path)?;
    let mut s = String::new();
    match f.read_to_string(&mut s) {
        Ok(_) => Ok(s),
        Err(e) => Err(e),
    }
}

fn read_matching_files(patterns: Vec<String>) -> anyhow::Result<HashMap<PathBuf, String>> {
    let mut contents: HashMap<PathBuf, String> = HashMap::new();

    for pattern in &patterns {
        let result_glob = glob(pattern).expect("error glob");

        for entry in result_glob {
            let path = entry?;

            if path.is_file() {
                contents.insert(path.clone(), fs::read_to_string(path)?);
            }
        }
    }

    Ok(contents)
}

fn find_boostest_json_recursive(dir: PathBuf) -> anyhow::Result<PathBuf> {
    for entry in fs::read_dir(dir)? {
        let entry = entry?;
        let path = entry.path();
        if path.is_file() && path.file_name().unwrap() == "boostest.setting.json" {
            return Ok(path);
        } else if path.is_dir() {
            if let Ok(found_path) = find_boostest_json_recursive(path) {
                return Ok(found_path);
            }
        }
    }
    Err(anyhow!("boostest.json not found"))
}

#[derive(Debug)]
struct Setting {
    target: Option<Vec<String>>,
    name: Option<String>,
    tsconfig: Option<PathBuf>,
}

fn get_setting() -> anyhow::Result<Setting> {
    let cur_dir = std::env::current_dir()?;

    let config_path = find_boostest_json_recursive(cur_dir)?;

    let file = File::open(config_path)?;
    let reader = BufReader::new(file);
    let json: serde_json::Value = serde_json::from_reader(reader)?;

    let obj = json.as_object().unwrap();

    let mut setting = Setting {
        target: None,
        name: None,
        tsconfig: None,
    };

    for (key, value) in obj.iter() {
        match key.as_str() {
            "target_pattern" => {
                if let serde_json::Value::Array(vals) = value {
                    let mut temp_vec = Vec::new();

                    for val in vals {
                        if let serde_json::Value::String(val) = val {
                            temp_vec.push(val.clone());
                        }
                    }
                    setting.target = Some(temp_vec);
                }
            }
            "name" => {
                if let serde_json::Value::String(val) = value {
                    setting.name = Some(val.clone());
                }
            }
            "tsconfig" => {
                if let serde_json::Value::String(val) = value {
                    let ps = PathBuf::from(val);
                    setting.tsconfig = Some(ps);
                }
            }
            _ => {}
        }
    }

    Ok(setting)
}

fn handle_main_task(mock_loader: &mut MockLoader, path: &Path) -> Result<()> {
    if mock_loader.is_empty() {
        println!("target is not found:{:?}", path);
        return Ok(());
    }

    let canonical_path = path.canonicalize()?;
    let parent_path = canonical_path.parent().expect("get parent path");

    let path = parent_path.join("boostest.ts"); // srcディレクトリ内のgreeting.ts
    let file = File::create(path)?;
    let mut f = file;

    for mock_ast_loader in mock_loader.mocks.values() {
        if let Some(code) = &mock_ast_loader.code {
            f.write_all(code.as_bytes())?;
            f.write_all(b"\n")?;
        }

        for prop in mock_ast_loader.ref_properties.iter() {
            if let Some(code) = &prop.code {
                f.write_all(code.as_bytes())?;
                f.write_all(b"\n")?;
            }
        }
    }

    Ok(())
}

// #[tokio::main]
pub fn call_boostest(path: &Path) {
    let setting = get_setting().expect("error get_setting");
    let target = setting.target.expect("error target");
    let contents = read_matching_files(target).expect("error read_matching_files");

    let source_type = SourceType::default()
        .with_always_strict(true)
        .with_module(true)
        .with_typescript(true);
    // .with_jsx(true)

    for (path_buf, file) in contents {
        // tokio::spawn(async move {
        let path = path_buf.as_path();

        let mut mock_loader = MockLoader::new();
        let allocator = oxc::allocator::Allocator::default();
        let parser = Parser::new(&allocator, &file, source_type);
        let program = parser.parse().program;

        boostest_utils::load_mock(&mut mock_loader, &program, path);
        handle_main_task(&mut mock_loader, path);
        // });
    }
}
