import { paths, resolve } from '../../../config';
import { cssOptions } from '../../utils';

export default [
  {
    test: /\.css$/,
    include: [paths.modules],
    loaders: [
      'style',
      'css?importLoaders=1',
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
      'style',
      `css?${cssOptions}`,
      'postcss'
    ]
  },

  {
    test: /\.js$/,
    loader: 'babel',
    include: [
      /node_modules\/qs/,
      paths.scripts,
      paths.lib
    ],
    query: {
      presets: [
        resolve.modules('babel-preset-react-hmre')
      ]
    }
  }
]
