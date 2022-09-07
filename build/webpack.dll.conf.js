const path = require("path");
const webpack = require("webpack");
const dllPath = "../dll";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    vue: ["vue", "vuex", "vue-router"],
  },
  output: {
    // clean: true,
    path: path.join(__dirname, dllPath),
    filename: "[name].dll.js",
    library: "[name]_[hash]",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      format: true,
      path: path.join(__dirname, dllPath, "[name].manifest.json"),
      name: "[name]_[hash]",
      context: process.cwd(),
    }),
  ],
};
