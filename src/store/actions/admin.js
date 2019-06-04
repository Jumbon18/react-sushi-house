import axios from 'axios';
import {FETCH_ORDER_START, FETCH_ORDER_SUCCESS, FETCH_ORDERS_SUCCESS} from "./actionTypes";

export function fetchOrders() {
    return async dispatch =>{
        dispatch(fetchOrdersStart());
        try{
            const globalData = await axios.get('http://localhost:3000/admin/allOrders');
            console.log(globalData);
            const orderList = globalData.data;
            dispatch(fetchOrdersSuccess(orderList))
        }catch (e) {
            console.log(e);
        }
    }
}
export function fetchUpdateOrder(order) {
    return async dispatch=>{
        
    }
}
export function fetchOrder(id) {
    return async dispatch =>{
        dispatch(fetchOrdersStart());
        try{
            const findOrder = await axios.get(`http://localhost:3000/admin/singular/${id}`);

            const order  = findOrder.data;
            console.log(order);
            dispatch(fetchOrderSuccess(order));
        }catch (e) {

            console.log(e);
        }
    }
}

export function fetchOrdersStart() {
    return{
        type:FETCH_ORDER_START
    }
}
export function fetchOrderSuccess(order) {
    return{
        type:FETCH_ORDER_SUCCESS,
        order
    }
}
export function fetchOrdersSuccess(orderList) {
    return{
        type:FETCH_ORDERS_SUCCESS,
        orderList
    }
}
