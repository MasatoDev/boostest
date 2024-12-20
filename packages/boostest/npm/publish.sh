#!/bin/bash

# ディレクトリ名をリストとして定義
directories=("darwin-arm64" "darwin-x64" "linux-x64-gnu" "win32-x64-msvc")

# 現在のディレクトリを保存
current_dir=$(pwd)

# 各ディレクトリで `npm publish` を実行
for dir in "${directories[@]}"; do
  if [ -d "$dir" ]; then
    echo "Publishing in $dir..."
    cd "$dir" || exit
    npm publish --access public
    if [ $? -ne 0 ]; then
      echo "Failed to publish in $dir"
    else
      echo "Successfully published in $dir"
    fi
    cd "$current_dir" || exit
  else
    echo "Directory $dir does not exist, skipping..."
  fi
done

./darwin-arm64:
README.md boostest.darwin-arm64.node package.json

./darwin-x64:
README.md boostest.darwin-x64.node package.json

./linux-x64-gnu:
README.md boostest.linux-x64-gnu.node package.json

./win32-x64-msvc:
README.md boostest.win32-x64-msvc.node package.json

boostest.darwin-arm64.node
boostest.darwin-x64.node
boostest.linux-x64-gnu.node
boostest.win32-x64-msvc.node
