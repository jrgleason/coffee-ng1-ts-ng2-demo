var webpack = require("webpack");
var path = require("path");
var glob = require('glob-all');
var old = glob.sync([
  './dependencies/ng1.coffee',
  './src/main/ng1/**/*.coffee',
]);
var update = glob.sync([
  './dependencies/ng2.ts',
  './src/main/ng2/**/*.ts',
  './src/main/ng2/**/*.html',
]);
module.exports = {
    context: __dirname,
    entry: {
        polyfills: './dependencies/polyfills.ts',
        ngnew: update,
        ngold: old
    },
    resolve: {
        extensions: ['', '.ts', '.coffee', '.html', '.js']
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "public/javascripts")
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.coffee$/, loaders: ["coffee-loader", "coffee-import"]},
            { test: /\.html$/, loader: "html" }
        ]
    },
    devtool: '#inline-source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['ngold', 'ngnew', 'polyfills'],
            minChunks: Infinity
        })
    ]
};