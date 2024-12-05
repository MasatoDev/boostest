use crate::boostest_generator::code_generator::CodeGenerator;
use crate::boostest_generator::fallback_func_builder::FallbackFuncBuilder;
use crate::boostest_target::target::{MainTarget, Target};
use crate::boostest_utils::file_utils;
use crate::boostest_utils::napi::OutputCode;

use anyhow::Result;
use colored::*;
use oxc::span::SourceType;
use std::ffi::OsStr;
use std::fs::{self, File};
use std::io::prelude::*;
use std::path::Path;
use std::sync::{Arc, Mutex};

pub fn handle_main_task(output: OutputCode, func_name: String) -> Result<()> {
    let OutputCode {
        code,
        path,
        target_type,
        ..
    } = output;

    let path = Path::new(&path);
    let canonical_path = path.canonicalize()?;
    let parent_path = canonical_path
        .parent()
        .ok_or(anyhow::anyhow!("target path not resolved"))?;

    let dir_path = parent_path.join("boostest_output");
    // ディレクトリが存在するか確認
    if !dir_path.exists() {
        // 存在しない場合はディレクトリを作成
        fs::create_dir(&dir_path)?;
    } else {
        // 存在する場合はディレクトリ内のファイルを削除
        // for entry in fs::read_dir(dir_path)? {
        //     let entry = entry?;
        //     let path = entry.path();
        //     if path.is_file() {
        //         fs::remove_file(path)?;
        //     }
        // }
    }

    let file_path = dir_path.join(format!("{}{}", func_name, ".ts")); // srcディレクトリ内のgreeting.ts

    let mut f: File = File::create(&file_path)?;

    let allocator = oxc::allocator::Allocator::default();

    let mut code_generator = CodeGenerator::new(
        true,
        &allocator,
        "",
        &func_name,
        "",
        &code,
        None,
        &target_type,
    );

    code_generator.generate();

    if let Some(code) = code_generator.code {
        f.write_all(code.as_bytes())?;
    }
    Ok(())
}
