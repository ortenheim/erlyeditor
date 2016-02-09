const unknown = {
  title: 'UNKNOWN_READY_STATE',
  body: `This can't be real. What browser is that?`
};

export const haveNothing = 0;
export const haveMetadata = 1;
export const haveCurrentData = 2;
export const haveFutureData = 3;
export const haveEnoughData = 4;

export const readyStates = {
  [haveNothing]: {
    title: 'HAVE_NOTHING',
    body: `No information regarding the media resource is available.`
  },
  [haveMetadata]: {
    title: 'HAVE_METADATA',
    body: `Enough of the resource has been obtained that
    the duration of the resource is available.`
  },
  [haveCurrentData]: {
    title: 'HAVE_CURRENT_DATA',
    body: `Not enough data.`
  },
  [haveFutureData]: {
    title: 'HAVE_FUTURE_DATA',
    body: `Have some data.`
  },
  [haveEnoughData]: {
    title: 'HAVE_ENOUGH_DATA',
    body: `Have enought data to start the playback.`
  }
};

export default code => ({ code, ...readyStates[code] }) || ({ code, ...unknown });
