import { PropTypes } from 'react';

const { bool, number, string, func, shape } = PropTypes;

export const videoAPIType = shape({
  toggleMute: func.isRequired,
  toggleLoop: func.isRequired,
  togglePlay: func.isRequired,
  toggleFullScreen: func.isRequired,
  setVolume: func.isRequired,
  setPlaybackRate: func.isRequired,
  seek: func.isRequired
});

export const videoStateType = shape({
  code: number,
  title: string,
  body: string
});

export const percentageType = shape({
  buffered: number.isRequired,
  played: number.isRequired
});

export const sizeType = shape({
  width: number.isRequired,
  height: number.isRequired,
  videoWidth: number.isRequired,
  videoHeight: number.isRequired
});

export const playerActionsType = shape({
  toggleDebugMonitor: func.isRequired,
  previous: func,
  next: func
});

export const videoActionsType = shape({
  loadStart: func.isRequired,
  progress: func.isRequired,
  suspend: func.isRequired,
  abort: func.isRequired,
  error: func.isRequired,
  emptied: func.isRequired,
  stalled: func.isRequired,
  loadedMetadata: func.isRequired,
  loadedData: func.isRequired,
  canPlay: func.isRequired,
  canPlayThrough: func.isRequired,
  playing: func.isRequired,
  waiting: func.isRequired,
  seeking: func.isRequired,
  seeked: func.isRequired,
  ended: func.isRequired,
  durationChange: func.isRequired,
  timeUpdate: func.isRequired,
  play: func.isRequired,
  pause: func.isRequired,
  rateChange: func.isRequired,
  resize: func.isRequired,
  volumeChange: func.isRequired
});

export const playbackRateType = shape({
  step: number.isRequired,
  min: number.isRequired,
  max: number.isRequired
});

export const videoOwnProps = {
  preload: string,
  autoPlay: bool,
  autoBuffer: bool,
  controls: bool,
  loop: bool,
  muted: bool,
  src: string,
  poster: string,
  width: number,
  height: number
};

export const videoStateProps = {
  readyState: videoStateType,
  networkState: videoStateType,
  error: videoStateType,
  size: sizeType,

  currentTime: number.isRequired,
  duration: number.isRequired,

  percentage: percentageType.isRequired,

  paused: bool.isRequired,
  loading: bool.isRequired,
  seeking: bool.isRequired,
  canPlay: bool.isRequired,
  canPlayThrough: bool.isRequired,
  playbackRate: number.isRequired
};

export const videoProps = {
  ...videoOwnProps,
  ...videoStateProps
};
