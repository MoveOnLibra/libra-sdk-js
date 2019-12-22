var webpack = require("webpack");

var outputFile = "moveonlibra";
var globalName = "LibraClient";

var config = require("../package.json");

module.exports = {
  entry: "./lib/index.js",
  module: {
    rules: [
      // {
      //   enforce: "pre",
      //   test: /\.(js|vue)$/,
      //   loader: "eslint-loader",
      //   exclude: /node_modules/
      // },
      // {
      //   test: /.js$/,
      //   use: "babel-loader",
      //   exclude: /node_modules/
      // }
    ]
  },
  plugins: []
};
