const path = require("path");

const OUT_DIR = "build";

module.exports = {
    entry: "./src/index.ts",

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        modules: [path.resolve(__dirname, "src"), "node_modules"],
    },

    output: {
        filename: "app.js",
        path: path.resolve(__dirname, OUT_DIR),
    },

    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        ignored: /node_modules/,
    },

    devServer: {
        contentBase: path.join(__dirname, OUT_DIR),
        compress: true,
        port: 3000,
    },
};
