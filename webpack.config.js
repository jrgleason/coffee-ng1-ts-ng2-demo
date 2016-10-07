var webpack = require("webpack");
var path = require("path");
var glob = require('glob-all');
var _root = path.resolve(__dirname, '..');
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}
var old = glob.sync([
  './dependencies/ng1.js',
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
        ng1: old,
        ng2: update
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
            { test: /\.coffee$/, loaders: ["coffee-loader"]},
            { test: /\.html$/, loader: "html" }
        ]
    },
    devtool: '#inline-source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['ng1', 'ng2', 'polyfills'],
            minChunks: Infinity
        })
    ]
};