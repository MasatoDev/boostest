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
