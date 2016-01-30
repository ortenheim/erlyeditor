import webpack from 'webpack';

export default [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]
