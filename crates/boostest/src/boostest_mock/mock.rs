use crate::boostest_mock::mock_target::{Import, MockRefType, MockTargetAST};

#[derive(Debug)]
pub struct BoostestMock {
    pub name: String,
    target_ast: Option<MockTargetAST>,
}

impl BoostestMock {
    pub fn new(name: String) -> Self {
        Self {
            name,
            target_ast: None,
        }
    }

    pub fn add_ts_type_ref_target(&mut self, name: String) {
        self.target_ast = Some(MockTargetAST::new(
            name,
            MockRefType::Type,
            vec![],
            vec![],
            None,
        ));
    }

    pub fn add_class_ref_target(&mut self, name: String) {
        self.target_ast = Some(MockTargetAST::new(
            name,
            MockRefType::Class,
            vec![],
            vec![],
            None,
        ));
    }
}
