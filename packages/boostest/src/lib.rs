use boostest::callBoostest;
use std::path::Path;

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn createMock(path: String) {
  let path = Path::new(&path);
  callBoostest(path);
}
