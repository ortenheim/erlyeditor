import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import { createReducer as reducer } from 'redux-act';

import video from '../html5video';
import player from '../player';

const initialState = {
};

export const editor = reducer({
}, initialState);

export const playback = combineReducers({
  video,
  player
});

export default reduceReducers(editor, playback);
