import { UPDATE_UNIT } from '../actions/index';

export default function (state = 'F', action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case UPDATE_UNIT:
      return action.payload;
    default:
      return state;
  }
}
