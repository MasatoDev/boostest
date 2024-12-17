use anyhow::anyhow;
use serde_json::{Map, Value};

use std::fs::{self, File};
use std::io::BufReader;
use std::path::PathBuf;

use super::file_utils;
use super::napi::{DefaultValueOption, OutputOption};

#[derive(Debug, Clone)]
pub struct Setting {
    pub target: Option<Vec<String>>,
    pub name: String,
    pub tsconfig: Option<PathBuf>,

    pub output_option: OutputOption,

    // Generated from tsconfig path
    pub project_root_path: Option<PathBuf>,
    pub default_lib_file_path: Option<PathBuf>,
}

impl Default for Setting {
    fn default() -> Self {
        Self::new()
    }
}

impl Setting {
    pub fn new() -> Self {
        Self {
            target: None,
            name: String::from("boostest"),
            tsconfig: None,
            project_root_path: None,
            default_lib_file_path: None,
            output_option: OutputOption {
                single: false,
                project_root_path: None,
                default_value_option: DefaultValueOption::default(),
            },
        }
    }

    pub fn get_setting(&mut self, default_lib_file_path: Option<PathBuf>) -> anyhow::Result<()> {
        let (setting_json, config_path) = get_setting_json_obj()?;
        self.default_lib_file_path = default_lib_file_path;

        for (key, value) in setting_json.iter() {
            match key.as_str() {
                "target_pattern" => {
                    if let Value::Array(vals) = value {
                        let mut temp_vec = Vec::new();

                        for val in vals {
                            if let Value::String(val) = val {
                                temp_vec.push(val.clone());
                            }
                        }
                        self.target = Some(temp_vec);
                    }
                }
                "name" => {
                    if let Value::String(val) = value {
                        self.name = val.clone();
                    }
                }
                "tsconfig" => {
                    if let Value::String(val) = value {
                        let tsconfig_path = PathBuf::from(val);

                        if let Some(parent) = &config_path.parent() {
                            // '../../tsconfig.json' -> '/path/to/tsconfig.json'
                            let normalized_relative_path =
                                file_utils::normalize_and_resolve_path(parent, &tsconfig_path)
                                    .unwrap_or(tsconfig_path.clone());
                            self.set_tsconfig(normalized_relative_path);
                        } else {
                            // '/path/to/tsconfig.json'
                            self.set_tsconfig(tsconfig_path);
                        }
                    }
                }
                "output" => {
                    if let Value::Object(map_val) = value {
                        if let Some(Value::Bool(single)) = map_val.get("single") {
                            self.output_option.single = *single;
                        }
                    }
                }
                "initial_value" => {
                    if let Value::Object(map_val) = value {
                        if let Some(Value::String(single)) = map_val.get("string") {
                            self.output_option.default_value_option.string = single.clone();
                        }
                        if let Some(Value::Number(single)) = map_val.get("number") {
                            if let Some(single) = single.as_i64() {
                                self.output_option.default_value_option.number = single;
                            } else {
                                return Err(anyhow!("boostest setting json cloud not be parsed"));
                            }
                        }
                        if let Some(Value::Bool(single)) = map_val.get("boolean") {
                            self.output_option.default_value_option.boolean = *single;
                        }
                        if let Some(Value::String(single)) = map_val.get("undefined") {
                            self.output_option.default_value_option.undefined = single.clone();
                        }
                        if let Some(Value::String(single)) = map_val.get("null") {
                            self.output_option.default_value_option.null = single.clone();
                        }
                        if let Some(Value::String(single)) = map_val.get("bigint") {
                            self.output_option.default_value_option.bigint = single.clone();
                        }
                        if let Some(Value::String(single)) = map_val.get("any") {
                            self.output_option.default_value_option.any = single.clone();
                        }
                    }
                }

                _ => {}
            }
        }

        if let Some(project_root_path) = &self.project_root_path {
            self.output_option.project_root_path =
                Some(project_root_path.to_string_lossy().to_string());
        }

        Ok(())
    }

    pub fn set_target_path(&mut self, target_path: String) {
        if target_path.is_empty() {
            return;
        }
        self.target = Some(vec![target_path]);
    }

    pub fn set_tsconfig(&mut self, tsconfig: PathBuf) {
        self.set_project_root_path_from_tsconfig(&tsconfig);
        self.tsconfig = Some(tsconfig);
    }

    /****************************/
    /******** PRIVATE ***********/
    /****************************/
    fn set_project_root_path_from_tsconfig(&mut self, tsconfig_path: &PathBuf) {
        let project_root_path = fs::canonicalize(tsconfig_path)
            .ok()
            .and_then(|absolute_path| absolute_path.parent().map(|p| p.to_path_buf()));

        self.project_root_path = project_root_path;
    }
}

