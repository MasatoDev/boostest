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
use oxc::{
    ast::ast::{Class, TSInterfaceDeclaration, TSTypeAliasDeclaration},
    span::Span,
};

#[derive(Debug)]
pub struct MockAstLoader {
    pub span: Span,
    pub mock_func_name: String,
    pub mock_target_name: Option<String>,
    pub prop_key_name: Option<String>,
    pub resolved: bool,
    pub ref_properties: Vec<MockAstLoader>,
    pub code: Option<String>,
    analysis_started: bool,
}

impl MockAstLoader {
    pub fn new(
        mock_func_name: String,
        mock_target_name: Option<String>,
        span: Option<Span>,
        prop_key_name: Option<String>,
    ) -> Self {
        Self {
            mock_func_name,
            mock_target_name,
            span: span.unwrap_or(Span::new(0, 0)),
            prop_key_name,
            resolved: false,
            ref_properties: Vec::new(),
            analysis_started: false,
            code: None,
        }
    }

    pub fn set_target_name(&mut self, name: String, span: Span) {
        self.mock_target_name = Some(name);
        self.span = span;
    }

    pub fn analysis_start(&mut self) {
        self.analysis_started = true;
    }

    pub fn resolve(&mut self) {
        self.resolved = true;
    }

    pub fn add_class(&mut self, class: &mut Class) {
        // println!("add_class{:?}", class);
        self.resolve();

        let mut mock_builder = MockBuilder::new();

        let code = mock_builder.generate_class_code(
            self.mock_func_name.clone(),
            self.prop_key_name.clone(),
            class,
        );
        self.code = Some(code);
    }

    pub fn add_ts_interface(&mut self, ts_interface: &mut TSInterfaceDeclaration) {
        // println!("add_ts_interface{:?}", ts_interface);
        self.resolve();

        let mut mock_builder = MockBuilder::new();

        let code = mock_builder.generate_ts_interface_code(
            self.mock_func_name.clone(),
            self.prop_key_name.clone(),
            ts_interface,
        );
        self.code = Some(code);
    }

    pub fn add_ts_alias(&mut self, ts_type_alias: &mut TSTypeAliasDeclaration) {
        // println!("add_ts_alias{:?}", ts_type_alias);
        self.resolve();

        let mut mock_builder = MockBuilder::new();

        let code = mock_builder.generate_ts_type_alias_code(
            self.mock_func_name.clone(),
            self.prop_key_name.clone(),
            ts_type_alias,
        );
        self.code = Some(code);
    }

    pub fn generate_fallback_code(&self) -> String {
        let mut mock_builder = MockBuilder::new();

        let code = mock_builder
            .generate_fallback_func_code(self.mock_func_name.clone(), self.prop_key_name.clone());
        // self.code = Some(code.clone());
        code
    }

    pub fn is_empty_code(&self) -> bool {
        self.code.is_none()
    }

    pub fn add_property_ts_type(&mut self, name: String, key_name: String, span: Span) {
        self.ref_properties.push(MockAstLoader::new(
            self.mock_func_name.clone(),
            Some(name),
            Some(span),
            Some(key_name),
        ));
    }

    pub fn add_property_class(&mut self, name: String, span: Span) {
        self.ref_properties.push(MockAstLoader::new(
            self.mock_func_name.clone(),
            Some(name),
            Some(span),
            None,
        ));
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
