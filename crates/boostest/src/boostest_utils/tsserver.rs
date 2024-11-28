use colored::Colorize;
use oxc::span::Span;
use regex::Regex;
use ropey::Rope;
use serde::Deserialize;
use serde_json::Value;
use std::collections::HashSet;
use std::ffi::OsStr;
use std::io::{BufRead, BufReader, Write};
use std::path::PathBuf;
use std::process::{Command, Stdio};
use std::sync::{Arc, Mutex};
use std::time::Duration;
use std::{fs, thread};

#[derive(Deserialize, Debug)]
pub struct Position {
    line: u32,
    offset: u32,
}

#[derive(Debug, Deserialize)]
struct TextSpan {
    start: u32,
    length: u32,
}

#[allow(non_snake_case)]
#[derive(Debug, Deserialize)]
struct Definition {
    fileName: String,
    // textSpan: TextSpan,
    // kind: String,
    // name: String,
    // containerName: String,
    contextSpan: TextSpan,
    // isLocal: bool,
    // isAmbient: bool,
    // unverified: bool,
}

#[allow(non_snake_case)]
#[derive(Debug, Deserialize)]
struct Body {
    definitions: Vec<Definition>,
    // textSpan: TextSpan,
}

#[derive(Debug, Deserialize)]
struct Response {
    // seq: u32,
    // r#type: String,
    // command: String,
    // request_seq: u32,
    // success: bool,
    body: Body,
}

pub fn tsserver(
    ts_project_root_path: &PathBuf,
    file_path: &PathBuf,
    span: Span,
    target_name: &str,
    ts_server_cache: Arc<Mutex<TSServerCache>>,
) -> Option<(PathBuf, Span)> {
    println!("☠️☠️☠️☠️ inner tsserver");
    let mut locked_cache = ts_server_cache.lock().unwrap();

    if let Some(definition) = locked_cache.get_definition(target_name) {
        return Some((definition.result.0.clone(), definition.result.1.clone()));
    }

    let Span {
        start: start_offset,
        ..
    } = span;

    let source_code = fs::read_to_string(file_path).expect("Unable to read file");
    let Position {
        line: start_line,
        offset: start_offset,
    } = offset_to_position(start_offset, &source_code).unwrap();

    let file_extension = match file_path.extension().and_then(OsStr::to_str) {
        Some("ts") => "TS",
        Some("tsx") => "TSX",
        _ => "TS",
    };

    let json2 = format!(
        r##"{{"seq": 2, "type": "request", "command": "updateOpen", "arguments": {{"changedFiles": [], "closedFiles": [], "openFiles": [{{"file": "{}", "projectRootPath": "{}", "scriptKindName": "{}"}}]}}}}"##,
        file_path.display(),
        ts_project_root_path.display(),
        file_extension
    );
    let json3 = format!(
        r#"{{"type": "request", "seq": 12, "command": "definitionAndBoundSpan-full", "arguments": {{"file": "{}", "line": {}, "offset": {}}}}}"#,
        file_path.display(),
        start_line,
        start_offset
    );

    let mut requests = String::new();
    requests.push('\n');
    requests.push_str(&json2);
    requests.push('\n');
    requests.push_str(&json3);
    requests.push('\n');

    let output_str = locked_cache.get_def(&requests);

    // Split the output by Content-Length
    let re = Regex::new(r"Content-Length: \d+\r?\n\r?\n").unwrap();
    let responses: Vec<&str> = re.split(&output_str).collect();

    // Iterate through each response and parse JSON
    for response in responses {
        if response.is_empty() {
            continue;
        }

        match serde_json::from_str::<Value>(response) {
            Ok(data) => {
                if let Some(command) = data.get("command").and_then(|c| c.as_str()) {
                    if command == "definitionAndBoundSpan-full" {
                        match serde_json::from_value::<Response>(data) {
                            Ok(response) => {
                                // 1つ目のdefinitionから必要な情報を取得
                                if let Some(definition) = response.body.definitions.get(0) {
                                    let result: (PathBuf, Span) = (
                                        definition.fileName.clone().into(),
                                        Span::new(
                                            definition.contextSpan.start,
                                            definition.contextSpan.start
                                                + definition.contextSpan.length,
                                        ),
                                    );

                                    locked_cache.set_definition(target_name, result.clone());

                                    return Some(result);
                                } else {
                                    println!("No definitions found.");
                                }
                            }
                            Err(e) => eprintln!("Error parsing response: {} \n {}", e, response),
                        }
                    }
                }
            }
            Err(e) => eprintln!("Error parsing JSON: {} \n {}", e, response),
        }
    }

    None
    // let _ = child.wait().expect("Failed to wait on tsserver");
}

fn offset_to_position(offset: u32, source_text: &str) -> Option<Position> {
    let offset = offset as usize;
    let rope = Rope::from_str(source_text);

    // Get line number and byte offset of start of line
    let line_index = rope.byte_to_line(offset);
    let line_offset = rope.line_to_byte(line_index);
    // Get column number
    let column_index = source_text[line_offset..offset].encode_utf16().count();
    // line and column are zero-indexed, but we want 1-indexed

    Some(Position {
        line: line_index as u32 + 1,
        offset: column_index as u32 + 1,
    })
}

