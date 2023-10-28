import { RuleSetRule } from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;
  const SVGLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = buildCssLoaders(isDev);

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  return [
    fileLoader,
    SVGLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    cssLoader,
  ];
};
