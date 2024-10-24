use crate::boostest_mock_loader::mock_ast_loader::MockAstLoader;
use crate::boostest_mock_loader::mock_loader::MockLoader;

use anyhow::Result;
use colored::*;
use std::ffi::OsStr;
use std::fs::File;
use std::io::prelude::*;
use std::path::Path;
use std::sync::{Arc, Mutex};

pub fn handle_main_task(
    mock_loader: &mut MockLoader,
    path: &Path,
    out_file_name: &str,
) -> Result<()> {
    let file_name = path
        .file_stem()
        .unwrap_or(OsStr::new("none_file_name"))
        .to_str()
        .unwrap_or("none_file_name");

    if mock_loader.is_empty() {
        println!(
            "{}",
            format!("not found target function: {}", file_name).red()
        );

        return Ok(());
    }

    if mock_loader.is_output_empty() {
        println!(
            "{}",
            format!("failed create test data of: {}", file_name).red()
        );

        return Ok(());
    }

    let canonical_path = path.canonicalize()?;
    let parent_path = canonical_path
        .parent()
        .ok_or(anyhow::anyhow!("target path not resolved"))?;

    let path = parent_path.join(format!("{}_{}{}", file_name, out_file_name, ".ts")); // srcディレクトリ内のgreeting.ts

    let mut f: File = File::create(&path)?;

    let mock_ast_loader_vec = mock_loader.get_sorted_mocks();

    // NOTE: if this loop change to multi-thread, the f(file) is need change to Arc<Mutex<File>>
    for mock_ast_loader in mock_ast_loader_vec {
        let locked_mock_ast_loader = mock_ast_loader.lock().unwrap();

        if locked_mock_ast_loader.is_empty_code() {
            println!(
                "{}",
                format!(
                    "Something went wrong to create test data: {} of {}",
                    mock_ast_loader.lock().unwrap().mock_func_name,
                    file_name
                )
                .purple()
            );
            continue;
        }

        if let Some(code) = &locked_mock_ast_loader.code {
            f.write_all(code.as_bytes())?;
            f.write_all(b"\n")?;
        }

        drop(locked_mock_ast_loader);
        write_ref_properties(mock_ast_loader, &mut f)?;
    }

    Ok(())
}

pub fn write_ref_properties(prop: Arc<Mutex<MockAstLoader>>, f: &mut File) -> Result<()> {
    let children_props = prop.lock().unwrap().ref_properties.clone();

    for children_prop in children_props.iter() {
        let locked_prop = children_prop.lock().unwrap();

        if let Some(code) = &locked_prop.code {
            f.write_all(code.as_bytes())?;
            f.write_all(b"\n")?;
        } else {
            let fallback_code = locked_prop.generate_fallback_code();

            f.write_all(fallback_code.as_bytes())?;
            f.write_all(b"\n")?;
        }

        drop(locked_prop);
        write_ref_properties(children_prop.clone(), f)?;
    }
    Ok(())
}
