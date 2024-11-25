use anyhow::Result;
use std::path::PathBuf;
use std::sync::{Arc, Mutex};
use std::thread;

use crate::boostest_utils::tsserver::TSServerCache;

use super::target::{MainTarget, PropertyTarget};
use super::target_resolver::TargetResolver;

pub fn main_targets_resolve(
    main_targets: &Vec<Arc<Mutex<MainTarget>>>,
    ts_config_path: &Option<PathBuf>,
    project_root_path: &Option<PathBuf>,
    tsserver_cache: Arc<Mutex<TSServerCache>>,
) {
    let mut handles = vec![];
    for main_target in main_targets {
        let cloned_main_target = main_target.clone();
        let cloned_ts_config_path = ts_config_path.clone();
        let cloned_project_root_path = project_root_path.clone();
        let cloned_tsserver_cache = tsserver_cache.clone();

        let handle = thread::spawn(move || {
            main_target_resolve(
                cloned_main_target,
                cloned_ts_config_path,
                cloned_project_root_path,
                cloned_tsserver_cache,
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
) {
    let main_target = main_target.lock().unwrap();

    TargetResolver::new(main_target.target.clone(), None).resolve(
        &ts_config_path,
        &project_root_path,
        tsserver_cache.clone(),
    );

    let mut handles = vec![];

    for prop in main_target.target.lock().unwrap().ref_properties.iter() {
        if prop.lock().unwrap().target.lock().unwrap().resolved() {
            continue;
        }

        let cloned_prop = prop.clone();
        let cloned_ts_config_path = ts_config_path.clone();
        let cloned_project_root_path = project_root_path.clone();
        let cloned_tsserver_cache = tsserver_cache.clone();

        let handle = thread::spawn(move || {
            if let Err(e) = property_target_resolve(
                cloned_prop,
                cloned_ts_config_path,
                cloned_project_root_path,
                cloned_tsserver_cache,
            ) {
                println!("[Error] main_target_resolve: {}", e);
            }
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }
}

fn property_target_resolve(
    property_target: Arc<Mutex<PropertyTarget>>,
    ts_config_path: Option<PathBuf>,
    project_root_path: Option<PathBuf>,
    tsserver_cache: Arc<Mutex<TSServerCache>>,
) -> Result<()> {
    let property_target = property_target.lock().unwrap();

    TargetResolver::new(
        property_target.target.clone(),
        property_target.parent_key_name.clone(),
    )
    .resolve(&ts_config_path, &project_root_path, tsserver_cache.clone());

    let mut handles = vec![];

    for prop in property_target.target.lock().unwrap().ref_properties.iter() {
        if prop.lock().unwrap().target.lock().unwrap().resolved() {
            continue;
        }

        let cloned_prop = prop.clone();
        let cloned_ts_config_path = ts_config_path.clone();
        let cloned_project_root_path = project_root_path.clone();
        let cloned_tsserver_cache = tsserver_cache.clone();

        let handle = thread::spawn(move || {
            if let Err(e) = property_target_resolve(
                cloned_prop,
                cloned_ts_config_path,
                cloned_project_root_path,
                cloned_tsserver_cache,
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
