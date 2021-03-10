import { combineReducers } from 'redux';
import favReducer from './favorites';
import filterReducer from './filter';
import recipeReducer from './recipes';

const rootReducer = combineReducers({
  filter: filterReducer,
  favorites: favReducer,
  recipeList: recipeReducer,
});

export default rootReducer;
