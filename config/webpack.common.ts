import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

const config: Configuration = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  module: {
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            type: "asset",
            parser: {
              dataUrlCondition: {
                maxSize: 10000,
              },
            },
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: require.resolve("@svgr/webpack"),
                options: {
                  prettier: false,
                  svgo: false,
                  svgoConfig: {
                    plugins: [{ removeViewBox: false }],
                  },
                  titleProp: true,
                  ref: true,
                },
              },
              {
                loader: require.resolve("file-loader"),
                options: {
                  name: "assets/[name].[hash].[ext]",
                },
              },
            ],
            issuer: {
              and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
            },
          },
          {
            test: /\.(ts|js)x?$/i,
            include: path.resolve(__dirname, "..", "src"),
            use: ["babel-loader"],
          },
          {
            test: /\.css$/i,
            use: [
              {
                loader: "css-loader",
                options: {
                  import: true,
                },
              },
              "postcss-loader",
            ],
          },
          {
            exclude: [/^$/, /\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            type: "asset/resource",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".tsx", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "[name].[contenthash].js",
  },
};
export default config;
