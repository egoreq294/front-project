import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

export const buildCssLoaders = (isDev: boolean): RuleSetRule => ({
  test: /\.s[ac]ss$/i,
  exclude: /node_modules/,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: /\.module\./,
          localIdentName: isDev
            ? '[local]__[hash:base64:8]'
            : '[hash:base64:8]',
        },
      },
    },
    'sass-loader',
  ],
});
