import mapKeys from 'lodash/mapkeys';

import {
  name as appName,
  description as appDescription,
  config
} from '../package';

import server from './server';

export default (environments, environmentName, argv) => {
  const env = mapKeys(environments, (_, key) => `__${key.toUpperCase()}__`);

  const common = {
    __QUIET__: argv.quiet,
    __VERBOSE__: argv.verbose,
    __PROFILE__: argv.profile,
    __DEBUG__: argv.debug,

    __DEVTOOLS__: environments.development && false,
  };

  const app = {
    settings: {
      name: JSON.stringify(appName),
      description: JSON.stringify(appDescription),

      host: JSON.stringify(server.host),
      port: server.port
    }
  };

  return {
    ...common,
    ...env,
    ...app,
  };
};
