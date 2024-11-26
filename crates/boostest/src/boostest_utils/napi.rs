use napi_derive::napi;

#[napi(object)]
#[derive(Debug, PartialEq, Eq, Hash)]
pub struct OutputCode {
    pub code: String,
    pub path: String,
}
