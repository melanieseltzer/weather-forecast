import { combineReducers } from 'redux';
import WeatherReducer from './weather';
import UnitReducer from './unit';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  unit: UnitReducer,
});

export default rootReducer;
