const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    //ponto de entrada
    entry: './src/index.jsx',
    //saida no public
    output: {
        path: __dirname + '/public',
        //nome do arquivo
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        //pasta do index e app.js
        contentBase: './public'
    },
    resolve: {
        //resolver js e jsx
        extensions: ['','.js','.jsx'],
        //apelido "modules" pra pasta node_modules ex: modules/bootstrap
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    //arquivo gerado depois do parse de todos os css
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        //loader para parse dos jsx
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            //loader pra css
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader','css-loader')
        }, {
            //loader para as fonts
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}


