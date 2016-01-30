import common from './common';

function getEnvMiddleware() {
  if (__DEVELOPMENT__) {
    return require('./development');
  } else {
    return require('./production');
  }
}

export default [
  ...getEnvMiddleware(),
  ...common
];
