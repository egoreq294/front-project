import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const SVGLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\./,
            localIdentName: isDev
              ? "[local]__[hash:base64:8]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [fileLoader, SVGLoader, typescriptLoader, cssLoader];
};
