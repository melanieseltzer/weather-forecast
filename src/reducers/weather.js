import { FETCH_WEATHER, CLEAR } from '../actions/index';

export default function (state = [], action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case CLEAR:
      return [];
    case FETCH_WEATHER:
      return [action.payload, ...state];
    default:
      return state;
  }
}
