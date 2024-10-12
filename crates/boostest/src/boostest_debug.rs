use oxc::span::Span;
use regex::Regex;
use ropey::Rope;
use serde::Deserialize;
use serde_json::{json, Value};
use std::ffi::OsStr;
use std::fs::{self, File};
use std::io::{Read, Write};
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};

#[derive(Deserialize, Debug)]
pub struct Position {
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

pub fn tsserver(
    ts_project_root_path: &PathBuf,
    file_path: &PathBuf,
    start_offset: u32,
    end_offset: u32,
) -> Option<(PathBuf, Span)> {
    let source_code = fs::read_to_string(file_path).expect("Unable to read file");
    let Position {
        line: start_line,
        offset: start_offset,
    } = offset_to_position(start_offset, &source_code).unwrap();
    // let Position {
    //     line: end_line,
    //     offset: end_end,
    // } = offset_to_position(end_offset, &source_code).unwrap();

    println!("Start: Line {}, Offset {}", start_line, start_offset);
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
        start_line,
        start_offset
    );

    let mut requests = String::new();
    requests.push_str(&json1);
    requests.push('\n');
    requests.push_str(&json2);
    requests.push('\n');
    requests.push_str(&json3);

    let mut child = Command::new("npx")
        .arg("tsserver")
        .stdin(Stdio::piped()) // 標準入力をパイプに接続
        .stdout(Stdio::piped()) // 標準出力をパイプに接続
        .spawn()
        .expect("Failed to start tsserver");

    // 標準入力に書き込むためのハンドルを取得
    let stdin = child.stdin.as_mut().expect("Failed to open stdin");

    stdin
        .write_all(requests.as_bytes())
        .expect("Failed to send request");

    // `npx tsserver`の出力を読み取る
    let output = child.wait_with_output().expect("failed to wait on child");
    let output_str = String::from_utf8_lossy(&output.stdout).to_string();

    // 標準出力と標準エラーの出力を表示
    // println!("stdout: {}", String::from_utf8_lossy(&output.stdout));

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
                    if command == "definitionAndBoundSpan" {
                        match serde_json::from_value::<Response>(data) {
                            Ok(response) => {
                                if let Some(body) = response.body {
                                    let definition = &body.definitions[0];

                                    let path = PathBuf::from(&definition.file);

                                    let source_code_result = fs::read_to_string(&definition.file)
                                        .expect("Unable to read file");

                                    let start_byte_offset = position_to_offset(
                                        Position {
                                            line: definition.start.line,
                                            offset: definition.start.offset,
                                        },
                                        &source_code_result,
                                    );

                                    let end_byte_offset = position_to_offset(
                                        Position {
                                            line: definition.end.line,
                                            offset: definition.end.offset,
                                        },
                                        &source_code_result,
                                    );

                                    let span = Span::new(
                                        start_byte_offset.unwrap(),
                                        end_byte_offset.unwrap(),
                                    );

                                    return Some((path, span));
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

    None
    // let _ = child.wait().expect("Failed to wait on tsserver");
}

// TODO:
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

fn position_to_offset(position: Position, source_text: &str) -> Option<u32> {
    let rope = Rope::from_str(source_text);

    // Make sure the line number is within the bounds of the text
    let line_index = position.line.checked_sub(1)? as usize;
    if line_index >= rope.len_lines() {
        return None;
    }

    // Get the byte offset of the start of the line
    let line_offset = rope.line_to_byte(line_index);

    // Iterate through the UTF-16 code units to find the column
    let mut utf16_col_offset = 0;
    for (i, c) in source_text[line_offset..].char_indices() {
        // Calculate the length of the character in UTF-16 code units
        let utf16_len = c.encode_utf16(&mut [0; 2]).len();

        if utf16_col_offset == position.offset.checked_sub(1)? as usize {
            return Some((line_offset + i) as u32);
        }

        utf16_col_offset += utf16_len;
    }

    // If we reach here, the column was out of bounds
    None
}
// pub fn position_to_offset(position: Position, source_text: &str) -> Option<u32> {
//     let mut byte_offset = 0;
//     let mut current_line = 1;
//     let mut current_offset = 0;
//
//     let Position { line, offset } = position;
//
//     for (i, c) in source_text.char_indices() {
//         if current_line == line && current_offset == offset {
//             byte_offset = i;
//             break;
//         }
//
//         if c == '\n' {
//             current_line += 1;
//             current_offset = 0;
//         } else {
//             current_offset += 1;
//         }
//     }
//
//     Some(byte_offset as u32)
// }

// pub fn offset_to_position(offset: u32, source_text: &str) -> Option<Position> {
//     let mut current_line = 1;
//     let mut current_offset = 0;
//
//     for (i, c) in source_text.char_indices() {
//         if i as u32 == offset {
//             break;
//         }
//
//         if c == '\n' {
//             current_line += 1;
//             current_offset = 0;
//         } else {
//             current_offset += 1;
//         }
//     }
//
//     Some(Position {
//         line: current_line,
//         offset: current_offset,
//     })
// }