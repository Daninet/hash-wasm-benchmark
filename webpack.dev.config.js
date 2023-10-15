var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  stats: {
    children: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      crypto: false,
      fs: false,
      path: false,
      buffer: require.resolve("buffer"),
    },
  },
  experiments: {
    syncWebAssembly: true,
  },
  devServer: {
    hot: false,
    liveReload: false,
    open: true,
    port: 8080,
    historyApiFallback: true,
    allowedHosts: "all",
  },
  module: {
    noParse: /argon2\.wasm$/,
    rules: [
      {
        test: /argon2\.wasm$/,
        // Tells WebPack that this module should be included as
        // base64-encoded binary file and not as code
        loader: "base64-loader",
        // Disables WebPack's opinion where WebAssembly should be,
        // makes it think that it's not WebAssembly
        //
        // Error: WebAssembly module is included in initial chunk.
        type: "javascript/auto",
      },
      {
        test: /\.worker\.js$/,
        use: { loader: "worker-loader" },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/",
          },
        },
      },
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      favicon: path.resolve(__dirname, "public/favicon.ico"),
    }),
  ],
};
