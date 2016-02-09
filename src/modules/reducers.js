export const reduceIf = (reducer, predicate, options = { payload: true }) =>
  (state, action) => predicate(action) ?
    reducer(state, options.payload ? action && action.payload : action) : state;

export const reduceAny = (reducer, actions) => {
  const ids = actions.map(a => a.toString());
  return reduceIf(reducer, a => ids.indexOf(a.__id__) !== -1);
};
