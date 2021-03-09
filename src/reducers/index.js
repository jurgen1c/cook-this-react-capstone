
import { combineReducers } from 'redux';
import filterReducer from './filter';

const rootReducer = combineReducers({
  filter: filterReducer,
});

export default rootReducer;