const merge = require("webpack-merge");
const baseConfig = require("./config/webpack.base.config.js");
const configureWebpack =
  process.env.WEBPACK_TARGET === "server"
    ? require("./config/webpack.server.config")
    : require("./config/webpack.client.config");

module.exports = merge(baseConfig, configureWebpack);
