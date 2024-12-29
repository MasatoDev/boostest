use colored::*;
use oxc::span::Span;
use std::path::PathBuf;
use std::sync::{Arc, Mutex};
use std::thread;
use std::time::Duration;

use super::resolver::oxc_resolver::resolve_target;
use super::target::{DeclType, ResolvedDefinitions, Target, TargetReference};

use crate::boostest_utils::tsserver::TSServerCache;
use crate::Setting;

#[derive(Debug, Clone, PartialEq)]
pub enum ResolveStatus {
    Nothing,
    Start,
    Resolved,
}

#[derive(Debug, Clone)]
pub struct Import {
    pub parent_path: Option<PathBuf>,

    // export {original_name as local_name(or default)};
    identifier_original_name: Option<String>,

    // import {Hoge as Huga} from '.'
    // -> imported: Hoge, local: Huga
    imported: Option<String>,
    local: String,

    // import Hoge from '.'
    pub default_import: bool,

    // import {Hoge} from '../../hoge'
    // -> full_path: '../../hoge'
    pub full_path: String,
    pub canonical_path: Option<PathBuf>,

    pub loaded: bool,      // start visit file
    pub is_loading: bool,  // visit file that is loaded with this import
    pub need_reload: bool, // start visit file after local is renamed
}

#[derive(Debug)]
pub struct TargetResolver {
    pub target: Arc<Mutex<Target>>,
    pub target_decl_type: DeclType,
    pub status: ResolveStatus,
    pub resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
    pub read_file_span: Option<Span>,

    pub defined_generics: Vec<String>,
    pub skip_id_check: bool,
    pub skip_set_definition: bool,

    // Import has infomation needed for reading the next file
    pub imports: Vec<Import>,

    // for utility types and so on
    pub typescript_default_lib_file_loaded: bool,
    pub typescript_lib_files: Vec<PathBuf>,
    pub typescript_lib_files_loaded: bool,

    // temp fields
    pub temp_import_source_vec: Option<Vec<Import>>,
    pub temp_current_read_file_path: PathBuf,
    pub temp_renamed_var_decl_span: Option<Span>,
}

impl TargetResolver {
    pub fn new(
        target: Arc<Mutex<Target>>,
        resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
    ) -> Self {
        let target_decl_type = target.lock().unwrap().decl_type.clone();
        Self {
            target,
            target_decl_type,
            defined_generics: Vec::new(),
            resolved_definitions,
            status: ResolveStatus::Nothing,
            imports: Vec::new(),
            typescript_lib_files: Vec::new(),
            typescript_default_lib_file_loaded: false,
            typescript_lib_files_loaded: false,
            skip_id_check: false,
            skip_set_definition: false,
            temp_import_source_vec: None,
            temp_current_read_file_path: PathBuf::new(),
            temp_renamed_var_decl_span: None,
            read_file_span: None,
        }
    }

    pub fn resolve(&mut self, setting: Arc<Setting>, ts_server_cache: Arc<Mutex<TSServerCache>>) {
        // NOTE: prevent from circular referencing
        let target_ref = self.target.lock().unwrap().target_reference.clone();

        let is_resolved = self
            .resolved_definitions
            .lock()
            .unwrap()
            .is_resolved(&target_ref);
        if is_resolved {
            return;
        };

        let target_name = self.target.lock().unwrap().name.clone();

        // NOTE: if main target isn't reference, main target doesn't have target
        if target_name.is_empty() {
            return;
        }

        self.status = ResolveStatus::Start;
        let file_path = self
            .target
            .lock()
            .unwrap()
            .target_reference
            .file_path
            .clone();
        resolve_target(true, self, file_path, setting, 1, ts_server_cache);
    }

    pub fn add_prop_with_retry(
        &mut self,
        id: String,
        target_reference: TargetReference,
        decl_type: DeclType,
    ) {
        if !self.defined_generics.contains(&id) {
            loop {
                match self.target.clone().lock() {
                    Ok(mut target) => {
                        target.add_property(id, target_reference, decl_type);
                        break;
                    }
                    Err(_) => {
                        // ロック取得に失敗した場合、少し待ってからリトライ
                        thread::sleep(Duration::from_millis(20));
                    }
                }
            }
        }
    }

    /*****************/
    /*    status     */
    /*****************/
    pub fn resolved(&self) -> bool {
        self.status == ResolveStatus::Resolved
    }

    pub fn set_resolved(&mut self) {
        self.target.lock().unwrap().is_resolved = true;
        self.status = ResolveStatus::Resolved;
    }

    /******************/
    /* manage imports */
    /******************/
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
        // import {Hoge(imported or local)} from '...'
        if self.get_decl_name_for_resolve() != local {
            return;
        }

