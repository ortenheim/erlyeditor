import { name, config } from '../package';
import server from './server';

export default (argv) => {
  const logLevel = argv.verbose || argv.profile ? 'debug' : 'info';

  return {
    logPrefix: name,

    logLevel,
    logConnections: true,
    logFileChanges: true,
    logSnippet: true,

    notify: true,

    // Run as an https by setting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser

    https: config.https,

    ghostMode: {
      clicks: true,
      forms: true,
      scroll: true
    },

    browser: 'google chrome',
    open: false,

    startPath: '/',
    reloadOnRestart: true,
    reloadDebounce: 100,
    injectChanges: true,

    port: config.ports.browserSync,
    ui: { port: config.ports.browserSyncUI }
  };
};
