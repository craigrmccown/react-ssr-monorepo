/* @noflow */

const path = require("path");
const nodeExternals = require("webpack-node-externals");

const { WDS_PORT } = process.env;

if (WDS_PORT == null) {
  throw new Error("Environment variable WDS_PORT must be set!");
}

const BaseConfig = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  entry: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { cacheDirectory: true }
      }
    ]
  },
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    port: process.env.WDS_PORT,
    publicPath: "/"
  }
};

const ClientConfig = {
  ...BaseConfig,
  name: "client",
  entry: [...BaseConfig.entry, "./src/client"],
  output: {
    ...BaseConfig.output,
    path: path.join(BaseConfig.output.path, "client")
  }
};

const ServerConfig = {
  ...BaseConfig,
  name: "server",
  entry: [...BaseConfig.entry, "./src/server"],
  output: {
    ...BaseConfig.output,
    path: path.join(BaseConfig.output.path, "server")
  },
  target: "node",
  externals: [nodeExternals()]
};

module.exports = [ClientConfig, ServerConfig];
