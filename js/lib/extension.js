// Configure requirejs
if (window.require) {
    window.require.config({
        map: {
            "*" : {
                "echarts_example": "nbextensions/echarts_example/index",
            }
        }
    });
}

// Export the required load_ipython_extension
module.exports = {
    load_ipython_extension: function() {}
};
