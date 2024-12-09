// src/admin/webpack.config.js
const WebpackRTLPlugin = require("webpack-rtl-plugin");

module.exports = (config, webpack) => {
  config.plugins.push(
    new WebpackRTLPlugin({
      filename: "style.rtl.css", // Specify RTL stylesheet file name format
      diffOnly: false, // Generate complete RTL styles (not just diffs)
    })
  );

  return config;
};
