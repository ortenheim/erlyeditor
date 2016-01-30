import path from 'path';

const eslint = {
  test: /\.js$/,
  include: [path.resolve(__dirname, '../../src')],
  loader: 'eslint'
};

export default [eslint]
