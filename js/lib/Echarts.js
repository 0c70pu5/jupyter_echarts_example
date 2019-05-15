var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
var echarts = require('echarts');

// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var EchartsModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name: 'EchartsModel',
        _view_name: 'EchartsView',
        _model_module: 'echarts_example',
        _view_module: 'echarts_example',
        _model_module_version: '0.1.1',
        _view_module_version: '0.1.1',
        value: 'Hello World'
    })
});


// Custom View. Renders the widget model.
var EchartsView = widgets.DOMWidgetView.extend({
    render: function () {
        this.value_changed();

        this.model.on('change:value', this.value_changed, this);

        // var options = this.model.get('value');

        var options = {
            legend: {
                left: 'center',
                top: 'middle'
            },
            title: {
                text: 'ECharts 移动端图表'
            },
            tooltip: {
                trigger: 'axis',
                textStyle: {
                    color: '#ffffff',
                },
                //坐标轴指示器
                axisPointer: {
                    type: 'line'
                },
                borderColor: '#F5847F ',
                borderWidth: '2',
                backgroundColor: '#F5847F',
                padding: 3,
            },
            xAxis: {
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            yAxis: {},
            series: [{
                name: '参观量',
                type: 'line',
                color: ['#F5847F'],
                data: [5, 10, 16, 17, 10, 7, 11],
                //特殊标注线
                markLine: {
                    symbol: ['', ''],
                    silent: true,
                    label: {
                        normal: {
                            position: 'end',
                        },
                    },
                    lineStyle: {
                        normal: {
                            color: '#572A61',
                            type: 'solid',
                        },
                    },
                    data: [{
                        name: '每天至少',
                        yAxis: 8
                    }]
                }
            }]
        };
        this.el.style.height = "800px";
        this.el.style.width = "500px";

        var myChart = echarts.init(this.el);
        myChart.setOption(options);
    },

    value_changed: function () {

    }
});


module.exports = {
    EchartsModel: EchartsModel,
    EchartsView: EchartsView
};
