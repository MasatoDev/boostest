use anyhow::Result;
use rayon::prelude::*;
use std::sync::{Arc, Mutex};

use crate::boostest_utils::tsserver::TSServerCache;
use crate::Setting;

use super::target::{MainTarget, ResolvedDefinitions, Target};
use super::target_resolver::TargetResolver;

pub fn main_targets_resolve(
    main_targets: &Vec<Arc<Mutex<MainTarget>>>,
    setting: Arc<Setting>,
    tsserver_cache: Arc<Mutex<TSServerCache>>,
) {
    main_targets.par_iter().for_each(|main_target| {
        let cloned_main_target = main_target.clone();
        let cloned_tsserver_cache = tsserver_cache.clone();
        let cloned_setting = setting.clone();

        main_target_resolve(cloned_main_target, cloned_setting, cloned_tsserver_cache);
    });
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

    main_target
        .target
        .lock()
        .unwrap()
        .ref_properties
        .par_iter()
        .for_each(|prop| {
            if let Err(e) = property_target_resolve(
                prop.clone(),
                cloned_resolved_definitions.clone(),
                setting.clone(),
                tsserver_cache.clone(),
            ) {
                println!("[Error] main_target_resolve: {}", e);
            }
        });
}

fn property_target_resolve(
    target: Arc<Mutex<Target>>,
    resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
    setting: Arc<Setting>,
    tsserver_cache: Arc<Mutex<TSServerCache>>,
) -> Result<()> {
    TargetResolver::new(target.clone(), resolved_definitions.clone())
        .resolve(setting.clone(), tsserver_cache.clone());

    target
        .lock()
        .unwrap()
        .ref_properties
        .par_iter()
        .for_each(|prop| {
            if let Err(e) = property_target_resolve(
                prop.clone(),
                resolved_definitions.clone(),
                setting.clone(),
                tsserver_cache.clone(),
            ) {
                println!("[Error] property_target_resolve: {}", e);
            }
        });

    Ok(())
}
