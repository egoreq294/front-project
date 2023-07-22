import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
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

function isRuleSetRule(rule: RuleSetRule | '...'): rule is RuleSetRule {
  return (rule as RuleSetRule).test !== undefined;
}

export default ({ config }: { config: Configuration }) => {
  if (config?.resolve) {
    config.resolve.alias = { ...config.resolve?.alias, ...alias };
  }

  if (config?.resolve?.extensions) {
    config.resolve.extensions.push('.ts', '.tsx');
  }

  if (config?.module?.rules) {
    config.module.rules = config.module.rules.map(
      (rule: RuleSetRule | '...') => {
        if (isRuleSetRule(rule) && /svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
      },
    );

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildCssLoaders(true));
  }

  if (config?.plugins) {
    config.plugins.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
      }),
    );
  }

  return config;
};
