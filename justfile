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
  pnpm --filter @boostest/cli build:debug
  pnpm --filter @boostest/cli bin:build

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

init:
  just debug_build
  pnpm --filter test boostest:init

cli:
  just debug_build
  pnpm --filter test boostest:version
  pnpm --filter test boostest:help
  pnpm --filter test boostest:cli:nofile
  pnpm --filter test boostest:cli:failed
  pnpm --filter test boostest:cli:tsconfig
  pnpm --filter test boostest:cli





# FOR PRODUCTION
build:
  pnpm --filter @boostest/cli build
  pnpm --filter @boostest/cli bin:build
build_release:
  pnpm --filter @boostest/cli build --target x86_64-apple-darwin
  pnpm --filter @boostest/cli build --target aarch64-apple-darwin
  pnpm --filter @boostest/cli build --target x86_64-pc-windows-msvc
  pnpm --filter @boostest/cli build --target x86_64-unknown-linux-gnu

  pnpm --filter @boostest/cli build --target aarch64-unknown-linux-gnu
  pnpm --filter @boostest/cli build --target riscv64gc-unknown-linux-gnu
  pnpm --filter @boostest/cli bin:build

pre_release_boostest:
  # cd packages/boostest
  npm version patch
  pnpm prepublishOnly
  # npm version minor
  # npm version preminor
  # npm version prerelease
cl:
  pnpm --filter @boostest/cli bin:build
  pnpm --filter example start:boostest

  # failed now
  # pnpm --filter @boostest/cli build --target s390x-unknown-linux-gnu


  # # win
  # cargo install cargo-xwin
  # rustup target add x86_64-pc-windows-msvc

  # # mac
  # sudo apt update
  # sudo apt install snapd
  # sudo snap install zig --beta --classic
  #

## on MAC [x86]
# https://github.com/messense/homebrew-macos-cross-toolchains
# brew tap messense/macos-cross-toolchains
# brew install x86_64-unknown-linux-gnu
