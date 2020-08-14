#!/bin/bash

# ==============================================================================
# Check directories and config
# ==============================================================================

cd client || exit

if [ ! -d "node_modules" ]; then
  echo "node_modules doesn't exist, installing using yarn"
  yarn
fi

# ==============================================================================
# Standard bash script argparse
# ==============================================================================

CLEAR='\033[0m'
RED='\033[0;31m'

# define a function to print usage to user
function usage() {
  if [ -n "$1" ]; then
    echo -e "${RED}👉 $1${CLEAR}\n";
  fi
  echo "Usage: $0 [-a action]"
  echo "  -a, --action   One of [build, deploy, format, lint, lint:fix, start]"
  echo ""
  echo "Example: $0 --action lint"
  exit 1
}

# parse params
while [[ "$#" -gt 0 ]]; do case $1 in
  -a|--action) ACTION="$2"; shift;shift;;
  -v|--verbose) VERBOSE=1;shift;;
  *) usage "Unknown parameter passed: $1"; shift; shift;;
esac; done

# verify params
if [ -z "$ACTION" ]; then usage "You must define an action"; fi;

# parse actions
case "$ACTION" in

  "deploy") git add . && git commit -am "Deploying react" && git push;;

  "build")    yarn build;;

  "format")   yarn format;;

  "lint")     yarn lint;;

  "lint:fix") yarn lint:fix;;

  "dev")    yarn dev;;

  *)        usage "Wrong value for parameter --action";;
esac
