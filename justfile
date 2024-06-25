set windows-shell := ["powershell"]
set shell := ["bash", "-cu"]

_default:
    just --list -u

setup:
  pnpm install
  echo "✅✅✅ Setup complete!"

debug:
  pnpm --filter boostest build:debug
  pnpm --filter example start:boostest

build:
  pnpm --filter boostest build
  pnpm --filter boostest bin:build

try:
  pnpm --filter example update boostest
  pnpm --filter example start:boostest


pre_release_boostest:
  npm version patch
  # npm version minor
  # npm version preminor
  # npm version prerelease


build_release:
  pnpm --filter boostest build --target x86_64-apple-darwin
  pnpm --filter boostest build --target x86_64-pc-windows-msvc
  pnpm --filter boostest build --target x86_64-unknown-linux-gnu

  # # win
  # cargo install cargo-xwin

  # # mac
  # sudo apt update
  # sudo apt install snapd
  # sudo snap install zig --beta --classic