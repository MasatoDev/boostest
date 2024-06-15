use std::collections::HashMap;

use crate::boostest_mock::mock::BoostestMock;

pub struct MockBuilder {
    pub mocks: HashMap<String, BoostestMock>,
}

impl MockBuilder {
    pub fn new() -> Self {
        Self {
            mocks: HashMap::new(),
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
