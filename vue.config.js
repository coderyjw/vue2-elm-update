const path = require("path");
const webpack = require("webpack");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const smp = new SpeedMeasurePlugin({
  disable: !(process.env.MEASURE === "true"),
  outputFormat: "humanVerbose",
});

const addAssetHtmlWebpaclPlugin = require("add-asset-html-webpack-plugin");

module.exports = {
  parallel: true,
  publicPath: "./",
  configureWebpack: smp.wrap({
    resolve: {
      alias: {
        src: path.resolve(__dirname, "./src"),
        assets: path.resolve(__dirname, "./src/assets"),
        components: path.resolve(__dirname, "./src/components"),
      },
    },
    output: {
      clean: true,
    },
    module: {
      rules: [
        // {
        //   test: /\.js$/,
        //   include: path.resolve("src"),
        //   exclude: /node_modules/,
        //   use: [
        //     {
        //       loader: "thread-loader",
        //       options: {
        //         worker: 5,
        //       },
        //     },
        //   ],
        // },
      ],
    },
    plugins: [
      // new BundleAnalyzerPlugin(),
      // new webpack.DllReferencePlugin({
      //   context: __dirname,
      //   manifest: path.resolve(__dirname, "./dll/vue.manifest.json"),
      // }),
      // new addAssetHtmlWebpaclPlugin({
      //   filepath: path.resolve(__dirname, "./dll/vue.dll.js"),
      // }),
    ],
  }),
};
