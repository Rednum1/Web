const path = require('path')

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'project'),
        filename: 'main.js'
    },
    watch: true
}