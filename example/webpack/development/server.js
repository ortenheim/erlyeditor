import merge from 'webpack-merge';

import base from '../base/server';
import common from './common';
import loaders from './loaders/server';

export default merge(base, common, {
  module: { loaders },
  devtool: 'source-map'
});
