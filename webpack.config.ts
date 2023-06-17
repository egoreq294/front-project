import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
  AliasOptions,
  BuildEnv,
  BuildPaths,
} from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const mode = env.mode || 'development';

  const isDev = mode === 'development';

  const alias: AliasOptions = {
    '@app': path.resolve(__dirname, 'src/app/'),
    '@entities': path.resolve(__dirname, 'src/entities/'),
    '@features': path.resolve(__dirname, 'src/features/'),
    '@shared': path.resolve(__dirname, 'src/shared/'),
    '@pages': path.resolve(__dirname, 'src/pages/'),
    '@widgets': path.resolve(__dirname, 'src/widgets/'),
  };

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    alias,
  });

  return config;
};
