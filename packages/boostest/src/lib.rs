use boostest::call_boostest;
use std::path::Path;

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn create_mock(path: String) {
  let path = Path::new(&path);
  call_boostest(path);
}
