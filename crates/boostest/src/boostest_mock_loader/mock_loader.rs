use std::{collections::HashMap, path::PathBuf};

use oxc::span::Span;

use crate::boostest_mock_loader::mock_ast_loader2::MockAstLoader;

pub struct MockLoader {
    pub mocks: HashMap<String, MockAstLoader>,
    pub pattern: Option<String>,
    pub target_file_path: PathBuf,
}

impl MockLoader {
    pub fn new(target_file_path: PathBuf, pattern: Option<String>) -> Self {
        Self {
            mocks: HashMap::new(),
            pattern,
            target_file_path,
        }
    }

    pub fn get_sorted_mocks(&mut self) -> Vec<&mut MockAstLoader> {
        let mut mocks: Vec<&mut MockAstLoader> = self.mocks.values_mut().collect();
        mocks.sort_by(|a, b| a.mock_func_name.cmp(&b.mock_func_name));
        mocks
    }

    pub fn get_pattern(&self) -> String {
        match &self.pattern {
            Some(pattern) => pattern.clone(),
            None => String::from("boostest"),
        }
    }

    pub fn is_empty(&mut self) -> bool {
        self.mocks.is_empty()
    }

    pub fn is_output_empty(&mut self) -> bool {
        self.mocks.values().all(|mock| mock.code.is_none())
    }

    pub fn get_mock(&mut self, name: &String) -> Option<&mut MockAstLoader> {
        self.mocks.get_mut(name)
    }

    pub fn add_ast_loader(&mut self, name: String) {
        let mock = MockAstLoader::new(name.clone(), None, None, None);
        self.mocks.insert(name.clone(), mock);
    }

    #[cfg(debug_assertions)]
    pub fn debug(&self) {
        for mock in self.mocks.values() {
            println!("--------MOCK: {:?}---------", &mock.mock_func_name);
            println!("--------MOCK TARGET: {:?}---------", &mock.mock_target_name);
            println!("---------------------");
            println!("AST: {:?}", mock.ref_properties);
            println!("---------------------");
            // println!("name: {:?}", self.);
            // println!("---------------------");
        }
    }
}
