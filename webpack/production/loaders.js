import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { cssOptions, paths } from '../utils';

const extractOptions = {
  allChunks: true
};

export default [
  {
    test: /\.css$/,
    include: [paths.modules],
    loader: ExtractTextPlugin.extract(
      `css?importLoaders=1&minimize!postcss`,
      extractOptions
    )
  },
  {
    test: /\.css$/,
    include: [paths.src],
    loader: ExtractTextPlugin.extract(
      `css?minimize&${cssOptions}!postcss`,
      extractOptions
    )
  },
  {
    test: /\.js$/,
    include: [paths.src],
    loader: 'babel'
  }
];
