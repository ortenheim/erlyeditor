const unknown = {
  title: 'UNKNOWN_NETWORK_STATE',
  body: 'Is this possible at all? Something went wrong.'
};

export const networkEmpty = 0;
export const networkIdle = 1;
export const networkLoading = 2;
export const networkNoSource = 3;

export const networkStates = {
  [networkEmpty]: {
    title: 'NETWORK_EMPTY',
    body: `The element has not yet been initialized.
      All attributes are in their initial states.`
  },
  [networkIdle]: {
    title: 'NETWORK_IDLE',
    body: `The element's resource selection algorithm is active and
    has selected a resource, but it is not actually using the network at this time.`
  },
  [networkLoading]: {
    title: 'NETWORK_LOADING',
    body: `The user agent is actively trying to download data.`
  },
  [networkNoSource]: {
    title: 'NETWORK_NO_SOURCE',
    body: `The element's resource selection algorithm is active,
    but it has not yet found a resource to use.`
  }
};

export default code => ({ code, ...networkStates[code] }) || ({ code, ...unknown });
