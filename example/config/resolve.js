import path from 'path';
import mapValues from 'lodash/mapValues';
import dirs from './dirs';

const resolve = path.resolve;

const base = [resolve(__dirname, '..')];
const root = (...args) => resolve.apply(resolve, [...base, ...args]);
const entries = mapValues(dirs, v => root.bind(null, v));

export default { root, ...entries };
