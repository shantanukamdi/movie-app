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
// const getPopularMovies = async () => {
//     return await api.get('/movie/popular');
// }

// const getGenres = async () => {
//     return await api.get('/genre/movie/list');
// }