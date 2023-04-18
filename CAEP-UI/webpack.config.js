const EncodingPlugin = require('webpack-encoding-plugin');

var config = {
    entry: {
        index:
            ['babel-polyfill', './js/gui.js']
    },
    mode: 'production',
    output: {
        path: __dirname + '/lib',
        filename: './gui.js',
        iife: false,
        chunkFormat: 'commonjs',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["unicode-loader",
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env', '@babel/preset-react'],
                        }
                    },

                ],
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    optimization: {
        runtimeChunk: false,
        minimize: false
    },
    target: 'es6',
    plugins: [
        new EncodingPlugin({
            encoding: 'unicode'
        })
    ]
}

module.exports = config;