/*
name: "Bus"
import: {
  local: "Bus",
  imported: None
  fullPath: "crates/boostest/src/boostest_mock/mock_target.rs"
}[],
AST: "....."
ref_properties: [
    {
        name: "Hello"
        local: "Hello"

        // 複数importeを跨いで名前変更されている場合はimportedを追加していく。
        // 一番最後のものを利用する
        imported: ["hoge", "huga", "HelloOrigin"]
        AST: "....."
        ref_properties: []
    },
    {
        name: "Member"
        local: "Member"
        imported: None
        AST: "....."
        ref_properties: [
            {
                name: "Character",
                local: "Character",
                imported: None,
                AST: "....."
                ref_properties: []
            }
        ]
    }
]
*/

use crate::boostest_mock_builder::mock_builder::MockBuilder;
use oxc::ast::ast::{Class, TSInterfaceDeclaration, TSTypeAliasDeclaration};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub enum MockRefType {
    Class,
    Type,
}

#[derive(Clone, Debug)]
pub struct Import {
    local: String,
    imported: Option<String>,
    full_path: String,
}

#[derive(Debug)]
pub struct MockTargetAST {
    pub mock_func_name: String,
    pub name: String,
    pub import: Vec<Import>,
    pub ast: Option<String>,
    pub temp_import_source_vec: Option<Vec<Import>>,
    pub ref_properties: Vec<MockTargetAST>,
    pub code: Option<String>,
    analysis_started: bool,
    mock_type: MockRefType,
}

impl MockTargetAST {
    pub fn new(
        mock_func_name: String,
        name: String,
        mock_type: MockRefType,
        import: Vec<Import>,
        ast: Option<String>,
        ref_properties: Vec<MockTargetAST>,
    ) -> Self {
        Self {
            mock_func_name,
            name,
            mock_type,
            import,
            ast,
            ref_properties,
            analysis_started: false,
            temp_import_source_vec: None,
            code: None,
        }
    }

    pub fn analysis_start(&mut self) {
        self.analysis_started = true;
    }

    pub fn set_decl(&mut self, decl: String) {
        // TODO: ast追加しないとループしちゃう
        self.ast = Some(decl);
    }

    pub fn add_class(&mut self, class: &Class) {
        let mut mock_builder = MockBuilder::new();
        let code = mock_builder.generate_class_code(self.mock_func_name.clone(), class);
        self.code = Some(code);
    }

    pub fn add_ts_interface(&mut self, ts_interface: &TSInterfaceDeclaration) {
        let mut mock_builder = MockBuilder::new();
        let code =
            mock_builder.generate_ts_interface_code(self.mock_func_name.clone(), ts_interface);
        self.code = Some(code);
    }

    pub fn add_ts_alias(&mut self, ts_type_alias: &TSTypeAliasDeclaration) {
        let mut mock_builder = MockBuilder::new();

        let code =
            mock_builder.generate_ts_type_alias_code(self.mock_func_name.clone(), ts_type_alias);
        self.code = Some(code);
    }

    pub fn get_decl_name_for_resolve(&self) -> &String {
        if let Some(last) = self.import.last() {
            if let Some(imported) = &last.imported {
                return &imported;
            }
            return &last.local;
        }
        &self.name
    }

    pub fn get_next_path(&self) -> Option<&String> {
        if let Some(last) = self.import.last() {
            return Some(&last.full_path);
        }

        None
    }

    pub fn add_import(&mut self, local: String, full_path: String, imported: Option<String>) {
        println!("add_import: {} {} {}", self.name, local, full_path);
        let import = Import {
            local,
            imported,
            full_path,
        };
        self.import.push(import);
    }

    pub fn has_ast(&self) -> bool {
        self.ast.is_some() || self.code.is_some()
    }

    pub fn reset_temp_import_source(&mut self) {
        self.temp_import_source_vec = None;
    }

    pub fn set_temp_import_source(
        &mut self,
        local: String,
        full_path: String,
        imported: Option<String>,
    ) {
        let import = Import {
            local,
            imported,
            full_path,
        };

        if let Some(vec) = &mut self.temp_import_source_vec {
            vec.push(import);
        } else {
            self.temp_import_source_vec = Some(vec![import]);
        }
    }

    pub fn set_import_source(&mut self) {
        if self.has_ast() {
            return;
        }

        if let Some(vec) = &self.temp_import_source_vec {
            self.import = vec.clone();
        }

        self.reset_temp_import_source();
    }

    pub fn add_property_ts_type(&mut self, name: String) {
        self.ref_properties.push(MockTargetAST::new(
            self.mock_func_name.clone(),
            name,
            MockRefType::Type,
            vec![],
            // Arc::clone(&self.allocator_arc),
            None,
            Vec::new(),
        ));
    }

    pub fn add_property_class(&mut self, name: String) {
        self.ref_properties.push(MockTargetAST::new(
            self.mock_func_name.clone(),
            name,
            MockRefType::Class,
            vec![],
            // Arc::clone(&self.allocator_arc),
            None,
            Vec::new(),
        ));
    }

    pub fn get_needs_start_analysis_properties(&mut self) -> Vec<&mut MockTargetAST> {
        let mut result = Vec::new();

        for prop in &mut self.ref_properties {
            if !prop.has_ast() && !prop.analysis_started {
                result.push(prop);
            }
        }
        result
    }
}
