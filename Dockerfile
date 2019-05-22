FROM jupyter/scipy-notebook
ADD . /usr/src/app
WORKDIR /usr/src/app
USER root
RUN npm config set prefix '~/.npm-global'
RUN export PATH=~/.npm-global/bin:$PATH
RUN python3 setup.py install
RUN jupyter nbextension install --py --symlink --sys-prefix echarts_example
RUN jupyter nbextension enable echarts_example --py --sys-prefix
EXPOSE 8888
CMD ["jupyter-notebook", "--allow-root"]