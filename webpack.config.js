const path = require("path");

module.exports={
    entry: "./src/app.js",
    output: {
        filename: "bandle.js",
        path: path.join(__dirname, "./public/")
    },
    mode: "development",
    module: {
     rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"  
        },
        {
            test: /\.s?css$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "sass-loader"
                }
            ]
        }
     ] 
    },
    devServer: {
        contentBase: path.join(__dirname, "./public/")
    },
    devtool: "cheap-module-eval-source-map"
}