#!/usr/bin/env bash
set -e

CURR_SCRIPT=$(readlink -f "$0")
SCRIPTS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
PROJECT_DIR="$( cd ${SCRIPTS_DIR} && cd .. && pwd )"
TIMESTAMP=`date +%Y%m%d-%H:%M:%S`
DATE=`date +%Y%m%d`

cd "${PROJECT_DIR}"
git fetch

LOCAL_CURRENT=$(git rev-parse HEAD | cut -c1-10)
REMOTE_CURRENT=$(git rev-parse origin/master | cut -c1-10)

if [ "$LOCAL_CURRENT" != "$REMOTE_CURRENT" ]
then
  echo "${TIMESTAMP} Remote updates detected, initializing upgrade from ${LOCAL_CURRENT} to ${REMOTE_CURRENT}" >> "${PROJECT_DIR}/${DATE}.log"
  git reset --hard ${REMOTE_CURRENT}
  exec "${CURR_SCRIPT}"
  echo "${TIMESTAMP} script didn't relaunch as expected :(" >> "${PROJECT_DIR}/${DATE}.log"
fi

/usr/local/bin/docker-compose pull
/usr/local/bin/docker-compose up -d --remove-orphans
