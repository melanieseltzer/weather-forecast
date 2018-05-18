import { UPDATE_TERM } from '../actions/index';

export default function (state = '', action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case UPDATE_TERM:
      return action.payload;
    default:
      return state;
  }
}
