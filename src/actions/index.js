import * as TYPES from './types';
import api from '../api/api';

/** 
 *  @description 
 *  Called when application is initialized.
 *    1. Get Popular Movies
 *    2. Get Genres
 *  @param {None}
 *  @returns {void}
 */
export const init = () => {
    return async (dispatch, oldState) => {
        dispatch({ type: TYPES.SHOW_LOADER });
        const popularMovies = await api.get('/movie/popular');
        dispatch({ type: TYPES.FETCH_POPULAR_MOVIES, payload: popularMovies.data });
        const genres = await api.get('/genre/movie/list');
        dispatch({ type: TYPES.FETCH_GENRES, payload: genres.data.genres });
        dispatch({ type: TYPES.HIDE_LOADER });
    }
}
export const changeMenuItem = (menuItem) => {
    return {
        type: TYPES.SET_SELECTED_MENU_OPTIONS,
        payload: menuItem
    };
}
export const getPopularMovies = (parameter) => {
    return async (dispatch) => {
        dispatch({ type: TYPES.FETCH_POPULAR_MOVIES_LOADING });
        const popularMovies = await api.get('/movie/'+ parameter);
        dispatch({ type: TYPES.FETCH_POPULAR_MOVIES, payload: popularMovies.data });
        dispatch({ type: TYPES.HIDE_LOADER });
        dispatch({ type: TYPES.FETCH_POPULAR_MOVIES_FINISHED });
    };
}

export const getGenresMovies = (genreId) => {
    return async (dispatch, oldState) => {
        dispatch({ type: TYPES.SHOW_LOADER });
        dispatch({ type: TYPES.FETCH_GENRES_MOVIES_LOADING });
        const genresMovies = await api.get(`/discover/movie?with_genres=${genreId}&sort_by=popularity.desc`);
        dispatch({ type: TYPES.FETCH_GENRES_MOVIES, payload: genresMovies.data });
        dispatch({ type: TYPES.HIDE_LOADER });
        dispatch({ type: TYPES.FETCH_GENRES_MOVIES_FINISHED });
    };
}

export const getMovieDetails = (movieId) => {
    return async (dispatch, oldState) => {
        dispatch({ type: TYPES.SHOW_LOADER });
        const movie = await api.get(`/movie/${movieId}?append_to_response=videos`);
        dispatch({ type: TYPES.FETCH_MOVIE_DETAILS, payload: movie.data });
        dispatch({ type: TYPES.HIDE_LOADER });
    }
}

export const getMovieCredits = (movieId) => {
    return async (dispatch, oldState) => {
        dispatch({ type: TYPES.SHOW_LOADER });
        const movie = await api.get(`/movie/${movieId}/credits?append_to_response=videos`);
        dispatch({ type: TYPES.FETCH_MOVIE_DETAILS_CREDITS, payload: movie.data });
        dispatch({ type: TYPES.HIDE_LOADER });
    }
}