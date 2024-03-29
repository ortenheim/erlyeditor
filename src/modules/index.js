import { combineReducers } from 'redux';

// every module should export a reducer as a default in index.js

const pattern = /^\.\/([a-z]+)\/index\.js$/i;
const appReducers = require.context('./', true, /^\.\/([a-z]+)\/index\.js$/i);

// HACK: have to use '.default' because of babel 6
// and the way I export my reducers with redux-act.
// It exports default under key 'default'
// despite the fact I'm using babel-plugin-add-module-exports

const reducers = appReducers.keys().reduce((acc, key) => {
  const matches = pattern.exec(key);
  const name = matches[1];

  const reducer = appReducers(key);
  const target = reducer.default || reducer;

  acc[name] = target;
  return acc;
}, {});


export default combineReducers(reducers);
