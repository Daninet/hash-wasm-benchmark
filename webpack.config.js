const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: { app: path.resolve(__dirname, "src/index.js") },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].[hash].js",
    publicPath: "/hash-wasm-benchmark/",
    chunkFilename: "js/[id].[chunkhash].js",
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
  stats: {
    children: true,
  },
  experiments: {
    syncWebAssembly: true,
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
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000,
            name: "[hash].[ext]",
            outputPath: "assets",
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [new TerserJSPlugin()],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[id].[hash].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      favicon: path.resolve(__dirname, "public/favicon.ico"),
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/app.*"],
    }),
    {
      apply: (compiler) => {
        compiler.hooks.done.tap("DonePlugin", (stats) => {
          console.log("Compile is done !");
          setTimeout(() => {
            process.exit(0);
          });
        });
      },
    },
  ],
};
