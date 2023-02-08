const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: { // entry point for webpack
        app: './js/index.js'
    },
    output: { // output for webpack
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core'), //for example @core/Component
        }
    },
    plugins: [ //plugins for webpack (cleaning dist folder, creating html file, etc.)
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        // new CopyPlugin({ //use this plugin to copy files from one directory to another
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, 'src/img/coffee-logic.png'),
        //             to: path.resolve(__dirname, 'dist/img/coffee-logic.png')
        //         }
        //     ]
        // }),
        // new MiniCssExtractPlugin({
        //     filename: '[name].css'
        // })
    ],
    module: {
        rules: [ //rules for modules (configure loaders, parser options, etc.)
            {
                test: /\.s[ac]ss$/i, //regex for scss files
                use: [
                    // MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    }
}
