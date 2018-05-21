import { combineReducers } from 'redux';
import UnitReducer from './unit';
import TermReducer from './term';
import WeatherReducer from './weather';
import IsLoadingReducer from './isloading';
import HasErroredReducer from './haserrored';

const rootReducer = combineReducers({
  hasErrored: HasErroredReducer,
  isLoading: IsLoadingReducer,
  unit: UnitReducer,
  term: TermReducer,
  weather: WeatherReducer,
});

export default rootReducer;
