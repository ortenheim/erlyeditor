import webpack from 'webpack';
import { globals, environment } from '../../../config';
import common from './common';

export default [
  ...common,
  new webpack.DefinePlugin({
    ...globals,
    'process.env': {
      NODE_ENV: JSON.stringify(environment),
    },
    __CLIENT__: true,
    __SERVER__: false
  }),
]