// NOTE: setting json example
//
// {
//   "target_pattern": ["./src/tests/**/**/buildIn.spec.ts"],
//   "name": "boostest",
//
//   "tsconfig": "./tsconfig.json",
//
//   "output": {
//     "single": true
//   },
//
//   "initial_value": {
//     "string": "initial value",
//     "number": 500,
//     "boolean": true,
//     "undefined": "undefined",
//     "null": "null",
//     "bigint": "9007199254740991n",
//     "any": "any"
//   }
// }

/****************************/
/******** PRIVATE ***********/
/****************************/
fn get_setting_json_obj() -> anyhow::Result<(Map<String, Value>, PathBuf)> {
    let cur_dir = std::env::current_dir()?;
    let config_path = find_boostest_setting_json_recursive(cur_dir)?;

    let file = File::open(&config_path)?;
    let reader = BufReader::new(file);
    let json: serde_json::Value = serde_json::from_reader(reader)?;

    let obj = json
        .as_object()
        .ok_or(anyhow!("boostest setting json cloud not be parsed"))?;

    Ok((obj.clone(), config_path))
}

fn find_boostest_setting_json_recursive(current_dir: PathBuf) -> anyhow::Result<PathBuf> {
    for entry in fs::read_dir(current_dir)? {
        let entry = entry?;
        let path = entry.path();

        if path.is_file() && path.file_name() == Some("boostest.setting.json".as_ref()) {
            return Ok(path);
        }

        if path.is_dir() {
            if let Ok(found_path) = find_boostest_setting_json_recursive(path) {
                return Ok(found_path);
            }
        }
    }

    Err(anyhow!("boostest.setting.json not found"))
}

/********************************************************/
/********************************************************/
/********************************************************/
/********************************************************/
/*********************  TEST  ***************************/
/********************************************************/
/********************************************************/
/********************************************************/
/********************************************************/
// #[cfg(test)]
// mod tests {
//     use super::*;
//     use std::env;
//     use std::fs::File;
//     use std::io::Write;
//     use tempfile::tempdir;
//
//     #[test]
//     fn test_setting_new() {
//         let setting = Setting::new();
//         assert!(setting.target.is_none());
//         assert!(setting.name.is_none());
//         assert!(setting.tsconfig.is_none());
//         assert!(setting.project_root_path.is_none());
//         assert!(setting.out_file_name.is_none());
//     }
//
//     #[test]
//     fn test_set_target_path() {
//         let mut setting = Setting::new();
//         setting.set_target_path("target/path".to_string());
//         assert_eq!(setting.target, Some(vec!["target/path".to_string()]));
//     }
//
//     #[test]
//     fn test_set_tsconfig() {
//         let mut setting = Setting::new();
//         let tsconfig_path = PathBuf::from("tsconfig.json");
//         setting.set_tsconfig(tsconfig_path.clone());
//         assert_eq!(setting.tsconfig, Some(tsconfig_path));
//     }
//
//     // #[test]
//     // fn test_get_project_root_path_from_tsconfig() {
//     //     let dir = tempdir().unwrap();
//     //     let tsconfig_path = dir.path().join("tsconfig.json");
//     //     File::create(&tsconfig_path).unwrap();
//     //
//     //     let mut setting = Setting::new();
//     //     setting.get_project_root_path_from_tsconfig(&tsconfig_path);
//     //
//     //     assert_eq!(setting.project_root_path, Some(dir.path().to_path_buf()));
//     // }
//
//     #[test]
//     fn test_get_setting() {
//         let dir = tempdir().unwrap();
//         let file_path = dir.path().join("boostest.setting.json");
//         let mut file = File::create(&file_path).unwrap();
//         writeln!(
//             file,
//             r#"{{
//                 "target_pattern": ["src/**/*.rs"],
//                 "name": "test_project",
//                 "out_file_name": "output.json",
//                 "tsconfig": "tsconfig.json"
//             }}"#
//         )
//         .unwrap();
//
//         env::set_current_dir(&dir).unwrap();
//         let setting = get_setting().unwrap();
//
//         assert_eq!(setting.target, Some(vec!["src/**/*.rs".to_string()]));
//         assert_eq!(setting.name, Some("test_project".to_string()));
//         assert_eq!(setting.out_file_name, Some("output.json".to_string()));
//         // assert_eq!(setting.tsconfig, Some(dir.path().join("tsconfig.json")));
//     }
//
//     #[test]
//     fn test_find_boostest_setting_json_recursive() {
//         let dir = tempdir().unwrap();
//         let file_path = dir.path().join("boostest.setting.json");
//         File::create(&file_path).unwrap();
//
//         let found_path = find_boostest_setting_json_recursive(dir.path().to_path_buf()).unwrap();
//         assert_eq!(found_path, file_path);
//     }
// }
