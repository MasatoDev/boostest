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
