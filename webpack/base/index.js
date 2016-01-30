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
  'react-motion': {
    root: 'ReactMotion',
    commonjs2: 'react-motion',
    commonjs: 'react-motion',
    amd: 'react-motion'
  },
  'react-css-modules': {
    root: 'ReactCSSModules',
    commonjs2: 'react-css-modules',
    commonjs: 'react-css-modules',
    amd: 'react-css-modules'
  },
  'redux': {
    root: 'Redux',
    commonjs2: 'redux',
    commonjs: 'redux',
    amd: 'redux'
  },
  'redux-act': {
    root: 'ReduxAct',
    commonjs2: 'redux-act',
    commonjs: 'redux-act',
    amd: 'redux-act'
  },
  'redux-thunk': {
    root: 'ReduxThunk',
    commonjs2: 'redux-thunk',
    commonjs: 'redux-thunk',
    amd: 'redux-thunk'
  },
  'reselect': {
    root: 'Reselect',
    commonjs2: 'reselect',
    commonjs: 'reselect',
    amd: 'reselect'
  },
  'invariant': {
    root: 'Invariant',
    commonjs2: 'invariant',
    commonjs: 'invariant',
    amd: 'invariant'
  },
  'classnames': {
    root: 'ClassNames',
    commonjs2: 'classnames',
    commonjs: 'classnames',
    amd: 'classnames'
  },
  'lodash': {
    root: '_',
    commonjs2: 'lodash',
    commonjs: 'lodash',
    amd: 'lodash'
  },
  'core-decorators': {
    root: 'CoreDecorators',
    commonjs2: 'core-decorators',
    commonjs: 'core-decorators',
    amd: 'core-decorators'
  }
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
