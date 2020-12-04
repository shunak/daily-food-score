const path = require('path');
console.log(__dirname);
module.exports = {
    entry: './dist/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    devtool: 'inline-source-map'
}