import '@babel/polyfill';
import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
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
            '@babel/polyfill',
            './src/app/index.js',
            './src/css/main.scss',
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
                            ],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/img', to: 'img' },
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
