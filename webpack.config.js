const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
    entry: {
        app: './playground/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,

        port: 80,
    },
    plugins: [
    // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
        }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}
