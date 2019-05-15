var echarts_example = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'echarts_example',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'echarts_example',
          version: echarts_example.version,
          exports: echarts_example
      });
  },
  autoStart: true
};

