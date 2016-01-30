import path from 'path';
import stylelint from 'stylelint';

const reporters = () => [
  require('postcss-reporter'),
  require('postcss-browser-reporter')
];

export default (bundler) => [
  require('postcss-import')({
    addDependencyTo: bundler,
    path: [path.resolve('../../node_modules')]
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
  require('postcss-responsive-type')({
    minSize: '1rem',
    maxSize: '2rem',
    minWidth: '22.5rem',
    maxWidth: '85.375rem',
    rootSize: '1rem'
  }),

  stylelint({
    configFile: path.resolve(__dirname, '../../stylelint.config.js'),
    files: [path.resolve(__dirname, '../../src/**/*.css')],
    ignoreFiles: [path.resolve(__dirname, '../../node_modules/**/*.css')]
  }),

  ...(process.env.NODE_ENV === 'production' ? require('cssnano') : []),
  ...reporters()
];
