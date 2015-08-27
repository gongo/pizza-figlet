module.exports = {
    entry: "./app/main.coffee",
    output: {
        path: "./public/build",
        filename: "build.js"
    },
    module: {
        loaders: [
            { test: /\.coffee$/, loader: "coffee" },
            { test: /\.html$/, loader: "html" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.coffee']
    },
    devServer: {
        contentBase: "./public"
    },
}
