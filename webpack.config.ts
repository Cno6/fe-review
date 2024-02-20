import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

import { Configuration } from 'webpack';
import { BuildPaths } from "./config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src')
}

const mode = 'development';
const isDev = mode === 'development';

const config: Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev
});

export default config;
