use anyhow::Result;
use std::path::{Path, PathBuf};

use glob::glob;
use std::collections::HashMap;
use std::ffi::OsStr;
use std::fs::{self, File};
use std::io::{self, prelude::*};

pub fn read(path: &Path) -> io::Result<String> {
    let mut f = File::open(path)?;
    let mut s = String::new();
    match f.read_to_string(&mut s) {
        Ok(_) => Ok(s),
        Err(e) => Err(e),
    }
}

pub fn read_matching_files(
    patterns: Vec<String>,
    out_file_name: &str,
) -> anyhow::Result<HashMap<PathBuf, String>> {
    let mut contents: HashMap<PathBuf, String> = HashMap::new();

    for pattern in &patterns {
        let result_glob = glob(pattern)?;

        for entry in result_glob {
            let path = entry?;

            if path
                .file_name()
                .unwrap_or(OsStr::new("none_file_name"))
                .to_string_lossy()
                .contains(out_file_name)
            {
                continue;
            }

            if path.is_file() {
                contents.insert(path.clone(), fs::read_to_string(path)?);
            }
        }
    }

    Ok(contents)
}

/**
 * Normalize and resolve the path.
 * parent: "hoge/a/b/c", relative: "../../d/e/f" => "hoge/a/d/e/f"
 */
pub fn normalize_and_resolve_path(parent: &Path, relative: &Path) -> Result<PathBuf, String> {
    let combined_path = parent.join(relative);
    let resolved_path = combined_path
        .components()
        .fold(PathBuf::new(), |mut acc, comp| {
            match comp {
                std::path::Component::ParentDir => {
                    acc.pop();
                }
                std::path::Component::CurDir => {}
                other => acc.push(other),
            }
            acc
        });

    if resolved_path.is_absolute() {
        Ok(resolved_path)
    } else {
        Err("The resolved path is not absolute.".to_string())
    }
}
