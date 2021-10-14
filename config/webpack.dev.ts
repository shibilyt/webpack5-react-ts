import path from "path";
import { Configuration, HotModuleReplacementPlugin } from "webpack";

const config: Configuration = {
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [new HotModuleReplacementPlugin()],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "..", "./build"),
    },
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};

export default config;
