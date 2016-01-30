import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { applyMiddleware } from 'redux';

function getEnvMiddleware() {
  if (__DEVELOPMENT__) {
    return require('./development');
  } else {
    return require('./production');
  }
}

export function setup(router) {
  const env = getEnvMiddleware();

  return applyMiddleware(
    router,
    thunk,
    promise,
    ...env
  );
}
