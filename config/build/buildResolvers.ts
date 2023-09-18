import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';
import path from 'path';

export default function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {
      '@': path.resolve(options.paths.src),
      '@widgets': path.resolve(options.paths.src, 'widgets'),
      '@app': path.resolve(options.paths.src, 'app'),
      '@shared': path.resolve(options.paths.src, 'shared'),
      '@pages': path.resolve(options.paths.src, 'pages'),
    },
  };
}
