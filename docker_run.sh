#!/usr/bin/env bash
docker rm jupyter_custom_widget
docker run \
    -p 8888:8888 \
    -v $(pwd)/js/dist/:/usr/src/app/js/dist:rw \
    -v $(pwd)/dist:/usr/src/app/dist:rw \
    -v $(pwd)/build:/usr/src/app/build:rw \
    -v $(pwd)/echarts_example/static:/usr/src/app/echarts_example/static:rw \
    --name jupyter_custom_widget jupyter_custom_widget:latest
