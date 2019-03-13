#!/usr/bin/env bash
set -e

SCRIPTS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
PROJECT_DIR="$( cd SCRIPTS_DIR && cd .. && pwd )"

cd "${PROJECT_DIR}"
yarn pm2 deploy production setup
