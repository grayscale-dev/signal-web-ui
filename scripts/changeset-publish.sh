#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${NPM_TOKEN:-}" ]]; then
  echo "NPM_TOKEN not set. Skipping publish."
  exit 0
fi

pnpm release
