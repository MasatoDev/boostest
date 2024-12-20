#!/usr/bin/env bash

declare -A file_to_dir

file_to_dir["boostest.darwin-arm64.node"]="npm/darwin-arm64"
file_to_dir["boostest.darwin-x64.node"]="npm/darwin-x64"
file_to_dir["boostest.linux-x64-gnu.node"]="npm/linux-x64-gnu"
file_to_dir["boostest.win32-x64-msvc.node"]="npm/win32-x64-msvc"

for file in "${!file_to_dir[@]}"; do
  target_dir="${file_to_dir[$file]}"

  if [ -d "$target_dir" ]; then
    if [ -f "$file" ]; then
      echo "Moving $file to $target_dir"
      mv "$file" "$target_dir"
    else
      echo "File $file does not exist, skipping..."
    fi
  else
    echo "Target directory $target_dir does not exist, skipping..."
  fi
done
