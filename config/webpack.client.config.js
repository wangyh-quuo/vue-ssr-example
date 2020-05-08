const path = require('path');
const webpack = require('webpack');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
module.exports = {
  configureWebpack: {
    entry: path.resolve(__dirname, '../src/entry-client.js'),
    plugins: [
      // 此插件在输出目录中
      // 生成 `vue-ssr-client-manifest.json`。
      new VueSSRClientPlugin(),
    ],
  },
  chainWebpack: (config) => {
    // 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，
    // 以便可以在之后正确注入异步 chunk。
    // 这也为你的 应用程序/vendor 代码提供了更好的缓存。
    config.optimization.splitChunks({
      name: 'manifest',
      minChunks: Infinity,
    });
  },
};
