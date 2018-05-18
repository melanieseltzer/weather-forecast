import { combineReducers } from 'redux';
import UnitReducer from './unit';
import TermReducer from './term';
import WeatherReducer from './weather';

const rootReducer = combineReducers({
  unit: UnitReducer,
  term: TermReducer,
  weather: WeatherReducer,
});

export default rootReducer;
