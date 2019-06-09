import {FETCH_DISH_START, FETCH_DISH_SUCCESS, FETCH_LIKE_SUCCESS} from "../actions/actionTypes";

const initialState = {
    loading: false,
    dishData: null,
    likedDishData: []
};
export default function dishReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DISH_START:
            return {
                ...state, loading: true
            };
        case FETCH_DISH_SUCCESS:
            return {
                ...state, loading: false, dishData: action.dish
            };
        case FETCH_LIKE_SUCCESS:
            return {
                ...state, loading: false, likedDishData: action.newItem
            };
        default:
            return state;
    }
}