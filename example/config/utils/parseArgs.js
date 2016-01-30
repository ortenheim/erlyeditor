import minimist from 'minimist';

export default () => minimist(process.argv.slice(2), {
  // these switches are always treated as booleans
  boolean: [
    'development',
    'production',
    'debug',
    'profile',
    'verbose',
    'quiet',
    'watch'
  ]
});
