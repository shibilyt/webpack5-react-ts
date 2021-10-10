const path = require("path");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "..", "./build"),
    },
  },
};
