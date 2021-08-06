const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "production",
  target: "electron-renderer",
  entry: "./src/renderer/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "renderer.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".vue"],
    alias: {
      "@": __dirname,
      "@assets": path.resolve(__dirname, "src/renderer/assets"),
      "@components": path.resolve(__dirname, "src/renderer/components"),
    },
  },
  context: __dirname,
  plugins: [
    new VueLoaderPlugin(),

    new HtmlWebpackPlugin({
      filename: "index.html",
      favicon: "./public/favicon.ico",
      template: "./public/index.html",
      title: "NetCat"
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "package.json"),
          to: path.resolve(__dirname, "build/package.json"),
        },
      ],
    }),
  ],
  externals: ({ context, request }, callback) => {
    const externals = ["lodash"];
    if (externals.indexOf(request) != -1) {
      return callback(null, "commonjs " + request);
    }
    return callback();
  },
};
