const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const ClearWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig,{
    mode: 'production',
    performance: {
        hints:false
        // hints:"error"
    },
    // target: 'node',
    // node: {
    //     __filename: true,
    //     __dirname: true
    // },
    optimization: {
        minimizer: [
            new UglifyJSPlugin()
        ],
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'../view/index.html'),
            // template: path.join(__dirname,'../client/index.hbs'),
            filename: 'index.ejs',
            title: 'shopshop',
            inject: 'body',
            htmlDom: '<%- root %>',
            reduxState: '<%- reduxState %>'
        }),
        new ClearWebpackPlugin(['../dist']),
    ]
})