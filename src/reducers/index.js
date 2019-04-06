import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import genreReducer from './genreReducer';
import menuItemReducer from './menuItemReducer';
import popularMovieReducer from './popularMovieReducer';
import genreMovieReducer from './genreMovieReducer';
import movieDetailReducer from "./movieDetailReducer";
import creditReducer from './creditReducer';

export default combineReducers({
    loader: loaderReducer,
    genre: genreReducer,
    menuItem: menuItemReducer,
    popularMovie: popularMovieReducer,
    genreMovie: genreMovieReducer,
    movieDetails: movieDetailReducer,
    credits: creditReducer
});