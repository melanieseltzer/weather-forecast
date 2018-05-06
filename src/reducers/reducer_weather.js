import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  if (action.error) {
    document.getElementById('errorSpan').innerHTML = 'Invalid city';
    return state;
  }
  
  switch (action.type) {
  case FETCH_WEATHER:
    document.getElementById('errorSpan').innerHTML = '';
      return [[action.payload.request.responseURL, action.payload.data], ...state];
  }
  
  return state;
}
