import path from 'path';

const isProduction = process.env.NODE_ENV !== 'production';

export const localIdentName = isProduction ?
  '[hash:base64:5]' :
  '[name]-[local]--[hash:base64:5]';

export const cssOptions = `modules&importLoaders=1&localIdentName=${localIdentName}`;
export const paths = {
  modules: path.resolve(__dirname, '../node_modules'),
  src: path.resolve(__dirname, '../src')
};

export function addHash(template, hash) {
  return isProduction ?
    template.replace(/\.[^.]+$/, `.[${hash}]$&`) :
    template;
}
