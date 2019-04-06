import * as TYPES from '../actions/types';

const movieDetails = {};

export default (state = movieDetails, action) => {
    switch(action.type) {
        case TYPES.FETCH_MOVIE_DETAILS: {
            // console.log('movie detail reducere', action.payload);
            return {
                ...state,
                movieDetails: action.payload
            };
        }
        default: {
            return { ...state }
        }
    }
};