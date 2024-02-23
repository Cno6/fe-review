import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

import { Configuration } from 'webpack';
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'app', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    customLoaders: path.resolve(__dirname, 'config', 'build', 'loaders')
  }

  const mode = env.mode || 'development';
  const port = env.port || 3000;

  const isDev = mode === 'development';

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port
  });

  return config
};
