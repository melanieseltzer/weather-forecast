import axios from 'axios';

const API_KEY = '011f91cfb43ec1af90bb7a1ac999cff9';
const ROOT_URL = `//api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const CLEAR = 'CLEAR';
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const UPDATE_UNIT = 'UPDATE_UNIT';
export const UPDATE_TERM = 'UPDATE_TERM';

export function clear() {
  return {
    type: CLEAR,
  };
}

export function updateTerm(city) {
  return {
    type: UPDATE_TERM,
    payload: city,
  };
}

export function fetchWeather(city, unit) {
  let selectedUnit = unit;

  if (selectedUnit === 'F') {
    selectedUnit = 'imperial';
  } else {
    selectedUnit = 'metric';
  }

  const url = `${ROOT_URL}&q=${city},us&units=${selectedUnit}`;
  const request = axios.get(url);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch(clear());
      dispatch(updateTerm(city));
      dispatch({
        type: UPDATE_UNIT,
        payload: unit,
      });
      dispatch({
        type: FETCH_WEATHER,
        payload: data,
      });
    });
  };
}
