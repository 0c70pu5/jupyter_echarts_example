FROM jupyter/scipy-notebook
ADD . /usr/src/app
WORKDIR /usr/src/app
USER root
RUN python3 setup.py develop
RUN jupyter nbextension install --py --symlink --sys-prefix echarts_example
RUN jupyter nbextension enable echarts_example --py --sys-prefix
EXPOSE 8888
CMD ["jupyter-notebook", "--allow-root"]
