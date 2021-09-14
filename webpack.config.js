const webpack = require("webpack");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8000,
    hot: true,
    proxy: {
      "/": {
        target:
          "https://herren-common.s3.ap-northeast-2.amazonaws.com/frontend",
        pathRewrite: { "^/": "" },
        changeOrigin: true,
      },
    },
  },
  entry: "./src/index.tsx",
  output: {
    filename: "app.js",
    path: __dirname + "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: "/node_modules/",
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
          plugins: [new TsconfigPathsPlugin()],
        },
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "/public/index.html",
    }),
  ],
};
