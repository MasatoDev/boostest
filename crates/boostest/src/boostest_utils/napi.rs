use napi_derive::napi;

#[napi()]
#[derive(Debug)]
pub enum TargetType {
    Class,
    TSInterface,
    TSTypeAlias,
}

#[napi(object)]
#[derive(Debug)]
pub struct OutputCode {
    pub code: String,
    pub target_type: TargetType,
    pub path: String,
}
