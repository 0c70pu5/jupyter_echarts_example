import ipywidgets as widgets
from traitlets import Unicode
import random
import json

@widgets.register
class Echarts(widgets.DOMWidget):
    """An example widget."""
    _view_name = Unicode('EchartsView').tag(sync=True)
    _model_name = Unicode('EchartsModel').tag(sync=True)
    _view_module = Unicode('echarts_example').tag(sync=True)
    _model_module = Unicode('echarts_example').tag(sync=True)
    _view_module_version = Unicode('^0.1.1').tag(sync=True)
    _model_module_version = Unicode('^0.1.1').tag(sync=True)
    series_data = Unicode('Echarts example').tag(sync=True)

    def __init__(self):
        self.series_data = json.dumps(random.sample(range(30), 10))
        print('called')

    @classproperty
    def updateValue(self):
        self.series_data = json.dumps(random.sample(range(30), 10))
