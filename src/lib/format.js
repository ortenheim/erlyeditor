import padLeft from 'lodash.padleft';

export function formatSeconds(value) {
  const minutes = padLeft(Math.floor(value / 60), 2, 0);
  const seconds = padLeft(value % 60, 2, 0);

  return `${minutes}:${seconds}`;
}

export function formatTime(currentTime, duration) {
  const current = formatSeconds(currentTime);
  const total = formatSeconds(duration);

  return `${current} / ${total}`;
}
