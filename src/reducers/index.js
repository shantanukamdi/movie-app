import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import genreReducer from './genreReducer';
import menuItemReducer from './menuItemReducer';

export default combineReducers({
    loader: loaderReducer,
    genre: genreReducer,
    menuItem: menuItemReducer
});