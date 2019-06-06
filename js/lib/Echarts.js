const widgets = require('@jupyter-widgets/base');
const _ = require('lodash');
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

const EchartsModel = widgets.DOMWidgetModel.extend({
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

const EchartsView = widgets.DOMWidgetView.extend({
    subscriptions: {
        changeOptions: 'onChangeOptions'
    },
    onChangeOptions: function(event) {
        console.log(event);
    },
    render: function () {
        const seriesData = this.model.get('series_data');
        this.el.style.height = "800px";
        this.el.style.width = "900px";
        ReactDOM.render(<App echartModel={seriesData} serverApi={{}} />, this.el);
    }
});

export {
    EchartsModel,
    EchartsView
};
