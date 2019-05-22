#!/usr/bin/env bash

docker build ./ \
    -f ./Dockerfile \
    -t jupyter_custom_widget \
    --no-cache