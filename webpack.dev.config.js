const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        port: 9000
    }
}