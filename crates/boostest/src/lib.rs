use boostest_oxc_utils::{OxcAst, OxcCompiler};
use oxc;

use std::fs::File;
use std::io;
use std::io::prelude::*;
use std::path::Path;

fn read(path: &Path) -> io::Result<String> {
    let mut f = File::open(path)?;
    let mut s = String::new();
    match f.read_to_string(&mut s) {
        Ok(_) => Ok(s),
        Err(e) => Err(e),
    }
}

pub fn callBoostest(path: &Path) {
    if let Ok(file) = read(path) {
        println!("file: {:?}", file);

        let ast = OxcCompiler::parse(file, oxc::span::SourceType::default());

        println!("ast: {:?}", ast.program());
        let code = OxcCompiler::print(&ast, "", false).source_text;

        println!("resule: {:?}", code);
    }
}
