#!/bin/bash

set -e

cd "$(dirname "$0")" || exit 1

# build images & push to hub
TAG=$(node -p "require('./package.json').version")
IMAGE="io.sensiblemetrics/styled-charts"

echo "Building $IMAGE:$TAG"

docker build -t $IMAGE:$TAG . &&
  docker tag $IMAGE:$TAG $IMAGE:latest &&
  docker push $IMAGE:$TAG &&
  docker push $IMAGE:latest
