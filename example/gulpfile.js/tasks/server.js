import monitor from '../utils/monitor';

const { watch } = config.app.argv;

gulp.task('server', () => monitor('server', resolve.dist('server.js'), {
  watch,
  killTree: true
}));
