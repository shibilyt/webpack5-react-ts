import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";
import devConfig from "./webpack.dev";
import prodConfig from "./webpack.prod";

const envConfig = {
  dev: devConfig,
  prod: prodConfig,
};
const config = ({ env }: { env: "prod" | "dev" }): Configuration => {
  return merge(commonConfig, envConfig[env]);
};

export default config;
