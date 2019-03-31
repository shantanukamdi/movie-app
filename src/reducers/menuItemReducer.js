import * as TYPES from '../actions/types';

const menuItem = {
    selectedMenuItem: 'Popular'
};

export default (state = menuItem, action) => {
    switch(action.type) {
        case TYPES.SET_SELECTED_MENU_OPTIONS: {
            return {
                ...state,
                selectedMenuItem: action.payload
            }
        }
        case TYPES.CLEAR_SELECTED_MENU_OPTIONS: {
            return {
                ...state,
                selectedMenuItem: ''
            }
        }
        default: {
            return { ...state };
        }
    }
}