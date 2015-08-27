module.exports = {
    entry: "./app/main.coffee",
    output: {
        path: "./public/build",
        publicPath: "/build/",
        filename: "build.js"
    },
    module: {
        loaders: [
            { test: /\.coffee$/, loader: "coffee" },
            { test: /\.html$/,   loader: "html" },
            { test: /\.less$/,   loader: "style!css!less" },
            { test: /\.woff2?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.coffee']
    }
}
