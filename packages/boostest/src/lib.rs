#[macro_use]
extern crate napi_derive;

use napi::*;

use boostest::{generate, resolve_target, OutputCode, OutputOption, ResolvedResult};
use std::{collections::HashMap, path::Path};

#[napi]
pub fn resolve(
  path: String,
  lib_file_path: String,
  ts_config_path: Option<String>,
) -> ResolvedResult {
  let lib_file_path = Path::new(&lib_file_path);
  if let Some(ts_config_path) = ts_config_path {
    let ts_config_path = Path::new(&ts_config_path);
    return resolve_target(path, Some(ts_config_path), lib_file_path);
  }

  resolve_target(path, None, lib_file_path)
}

#[napi]
pub fn generatetest(output: HashMap<String, OutputCode>, output_option: OutputOption) {
  generate(output, output_option)
}
