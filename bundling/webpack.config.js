const path = require('path');

module.exports = {
    entry: {
        selfconfig: './src/selfconfig/app.js',
    },
    output: {
        filename: '[name]/app-[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimize: true
    },
    mode: 'production',
    devServer: {
        contentBase: './dist',
        compress: true
    },
};
