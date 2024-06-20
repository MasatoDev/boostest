use crate::boostest_mock_loader::mock_target_ast::{MockRefType, MockTargetAST};

pub struct BoostestMock {
    pub name: String,
    pub target_ast: Option<MockTargetAST>,
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
            self.name.clone(),
            name,
            MockRefType::Type,
            vec![],
            None,
            Vec::new(),
        ));
    }

    pub fn add_class_ref_target(&mut self, name: String) {
        self.target_ast = Some(MockTargetAST::new(
            self.name.clone(),
            name,
            MockRefType::Class,
            vec![],
            None,
            Vec::new(),
        ));
    }

    pub fn debug(&self) {
        if let Some(target_ast) = &self.target_ast {
            println!("--------MOCK TARGET: {:?}---------", target_ast.name);
            // println!("---------------------");
            // println!("AST: {:?}", target_ast.ast);
            // println!("---------------------");
            // println!("name: {:?}", self.name);
            // println!("---------------------");
        }
    }
}
