import { cssOptions, paths } from '../utils';

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
    include: [paths.src],
    loaders: [
      'style',
      `css?${cssOptions}`,
      'postcss'
    ]
  },
  {
    test: /\.js$/,
    loader: 'babel',
    include: [paths.src],
  }
]
