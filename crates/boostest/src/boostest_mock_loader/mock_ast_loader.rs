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

use std::{
    path::PathBuf,
    sync::{Arc, Mutex},
};

use crate::boostest_mock_builder::mock_builder::MockBuilder;
use oxc::{
    ast::ast::{Class, TSInterfaceDeclaration, TSTypeAliasDeclaration},
    span::Span,
};

#[derive(Clone, Debug)]
pub struct Import {
    local: String,
    imported: Option<String>,
    original_name: Option<String>, // export {original_name as local_name(or default)};
    pub default_import: bool,
    pub full_path: String,
    pub need_reload: bool,
    pub loaded: bool,
    pub index_d_ts_loaded: bool,
    pub file_d_ts_loaded: bool,
}

#[derive(Debug)]
pub struct MockAstLoader {
    // for tsserver
    pub span: Span,
    pub target_definition_span: Option<Span>,

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

impl MockAstLoader {
    pub fn new(
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

    pub fn set_current_read_file_path(&mut self, path: PathBuf) {
        self.current_read_file_path = Some(path);
    }

    pub fn set_target_name(&mut self, name: String, span: Span) {
        self.mock_target_name = Some(name);
        self.span = span;
    }

    pub fn set_target_definition_span(&mut self, span: Span) {
        self.target_definition_span = Some(span);
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

    // import {Hoge(imported) as Huga(local)} from '...'
    pub fn get_decl_name_for_resolve(&self) -> Option<&String> {
        if let Some(last) = self.import.last() {
            if let Some(original_name) = &last.original_name {
                return Some(original_name);
            }

            if let Some(imported) = &last.imported {
                return Some(imported);
            }
            return Some(&last.local);
        }

        self.mock_target_name.as_ref()
    }

    pub fn get_next_import(&mut self) -> Option<&mut Import> {
        if let Some(last) = self.import.last_mut() {
            if MockAstLoader::is_loaded_file_d_ts(last) {
                return None;
            }
            return Some(last);
        }
        None
    }

    pub fn is_default_import(&self) -> bool {
        if let Some(last) = self.import.last() {
            return last.default_import;
        }
        false
    }

    pub fn set_default_import_name(&mut self, exported: &String, local: &String) {
        if let Some(import) = self.get_next_import() {
            if import.default_import && import.original_name.is_none() {
                if exported.clone() == String::from("default") {
                    import.original_name = Some(local.clone());

                    import.need_reload = true;
                    // // Once read, it is skipped, so read again and look for the declaration
                    // MockAstLoader::reset_loaded_import(import);
                }
            }
        }
    }

    pub fn set_original_name(&mut self, exported: &String, local: &String) {
        if let Some(import) = self.get_next_import() {
            let target_name: &String;

            if let Some(imported) = &import.imported {
                target_name = imported;
            } else {
                target_name = &import.local;
            }

            /*
            export type {Huga as AnotherHuga}

            export is AnotherHuga.
            local is Huga.
            If target_name matches exported, local Huga is the original name.
            The original_name is the highest priority in finding the target.
             */
            if target_name == exported {
                import.original_name = Some(local.clone());

                // Once read, it is skipped, so read again and look for the declaration
                // MockAstLoader::reset_loaded_import(import);
                import.need_reload = true;
            }
        }
    }

    // pub fn reset_loaded_import(import: &mut Import) {
    //     import.loaded = false;
    //     import.index_d_ts_loaded = false;
    //     import.file_d_ts_loaded = false;
    // }

    pub fn is_unloaded_import(import: &Import) -> bool {
        !import.loaded && !import.index_d_ts_loaded && !import.file_d_ts_loaded
    }
    pub fn is_loaded_full_path(import: &Import) -> bool {
        import.loaded && !import.index_d_ts_loaded && !import.file_d_ts_loaded
    }
    pub fn is_loaded_index_d_ts(import: &Import) -> bool {
        import.loaded && import.index_d_ts_loaded && !import.file_d_ts_loaded
    }
    pub fn is_loaded_file_d_ts(import: &Import) -> bool {
        import.loaded && import.index_d_ts_loaded && import.file_d_ts_loaded
    }

    pub fn is_empty_code(&self) -> bool {
        self.code.is_none()
    }

    pub fn add_import(&mut self, local: String, full_path: String, imported: Option<String>) {
        let import = Import {
            local,
            imported,
            full_path,
            original_name: None,
            default_import: false,
            need_reload: false,
            loaded: false,
            index_d_ts_loaded: false,
            file_d_ts_loaded: false,
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
        default_import: bool,
    ) {
        // import {Hoge(imported) as Huga(local)} from '...'
        // import {Hoge(imported | local)} from '...'
        if let Some(target_name) = self.get_decl_name_for_resolve() {
            if *target_name != local {
                return;
            }
        }

        let import = Import {
            local,
            imported,
            full_path,
            original_name: None,
            default_import,
            need_reload: false,
            loaded: false,
            index_d_ts_loaded: false,
            file_d_ts_loaded: false,
        };

        if let Some(vec) = &mut self.temp_import_source_vec {
            vec.push(import);
        } else {
            self.temp_import_source_vec = Some(vec![import]);
        }
    }

    // if not resolved set import as a target to resolve
    pub fn set_import_source(&mut self) {
        if self.resolved {
            return;
        }

        if let Some(vec) = &self.temp_import_source_vec {
            self.import = vec.clone();
        }

        self.reset_temp_import_source();
    }

    fn calc_prop_span(&mut self, span: Span) -> Span {
        if let Some(target_definition_span) = self.target_definition_span {
            return Span::new(
                span.start + target_definition_span.start,
                span.end + target_definition_span.start,
            );
        };

        span
    }

    pub fn add_property_ts_type(&mut self, name: String, key_name: String, span: Span) {
        let new_span = self.calc_prop_span(span);

        let mut new_mock_ast_loader = MockAstLoader::new(
            self.mock_func_name.clone(),
            Some(name),
            Some(new_span),
            Some(key_name),
        );
        new_mock_ast_loader.def_file_path = self.current_read_file_path.clone();

        self.ref_properties
            .push(Arc::new(Mutex::new(new_mock_ast_loader)));
    }

    pub fn add_property_class(&mut self, name: String, span: Span) {
        let new_span = self.calc_prop_span(span);

        let mut new_mock_ast_loader = MockAstLoader::new(
            self.mock_func_name.clone(),
            Some(name),
            Some(new_span),
            None,
        );
        new_mock_ast_loader.def_file_path = self.current_read_file_path.clone();

        self.ref_properties
            .push(Arc::new(Mutex::new(new_mock_ast_loader)));
    }

    pub fn get_needs_start_analysis_properties(&mut self) -> Vec<Arc<Mutex<MockAstLoader>>> {
        let mut result = Vec::new();

        for prop in &mut self.ref_properties {
            let prop_lock = prop.lock().unwrap();
            if !prop_lock.resolved && !prop_lock.analysis_started {
                result.push(prop.clone());
            }
        }
        result
    }
}
