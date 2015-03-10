module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname + '/public/',
        filename: "main.js",
        publicPath: ""
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel", exclude: [/node_modules/, /public/] },
        ]
    }
};