use boostest::{call_boostest, generate};
use std::path::Path;

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn boostest(path: String, ts_config_path: Option<String>) {
  if let Some(ts_config_path) = ts_config_path {
    let ts_config_path = Path::new(&ts_config_path);
    call_boostest(path, Some(ts_config_path));
    return;
  }

  call_boostest(path, None);
}

#[napi]
pub fn generatetest() -> String {
  generate()
}
