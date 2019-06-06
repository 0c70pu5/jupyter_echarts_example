const path = require('path');
const version = require('./package.json').version;

const rules = [
    {
        test: /\.js$/,
        use: [
            'babel-loader'
        ],
        exclude: /node_modules/
    },
    {
        test: /\.scss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    sourceMap: true,
                    localIdentName: '[local]--[hash:base64:10]'
                }
            },
            'sass-loader'
        ]
    }
];

module.exports = [{
    entry: './lib/extension.js',
    output: {
        filename: 'extension.js',
        path: path.resolve(__dirname, '..', 'echarts_example', 'static'),
        libraryTarget: 'amd'
    }
}, {
    entry: './lib/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '..', 'echarts_example', 'static'),
        libraryTarget: 'amd'
    },
    devtool: 'source-map',
    module: {
        rules: rules
    },
    externals: ['@jupyter-widgets/base']
}, {
    entry: './lib/embed.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'amd',
        publicPath: 'https://unpkg.com/echarts_example@' + version + '/dist/'
    },
    devtool: 'source-map',
    module: {
        rules: rules
    },
    externals: ['@jupyter-widgets/base']
}];
