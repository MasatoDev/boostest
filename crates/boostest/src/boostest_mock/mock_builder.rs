use std::{collections::HashMap, sync::Arc};

use oxc::{allocator::Allocator, ast::AstBuilder};

use crate::boostest_mock::mock::BoostestMock;

pub struct MockBuilder {
    pub mocks: HashMap<String, BoostestMock>,
    pub output_ast_allocator: Arc<Allocator>,
}

impl MockBuilder {
    pub fn new() -> Self {
        let allocator = Allocator::default();

        Self {
            mocks: HashMap::new(),
            output_ast_allocator: Arc::new(allocator),
        }
    }

    pub fn get_mock(&mut self, name: &String) -> Option<&mut BoostestMock> {
        self.mocks.get_mut(name)
    }

    pub fn add_mock(&mut self, mock: BoostestMock) {
        self.mocks.insert(mock.name.clone(), mock);
    }

    #[cfg(debug_assertions)]
    pub fn debug(&self) {
        for mock in self.mocks.values() {
            mock.debug();
        }
    }
}