pub struct DefinitionCache {
    pub name: String,
    pub result: (PathBuf, Span),
}

pub struct TSServerCache {
    pub this_type: Option<DefinitionCache>,
    pub partial_type: Option<DefinitionCache>,
    pub required_type: Option<DefinitionCache>,
    pub readonly_type: Option<DefinitionCache>,
    pub pick_type: Option<DefinitionCache>,
    pub omit_type: Option<DefinitionCache>,
    pub record_type: Option<DefinitionCache>,
    pub exclude_type: Option<DefinitionCache>,
    pub extract_type: Option<DefinitionCache>,
    pub nonnullable_type: Option<DefinitionCache>,
    pub parameters_type: Option<DefinitionCache>,
    pub returntype_type: Option<DefinitionCache>,
    pub constructor_type: Option<DefinitionCache>,
    pub instance_type: Option<DefinitionCache>,
    pub promise_type: Option<DefinitionCache>,
}

impl TSServerCache {
    pub fn new() -> Self {
        Self {
            this_type: None,
            partial_type: None,
            required_type: None,
            readonly_type: None,
            pick_type: None,
            omit_type: None,
            record_type: None,
            exclude_type: None,
            extract_type: None,
            nonnullable_type: None,
            parameters_type: None,
            returntype_type: None,
            constructor_type: None,
            instance_type: None,
            promise_type: None,
        }
    }

    pub fn get_def(&mut self, requests: &str) -> String {
        let mut command = Command::new("npx")
            .arg("tsserver")
            .stdin(Stdio::piped()) // 標準入力をパイプに接続
            .stdout(Stdio::piped()) // 標準出力をパイプに接続
            .spawn()
            .expect("Failed to start tsserver");

        let json1 = format!(
            r##"{{"seq": 1, "type": "request", "command": "compilerOptionsForInferredProjects", "arguments": {{"options": {{"module": "ESNext", "moduleResolution": "Bundler", "target": "ES2020", "jsx": "react", "allowImportingTsExtensions": true, "strictNullChecks": true, "strictFunctionTypes": true, "sourceMap": true, "allowJs": true, "allowSyntheticDefaultImports": true, "allowNonTsExtensions": true, "resolveJsonModule": true}}}}}}"##
        );

        let stdin = command.stdin.as_mut().expect("Failed to open stdin");
        stdin.write_all(json1.as_bytes());

        let stdin = command.stdin.as_mut().expect("Failed to open stdin");
        let stdout = command.stdout.take().expect("Failed to open stdout");

        stdin
            .write_all(requests.as_bytes())
            .expect("Failed to write to stdin");

        let handle = thread::spawn(move || {
            let reader = BufReader::new(stdout);
            let mut output = String::new();

            for line in reader.lines() {
                let line = line.expect("Failed to read line");
                output.push_str(&line);
                output.push('\n');

                if line.contains("definitionAndBoundSpan-full") {
                    break;
                }
            }

            output
        });

        handle.join().expect("Thread panicked")
    }

    pub fn set_definition(&mut self, name: &str, result: (PathBuf, Span)) {
        let definition = DefinitionCache {
            name: name.to_string(),
            result,
        };

        match name {
            "ThisType" => self.this_type = Some(definition),
            "Partial" => self.partial_type = Some(definition),
            "Required" => self.required_type = Some(definition),
            "Readonly" => self.readonly_type = Some(definition),
            "Pick" => self.pick_type = Some(definition),
            "Omit" => self.omit_type = Some(definition),
            "Record" => self.record_type = Some(definition),
            "Exclude" => self.exclude_type = Some(definition),
            "Extract" => self.extract_type = Some(definition),
            "NonNullable" => self.nonnullable_type = Some(definition),
            "Parameters" => self.parameters_type = Some(definition),
            "ReturnType" => self.returntype_type = Some(definition),
            "ConstructorParameters" => self.constructor_type = Some(definition),
            "InstanceType" => self.instance_type = Some(definition),
            "Promise" => self.promise_type = Some(definition),
            _ => (),
        }
    }

    fn get_definition(&self, name: &str) -> Option<&DefinitionCache> {
        match name {
            "ThisType" => self.this_type.as_ref(),
            "Partial" => self.partial_type.as_ref(),
            "Required" => self.required_type.as_ref(),
            "Readonly" => self.readonly_type.as_ref(),
            "Pick" => self.pick_type.as_ref(),
            "Omit" => self.omit_type.as_ref(),
            "Record" => self.record_type.as_ref(),
            "Exclude" => self.exclude_type.as_ref(),
            "Extract" => self.extract_type.as_ref(),
            "NonNullable" => self.nonnullable_type.as_ref(),
            "Parameters" => self.parameters_type.as_ref(),
            "ReturnType" => self.returntype_type.as_ref(),
            "ConstructorParameters" => self.constructor_type.as_ref(),
            "InstanceType" => self.instance_type.as_ref(),
            "Promise" => self.promise_type.as_ref(),
            _ => None,
        }
    }
}
