import axios from 'axios';

const API_KEY = '011f91cfb43ec1af90bb7a1ac999cff9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const UPDATE_UNIT = 'UPDATE_UNIT';
export const CLEAR_CITY = 'CLEAR_CITY';

export function fetchWeather(city, unit) {
  const url = `${ROOT_URL}&q=${city},us&units=${unit}`;
  const request = new Promise((resolve, reject) => {
    axios.get(url)
    .then(response => resolve(response.data))
  })

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function getUnit(selectedUnit) {
  return {
    type: UPDATE_UNIT,
    payload: selectedUnit
  };
}

export function clear() {
  return {
    type: CLEAR_CITY
  };
}

