const unknown = {
  title: 'UNKNOWN_ERROR',
  body: 'Something went wrong.'
};

export const abortedError = 1;
export const networkError = 2;
export const decodeError = 3;
export const sourceNotSupported = 4;

export const errors = {
  [abortedError]: {
    title: 'MEDIA_ERR_ABORTED',
    body: `The fetching process for the media resource
    was aborted by the user agent at the users request.`
  },
  [networkError]: {
    title: 'MEDIA_ERR_NETWORK',
    body: `A network error of some description
    caused the user agent to stop fetching the media resource,
    after the resource was established to be usable.`
  },
  [decodeError]: {
    title: 'MEDIA_ERR_DECODE',
    body: `An error of some description occurred
    while decoding the media resource,
    after the resource was established to be usable.`
  },
  [sourceNotSupported]: {
    title: 'MEDIA_ERR_SRC_NOT_SUPPORTED',
    body: `The media resource indicated by
    the src attribute or assigned media provider object was not suitable.`
  }
};

const truthy = () => true;

export const resetError = reducer =>
  ({ error, ...state }, payload, predicate = truthy) =>
    reducer({ ...state, error: predicate(state, payload) ? null : error }, payload);

export default code => ({ code, ...errors[code] }) || ({ code, ...unknown });
