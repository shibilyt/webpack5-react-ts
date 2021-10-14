import { Configuration } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const config: Configuration = {
  mode: "production",
  devtool: "source-map",
  plugins: [new CleanWebpackPlugin()],
};

export default config;
