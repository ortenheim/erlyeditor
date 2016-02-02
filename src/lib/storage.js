import isUndefined from 'lodash/isUndefined';
import cookie from 'react-cookie';

export function save(key, value) {
  cookie.save(key, value, { path: '/' });
}

export function load(key, defaultValue) {
  const value = cookie.load(key);
  return isUndefined(value) ? defaultValue : value;
}
