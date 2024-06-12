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
    name: String,
    mock_type: MockRefType,
    import: Vec<Import>,
    #[serde(skip_serializing)]
    ref_properties: Vec<Arc<MockTargetAST>>,
    ast: Option<String>,
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

    pub fn add_import(&mut self, local: String, full_path: String, imported: Option<String>) {
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
