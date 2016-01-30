export default (
  __SERVER__ ?
    require('react-router').createMemoryHistory() :
    require('react-router').browserHistory
);
