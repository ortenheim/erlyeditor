import webpack from 'webpack';
import { globals } from '../../../config';
import common from './common';

export default [
  ...common,
  new webpack.DefinePlugin({
    ...globals,
    __CLIENT__: false,
    __SERVER__: true,
    __DEVTOOLS__: false
  }),
  new webpack.BannerPlugin(
    'require("source-map-support").install();', {
      raw: true,
      entryOnly: false
    }
  )
];
