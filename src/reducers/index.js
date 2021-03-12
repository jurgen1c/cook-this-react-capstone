import { combineReducers } from 'redux';
import filterReducer from './filter';
import recipeReducer from './recipes';

const rootReducer = combineReducers({
  filter: filterReducer,
  recipeList: recipeReducer,
});

export default rootReducer;
