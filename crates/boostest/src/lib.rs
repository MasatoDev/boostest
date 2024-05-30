use boostest_oxc_utils::{OxcAst, OxcCompiler};
use oxc;

pub fn callBoostest() {
    let ast = OxcCompiler::parse("const a = 1;".to_string(), oxc::span::SourceType::default());
    let code = OxcCompiler::print(&ast, "", false).source_text;

    println!("resule: {:?}", code);

    assert_eq!(code, "const a = 1;\n");
}
