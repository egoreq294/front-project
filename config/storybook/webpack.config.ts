import path from 'path';
import { Configuration, RuleSetRule } from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { AliasOptions } from '../build/types/config';

const alias: AliasOptions = {
  '@app': path.resolve(__dirname, '../../src/app/'),
  '@entities': path.resolve(__dirname, '../../src/entities/'),
  '@features': path.resolve(__dirname, '../../src/features/'),
  '@shared': path.resolve(__dirname, '../../src/shared/'),
  '@pages': path.resolve(__dirname, '../../src/pages/'),
  '@widgets': path.resolve(__dirname, '../../src/widgets/'),
};

export default ({ config }: { config: Configuration }) => {
  config.resolve.alias = { ...config.resolve?.alias, ...alias };
  config.resolve.extensions.push('.ts', '.tsx');

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module.rules.push(buildCssLoaders(true));

  return config;
};
