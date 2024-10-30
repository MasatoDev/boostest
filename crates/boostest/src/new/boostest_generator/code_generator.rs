use std::{
    path::PathBuf,
    sync::{Arc, Mutex},
};

use crate::boostest_mock_builder::mock_builder::MockBuilder;
use oxc::{
    ast::ast::{Class, TSInterfaceDeclaration, TSTypeAliasDeclaration},
    span::Span,
};

#[derive(Debug)]
pub struct CodeGenerator {
    pub mock_func_name: String,
    pub mock_target_name: Option<String>,
    pub prop_key_name: Option<String>,
    pub resolved: bool,
    pub import: Vec<Import>,
    pub current_read_file_path: Option<PathBuf>,
    pub def_file_path: Option<PathBuf>,
    pub temp_import_source_vec: Option<Vec<Import>>,
    pub ref_properties: Vec<Arc<Mutex<MockAstLoader>>>,
    pub code: Option<String>,
    analysis_started: bool,
}

impl CodeGenerator {
    fn new(
        mock_func_name: String,
        mock_target_name: Option<String>,
        span: Option<Span>,
        prop_key_name: Option<String>,
    ) -> Self {
        Self {
            span: span.unwrap_or(Span::new(0, 0)),
            target_definition_span: None,

            mock_func_name,
            mock_target_name,
            prop_key_name,
            resolved: false,
            import: Vec::new(),
            current_read_file_path: None,
            def_file_path: None,
            ref_properties: Vec::new(),
            analysis_started: false,
            temp_import_source_vec: None,
            code: None,
        }
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
}
