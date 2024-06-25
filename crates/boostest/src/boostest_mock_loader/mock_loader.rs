use std::collections::HashMap;

use crate::boostest_mock_loader::mock_ast_loader::MockAstLoader;

pub struct MockLoader {
    pub mocks: HashMap<String, MockAstLoader>,
}

impl MockLoader {
    pub fn new() -> Self {
        Self {
            mocks: HashMap::new(),
        }
    }

    pub fn is_empty(&mut self) -> bool {
        self.mocks.is_empty()
    }

    pub fn get_mock(&mut self, name: &String) -> Option<&mut MockAstLoader> {
        self.mocks.get_mut(name)
    }

    pub fn add_ast_loader(&mut self, name: String) {
        let mock = MockAstLoader::new(name.clone(), None, None);
        self.mocks.insert(name.clone(), mock);
    }

    #[cfg(debug_assertions)]
    pub fn debug(&self) {
        for mock in self.mocks.values() {
            println!("--------MOCK TARGET: {:?}---------", mock.mock_func_name);
            println!("---------------------");
            println!("AST: {:?}", mock.ref_properties);
            println!("---------------------");
            // println!("name: {:?}", self.);
            // println!("---------------------");
        }
    }
}
