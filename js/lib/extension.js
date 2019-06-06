if (window.require) {
    window.require.config({
        map: {
            "*" : {
                "echarts_example": "nbextensions/echarts_example/index",
            }
        }
    });
}

module.exports = {
    load_ipython_extension: function() {}
};
