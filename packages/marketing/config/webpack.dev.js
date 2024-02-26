const {merge} = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
    mode:'development',
    devServer:{
        port:8081,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new ModuleFederationPlugin({
            name:'marketing',
            filename:'remoteEntry.js',
            exposes:{
                './MarketingApp':'./src/bootstrap'
            },
            shared:packageJson.dependencies
        })
    ]
}
// dev config will override or takes priority over the common config for common configuration
module.exports = merge(commonConfig,devConfig);