        let import = Import {
            parent_path: self
                .temp_current_read_file_path
                .parent()
                .map(|p| p.to_path_buf()),
            local,
            imported,
            full_path,
            canonical_path: None,
            identifier_original_name: None,
            default_import,
            is_loading: false,
            need_reload: false,
            loaded: false,
        };

        if let Some(vec) = &mut self.temp_import_source_vec {
            vec.push(import);
        } else {
            self.temp_import_source_vec = Some(vec![import]);
        }
    }

    // all flag: export * from '...'
    pub fn set_all_flag_temp_import_source(&mut self, full_path: String) {
        if let Some(last) = self.imports.last() {
            let import = Import {
                full_path,
                loaded: false,
                parent_path: self
                    .temp_current_read_file_path
                    .parent()
                    .map(|p| p.to_path_buf()),
                ..last.clone()
            };

            if let Some(vec) = &mut self.temp_import_source_vec {
                vec.push(import);
            } else {
                self.temp_import_source_vec = Some(vec![import]);
            }
        }
    }

    // if not resolved set import as a target to resolve
    pub fn set_import_source(&mut self) {
        if self.resolved() {
            return;
        }

        if let Some(vec) = &self.temp_import_source_vec {
            self.imports = vec.clone();
        }

        self.reset_temp_import_source();
    }

    // import {Hoge(imported) as Huga(local)} from '...'
    pub fn get_decl_name_for_resolve(&mut self) -> String {
        if let Some(cur_import) = self.get_current_loading_import() {
            if let Some(original_name) = &cur_import.identifier_original_name {
                return original_name.to_string();
            }

            if let Some(imported) = &cur_import.imported {
                return imported.to_string();
            }
            return cur_import.local.to_string();
        }

        self.target.clone().lock().unwrap().name.to_string()
    }

    pub fn get_current_loading_import(&mut self) -> Option<&mut Import> {
        self.imports.iter_mut().rfind(|i| i.is_loading)
    }

    pub fn get_next_read_import(&mut self) -> Option<&mut Import> {
        let index = self.imports.iter().position(|i| !i.loaded || i.need_reload);

        if let Some(index) = index {
            let target_import = &mut self.imports[index];
            let target_full_path = target_import.full_path.clone();

            for import in &mut self.imports {
                import.is_loading = import.full_path == target_full_path;
            }
        }
        if let Some(index) = index {
            let target_import = &mut self.imports[index];
            return Some(target_import);
        }
        None
    }

    pub fn get_all_flag_paths(&self) -> Vec<PathBuf> {
        self.imports
            .iter()
            .filter(|i| i.default_import)
            .filter_map(|i| i.canonical_path.clone())
            .collect()
    }

    // export const Hoge = Huga;
    pub fn set_renamed_decl(&mut self, renamed_decl_name: String) {
        let parent_path = self
            .temp_current_read_file_path
            .parent()
            .map(|p| p.to_path_buf());

        if let Some(cur) = self.get_current_loading_import() {
            cur.identifier_original_name = Some(renamed_decl_name.clone());
            cur.need_reload = true;
            cur.parent_path = parent_path;
        }
    }

    pub fn set_default_import_name(&mut self, exported: &str, local: &str) {
        let parent_path = self
            .temp_current_read_file_path
            .parent()
            .map(|p| p.to_path_buf());

        if let Some(import) = self.get_current_loading_import() {
            if import.default_import
                && import.identifier_original_name.is_none()
                && exported == "default"
            {
                import.identifier_original_name = Some(local.to_string());
                import.need_reload = true;
                import.parent_path = parent_path;
                // Once read, it is skipped, so read again and look for the declaration
                // MockAstLoader::reset_loaded_import(import);
            }
        }
    }

    // TODO:
    pub fn set_ts_namespace_export(&mut self, id: &str) {
        if self.get_decl_name_for_resolve() != id {
            return;
        }

        let parent_path = self
            .temp_current_read_file_path
            .parent()
            .map(|p| p.to_path_buf());

        if let Some(import) = self.get_current_loading_import() {
            import.default_import = true;
            import.need_reload = true;
            import.parent_path = parent_path;
        }
    }

    pub fn set_original_name(&mut self, exported: &String, local: &str) {
        let parent_path = self
            .temp_current_read_file_path
            .parent()
            .map(|p| p.to_path_buf());

        if let Some(import) = self.get_current_loading_import() {
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
                import.identifier_original_name = Some(local.to_string());

                // Once read, it is skipped, so read again and look for the declaration
                // MockAstLoader::reset_loaded_import(import);
                import.need_reload = true;
            }
            import.parent_path = parent_path;
        }
    }

    /**********************/
    /* manage load status */
    /**********************/

    pub fn is_generic_property(&self) -> bool {
        self.target
            .lock()
            .unwrap()
            .target_reference
            .target_supplement
            .clone()
            .map(|s| s.is_generic_property)
            .unwrap_or(false)
    }
}
