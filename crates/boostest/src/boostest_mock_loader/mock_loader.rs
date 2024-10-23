use std::{
    collections::HashMap,
    path::PathBuf,
    sync::{Arc, Mutex},
};

use crate::boostest_mock_loader::mock_ast_loader::MockAstLoader;

pub struct MockLoader {
    pub mocks: HashMap<String, Arc<Mutex<MockAstLoader>>>,
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

    pub fn get_sorted_mocks(&mut self) -> Vec<Arc<Mutex<MockAstLoader>>> {
        let mut mocks = self
            .mocks
            .values()
            .cloned()
            .collect::<Vec<Arc<Mutex<MockAstLoader>>>>();
        mocks.sort_by(|a, b| {
            let a = a.lock().unwrap();
            let b = b.lock().unwrap();
            a.mock_func_name.cmp(&b.mock_func_name)
        });
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
        self.mocks
            .values()
            .all(|mock| mock.lock().unwrap().code.is_none())
    }

    pub fn get_mock(&mut self, name: &String) -> Option<Arc<Mutex<MockAstLoader>>> {
        self.mocks.get(name).cloned()
    }

    pub fn add_ast_loader(&mut self, name: String) {
        let mock = MockAstLoader::new(name.clone(), None, None, None);
        self.mocks.insert(name.clone(), Arc::new(Mutex::new(mock)));
    }

    #[cfg(debug_assertions)]
    pub fn debug(&self) {
        for mock in self.mocks.values() {
            println!(
                "--------MOCK: {:?}---------",
                &mock.lock().unwrap().mock_func_name
            );
            println!(
                "--------MOCK TARGET: {:?}---------",
                &mock.lock().unwrap().mock_target_name
            );
            println!("---------------------");
            println!("AST: {:?}", mock.lock().unwrap().ref_properties);
            println!("---------------------");
            println!("target_definition_span: {:?}", mock.lock().unwrap().span);
            println!("---------------------");
        }
    }
}
