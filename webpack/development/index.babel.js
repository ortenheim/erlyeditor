import merge from 'webpack-merge';

import base from '../base';
import loaders from './loaders';
import preLoaders from './preLoaders';

export default merge(base, {
  debug: false,
  cache: true,

  module: { preLoaders, loaders },
  devtool: 'cheap-module-inline-source-map'
});
