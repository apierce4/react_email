var path = require('path');

var webpack = require('webpack');

module.exports = {
    entry: path.resolve('./src/index.jsx'),
    output: {
        publicPath: "./build",
        path: path.resolve('./build'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
};