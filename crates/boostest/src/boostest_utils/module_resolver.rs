use anyhow::{anyhow, Result};
use oxc_resolver::{Resolution, ResolveOptions, Resolver, TsconfigOptions, TsconfigReferences};
use std::path::{Path, PathBuf};

pub fn resolve_specifier(
    path: &Path,
    specifier: &str,
    ts_config_path: &Option<PathBuf>,
) -> Result<Resolution> {
    let tsconfig = match ts_config_path {
        Some(ts_config_path) => Some(TsconfigOptions {
            config_file: PathBuf::from(ts_config_path),
            references: TsconfigReferences::Auto,
        }),

        None => None,
    };

    let options = ResolveOptions {
        extensions: vec![".d.ts".into(), ".ts".into(), ".tsx".into()],
        main_files: vec!["index.d".into()],
        tsconfig: tsconfig,
        ..ResolveOptions::default()
    };

    match Resolver::new(options).resolve(path, &specifier) {
        Err(error) => {
            return Err(anyhow!("ファイル読み込みでエラー: {:?}", error));
        }
        Ok(resolution) => {
            return Ok(resolution);
        }
    }
}
