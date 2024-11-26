use boostest::{generate, resolve_target, OutputCode};
use std::{collections::HashMap, path::Path};

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn resolve(
  path: String,
  ts_config_path: Option<String>,
) -> Option<HashMap<String, OutputCode>> {
  if let Some(ts_config_path) = ts_config_path {
    let ts_config_path = Path::new(&ts_config_path);
    return resolve_target(path, Some(ts_config_path));
  }

  resolve_target(path, None)
}

#[napi]
pub fn generatetest(output: HashMap<String, OutputCode>) {
  generate(output)
}
