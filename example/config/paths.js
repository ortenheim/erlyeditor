import mapValues from 'lodash/mapvalues';
import resolve from './resolve';

const rootSiblings = mapValues(resolve, v => v(''));

export default {
  ...rootSiblings, // root, dirs

  public: resolve.dist('public'),

  scripts: resolve.src('scripts'),
  styles: resolve.src('styles'),
  templates: resolve.src('templates'),

  assets: {
    root: resolve.src('assets'),
    fonts: resolve.src('assets/fonts'),
    icons: resolve.src('assets/icons'),
    images: resolve.src('assets/images')
  },

  eslintrc: resolve.root('.eslintrc'),
  stylelintConfig: resolve.root('stylelint.config.js')
};
