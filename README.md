echarts_example
=====

Tested with Miniconda3:
====

```
conda install -c conda-forge ipywidgets
```

(from js dir) 
```
npm i
```

(from js dir) 
```
node_modules/.bin/webpack
```
or 
```
node_modules/.bin/webpack --watch
```

```
python3 setup.py install
```

copy all from <project>/build/lib/echarts_example to .local/share/jupyter/nbextensions/echarts_example

copy all from <project>/build/lib/echarts_example/static to .local/share/jupyter/nbextensions/echarts_example

```
jupyter-notebook
```

open echarts_notebook.ipynb
