use anyhow::Result;
use std::path::PathBuf;
use std::sync::{Arc, Mutex};
use std::thread;

use crate::boostest_utils::tsserver::TSServerCache;
use crate::Setting;

use super::target::{MainTarget, ResolvedDefinitions, Target};
use super::target_resolver::TargetResolver;

pub fn main_targets_resolve(
    main_targets: &Vec<Arc<Mutex<MainTarget>>>,
    setting: Arc<Setting>,
    tsserver_cache: Arc<Mutex<TSServerCache>>,
) {
    let mut handles = vec![];

    for main_target in main_targets {
        let cloned_main_target = main_target.clone();
        let cloned_tsserver_cache = tsserver_cache.clone();
        let cloned_setting = setting.clone();

        let handle = thread::spawn(move || {
            main_target_resolve(cloned_main_target, cloned_setting, cloned_tsserver_cache);
        });
        handles.push(handle);
    }
    for handle in handles {
        handle.join().unwrap();
    }
}

fn main_target_resolve(
    main_target: Arc<Mutex<MainTarget>>,
    setting: Arc<Setting>,
    tsserver_cache: Arc<Mutex<TSServerCache>>,
) {
    let main_target = main_target.lock().unwrap();
    let cloned_resolved_definitions = main_target.resolved_definitions.clone();
    let cloned_target = main_target.target.clone();

    TargetResolver::new(cloned_target, cloned_resolved_definitions.clone())
        .resolve(setting.clone(), tsserver_cache.clone());

    let mut handles = vec![];

    for prop in main_target.target.lock().unwrap().ref_properties.iter() {
        if prop.lock().unwrap().is_resolved {
            continue;
        }

        let cloned_prop = prop.clone();
        let cloned_resolved_definitions = cloned_resolved_definitions.clone();
        let cloned_tsserver_cache = tsserver_cache.clone();
        let cloned_setting = setting.clone();

        let handle = thread::spawn(move || {
            if let Err(e) = property_target_resolve(
                cloned_prop,
                cloned_resolved_definitions,
                cloned_setting,
                cloned_tsserver_cache,
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
    setting: Arc<Setting>,
    tsserver_cache: Arc<Mutex<TSServerCache>>,
) -> Result<()> {
    TargetResolver::new(target.clone(), resolved_definitions.clone())
        .resolve(setting.clone(), tsserver_cache.clone());

    let mut handles = vec![];

    for prop in target.lock().unwrap().ref_properties.iter() {
        if prop.lock().unwrap().is_resolved {
            continue;
        }

        let cloned_prop = prop.clone();
        let cloned_resolved_definitions = resolved_definitions.clone();
        let cloned_tsserver_cache = tsserver_cache.clone();
        let cloned_setting = setting.clone();

        let handle = thread::spawn(move || {
            if let Err(e) = property_target_resolve(
                cloned_prop,
                cloned_resolved_definitions,
                cloned_setting,
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
