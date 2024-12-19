use anyhow::Result;
use globwalker::glob;
use std::path::{Path, PathBuf};

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
    patterns: &Vec<String>,
    output_dir_name: &str,
) -> anyhow::Result<HashMap<PathBuf, String>> {
    let mut contents: HashMap<PathBuf, String> = HashMap::new();

    for pattern in patterns {
        let result_glob = glob(pattern)?;

        for entry in result_glob {
            let dir_entry = entry?;
            let path = dir_entry.path().to_path_buf();

            if let Some(parent) = path.parent() {
                if parent.file_name() == Some(OsStr::new(output_dir_name)) {
                    continue;
                }
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

fn reset_and_create_directory(dir_path: PathBuf, clean_only: bool) -> Result<()> {
    // if exists, remove all files and directories
    if dir_path.exists() {
        for entry in fs::read_dir(dir_path.clone())? {
            let entry = entry?;
            let entry_path = entry.path();

            if entry_path.is_dir() {
                fs::remove_dir_all(entry_path)?;
            } else {
                fs::remove_file(entry_path)?;
            }
        }

        if clean_only {
            fs::remove_dir(dir_path)?;
            return Ok(());
        }
    } else {
        if clean_only {
            return Ok(());
        }

        // if not exists, create directory
        fs::create_dir_all(dir_path)?;
    }

    Ok(())
}

pub fn handle_reset_and_create_files(path: &str, clean_only: bool) -> Result<PathBuf, String> {
    let path = Path::new(&path);
    let canonical_path = path.canonicalize();

    if let Ok(canonical_path) = canonical_path {
        let parent_path = match canonical_path.is_dir() {
            true => Some(canonical_path.as_path()),
            false => canonical_path.parent(),
        };

        if let Some(parent_path) = parent_path {
            let dir_path = parent_path.join("boostest_output");

            match reset_and_create_directory(dir_path.clone(), clean_only) {
                Ok(_) => {
                    return Ok(dir_path);
                }
                Err(e) => {
                    return Err(e.to_string());
                }
            };
        };
    }

    Err("Failed to prepare output files.".to_string())
}
