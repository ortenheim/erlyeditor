export default (routes, defaultStatus = 200) =>
  routes.reduce((prev, current) => current.status || prev, defaultStatus);
