import * as TYPES from '../actions/types';

const genres = [];

export default (state = genres, action) => {
    switch(action.type) {
        case TYPES.FETCH_GENRES_LOADING: {
            return {
                ...state
            }
        }
        case TYPES.FETCH_GENRES: {
            return {
                ...state,
                genres: action.payload
            }
        }
        case TYPES.FETCH_GENRES_FINISHED: {
            return {
                ...state
            }
        }
        default: {
            return state;
        }
    }
};