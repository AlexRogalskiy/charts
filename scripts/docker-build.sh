#!/bin/sh

set -e

cd ..

# Build docker images
GIT_SHA=$(git rev-parse HEAD)
docker build -f Dockerfile --build-arg TOKEN=$1 -t styled-charts -t styled-charts:$GIT_SHA .
