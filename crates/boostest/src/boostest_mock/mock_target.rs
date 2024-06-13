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

use std::sync::Arc;

use oxc::ast::ast::Declaration;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub enum MockRefType {
    Class,
    Type,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Import {
    local: String,
    imported: Option<String>,
    full_path: String,
}

#[derive(Debug, Serialize)]
pub struct MockTargetAST {
    pub name: String,
    mock_type: MockRefType,
    pub import: Vec<Import>,
    #[serde(skip_serializing)]
    ref_properties: Vec<Arc<MockTargetAST>>,
    pub ast: Option<String>,
}

impl MockTargetAST {
    pub fn new(
        name: String,
        mock_type: MockRefType,
        import: Vec<Import>,
        ref_properties: Vec<Arc<MockTargetAST>>,
        ast: Option<String>,
    ) -> Self {
        Self {
            name,
            mock_type,
            import,
            ref_properties,
            ast,
        }
    }

    pub fn set_decl(&mut self, decl: String) {
        self.ast = Some(decl);
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
        self.ast.is_some()
    }
}
