use super::utils;

use std::fs::File;
use std::io::BufReader;
use std::path::PathBuf;

#[derive(Debug)]
pub struct Setting {
    pub target: Option<Vec<String>>,
    pub name: Option<String>,
    pub tsconfig: Option<PathBuf>,
    pub out_file_name: Option<String>,
}

impl Setting {
    pub fn set_target_path(&mut self, target_path: String) {
        if target_path.is_empty() {
            return;
        }

        let mut temp_vec = Vec::new();
        temp_vec.push(target_path);
        self.target = Some(temp_vec);
    }

    pub fn set_tsconfig(&mut self, tsconfig: PathBuf) {
        self.tsconfig = Some(tsconfig);
    }
}

pub fn get_setting() -> anyhow::Result<Setting> {
    let cur_dir = std::env::current_dir()?;

    let config_path = utils::find_boostest_json_recursive(cur_dir)?;

    let file = File::open(&config_path)?;
    let reader = BufReader::new(file);
    let json: serde_json::Value = serde_json::from_reader(reader)?;

    let obj = json
        .as_object()
        .ok_or(anyhow::anyhow!("setting json cloud not be parsed"))?;

    let mut setting = Setting {
        target: None,
        name: None,
        tsconfig: None,
        out_file_name: None,
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
            "out_file_name" => {
                if let serde_json::Value::String(val) = value {
                    setting.out_file_name = Some(val.clone());
                }
            }
            "tsconfig" => {
                if let serde_json::Value::String(val) = value {
                    let ps = PathBuf::from(val);

                    if let Some(parent) = &config_path.parent() {
                        let result =
                            utils::normalize_and_resolve_path(parent, &ps).unwrap_or(ps.clone());
                        setting.tsconfig = Some(result);
                    } else {
                        setting.tsconfig = Some(ps);
                    }
                }
            }

            _ => {}
        }
    }

    Ok(setting)
}
