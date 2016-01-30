import path from 'path';
import Express from 'express';
import morgan from 'morgan';

const getLogFormat = () => {
  if (__PRODUCTION__) return 'common';
  if (__DEVELOPMENT__) return __VERBOSE__ ? 'dev' : 'tiny';

  return 'default';
};

export default [
  morgan(getLogFormat(), { immediate: true }),
  Express.static(path.join(__dirname, 'public'))
];
