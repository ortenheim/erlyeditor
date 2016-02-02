import isUndefined from 'lodash/isUndefined';
import { createReducer } from 'redux-act';

import {
  togglePlay, stop,
  updateTime, seek
} from './actions';

export const initialState = {
  sources: [],
  sourceIndex: null,
  currentTime: 0,
  loading: false,
  error: false,
  networkState: null,
  readyState: null,
  buffered: false,
  duration: 0,
  percentage: {
    buffered: 0,
    played: 0
  }
};

export default createReducer({
  [togglePlay]: (state, { playing }) => ({
    ...state,
    playing: isUndefined(playing) ?
      !state.playing : playing
  }),

  [stop]: state => ({
    ...state,
    playing: false,
    currentTime: 0
  }),

  [updateTime]: (s, { currentTime }) => ({ ...s, currentTime }),
  [seek]: (s, { currentTime }) => ({ ...s, currentTime })
}, initialState);
