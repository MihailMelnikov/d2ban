const path = require('path');

module.exports = {
    mode : "development",
    entry: {
        // server : "./src/server/app.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader",
                    options: {
                        presets : [
                            'env',
                            'flow'
                        ]
                    }
                }
            }
        ]
    }
};