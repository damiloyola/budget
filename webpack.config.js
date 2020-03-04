const path = require('path');

module.exports = {
    entry: {app: ['./src/app.js']},
    output:{
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test: /\.js$/, //archivos que terminan en .js
            exclude:/node_modules/
        },
        {
            use:[ //con use se pueden usar varios loaders
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
            test: /\.s?css$/
        }]
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public')
    }
};