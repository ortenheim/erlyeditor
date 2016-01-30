import { config } from '../package';

const scheme = config.https ? 'https' : 'http';

const host = process.env.HOST || config.host;
const port = process.env.PORT || config.ports.app;

export default {
  host,
  port,

  url: `${scheme}://${host}:${port}`,
}
