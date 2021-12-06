
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const env = {
    production: true,
}

module.exports = merge(common(env), {
    mode: 'production',
    devtool: 'source-map',
});