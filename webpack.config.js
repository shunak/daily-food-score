const path = require('path');
console.log(__dirname);
module.exports = {
    entry: './src/app/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    devtool: 'inline-source-map',  
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}