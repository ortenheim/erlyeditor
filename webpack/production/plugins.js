import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StatsPlugin from 'stats-webpack-plugin';

import { addHash } from '../utils';

export default [
  new ExtractTextPlugin('erlyeditor.min.css'),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    minimize: true,
    compress: {
      screw_ie8: true,
      warnings: false,
      unsafe: true,
      drop_console: true
    }
  }),
  new StatsPlugin('webpack.stats.json')
]
