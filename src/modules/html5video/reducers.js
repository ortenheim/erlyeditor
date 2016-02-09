import getError, { resetError } from './errors';
import getNetworkState, { networkNoSource } from './networkStates';
import getReadyState, { haveEnoughData } from './readyStates';

// here you can decide how state will transition depending on
// networkState and readyState + current player state

const networkStateReducer = (state, { networkState }) => ({
  ...state,
  networkState: getNetworkState(networkState)
});

const readyStateReducer = (state, { readyState }) => ({
  ...state,
  readyState: getReadyState(readyState),
  loading: readyState !== haveEnoughData
});

export const updateNetworkState = resetError(
  networkStateReducer,
  ({ networkState }) => networkState !== networkNoSource
);
export const updateReadyState = resetError(readyStateReducer);

export const updateCurrentTime = ({ percentage, ...state }, { currentTime }) => {
  const played = Math.floor(currentTime / Math.max(state.duration, 1) * 100);
  return {
    ...state,
    currentTime: Math.floor(currentTime),
    percentage: { ...percentage, played }
  };
};

export const updateError = (state, { errorCode }) => ({
  ...state, error: getError(errorCode)
});
