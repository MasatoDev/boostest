use boostest::callBoostest;

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn sum() {
  callBoostest();
}
