import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
export default function buildLoaders(
  options: BuildOptions
): webpack.RuleSetRule[] {
  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: options.isDev
              ? '[path][name]__[local]'
              : '[hash:base64:8]',
          },
        },
      },

      'sass-loader',
    ],
  };
  const tsLoaders = {
    test: /\.tsx?$/,

    use: 'ts-loader',
    exclude: /node_modules/,
  };
  return [tsLoaders, cssLoaders];
}
