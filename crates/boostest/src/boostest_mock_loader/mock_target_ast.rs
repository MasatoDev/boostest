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

use std::{borrow::BorrowMut, sync::Arc};

use crate::boostest_mock_builder::{
    class_builder::{ClassArg, ClassMockData},
    init_value::get_test_value,
    mock_builder::MockBuilder,
};
use oxc::{
    allocator::Allocator,
    ast::{
        ast::{
            BindingPattern, BindingPatternKind, Class, ClassElement, FormalParameter,
            MethodDefinition, Program,
        },
        AstBuilder, VisitMut,
    },
    parser::Parser,
    span::SourceType,
};
use serde::{Deserialize, Serialize};

use super::mock;

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
    pub name: String,
    pub import: Vec<Import>,
    pub ast: Option<String>,
    pub temp_import_source_vec: Option<Vec<Import>>,
    pub ref_properties: Vec<MockTargetAST>,
    // allocator_arc: Arc<Allocator>,
    analysis_started: bool,
    mock_type: MockRefType,
    code: Option<String>,
}

impl MockTargetAST {
    pub fn new(
        name: String,
        mock_type: MockRefType,
        import: Vec<Import>,
        // allocator: Arc<Allocator>,
        ast: Option<String>,
        ref_properties: Vec<MockTargetAST>,
    ) -> Self {
        Self {
            name,
            mock_type,
            import,
            // allocator_arc: allocator,
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
        let mut class_data = ClassMockData::default();

        for stmt in &class.body.body {
            match stmt {
                ClassElement::MethodDefinition(method) => {
                    for formal_parameter in &method.value.params.items {
                        match &formal_parameter.pattern.kind {
                            BindingPatternKind::BindingIdentifier(ident) => {
                                if let Some(item) = &formal_parameter.pattern.type_annotation {
                                    let key = ident.name.to_string();
                                    let val = get_test_value(&item.type_annotation);
                                    class_data.constructor_args.push(ClassArg { key, val });
                                }
                            }
                            _ => {}
                        }
                    }
                }
                _ => {}
            }
        }

        if let Some(ident) = &class.id {
            let name = ident.name.to_string();
            class_data.class_name = name;

            let code = mock_builder.generate_class_code(class_data);
            println!("code: {}", code);
            self.code = Some(code);
        }
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
