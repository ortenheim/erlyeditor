import path from 'path';
import formatter from 'eslint-friendly-formatter';

export default {
  configFile: path.resolve(__dirname, '../../.eslintrc'),
  formatter,
  emitWarning: true,
  failOnError: false,
  failOnWarning: false
};
