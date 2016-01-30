import webpack from 'webpack';
import StatsPlugin from 'stats-webpack-plugin';
import { StatsWriterPlugin } from 'webpack-stats-plugin';

import { resolve, sourceMap } from '../../../config';
import common from './common';

const is = ext => s => s.endsWith(`.${ext}`);
const transformAssets = ({ assetsByChunkName: { app, vendors } }) => {
  const assets = {
    scripts: [
      ...vendors.filter(is('js')),
      ...app.filter(is('js')),
    ],
    styles: [
      ...vendors.filter(is('css')),
      ...app.filter(is('css')),
    ]
  };
  return JSON.stringify(assets, null, 2);
}

export default [
  ...common,
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: process.env.SOURCE_MAP || sourceMap,
    minimize: true,
    compress: {
      screw_ie8: true,
      warnings: false,
      unsafe: true,
      drop_console: true
    }
  }),
  new StatsPlugin('../webpack.stats.json'),
  new StatsWriterPlugin({
    filename: 'assets.json',
    fields: null,
    transform: transformAssets
  })
]
