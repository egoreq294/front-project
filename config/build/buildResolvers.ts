import { ResolveOptions } from 'webpack';

import { BuildOptions } from './types/config';

export const buildResolvers = ({ alias }: BuildOptions): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  alias,
});
