import webpack from 'webpack'

import config from '../../../config';

const modules = {
  React: 'react',
  ReactDOM: 'react-dom',
  ReactDOMServer: 'react-dom/server',
  dude: 'debug-dude'
};

export default [
  new webpack.ProvidePlugin(modules),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin()
]
