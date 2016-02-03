import path from 'path';
import stylelint from 'stylelint';

export default (bundler) => [
  stylelint({
    configFile: path.resolve(__dirname, '../../stylelint.config.js'),
    files: [path.resolve(__dirname, '../../src/**/*.css')],
    ignoreFiles: [path.resolve(__dirname, '../../node_modules/**/*.css')]
  }),

  require('postcss-import')({
    addDependencyTo: bundler
  }),
  require('precss'),
  require('postcss-cssnext')({
    sourcemap: true,
    messages: {
      browser: true,
      console: true
    }
  }),
  require('postcss-size'),
  require('postcss-focus'),
  require('postcss-position'),
  require('postcss-easings'),
  require('postcss-hexrgba'),
  require('postcss-color-rgba-fallback'),
  require('postcss-input-style'),
  require('postcss-quantity-queries'),

  ...(process.env.NODE_ENV === 'production' ? require('cssnano') : []),

  require('postcss-reporter'),
  require('postcss-browser-reporter')({
    selector: 'body:before'
  })
];
