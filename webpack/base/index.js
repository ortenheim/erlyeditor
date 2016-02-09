import path from 'path';
import debug from 'debug';
import { render as prettyjson } from 'prettyjson';

import { name } from '../../package';

import postcss from './postcss';
import eslint from './eslint';
import plugins from './plugins';

const noParse = [
];

const alias = {
  // see https://github.com/airbnb/enzyme/issues/47#issuecomment-162529926
  sinon: 'sinon/pkg/sinon'
};

debug('module:webpack:aliases')(prettyjson(alias));

/* eslint-disable quote-props */
const externals = {
  'react': {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
  },
  'react-motion': 'commonjs react-motion',
  'redux': 'commonjs redux',
  'react-redux': 'commonjs react-redux',
  'redux-act': 'commonjs redux-act',
  'redux-thunk': 'commonjs redux-thunk',
  'reselect': 'commonjs reselect',
  'reduce-reducers': 'commonjs reduce-reducers',
  'classnames': 'commonjs classnames',
  'lodash': 'commonjs lodash',
  'core-decorators': 'commonjs core-decorators',
  'react-css-modules': 'commonjs react-css-modules',
  'react-swf': 'commonjs react-swf',
  'react-hotkeys': 'commonjs react-hotkeys'
};
/* eslint-enable quote-props */

export default {
  name,
  context: path.resolve(__dirname, '../..'),

  target: 'web',
  entry: ['./src/index'],

  resolve: {
    root: path.resolve(__dirname, '../..'),
    modulesDirectories: ['node_modules'],
    alias,
    extensions: [
      '',
      '.js',
      '.css',
      '.json'
    ]
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*']
  },

  output: {
    library: 'ErlyEditor',
    libraryTarget: 'umd'
  },

  module: { noParse },
  plugins,
  externals,

  postcss,
  eslint,

  profile: false
}
