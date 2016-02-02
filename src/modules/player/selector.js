import { createSelector } from 'reselect';

export default createSelector(
  s => s.player,
  ({ sources, sourceIndex, ...player }) => ({
    ...player, sources, sourceIndex,
    source: sources[sourceIndex]
  })
);
