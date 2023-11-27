// next.config.js
const webpack = require('webpack');

module.exports = {
  // ...
  webpack: (config, { dev }) => {
    if (dev) {
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
    }
    return config;
  },
};
