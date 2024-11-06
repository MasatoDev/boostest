use anyhow::anyhow;

use std::fs::{self, File};
use std::io::BufReader;
use std::path::PathBuf;

use super::file_utils;

#[derive(Debug)]
pub struct Setting {
    pub target: Option<Vec<String>>,
    pub name: Option<String>,
    pub tsconfig: Option<PathBuf>,
    pub project_root_path: Option<PathBuf>,
    pub out_file_name: Option<String>,
}

impl Setting {
    pub fn new() -> Self {
        Self {
            target: None,
            name: None,
            tsconfig: None,
            project_root_path: None,
            out_file_name: None,
        }
    }

    pub fn set_target_path(&mut self, target_path: String) {
        if target_path.is_empty() {
            return;
        }

        let temp_vec = vec![target_path];
        self.target = Some(temp_vec);
    }

    pub fn set_tsconfig(&mut self, tsconfig: PathBuf) {
        self.get_project_root_path_from_tsconfig(&tsconfig);
        self.tsconfig = Some(tsconfig);
    }

    fn get_project_root_path_from_tsconfig(&mut self, tsconfig_path: &PathBuf) {
        let project_root_path = fs::canonicalize(tsconfig_path)
            .ok()
            .and_then(|absolute_path| absolute_path.parent().map(|p| p.to_path_buf()));

        self.project_root_path = project_root_path;
    }
}

pub fn get_setting() -> anyhow::Result<Setting> {
    let cur_dir = std::env::current_dir()?;
    let config_path = find_boostest_setting_json_recursive(cur_dir)?;

    let file = File::open(&config_path)?;
    let reader = BufReader::new(file);
    let json: serde_json::Value = serde_json::from_reader(reader)?;

    let obj = json
        .as_object()
        .ok_or(anyhow!("setting json cloud not be parsed"))?;

    let mut setting = Setting::new();

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
            "out_file_name" => {
                if let serde_json::Value::String(val) = value {
                    setting.out_file_name = Some(val.clone());
                }
            }
            "tsconfig" => {
                if let serde_json::Value::String(val) = value {
                    let ps = PathBuf::from(val);

                    if let Some(parent) = &config_path.parent() {
                        let relative_path = file_utils::normalize_and_resolve_path(parent, &ps)
                            .unwrap_or(ps.clone());

                        setting.set_tsconfig(relative_path);
                    } else {
                        setting.set_tsconfig(ps);
                    }
                }
            }

            _ => {}
        }
    }

    Ok(setting)
}

pub fn find_boostest_setting_json_recursive(current_dir: PathBuf) -> anyhow::Result<PathBuf> {
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

#[cfg(test)]
mod tests {
    use super::*;
    use std::env;
    use std::fs::File;
    use std::io::Write;
    use tempfile::tempdir;

    #[test]
    fn test_setting_new() {
        let setting = Setting::new();
        assert!(setting.target.is_none());
        assert!(setting.name.is_none());
        assert!(setting.tsconfig.is_none());
        assert!(setting.project_root_path.is_none());
        assert!(setting.out_file_name.is_none());
    }

    #[test]
    fn test_set_target_path() {
        let mut setting = Setting::new();
        setting.set_target_path("target/path".to_string());
        assert_eq!(setting.target, Some(vec!["target/path".to_string()]));
    }

    #[test]
    fn test_set_tsconfig() {
        let mut setting = Setting::new();
        let tsconfig_path = PathBuf::from("tsconfig.json");
        setting.set_tsconfig(tsconfig_path.clone());
        assert_eq!(setting.tsconfig, Some(tsconfig_path));
    }

    // #[test]
    // fn test_get_project_root_path_from_tsconfig() {
    //     let dir = tempdir().unwrap();
    //     let tsconfig_path = dir.path().join("tsconfig.json");
    //     File::create(&tsconfig_path).unwrap();
    //
    //     let mut setting = Setting::new();
    //     setting.get_project_root_path_from_tsconfig(&tsconfig_path);
    //
    //     assert_eq!(setting.project_root_path, Some(dir.path().to_path_buf()));
    // }

    #[test]
    fn test_get_setting() {
        let dir = tempdir().unwrap();
        let file_path = dir.path().join("boostest.setting.json");
        let mut file = File::create(&file_path).unwrap();
        writeln!(
            file,
            r#"{{
                "target_pattern": ["src/**/*.rs"],
                "name": "test_project",
                "out_file_name": "output.json",
                "tsconfig": "tsconfig.json"
            }}"#
        )
        .unwrap();

        env::set_current_dir(&dir).unwrap();
        let setting = get_setting().unwrap();

        assert_eq!(setting.target, Some(vec!["src/**/*.rs".to_string()]));
        assert_eq!(setting.name, Some("test_project".to_string()));
        assert_eq!(setting.out_file_name, Some("output.json".to_string()));
        // assert_eq!(setting.tsconfig, Some(dir.path().join("tsconfig.json")));
    }

    #[test]
    fn test_find_boostest_setting_json_recursive() {
        let dir = tempdir().unwrap();
        let file_path = dir.path().join("boostest.setting.json");
        File::create(&file_path).unwrap();

        let found_path = find_boostest_setting_json_recursive(dir.path().to_path_buf()).unwrap();
        assert_eq!(found_path, file_path);
    }
}
