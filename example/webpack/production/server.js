import merge from 'webpack-merge';

import base from '../base/server';
import loaders from './loaders/server';
import plugins from './plugins/server';

export default merge(base, {
  module: { loaders },
  plugins
});
