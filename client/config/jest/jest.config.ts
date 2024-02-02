import path from 'path';

export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg$': path.resolve(__dirname, 'MockFile.tsx'),
    '^@app(.*)$': '<rootDir>src/app$1',
    '^@entities(.*)$': '<rootDir>src/entities$1',
    '^@features(.*)$': '<rootDir>src/features$1',
    '^@shared(.*)$': '<rootDir>src/shared$1',
    '^@pages(.*)$': '<rootDir>src/pages$1',
    '^@widgets(.*)$': '<rootDir>src/widgets$1',
  },
  globals: {
    __IS_DEV__: 'true',
    __API__: '',
    __API_NEW__: '',
  },
};
