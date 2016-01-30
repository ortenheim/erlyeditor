import debug from 'debug';
import { render as prettyjson } from 'prettyjson';

import config from '../../config';
import postcss from './postcss';
import eslint from './eslint';

debug('app:webpack:dependencies')(prettyjson(config.dependencies));
debug('app:webpack:aliases')(prettyjson(config.aliases));
debug('app:webpack:globals')(prettyjson(config.globals));

const noParse = [
];

export default {
  name: config.name,
  context: config.paths.scripts,

  resolve: {
    root: config.paths.root,
    alias: config.aliases,
    modulesDirectories: ['node_modules'],
    extensions: [
      '',
      '.js',
      '.css',
      '.json'
    ],
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*']
  },

  output: {
    publicPath: '/'
  },

  module: { noParse },

  postcss,
  eslint,

  profile: config.argv.profile
}
