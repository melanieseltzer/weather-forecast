import { combineReducers } from 'redux';
import UnitReducer from './unit';
import TermReducer from './term';
import WeatherReducer from './weather';
import IsLoadingReducer from './isloading';

const rootReducer = combineReducers({
  isLoading: IsLoadingReducer,
  unit: UnitReducer,
  term: TermReducer,
  weather: WeatherReducer,
});

export default rootReducer;
