set windows-shell := ["powershell"]
set shell := ["bash", "-cu"]

_default:
    just --list -u

setup:
  pnpm install
  echo "✅✅✅ Setup complete!"

debug:
  pnpm --filter boostest build:debug
  pnpm 
  pnpm --filter example dev

build:
  pnpm --filter boostest build
  pnpm --filter boostest bin:build

try:
  pnpm --filter example update boostest
  pnpm --filter example start:boostest

