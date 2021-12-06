const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ErrorOverlayWebpackPlugin = require('error-overlay-webpack-plugin');

module.exports = (env) => {
    
    return {
        entry: {
            index: path.resolve(__dirname, './src/index.tsx'),
        },
        module: {
            rules: [
                // Typescript files
                {
                    test: /\.tsx?$/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            // Disable typechecking, will use it in fork-ts-checker
                            transpileOnly: true
                        }
                    },
                    exclude: /node_modules/,
                },
                // Stylesheets
                {
                    test: /\.(scss|css)$/,
                    use: [
                        env.production
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                // Image Assets
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                // Font Assets
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        plugins: [
            // CSS minifier
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                filename: '[name].[contenthash].css',
                chunkFilename: '[id].css'
            }),
            // Using index.ejs from ./src/index.ejs
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './src/index.ejs')
            }),
            // Improves building performance as it does type checking in a separate process
            new ForkTsCheckerWebpackPlugin(),
            // ESLint plugin for checking code styles
            new EslintWebpackPlugin({
                extensions: ['.tsx', '.ts', '.js'],
                exclude: ['node_modules']
            }),
            // Show pretty error overlay when app crashes in development
            // This plugin is currently not available with Webpack 5 (Webpack Dev Server v4)
            // new ErrorOverlayWebpackPlugin(),
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    }
};