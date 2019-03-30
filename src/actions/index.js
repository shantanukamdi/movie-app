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
    return async (dispatch) => {
        dispatch({ type: TYPES.SHOW_LOADER });
        // await dispatch(getPopularMovies());
        const popularMovies = await getPopularMovies();
        dispatch({ type: TYPES.FETCH_POPULAR_MOVIES, payload: popularMovies });
        // await dispatch(getGenres());
        dispatch({ type: TYPES.HIDE_LOADER });
    }
}

const getPopularMovies = async () => {
    const popularMovies = await api.get('/movie/popular');
    console.log(popularMovies);
}