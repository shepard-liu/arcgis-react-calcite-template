
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const env = {
    production: false,
}

module.exports = merge(common(env), {
    mode: 'development',
    devtool: 'inline-source-map',
    // A development server for serving up our files
    // The bundled files will be temporarily stored in memory
    // So, build in production mode after debugging
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3000,
        host: 'localhost',
        // With this enabled, page refreshes automatically when rebuilt
        hot: true,
    },
});