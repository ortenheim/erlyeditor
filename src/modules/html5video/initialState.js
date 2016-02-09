import * as storage from '../../lib/storage';

export default {
  error: null,
  networkState: null,
  readyState: null,

  size: null,

  currentTime: 0,
  duration: 0,

  percentage: {
    buffered: 0,
    played: 0
  },

  paused: true,
  loading: false,
  seeking: false,

  loop: storage.load('html5video.loop', false),
  muted: storage.load('html5video.muted', false),
  volume: storage.load('html5video.volume', 0.5),
  playbackRate: storage.load('html5video.playbackRate', 1.0),

  canPlay: false,
  canPlayThrough: false
};
