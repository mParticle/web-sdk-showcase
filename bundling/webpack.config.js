const path = require('path');

module.exports = {
    entry: {
        selfhost: './src/selfhost/app.js',
        scripttag: './src/scripttag/app.js',
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
