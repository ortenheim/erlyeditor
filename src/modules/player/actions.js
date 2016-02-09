import { createAction as action } from 'redux-act';

const mapIdentity = id => ({ id });

export const toggleDebugMonitor = action('player.toggleDebugMonitor');
export const previous = action('player.prev', mapIdentity);
export const next = action('player.next', mapIdentity);
