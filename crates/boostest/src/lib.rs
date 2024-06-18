pub mod boostest_mock_builder;
pub mod boostest_mock_loader;
mod boostest_utils;

use boostest_mock_loader::mock_loader::MockLoader;

use oxc::{parser::Parser, span::SourceType};

use std::fs::File;
use std::io;
use std::io::prelude::*;
use std::path::Path;

fn read(path: &Path) -> io::Result<String> {
    println!("read{:?}", path);
    let mut f = File::open(path)?;
    let mut s = String::new();
    match f.read_to_string(&mut s) {
        Ok(_) => Ok(s),
        Err(e) => Err(e),
    }
}

pub fn call_boostest(path: &Path) {
    let mut mock_loader = MockLoader::new();

    if let Ok(file) = read(path) {
        let source_type = SourceType::default()
            .with_always_strict(true)
            .with_module(true)
            .with_typescript(true);
        // .with_jsx(true)

        let allocator = oxc::allocator::Allocator::default();
        let parser = Parser::new(&allocator, &file, source_type);
        let program = parser.parse().program;

        boostest_utils::load_mock(&mut mock_loader, &program, path);
    }
}
