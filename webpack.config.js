var HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');

var BUNDLE = JSON.parse(process.env.BUNDLE || '0');

var plugins = [new HtmlWebpackPlugin({
    title: 'An example chat implementation with ES6',
    filename: 'index.html',
    template: 'src/index.html',
    hash: true
})];

if (BUNDLE) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}))
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: 'dist',
        filename: BUNDLE ? 'bundle.min.js' : 'bundle.js',
        sourceMapFilename: BUNDLE ? 'bundle.min.js.map' : 'bundle.js.map'
    },
    plugins: plugins,
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /.js$/, loader: 'babel-loader'}
        ]
    }
};
