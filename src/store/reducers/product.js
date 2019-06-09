import {
    FETCH_NEW_STATE_PRODUCT,
    FETCH_PRODUCT_START,
    FETCH_PRODUCT_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    loading: false,
    productList: []
};
export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT_START:
            return {
                ...state, loading: true
            };
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state, loading: false, productList: action.productList
            };
        case FETCH_NEW_STATE_PRODUCT:
            return {...state, productList: action.newState};
        default:
            return state;
    }
}