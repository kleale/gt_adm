let merge = require('webpack-merge');
let baseWebpackConfig = require('./webpack.base.config');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let WebpackFtpUpload = require('webpack-ftp-upload-plugin');
let path = require('path');

let buildWebpackConfig = merge(baseWebpackConfig,{
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        // new WebpackFtpUpload({
        //     password: "",
        //     host: "",
        //     port: '21',
        //     username: '',
        //     local: path.join(__dirname, 'dist'),
        //     path: '',
        // })
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})