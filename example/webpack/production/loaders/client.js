import ExtractTextPlugin from 'extract-text-webpack-plugin';

import paths from '../../../config/paths';
import { cssOptions } from '../../utils';

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
    include: [
      paths.styles,
      paths.scripts,
      paths.lib
    ],
    loader: ExtractTextPlugin.extract(
      `css?minimize&${cssOptions.css}!postcss`,
      extractOptions
    )
  },

  {
    test: /\.js$/,
    include: [
      /node_modules\/qs/,
      paths.scripts,
      paths.lib
    ],
    loader: 'babel'
  }
]
