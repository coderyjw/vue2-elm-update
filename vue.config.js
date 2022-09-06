const path = require("path");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const smp = new SpeedMeasurePlugin({
  disable: !(process.env.MEASURE === "true"),
  outputFormat: "humanVerbose",
});

module.exports = {
  parallel: true,
  configureWebpack: smp.wrap({
    resolve: {
      alias: {
        src: path.resolve(__dirname, "./src"),
        assets: path.resolve(__dirname, "./src/assets"),
        components: path.resolve(__dirname, "./src/components"),
      },
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
    plugins: [new BundleAnalyzerPlugin()],
  }),
};
