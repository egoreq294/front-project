import { RuleSetRule } from 'webpack';

import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

type BuildBabelLoaderArgs = BuildOptions & {
  isTsx: boolean;
};

export const buildBabelLoader = ({
  isDev,
  isTsx,
}: BuildBabelLoaderArgs): RuleSetRule => {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx,
            },
          ],
          '@babel/plugin-transform-runtime',
          isTsx &&
            !isDev && [
              babelRemovePropsPlugin,
              {
                props: ['data-testid'],
              },
            ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
};
