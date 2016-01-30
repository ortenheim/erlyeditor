import logger from 'debug-dude';
import { env, aliases } from '../config';

const { debug } = logger('app:webpack');
export const modules = Object.keys(aliases);

export const localIdentName = env.development ?
  '[name]-[local]--[hash:base64:5]' :
  '[hash:base64:5]';

export const cssOptions = `modules&importLoaders=1&localIdentName=${localIdentName}`;

export function addHash(template, hash) {
  return env.production ?
    template.replace(/\.[^.]+$/, `.[${hash}]$&`) :
    template;
}

export function isExternal(_ctx, req) {
  const external = !modules.some(m => req.startsWith(m));
  const module = Boolean(req.match(/^[a-z\.\-0-9_]*$/i));

  debug(`${req}: external=${external}, module=${module}`);

  return external && module;
}
