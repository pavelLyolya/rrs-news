import 'core-js/stable';
import 'regenerator-runtime/runtime';

import webpack from 'webpack';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import autoprefixer from 'autoprefixer';
import postcssMixins from 'postcss-mixins';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssNested from 'postcss-nested';
import postcssSimpleExtend from 'postcss-simple-extend';
import postcsspartialImport from 'postcss-partial-import';

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: [
            'core-js/stable',
            'regenerator-runtime/runtime',
            './src/index.js',
            './src/styles/main.scss',
        ],
    },
    output: {
        filename: '[name].js',
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        hot: true,
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react'],
                        cacheDirectory: true,
                    },
                }],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [
                                autoprefixer,
                                postcsspartialImport,
                                postcssMixins,
                                postcssNested,
                                postcssSimpleExtend,
                                postcssSimpleVars,
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                    'img-loader',
                ],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' },
        ]),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['bundle.js'],
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
        }),
    ],
};
