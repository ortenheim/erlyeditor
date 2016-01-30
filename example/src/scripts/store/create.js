import { createStore } from 'redux';
import { syncHistory } from 'react-router-redux';

import { setup } from './middleware';
import enhance from './enhance';
import reducers from 'modules';

export default function (history, initialState = {}) {
  const routerMiddleware = syncHistory(history);
  const middleware = setup(routerMiddleware);

  const creator = enhance(middleware);
  const create = creator(createStore);
  const store = create(reducers, initialState);

  if (__DEVELOPMENT__ && __DEVTOOLS__) {
    routerMiddleware.listenForReplays(store);
  }

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('modules', () => {
      const newReducers = require('modules');
      store.replaceReducer(newReducers);
    });
  }

  return store;
}
