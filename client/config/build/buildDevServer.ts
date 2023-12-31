import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (): DevServerConfiguration => ({
  port: 3000,
  open: true,
  historyApiFallback: true,
  hot: true,
});
