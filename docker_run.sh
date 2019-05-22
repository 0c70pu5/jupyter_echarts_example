#!/usr/bin/env bash
docker rm jupyter_custom_widget
docker run \
    -p 8888:8888 \
    --name jupyter_custom_widget jupyter_custom_widget:latest