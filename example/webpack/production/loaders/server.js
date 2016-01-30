import paths from '../../../config/paths';

export default [
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
