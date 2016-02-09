import { createReducer } from 'redux-act';

import { toggleDebugMonitor } from './actions';

export const initialState = {
  debug: Boolean(__DEVELOPMENT__)
};

export default createReducer({
  [toggleDebugMonitor]: ({ debug, ...s }) => ({ ...s, debug: !debug })
}, initialState);
