use std::io::Write;
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};

// project root path
// file path

pub fn tsserver(ts_project_root_path: &PathBuf, file_path: &Path) {
    println!("ts_project_root_path: {:?}", ts_project_root_path);
    println!("file_path: {:?}", file_path);
    // // ファイル名を指定
    // let file_name = "sample.ts";
    //
    // // current_pathとファイル名を結合して新しいパスを作成
    // let file_path = current_path.join(file_name);
    //
    // println!("file_path: {:?}", file_path.extension(););
    //
    // // 起動するtsserverのコマンドと引数を設定
    // let mut child = Command::new("npx tsserver")
    //     .stdin(Stdio::piped()) // 標準入力をパイプに接続
    //     .stdout(Stdio::piped()) // 標準出力をパイプに接続
    //     .spawn()
    //     .expect("Failed to start tsserver");
    //
    // // 標準入力に書き込むためのハンドルを取得
    // let stdin = child.stdin.as_mut().expect("Failed to open stdin");
    //
    // // 処理のためのリクエストをJSON形式で設定
    // let requests = vec![
    //     // inferred project
    //     r##"{"seq": 1, "type": "request", "command": "compilerOptionsForInferredProjects", "arguments": {"options": {"module": "ESNext", "moduleResolution": "Bundler", "target": "ES2020", "jsx": "react", "allowImportingTsExtensions": true, "strictNullChecks": true, "strictFunctionTypes": true, "sourceMap": true, "allowJs": true, "allowSyntheticDefaultImports": true, "allowNonTsExtensions": true, "resolveJsonModule": true}}}"##,
    //     format!(
    //         r##"{"seq": 2, "type": "request", "command": "updateOpen", "arguments": {"changedFiles": [], "closedFiles": [], "openFiles": [{"file": "/home/ubuntu/invest/omo/apps/example/src/invest/sendgrid/mail.ts", "projectRootPath": "/home/ubuntu/invest/omo/apps/example/", "scriptKindName": "TS"}]}}"##
    //     ),
    //     format!(
    //         r#"{{"type": "request", "seq": 12, "command": "definitionAndBoundSpan", "arguments": {{"file": "{}", "line":{}, "offset":{}}}}"#,
    //         file_path.display()
    //         "line".to_string(),
    //         "offset"
    //     ),
    // ];
    //
    // for request in requests {
    //     stdin
    //         .write_all(request.as_bytes())
    //         .expect("Failed to send request");
    //     stdin.write_all(b"\n").unwrap(); // リクエストごとに改行を追加
    // }
    //
    // // 標準出力からレスポンスを読み取る
    // if let Some(stdout) = child.stdout.take() {
    //     // Use stdout here
    //     // For example, you can read from it
    //     use std::io::{self, Read};
    //     let mut buffer = String::new();
    //     let mut reader = io::BufReader::new(stdout);
    //     reader
    //         .read_to_string(&mut buffer)
    //         .expect("Failed to read stdout");
    //     println!("Output: {}", buffer);
    // } else {
    //     eprintln!("Child process did not have a stdout");
    // }
    //
    // // tsserverのプロセスを終了
    // let _ = child.wait().expect("Failed to wait on tsserver");
}
