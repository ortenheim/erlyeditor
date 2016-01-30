export default (history, store, routerProps = {}) => {
  if (__CLIENT__) {
    return require('./client')(history, store);
  } else {
    return require('./server')(store, routerProps);
  }
};
