const {merge} = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
    mode:'development',
    devServer:{
        port:8080,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'container',
            remotes:{
                'marketing':'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared:packageJson.dependencies
        })
    ]
}
// dev config will override or takes priority over the common config for common configuration
module.exports = merge(commonConfig,devConfig);