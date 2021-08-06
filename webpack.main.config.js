const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  target: "electron-main",
  entry: "./src/main/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
  },
  module: {
    rules: [],
  },
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@": __dirname,
    },
  },
  context: __dirname,
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "logo.png"),
          to: path.resolve(__dirname, "build/logo.png"),
        },
      ],
    }),
  ],
  externals: [new nodeExternals()],
};
