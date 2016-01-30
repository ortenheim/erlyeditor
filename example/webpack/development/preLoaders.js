import { paths, argv } from '../../config';

const eslint = {
  test: /\.js$/,
  include: [paths.scripts],
  loader: 'eslint'
};

export default argv.lint ?
  [eslint] :
  [];
