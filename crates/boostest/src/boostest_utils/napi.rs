use std::{collections::HashMap, path::PathBuf};

use napi_derive::napi;

#[napi()]
#[derive(Debug, PartialEq)]
pub enum TargetType {
    Class,
    TSInterface,
    TSTypeAlias,
    Variable,
}

#[napi(object)]
#[derive(Debug)]
pub struct OutputCode {
    pub code: String,
    pub target_type: TargetType,
    pub path: String,
}

#[napi(object)]
#[derive(Debug, Clone)]
pub struct DefaultValueOption {
    pub boolean: bool,
    pub number: i64,
    pub string: String,
    pub undefined: String,
    pub null: String,
    pub bigint: String,
    pub any: String,
}

impl Default for DefaultValueOption {
    fn default() -> Self {
        Self::new()
    }
}

impl DefaultValueOption {
    pub fn new() -> Self {
        Self {
            boolean: true,
            number: 10,
            string: "test string data".to_string(),
            undefined: "undefined".to_string(),
            null: "null".to_string(),
            bigint: "9007199254740991n".to_string(),
            any: "any".to_string(),
        }
    }
}

#[napi(object)]
#[derive(Debug, Clone)]
pub struct OutputOption {
    pub single: bool,
    pub project_root_path: Option<String>,
    pub default_value_option: DefaultValueOption,
}

#[napi(object)]
#[derive(Debug)]
pub struct ResolvedResult {
    pub output_code: Option<HashMap<String, OutputCode>>,
    pub output_option: OutputOption,
}
