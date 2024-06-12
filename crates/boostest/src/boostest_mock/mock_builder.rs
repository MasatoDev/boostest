use std::{collections::HashMap, sync::Arc};

use crate::boostest_mock::mock::BoostestMock;

pub struct MockBuilder {
    mocks: HashMap<String, BoostestMock>,
}

impl MockBuilder {
    pub fn new() -> Self {
        Self {
            mocks: HashMap::new(),
        }
    }

    pub fn add_mock(&mut self, mock: BoostestMock) {
        self.mocks.insert(mock.name.clone(), mock);
    }

    pub fn add_ts_type_ref_mock(&mut self, name: &String, target_name: String) {
        if let Some(mock) = self.mocks.get_mut(name) {
            mock.add_ts_type_ref_target(target_name);
        }
    }

    pub fn add_class_ref_mock(&mut self, name: &String, target_name: String) {
        if let Some(mock) = self.mocks.get_mut(name) {
            mock.add_class_ref_target(target_name);
        }
    }

    pub fn add_import_mock(
        &mut self,
        name: &String,
        local: String,
        full_path: String,
        imported: Option<String>,
    ) {
        // TODO: importの名前がtarget_astの名前だから、mockのnameとは違い一致に使えない
        if let Some(mock) = self.mocks.get_mut(name) {
            if let Some(mock_target_ast) = mock.target_ast.as_mut() {
                if !mock_target_ast.has_ast() {
                    mock_target_ast.add_import(local, full_path, imported);
                }
            }
        }
    }

    #[cfg(debug_assertions)]
    pub fn debug(&self) {
        println!("--------MOCK---------");
        println!("mocks: {:?}", self.mocks);
        println!("---------------------");
    }
}
