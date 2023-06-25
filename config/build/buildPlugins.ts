import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const buildPlugins = ({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] => [
  new HTMLWebpackPlugin({
    template: paths.html,
  }),
  new ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  }),
  new ReactRefreshWebpackPlugin(),
  new BundleAnalyzerPlugin({ openAnalyzer: false }),
];
