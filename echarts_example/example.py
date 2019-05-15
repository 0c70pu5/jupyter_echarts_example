import ipywidgets as widgets
from traitlets import Unicode

@widgets.register
class Echarts(widgets.DOMWidget):
    """An example widget."""
    _view_name = Unicode('EchartsView').tag(sync=True)
    _model_name = Unicode('EchartsModel').tag(sync=True)
    _view_module = Unicode('echarts_example').tag(sync=True)
    _model_module = Unicode('echarts_example').tag(sync=True)
    _view_module_version = Unicode('^0.1.1').tag(sync=True)
    _model_module_version = Unicode('^0.1.1').tag(sync=True)
    value = Unicode('Echarts example').tag(sync=True)
