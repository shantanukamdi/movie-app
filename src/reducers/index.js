import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import genreReducer from './genreReducer';
import menuItemReducer from './menuItemReducer';
import popularMovieReducer from './popularMovieReducer';
import genreMovieReducer from './genreMovieReducer';

export default combineReducers({
    loader: loaderReducer,
    genre: genreReducer,
    menuItem: menuItemReducer,
    popularMovie: popularMovieReducer,
    genreMovie: genreMovieReducer
});