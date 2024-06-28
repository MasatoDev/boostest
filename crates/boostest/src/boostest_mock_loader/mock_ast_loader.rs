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
use serde::de;

#[derive(Clone, Debug)]
pub struct Import {
    local: String,
    imported: Option<String>,
    original_name: Option<String>, // export {original_name as local_name(or default)};
    default_import: bool,
    pub full_path: String,
    pub need_reload: bool,
    pub loaded: bool,
    pub index_d_ts_loaded: bool,
    pub file_d_ts_loaded: bool,
}

#[derive(Debug)]
pub struct MockAstLoader {
    pub mock_func_name: String,
    pub mock_target_name: Option<String>,
    pub prop_key_name: Option<String>,
    pub resolved: bool,
    pub import: Vec<Import>,
    pub temp_import_source_vec: Option<Vec<Import>>,
    pub ref_properties: Vec<MockAstLoader>,
    pub code: Option<String>,
    analysis_started: bool,
}

impl MockAstLoader {
    pub fn new(
        mock_func_name: String,
        mock_target_name: Option<String>,
        prop_key_name: Option<String>,
    ) -> Self {
        Self {
            mock_func_name,
            mock_target_name,
            prop_key_name,
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

    pub fn add_class(&mut self, class: &mut Class) {
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
        self.resolve();

        let mut mock_builder = MockBuilder::new();

        let code = mock_builder.generate_ts_type_alias_code(
            self.mock_func_name.clone(),
            self.prop_key_name.clone(),
            ts_type_alias,
        );
        self.code = Some(code);
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

    pub fn set_default_import_name(&mut self, exported: &String, local: &String) {
        println!("set default exported:{:?}, local:{:?}", &exported, &local);
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
            println!("target_name:{:?}", &target_name);
            println!("local:{:?}", &local);
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

        println!("import:{:?}", &import);

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

    pub fn add_property_ts_type(&mut self, name: String, key_name: String) {
        self.ref_properties.push(MockAstLoader::new(
            self.mock_func_name.clone(),
            Some(name),
            Some(key_name),
        ));
    }

    pub fn add_property_class(&mut self, name: String) {
        self.ref_properties.push(MockAstLoader::new(
            self.mock_func_name.clone(),
            Some(name),
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
