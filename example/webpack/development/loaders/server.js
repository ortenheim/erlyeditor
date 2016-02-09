import paths from '../../../config/paths';

export default [
  {
    test: /\.js$/,
    loader: 'babel',
    include: [
      /node_modules\/qs/,
      paths.scripts,
      paths.lib
    ]
  }
];
