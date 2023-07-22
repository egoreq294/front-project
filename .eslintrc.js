module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: [
    'import',
    '@typescript-eslint',
    'prettier',
    'react-hooks',
    'i18next',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  globals: {
    __IS_DEV__: 'true',
    __API__: 'true',
  },
  rules: {
    'import/order': 'off',
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-underscore-dangle': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/require-default-props': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        format: null,
      },
    ],
    'spaced-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
      },
    ],
    '@typescript-eslint/object-curly-spacing': 'off',
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    '/node_modules',
    '.eslintrc.js',
    'webpack.config.ts',
    '/typings',
    '/build',
  ],
};
