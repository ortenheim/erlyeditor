import path from 'path';

import { name } from '../../package';

import postcss from './postcss';
import eslint from './eslint';
import plugins from './plugins';

const noParse = [
];

const aliases = {
  // see https://github.com/airbnb/enzyme/issues/47#issuecomment-162529926
  'sinon': 'sinon/pkg/sinon'
};

const externals = {
  'react': {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
  },
  'react-motion': 'commonjs react-motion',
  'redux': 'commonjs redux',
  'redux-act': 'commonjs redux-act',
  'redux-thunk': 'commonjs redux-thunk',
  'reselect': 'commonjs reselect',
  'classnames': 'commonjs classnames',
  'lodash': 'commonjs lodash',
  'core-decorators': 'commonjs core-decorators'
};

export default {
  name,
  context: path.resolve(__dirname, '../..'),

  target: 'web',
  entry: ['./src/index'],

  resolve: {
    root: path.resolve(__dirname, '../..'),
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
