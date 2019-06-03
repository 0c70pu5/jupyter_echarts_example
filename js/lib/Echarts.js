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
        series_data: []
    })
});


// Custom View. Renders the widget model.
var EchartsView = widgets.DOMWidgetView.extend({
    render: function () {
        var seriesData = this.model.get('series_data');
        console.log(seriesData);
        var options = {
            legend: {
                left: 'center',
                top: 'middle'
            },
            title: {
                text: 'ECharts'
            },
            tooltip: {
                trigger: 'axis',
                textStyle: {
                    color: '#ffffff',
                },
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
                name: 'chart',
                type: 'line',
                color: ['#F5847F'],
                data: seriesData, //[5, 10, 16, 17, 10, 7, 11],
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
                        name: 'data 1',
                        yAxis: 8
                    }]
                }
            }]
        };
        this.el.style.height = "800px";
        this.el.style.width = "900px";

        var myChart = echarts.init(this.el);
        myChart.setOption(options);
    }
});


module.exports = {
    EchartsModel: EchartsModel,
    EchartsView: EchartsView
};
