import merge from 'webpack-merge';

import base from '../base';
import plugins from './plugins';
import loaders from './loaders';

export default merge(base, {
  module: { loaders },
  plugins,
  devtool: 'source-map'
});
