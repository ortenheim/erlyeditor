gulp.task('run', (cb) => sequence(
  'build:full',
  'server',
  cb
));
