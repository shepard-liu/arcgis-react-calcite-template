
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = (env) => {

    const envForCommon = {
        production: true,
    }

    return merge(common(envForCommon), {
        mode: 'production',
        devtool: 'source-map',
        output: {
            clean: true,
        },
        plugins: [
            // Copy assets from @arcgis and @esri to dist/assets
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.join(__dirname, 'node_modules/@arcgis/core/assets'),
                        to: path.join(__dirname, 'dist/assets')
                    },
                ]
            }),
        ]
    });
}