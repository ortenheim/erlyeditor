gulp.task('build', (cb) => sequence(
  'clean',
  ['assets', 'bundle'],
  cb
));
