set windows-shell := ["powershell"]
set shell := ["bash", "-cu"]

_default:
    just --list -u

setup:
  pnpm install
  pnpm --filter test install
  pnpm --filter example install
  echo "✅ Setup complete!"

debug_build:
  pnpm --filter boostest build:debug
  pnpm --filter boostest bin:build

debug:
  just debug_build
  pnpm --filter test boostest

snapshot:
  just debug_build
  pnpm --filter test boostest:direct
  pnpm --filter test boostest
  pnpm --filter test snapshot  

test:
  just debug_build
  pnpm --filter test boostest:direct
  pnpm --filter test boostest
  pnpm --filter test test

test_cli:
  just debug_build
  pnpm --filter test boostest:version
  pnpm --filter test boostest:help
  pnpm --filter test boostest:cli:nofile
  pnpm --filter test boostest:cli:failed
  pnpm --filter test boostest:cli:tsconfig
  pnpm --filter test boostest:cli





# FOR PRODUCTION
build:
  pnpm --filter boostest build
  pnpm --filter boostest bin:build
build_release:
  pnpm --filter boostest build --target x86_64-apple-darwin
  pnpm --filter boostest build --target aarch64-apple-darwin
  pnpm --filter boostest build --target x86_64-pc-windows-msvc
  pnpm --filter boostest build --target x86_64-unknown-linux-gnu
  pnpm --filter boostest build --target riscv64gc-unknown-linux-gnu
  pnpm --filter boostest bin:build
pre_release_boostest:
  # cd packages/boostest
  npm version patch
  pnpm prepublishOnly
  # npm version minor
  # npm version preminor
  # npm version prerelease
cl:
  pnpm --filter boostest bin:build
  pnpm --filter example start:boostest

  # failed now
  # pnpm --filter boostest build --target s390x-unknown-linux-gnu


  # # win
  # cargo install cargo-xwin

  # # mac
  # sudo apt update
  # sudo apt install snapd
  # sudo snap install zig --beta --classic
