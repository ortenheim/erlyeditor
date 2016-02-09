import paths from '../../../config/paths';
import common from './common';
import { cssOptions } from '../../utils';

// for more info about css loading see:
// https://github.com/webpack/css-loader#local-scope

export default [
  ...common,
  {
    test: /\.css$/,
    include: [paths.modules],
    loaders: [
      'css/locals?importLoaders=1',
      'postcss'
    ]
  },
  {
    test: /\.css$/,
    include: [
      paths.styles,
      paths.scripts,
      paths.lib
    ],
    loaders: [
      `css/locals?${cssOptions}`,
      'postcss'
    ]
  }
];
