#!/bin/bash

# ==============================================================================
# Check directories and config
# ==============================================================================

cd api || exit

if [ ! -d "venv" ]; then
  echo "venv doesn't exist, installing using virtualenv..."
  echo ""
  virtualenv venv
  echo "Installing dependencies..."
  echo ""
  venv/bin/python -m pip install --upgrade pip
  venv/bin/pip install -r ./scripts/requirements.txt
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
  echo "  -a, --action   One of [deploy, start]"
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

  "deploy")
    HEROKU_APP_NAME="fastapi-ml"
    venv/bin/pip freeze > ./scripts/requirements.txt
    docker build -t "registry.heroku.com/$HEROKU_APP_NAME/web" .
    docker push "registry.heroku.com/$HEROKU_APP_NAME/web"
    heroku container:release --app "$HEROKU_APP_NAME" web
    ;;

  "start")
    venv/bin/uvicorn main:app --host=0.0.0.0 --port="${PORT:-5050}"
    ;;

  *)
    usage "Wrong value for parameter --action"
    ;;
esac
