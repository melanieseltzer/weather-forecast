import { FETCH_WEATHER, CLEAR_CITY } from '../actions/index';

export default function (state = [], action) {
  if (action.error) {
    document.getElementById('error').innerHTML = 'Invalid city';
    return state;
  }
  
  switch (action.type) {
    case FETCH_WEATHER:
      document.getElementById('error').innerHTML = '';
      return [action.payload, ...state];
    case CLEAR_CITY:
      return [];
    default:
      return state;
  }
  
  return state;
}
