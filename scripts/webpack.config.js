const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cwddir = process.cwd();

module.exports = {
    entry: path.resolve(cwddir, './src/index.tsx'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(cwddir, './src/index.html'),
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
