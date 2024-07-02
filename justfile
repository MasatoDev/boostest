set windows-shell := ["powershell"]
set shell := ["bash", "-cu"]

_default:
    just --list -u

setup:
  pnpm install
  echo "✅ Setup complete!"

debug_build:
  pnpm --filter boostest build:debug

debug:
  just debug_build
  pnpm --filter example start:boostest

test_debug:
  just debug_build
  pnpm --filter test boostest

update_snapshot:
  just debug_build
  pnpm --filter test snapshot  

test:
  just debug_build
  pnpm --filter test test:out
  
example_demo:
  pnpm --filter boostest build:debug
  pnpm --filter example start:boostest
  pnpm --filter example demo

exampole_update_and_try:
  pnpm --filter example update boostest
  pnpm --filter example start:boostest

build:
  pnpm --filter boostest build
  pnpm --filter boostest bin:build

pre_release_boostest:
  # cd packages/boostest
  npm version patch
  pnpm prepublishOnly
  # npm version minor
  # npm version preminor
  # npm version prerelease

build_release:
  pnpm --filter boostest build --target x86_64-apple-darwin
  pnpm --filter boostest build --target aarch64-apple-darwin
  pnpm --filter boostest build --target x86_64-pc-windows-msvc
  pnpm --filter boostest build --target x86_64-unknown-linux-gnu
  pnpm --filter boostest build --target riscv64gc-unknown-linux-gnu
  pnpm --filter boostest bin:build
  

  # failed now
  # pnpm --filter boostest build --target s390x-unknown-linux-gnu


  # # win
  # cargo install cargo-xwin

  # # mac
  # sudo apt update
  # sudo apt install snapd
  # sudo snap install zig --beta --classic