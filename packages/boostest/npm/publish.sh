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
