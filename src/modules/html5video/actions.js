import { createAction as action } from 'redux-act';

const mapReadyState = readyState => ({ readyState });
const mapNetworkState = networkState => ({ networkState });
const mapError = (networkState, errorCode) => ({ networkState, errorCode });
const mapCurrentTime = currentTime => ({ currentTime });

export const init = action('video.init');

export const loadStart = action('video.loadStart', mapNetworkState);
export const progress = action(
  'video.progress',
  (networkState, bufferedTime) => ({ networkState, bufferedTime })
);
export const suspend = action('video.suspend', mapNetworkState);
export const abort = action('video.abort', mapError);
export const error = action('video.error', mapError);
export const emptied = action('video.emptied', mapNetworkState);
export const stalled = action('video.stalled', mapNetworkState);
export const loadedMetadata = action('video.loadedMetadata');
export const loadedData = action('video.loadedData', mapReadyState);
export const canPlay = action('video.canPlay', mapReadyState);
export const canPlayThrough = action('video.canPlayThrough', mapReadyState);
export const playing = action('video.playing', mapReadyState);
export const waiting = action('video.waiting', mapReadyState);
export const seeking = action('video.seeking', mapCurrentTime);
export const seeked = action('video.seeked', mapCurrentTime);
export const ended = action('video.ended', mapCurrentTime);
export const durationChange = action('video.durationChange', duration => ({ duration }));
export const timeUpdate = action(
  'video.timeUpdate',
  (currentTime, duration) => ({ currentTime, duration })
);
export const play = action('video.play');
export const pause = action('video.pause');
export const rateChange = action(
  'video.rateChange',
  playbackRate => ({ playbackRate })
);
export const resize = action('video.resize');
export const volumeChange = action(
  'video.volumeChange',
  (volume, muted) => ({ volume, muted })
);
export const toggleLoop = action('video.toggleLoop', loop => ({ loop }));

export const errorActions = [error, abort];
export const networkStateActions = [
  init,
  loadStart,
  progress,
  suspend,
  abort,
  error,
  emptied,
  stalled
];

export const readyStateActions = [
  init,
  loadedMetadata,
  loadedData,
  canPlay,
  canPlayThrough,
  waiting,
  resize
];

export const timeActions = [
  seeking,
  seeked,
  ended,
  timeUpdate
];
