import {FETCH_MENU_START, FETCH_MENU_SUCCESS, FETCH_NEW_STATE} from "../actions/actionTypes";

const initialState = {
    loading: false,
    MenuList: []
};
export default function menuReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MENU_START:
            return {
                ...state, loading: true
            };
        case FETCH_MENU_SUCCESS:
            return {
                ...state, loading: false, MenuList: action.menuList
            };
        case FETCH_NEW_STATE:
            return {...state, MenuList: action.newState};
        default:
            return state;
    }
}