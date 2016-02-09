export default __CLIENT__ ?
  [require('redux-logger')({
    collapsed: (getState, action) => action.type.indexOf('video') !== -1
  })] :
  [];
