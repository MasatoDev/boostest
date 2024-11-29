use anyhow::Result;
use std::collections::HashMap;
use std::path::PathBuf;
use std::sync::{Arc, Mutex};
use std::thread;

use crate::boostest_utils::tsserver::TSServerCache;

use super::target::{MainTarget, ResolvedDefinitions, Target};
use super::target_resolver::TargetResolver;

pub fn main_targets_resolve(
    main_targets: &Vec<Arc<Mutex<MainTarget>>>,
    ts_config_path: &Option<PathBuf>,
    project_root_path: &Option<PathBuf>,
    tsserver_cache: Arc<Mutex<TSServerCache>>,
    lib_file_path: &PathBuf,
) {
    let mut handles = vec![];
    for main_target in main_targets {
        let cloned_main_target = main_target.clone();
        let cloned_ts_config_path = ts_config_path.clone();
        let cloned_project_root_path = project_root_path.clone();
        let cloned_tsserver_cache = tsserver_cache.clone();
        let cloned_lib_file_path = lib_file_path.clone();

        let handle = thread::spawn(move || {
            main_target_resolve(
                cloned_main_target,
                cloned_ts_config_path,
                cloned_project_root_path,
                cloned_tsserver_cache,
                cloned_lib_file_path,
            );
        });
        handles.push(handle);
    }
    for handle in handles {
        handle.join().unwrap();
    }
}

fn main_target_resolve(
    main_target: Arc<Mutex<MainTarget>>,
    ts_config_path: Option<PathBuf>,
    project_root_path: Option<PathBuf>,
    tsserver_cache: Arc<Mutex<TSServerCache>>,
    lib_file_path: PathBuf,
) {
    let main_target = main_target.lock().unwrap();
    let cloned_resolved_definitions = main_target.resolved_definitions.clone();
    let cloned_target = main_target.target.clone();

    TargetResolver::new(cloned_target, cloned_resolved_definitions.clone()).resolve(
        &ts_config_path,
        &project_root_path,
        tsserver_cache.clone(),
        &lib_file_path,
    );

    let mut handles = vec![];

    for prop in main_target.target.lock().unwrap().ref_properties.iter() {
        if prop.lock().unwrap().is_resolved {
            continue;
        }

        let cloned_prop = prop.clone();
        let cloned_resolved_definitions = cloned_resolved_definitions.clone();
        let cloned_ts_config_path = ts_config_path.clone();
        let cloned_project_root_path = project_root_path.clone();
        let cloned_tsserver_cache = tsserver_cache.clone();
        let cloned_lib_file_path = lib_file_path.clone();

        let handle = thread::spawn(move || {
            if let Err(e) = property_target_resolve(
                cloned_prop,
                cloned_resolved_definitions,
                cloned_ts_config_path,
                cloned_project_root_path,
                cloned_tsserver_cache,
                cloned_lib_file_path,
            ) {
                println!("[Error] main_target_resolve: {}", e);
            }
        });
        handles.push(handle);
    }

    drop(main_target);

    for handle in handles {
        handle.join().unwrap();
    }
}

fn property_target_resolve(
    target: Arc<Mutex<Target>>,
    resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
    ts_config_path: Option<PathBuf>,
    project_root_path: Option<PathBuf>,
    tsserver_cache: Arc<Mutex<TSServerCache>>,
    lib_file_path: PathBuf,
) -> Result<()> {
    TargetResolver::new(target.clone(), resolved_definitions.clone()).resolve(
        &ts_config_path,
        &project_root_path,
        tsserver_cache.clone(),
        &lib_file_path,
    );

    let mut handles = vec![];

    for prop in target.lock().unwrap().ref_properties.iter() {
        if prop.lock().unwrap().is_resolved {
            continue;
        }

        let cloned_prop = prop.clone();
        let cloned_resolved_definitions = resolved_definitions.clone();
        let cloned_ts_config_path = ts_config_path.clone();
        let cloned_project_root_path = project_root_path.clone();
        let cloned_tsserver_cache = tsserver_cache.clone();
        let cloned_lib_file_path = lib_file_path.clone();

        let handle = thread::spawn(move || {
            if let Err(e) = property_target_resolve(
                cloned_prop,
                cloned_resolved_definitions,
                cloned_ts_config_path,
                cloned_project_root_path,
                cloned_tsserver_cache,
                cloned_lib_file_path,
            ) {
                println!("[Error] property_target_resolve: {}", e);
            }
        });

        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    Ok(())
}
