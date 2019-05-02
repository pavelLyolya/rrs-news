import 'core-js/stable';
import 'regenerator-runtime/runtime';
import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import postcssMixins from 'postcss-mixins';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssNested from 'postcss-nested';
import postcssSimpleExtend from 'postcss-simple-extend';
import postcsspartialImport from 'postcss-partial-import';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import ImageMinPlugin from 'imagemin-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

module.exports = {
    devtool: false,
    entry: {
        main: [
            'core-js/stable',
            'regenerator-runtime/runtime',
            './src/index.js',
            './src/styles/main.scss',
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react'],
                    },
                }],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
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
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJSPlugin({ sourceMap: true }),
            new ImageMinPlugin({
                test: /\.(png|jpe?g|gif|svg)$/,
            }),
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: { sourceMap: true },
            }),
        ],
    },
};
