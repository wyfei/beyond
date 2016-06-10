var path = require('path');

module.exports = {
    entry: {
        index: './app/script/index.ts'
    },
    output: {
		path: './app/script/dist',
        filename: 'bundle.js',
		publicPath: "./app/script/dist/"		
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            }
        ]
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.ts'
        ]
    }
};