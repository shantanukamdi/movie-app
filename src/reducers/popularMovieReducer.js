import * as TYPES from '../actions/types';

const popularMovies = {
    popularMovies: {},
    isPopularMoviesLoading: true
};

export default (state = popularMovies, action) => {
    switch(action.type) {
        case TYPES.FETCH_POPULAR_MOVIES_LOADING: {
            return {
                ...state,
                isPopularMoviesLoading: true
            };
        }

        case TYPES.FETCH_POPULAR_MOVIES_FINISHED: {
            return {
                ...state,
                isPopularMoviesLoading: false
            };
        }

        case TYPES.FETCH_POPULAR_MOVIES: {
            return {
                ...state,
                popularMovies: action.payload,
                isPopularMoviesLoading: false
            };
        }

        default: {
            return {
                ...state
            };
        }
    }
};