const path = require("path");
const miniCSSWebpackPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
module.exports = {
  entry: {
    index: path.resolve(__dirname, "./src/app.js"),
  },
  module: {
    rules: [
      { test: /\.scss$/, use: "sass-loader" },
      { test: /\.css$/, use: "css-loader" },
    ],
  },
  plugins: [new webpack.ProgressPlugin(), new miniCSSWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "app.js",
  },
};
