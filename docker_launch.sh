#!/bin/sh

DOCKER_SUBNET="10.0.${SUBNET}.0/24"

if [ -z "$SUBNET" ]; then
  docker-compose -f docker-compose.yml -f docker-compose-net-auto.yml up
else
  docker-compose -f docker-compose.yml -f docker-compose-net-subnet.yml up
fi
