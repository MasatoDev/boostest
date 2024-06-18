use std::sync::Arc;

use oxc::allocator::{self, Allocator};

use crate::boostest_mock_loader::mock_target_ast::{MockRefType, MockTargetAST};

pub struct BoostestMock {
    pub name: String,
    pub target_ast: Option<MockTargetAST>,
    allocator_arc: Arc<Allocator>,
}

impl BoostestMock {
    pub fn new(name: String, allocator: Arc<Allocator>) -> Self {
        Self {
            name,
            target_ast: None,
            allocator_arc: allocator,
        }
    }

    pub fn add_ts_type_ref_target(&mut self, name: String) {
        self.target_ast = Some(MockTargetAST::new(
            name,
            MockRefType::Type,
            vec![],
            // Arc::clone(&self.allocator_arc),
            None,
            Vec::new(),
        ));
    }

    pub fn add_class_ref_target(&mut self, name: String) {
        self.target_ast = Some(MockTargetAST::new(
            name,
            MockRefType::Class,
            vec![],
            // Arc::clone(&self.allocator_arc),
            None,
            Vec::new(),
        ));
    }

    pub fn debug(&self) {
        if let Some(target_ast) = &self.target_ast {
            println!("--------MOCK TARGET: {:?}---------", target_ast.name);
            println!("AST: {:?}", target_ast);
            println!("---------------------");
        }
    }
}
