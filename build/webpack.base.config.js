const webpack = require('webpack')
const path = require('path')
const ETWP = require("extract-text-webpack-plugin")

module.exports = {
    entry: {
        index: ["babel-polyfill", path.join(__dirname,'../client/index.js')],
        // viewport:path.join(__dirname,'../client/utils/view-port.1.js')
    },
    output: {
        path: path.join(__dirname,'../dist'),
        filename: 'js/[name].[hash].js',
        publicPath: './',
        // chunkFilename:'[name].[chunkhash].js'
    },
    plugins: [
        new ETWP({
            filename: 'index.css',
            disable: false,
            allChunks: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: ETWP.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: "css-loader"},
                        {loader: "sass-loader"}
                    ],
                    publicPath: '/'
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: 'images/[name].[ext]?[hash:6]'
                        }
                    }
                ]
            }
        ]
    }
}