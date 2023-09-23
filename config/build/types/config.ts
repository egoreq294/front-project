export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  locales: string;
  buildLocales: string;
}

export type AliasOptions = {
  '@app': string;
  '@entities': string;
  '@features': string;
  '@shared': string;
  '@pages': string;
  '@widgets': string;
};

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  alias: AliasOptions;
  apiUrl: string;
}

export interface BuildEnv {
  mode: BuildMode;
  apiUrl: string;
}
