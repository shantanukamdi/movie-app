import * as TYPES from '../actions/types';

const genreMovies = {
    movies: [],
    isGenreMovieLoading: false
};

export default (state = genreMovies, action) => {
    switch (action.type) {
        case TYPES.FETCH_GENRES_MOVIES_LOADING: {
            return {
                ...state
            }
        }
        case TYPES.FETCH_GENRES_MOVIES: {
            return {
                ...state,
                movies: action.payload
            }
        }
        case TYPES.FETCH_GENRES_MOVIES_FINISHED: {
            return {
                ...state
            }
        }
        default: {
            return state;
        }
    }
}