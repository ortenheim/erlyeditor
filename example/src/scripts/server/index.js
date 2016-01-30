import dotenv from 'dotenv';

dotenv.load();

import logger from 'debug-dude';
import PrettyError from 'pretty-error';

import Express from 'express';
import { Server } from 'http';

import middleware from './middleware';
import handler from './handler';

const { info, error } = logger('app:server');

info('starting...');

const prettyError = new PrettyError();
const app = new Express();
const server = new Server(app);

middleware.forEach(m => app.use(m));
app.use(handler);

const port = process.env.PORT || settings.port || 80;

server.listen(port, (err) => {
  if (err) {
    error(prettyError.render(err));
  } else {
    if (process.send) process.send('online');

    // 🍇 🍄 🍉 🍋 🍌 🍎 🍍 🍑 🍒 🍓 🛠 🚽 👽 🚷 🚀
    info('🚀  server is listening at: %s\n', port);
  }
});

process.on('uncaughtException', (err) => {
  error('🚧  unexpected / unhandled fatal error: ', prettyError.render(err));
  error('🚧  stopping server');

  server.close();
});
