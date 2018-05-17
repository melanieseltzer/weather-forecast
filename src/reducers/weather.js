import { FETCH_WEATHER, CLEAR_CITY } from '../actions/index';

export default function (state = [], action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload, ...state];
    case CLEAR_CITY:
      return [];
    default:
      return state;
  }
}