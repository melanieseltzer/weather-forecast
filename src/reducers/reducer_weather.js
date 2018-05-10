import { FETCH_WEATHER, CLEAR_CITY } from '../actions/index';

export default function (state = [], action) {
  if (action.error) {
    document.getElementById('errorSpan').innerHTML = 'Invalid city';
    return state;
  }
  
  switch (action.type) {
    case FETCH_WEATHER:
      document.getElementById('errorSpan').innerHTML = '';
      return [action.payload, ...state];
    case CLEAR_CITY:
      return [];
    default:
      return state;
  }
  
  return state;
}
