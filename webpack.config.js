module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname + '/dist/',
        filename: "pdfexport.min.js",
        publicPath: ""
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel", exclude: [/node_modules/, /public/] },
        ]
    }
};