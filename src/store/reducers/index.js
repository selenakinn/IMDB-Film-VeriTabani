import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';
const reducers = combineReducers({
  favorites: favoritesReducer,
  movies: movieReducer,
});

export default reducers;
