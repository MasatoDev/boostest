use std::io::Read;
use std::{fs, path::Path};

use oxc::allocator::{Allocator, Vec as AllocVec};
use oxc::ast::ast::Statement;
use oxc::ast::VisitMut;
use oxc::codegen::Codegen;
use oxc::parser::Parser;
use oxc::span::SourceType;

pub fn get_typescript_lib_code(default_lib_file_path: &Path) -> String {
    let mut typescript_lib_files = Vec::new();
    if let Some(parent_dir_path) = default_lib_file_path.parent() {
        if let Ok(lib_files) = fs::read_dir(parent_dir_path) {
            for entry in lib_files.into_iter().flatten() {
                let path = entry.path();

                if path.is_file() {
                    if let Some(file_name) = path.file_name() {
                        let file_name_str = file_name.to_string_lossy();
                        if file_name_str.starts_with("lib.es") {
                            typescript_lib_files.push(path);
                        }
                    }
                }
            }
        }
    }

    let mut combined_code = String::new();
    for file_path in typescript_lib_files {
        if let Ok(mut file) = fs::File::open(&file_path) {
            let mut contents = String::new();
            if file.read_to_string(&mut contents).is_ok() {
                combined_code.push_str(&contents);
                combined_code.push('\n'); // ファイル間に改行を追加
            }
        }
    }

    CleanupVisitor::new().cleanup(&combined_code)
}

struct CleanupVisitor {}

impl CleanupVisitor {
    fn new() -> Self {
        Self {}
    }

    fn cleanup(&mut self, code: &str) -> String {
        let source_type = SourceType::ts();
        let allocator = Allocator::default();
        let source_text_parser = Parser::new(&allocator, code, source_type);
        let mut program = source_text_parser.parse().program;
        self.visit_program(&mut program);
        program.comments = AllocVec::new_in(&allocator);

        let code = Codegen::new().build(&program).code;
        code
    }
}

impl<'a> VisitMut<'a> for CleanupVisitor {
    fn visit_statements(&mut self, it: &mut AllocVec<'a, Statement<'a>>) {
        it.retain(|stmt| {
            let result: bool = match stmt {
                Statement::ImportDeclaration(_) => false,
                Statement::TSImportEqualsDeclaration(_) => false,
                _ => true,
            };
            result
        });
    }
}
