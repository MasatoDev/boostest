use regex::Regex;
use serde::Deserialize;
use serde_json::{json, Value};
use std::ffi::OsStr;
use std::fs::File;
use std::io::{Read, Write};
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};

#[derive(Deserialize, Debug)]
struct Position {
    line: u32,
    offset: u32,
}

#[derive(Deserialize, Debug)]
struct Definition {
    file: String,
    start: Position,
    end: Position,
}

#[derive(Deserialize, Debug)]
struct Body {
    definitions: Vec<Definition>,
}

#[derive(Deserialize, Debug)]
struct Response {
    command: String,
    body: Option<Body>,
}

pub fn tsserver(ts_project_root_path: &PathBuf, file_path: &PathBuf) {
    println!("ts_project_root_path: {:?}", ts_project_root_path);
    let file_extension = match file_path.extension().and_then(OsStr::to_str) {
        Some("ts") => "TS",
        Some("tsx") => "TSX",
        _ => "TS",
    };

    let json1 = format!(
        r##"{{"seq": 1, "type": "request", "command": "compilerOptionsForInferredProjects", "arguments": {{"options": {{"module": "ESNext", "moduleResolution": "Bundler", "target": "ES2020", "jsx": "react", "allowImportingTsExtensions": true, "strictNullChecks": true, "strictFunctionTypes": true, "sourceMap": true, "allowJs": true, "allowSyntheticDefaultImports": true, "allowNonTsExtensions": true, "resolveJsonModule": true}}}}}}"##
    );
    let json2 = format!(
        r##"{{"seq": 2, "type": "request", "command": "updateOpen", "arguments": {{"changedFiles": [], "closedFiles": [], "openFiles": [{{"file": "{}", "projectRootPath": "{}", "scriptKindName": "{}"}}]}}}}"##,
        file_path.display(),
        ts_project_root_path.display(),
        file_extension
    );
    let json3 = format!(
        r#"{{"type": "request", "seq": 12, "command": "definitionAndBoundSpan", "arguments": {{"file": "{}", "line": {}, "offset": {}}}}}"#,
        file_path.display(),
        7,
        36
    );

    let value1: Value = serde_json::from_str(&json1).unwrap();
    let value2: Value = serde_json::from_str(&json2).unwrap();
    let value3: Value = serde_json::from_str(&json3).unwrap();

    let mut file = File::create("temp.json").unwrap();
    writeln!(file, "{}", value1).unwrap();
    writeln!(file, "{}", value2).unwrap();
    writeln!(file, "{}", value3).unwrap();

    let mut file = File::open("temp.json").unwrap();
    let mut contents = String::new();

    file.read_to_string(&mut contents).unwrap();
    println!("{}", contents);

    let mut child = Command::new("npx")
        .arg("tsserver")
        .stdin(Stdio::piped()) // 標準入力をパイプに接続
        .stdout(Stdio::piped()) // 標準出力をパイプに接続
        .spawn()
        .expect("Failed to start tsserver");

    // 標準入力に書き込むためのハンドルを取得
    let stdin = child.stdin.as_mut().expect("Failed to open stdin");

    stdin
        .write_all(contents.as_bytes())
        .expect("Failed to send request");

    // `npx tsserver`の出力を読み取る
    let output = child.wait_with_output().expect("failed to wait on child");
    let output_str = String::from_utf8_lossy(&output.stdout).to_string();

    // 標準出力と標準エラーの出力を表示
    println!("stdout: {}", String::from_utf8_lossy(&output.stdout));

    // Split the output by Content-Length
    let re = Regex::new(r"Content-Length: \d+\r?\n\r?\n").unwrap();
    let responses: Vec<&str> = re.split(&output_str).collect();

    // Iterate through each response and parse JSON
    for response in responses {
        println!("Response splited: {}", response);

        match serde_json::from_str::<Value>(response) {
            Ok(data) => {
                if let Some(command) = data.get("command").and_then(|c| c.as_str()) {
                    if command == "definitionAndBoundSpan" {
                        match serde_json::from_value::<Response>(data) {
                            Ok(response) => {
                                if let Some(body) = response.body {
                                    for definition in body.definitions {
                                        println!("File: {}", definition.file);
                                        println!(
                                            "Start: Line {}, Offset {}",
                                            definition.start.line, definition.start.offset
                                        );
                                        println!(
                                            "End: Line {}, Offset {}",
                                            definition.end.line, definition.end.offset
                                        );
                                    }
                                }
                            }
                            Err(e) => eprintln!("Error parsing response: {}", e),
                        }
                    }
                }
            }
            Err(e) => eprintln!("Error parsing JSON: {}", e),
        }
    }

    // let _ = child.wait().expect("Failed to wait on tsserver");
}
