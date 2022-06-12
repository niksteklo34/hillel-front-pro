const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app/app.js',
    output: {
        filename: 'compiled.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        port: 5001,
        static: path.resolve(__dirname, 'public'),
        hot: true,
    }
};
