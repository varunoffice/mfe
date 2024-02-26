module.exports = {
    module:{
        rules:[
            {
                // this checks for file with extension .m or .mjs
                test:/\.m?js$/,
                // this rule will not apply to node_modules
                exclude:/node_modules/,
                // 
                use:{
                    loader:'babel-loader',
                    options:{
                        // bebel process jsx tags , preset-env = convert latest JS to browser 
                        // compatible es5 js
                        presets:['@babel/preset-react','@babel/preset-env'],
                        // this will add in some extra code just to enable some different features 
                        // for our project inside the browser, such as async await syntax ,etc
                        plugins:['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}