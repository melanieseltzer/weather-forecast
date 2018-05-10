import { GET_UNIT } from '../actions/index';

const initialState = {
  selected: 'imperial'
}

export default function (state = initialState, action) {
  if (action.error) {
    return state;
  }
  
  switch (action.type) {
    case GET_UNIT:
      return {
        ...state,
        selected: action.payload
      };
    default:
      return state;
  }
  
  return state;
}
