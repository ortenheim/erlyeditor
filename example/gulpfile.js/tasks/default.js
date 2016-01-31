gulp.task('default', () => sequence(
  'assets',
  'bundle:server',      // build server bundle
  'server',             // start server

  // start browsersync as proxy to express server
  'sync:proxy'
));
