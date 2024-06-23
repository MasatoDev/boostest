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

#[derive(Clone, Debug)]
pub struct Import {
    local: String,
    imported: Option<String>,
    full_path: String,
}

#[derive(Debug)]
pub struct MockAstLoader {
    pub mock_func_name: String,
    pub mock_target_name: Option<String>,
    pub resolved: bool,
    pub import: Vec<Import>,
    pub temp_import_source_vec: Option<Vec<Import>>,
    pub ref_properties: Vec<MockAstLoader>,
    pub code: Option<String>,
    analysis_started: bool,
}

impl MockAstLoader {
    pub fn new(mock_func_name: String, mock_target_name: Option<String>) -> Self {
        Self {
            mock_func_name,
            mock_target_name,
            resolved: false,
            import: Vec::new(),
            ref_properties: Vec::new(),
            analysis_started: false,
            temp_import_source_vec: None,
            code: None,
        }
    }

    pub fn set_target_name(&mut self, name: String) {
        self.mock_target_name = Some(name);
    }

    pub fn analysis_start(&mut self) {
        self.analysis_started = true;
    }

    pub fn resolve(&mut self) {
        self.resolved = true;
    }

    pub fn add_class(&mut self, class: &Class) {
        self.resolve();

        let mut mock_builder = MockBuilder::new();
        let code = mock_builder.generate_class_code(self.mock_func_name.clone(), class);
        println!("code:{:?} ", code);
        self.code = Some(code);
    }

    pub fn add_ts_interface(&mut self, ts_interface: &TSInterfaceDeclaration) {
        self.resolve();

        let mut mock_builder = MockBuilder::new();
        let code =
            mock_builder.generate_ts_interface_code(self.mock_func_name.clone(), ts_interface);
        self.code = Some(code);
    }

    pub fn add_ts_alias(&mut self, ts_type_alias: &TSTypeAliasDeclaration) {
        self.resolve();

        let mut mock_builder = MockBuilder::new();

        let code =
            mock_builder.generate_ts_type_alias_code(self.mock_func_name.clone(), ts_type_alias);
        self.code = Some(code);
    }

    pub fn get_decl_name_for_resolve(&self) -> Option<&String> {
        if let Some(last) = self.import.last() {
            if let Some(imported) = &last.imported {
                return Some(&imported);
            }
            return Some(&last.local);
        }

        self.mock_target_name.as_ref()
    }

    pub fn get_next_path(&self) -> Option<&String> {
        if let Some(last) = self.import.last() {
            return Some(&last.full_path);
        }

        None
    }

    pub fn add_import(&mut self, local: String, full_path: String, imported: Option<String>) {
        let import = Import {
            local,
            imported,
            full_path,
        };
        self.import.push(import);
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
        if let Some(target_name) = &self.mock_target_name {
            if *target_name != local {
                return;
            }
        }

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
        if self.resolved {
            return;
        }

        if let Some(vec) = &self.temp_import_source_vec {
            self.import = vec.clone();
        }

        self.reset_temp_import_source();
    }

    pub fn add_property_ts_type(&mut self, name: String) {
        self.ref_properties
            .push(MockAstLoader::new(self.mock_func_name.clone(), Some(name)));
    }

    pub fn add_property_class(&mut self, name: String) {
        self.ref_properties
            .push(MockAstLoader::new(self.mock_func_name.clone(), Some(name)));
    }

    pub fn get_needs_start_analysis_properties(&mut self) -> Vec<&mut MockAstLoader> {
        let mut result = Vec::new();

        for prop in &mut self.ref_properties {
            if !prop.resolved && !prop.analysis_started {
                result.push(prop);
            }
        }
        result
    }
}
