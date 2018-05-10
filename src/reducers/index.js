import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import UnitReducer from './reducer_unit';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  unit: UnitReducer
});

export default rootReducer;
