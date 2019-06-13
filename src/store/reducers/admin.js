import {
    FETCH_ORDER_START,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDERS_SUCCESS,
    FETCH_SUCCESS_DISHES
} from "../actions/actionTypes";

const initialsState={
    loading:false,
    orderList:[],
    menuList:[],
    currentOrder:null,
    success_order:null
};

export default function adminReducer(state = initialsState,action) {
    switch (action.type) {
        case FETCH_ORDER_START:
            return{
                ...state,loading: true
            };

        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,orderList:action.orderList
            };
        case FETCH_ORDER_SUCCESS:
            return{
                ...state,currentOrder:action.order
            };
        case FETCH_SUCCESS_DISHES:
            return{
                ...state,menuList:action.menu,loading:false
            };
        default:
            return  state;
    }
}