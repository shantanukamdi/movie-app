import * as TYPES from '../actions/types';

const movieCredits = {
    cast: [],
    crew: []
}

export default (state = movieCredits, action) => {
    switch(action.type) {
        case TYPES.FETCH_MOVIE_DETAILS_CREDITS: {
            console.log('credit reducer', action.payload);
            return {
                ...state,
                cast: action.payload.cast,
                crew: action.payload.crew
            }
        }
        default: {
            return { ...state }
        }
    }
}