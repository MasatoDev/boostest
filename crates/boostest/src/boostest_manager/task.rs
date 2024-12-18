use crate::boostest_generator::code_generator::CodeGenerator;
use crate::boostest_utils::napi::OutputCode;
use crate::OutputOption;

use anyhow::Result;
use std::fs::File;
use std::io::prelude::*;
use std::path::PathBuf;
use std::sync::Arc;

pub fn handle_main_task(
    output_option_arc: Arc<OutputOption>,
    func_name: String,
    output: OutputCode,
    output_dir_path: PathBuf,
) -> Result<()> {
    let OutputCode { code, .. } = output;

    let file_path = output_dir_path.join(format!("{}{}", func_name, ".ts")); // srcディレクトリ内のgreeting.ts
    let mut f: File = File::create(&file_path)?;

    let allocator = oxc::allocator::Allocator::default();

    let mut code_generator = CodeGenerator::new(
        output_option_arc.clone(),
        &allocator,
        &func_name,
        "",
        &code,
        None,
    );

    code_generator.generate();

    if let Some(code) = code_generator.code {
        f.write_all(code.as_bytes())?;
    }
    Ok(())
}
