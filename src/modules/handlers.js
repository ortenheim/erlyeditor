/* eslint-disable no-param-reassign */
export const handleAll = (reducer, actions) =>
  actions.reduce((handlers, action) =>
    ((handlers[action.id] = reducer) && handlers), {});
/* eslint-enable no-param-reassign */
