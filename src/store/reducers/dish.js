import {
    FETCH_DISH_START,
    FETCH_DISH_SUCCESS,
    FETCH_LIKE_SUCCESS,
    FETCH_UPDATE_AMOUNT_DISH
} from "../actions/actionTypes";

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
        case FETCH_UPDATE_AMOUNT_DISH:

            return {
                ...state, likedDishData:state.likedDishData.map((item, index) => {
                    // Find the item with the matching id
                    if (item.Dish_id === action.id) {
                        // Return a new object
                        return {
                            ...item,  // copy the existing item
                            dish_amount: action.amount  // replace the email addr
                        }
                    }
                    // Leave every other item unchanged
                    return item;
                })
    };

        default:
            return state;
    }
}