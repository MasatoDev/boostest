use anyhow::{anyhow, Result};
use oxc_resolver::{Resolution, ResolveOptions, Resolver, TsconfigOptions, TsconfigReferences};
use std::path::{Path, PathBuf};

pub fn resolve_specifier(
    path: &Option<PathBuf>,
    specifier: &str,
    ts_config_path: &Option<PathBuf>,
) -> Result<Resolution> {
    if let Some(path) = path {
        let tsconfig = ts_config_path
            .as_ref()
            .map(|ts_config_path| TsconfigOptions {
                config_file: PathBuf::from(ts_config_path),
                references: TsconfigReferences::Auto,
            });

        let next_file_stem = path.file_stem().ok_or(anyhow!("next file is not found"))?;
        let next_file_name = next_file_stem.to_string_lossy();
        let fallback_file_name = match next_file_name.ends_with(".d") {
            true => format!("{}{}", next_file_name, ".ts"),
            false => format!("{}{}", next_file_name, ".d.ts"),
        };

        let options = ResolveOptions {
            extensions: vec![
                ".d.ts".into(),
                ".ts".into(),
                ".tsx".into(),
                ".js".into(),
                ".jsx".into(),
            ],
            main_fields: vec!["types".into()],
            main_files: vec!["index".into(), fallback_file_name],
            condition_names: vec!["types".into()],
            builtin_modules: true,

            tsconfig,
            ..ResolveOptions::default()
        };

        match Resolver::new(options).resolve(path, specifier) {
            Err(error) => Err(anyhow!("module resolution error: {:?}", error)),
            Ok(resolution) => Ok(resolution),
        }
    } else {
        Err(anyhow!("module resolution error"))
    }
}
