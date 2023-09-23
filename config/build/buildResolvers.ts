import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = ({
  alias,
  paths,
}: BuildOptions): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  alias,
  modules: [paths.src, 'node_modules'],
  preferAbsolute: true,
  mainFiles: ['index'],
});
