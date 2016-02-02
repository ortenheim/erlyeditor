import { createAction } from 'redux-act';

export const togglePlay = createAction('player.togglePlay', playing => ({ playing }));
export const stop = createAction('player.stop');
export const next = createAction('player.next', id => ({ id }));
export const previous = createAction('player.prev', id => ({ id }));

export const updateTime = createAction('player.updateTime', currentTime => ({ currentTime }));
export const seek = createAction('player.seek', currentTime => ({ currentTime }));
