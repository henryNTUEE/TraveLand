import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import CityReducer from './reducer_city';
import YelpReducer from './reducer_yelp';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  city: CityReducer,
  yelp: YelpReducer,
  form: formReducer

});

export default rootReducer;
