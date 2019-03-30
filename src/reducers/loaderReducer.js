import * as TYPES from '../actions/types';

const show_loader = false;

export default (state = show_loader, action) => {
    switch(action.type) {
        case TYPES.SHOW_LOADER: {
            return {
                ...state,
                show_loader: true
            }
        }
        
        case TYPES.HIDE_LOADER: {
            return {
                ...state,
                show_loader: false
            }
        }
        
        default: {
            return state;
        }
    }
};