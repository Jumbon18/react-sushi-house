import axios from 'axios';
import {FETCH_ORDER_START, FETCH_ORDER_SUCCESS, FETCH_ORDERS_SUCCESS, FETCH_SUCCESS_DISHES} from "./actionTypes";

export function fetchOrders() {
    return async dispatch =>{
        dispatch(fetchOrdersStart());
        try{
            const globalData = await axios.get('http://localhost:3030/admin');
            console.log(globalData);
            const orderList = globalData.data;
            dispatch(fetchOrdersSuccess(orderList))
        } catch (e) {
            console.log(e);
        }
    }
}
export function fetchUpdateOrder(order) {
    return async (dispatch, getState) => {
        try {
            let config = {
                headers: {
                    'Authorization': `Bearer ${getState().auth.token}`
                }
            };
            const updateOrder = await axios.patch(`http://localhost:3030${window.location.pathname}`, order, config);
            const newData = updateOrder.data;
            dispatch(fetchOrderSuccess(newData));
        } catch (e) {
            console.log(e);
        }
    }

}
export function fetchOrder(id) {
    return async dispatch =>{
        dispatch(fetchOrdersStart());
        try{
            const findOrder = await axios.get(`http://localhost:3030/admin/${id}`);
            const order  = findOrder.data;
            console.log(order);
            dispatch(fetchOrderSuccess(order));
        }catch (e) {
            console.log(e);
        }
    }
}
export function fetchSubCurrentOrder(id) {
    return async (dispatch, getState) => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getState().auth.token}`
            }
        };
        try {
            dispatch(fetchOrdersStart());
            const allData = await axios.get(`http://localhost:3030/admin/${id}`, config);
            const order = allData.data;

            dispatch(fetchOrderSuccess(order));
        } catch (e) {
            console.log(e);

        }
    }

}

export function fetchDeleteDishInList(id) {
    return async (dispatch, getState) => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getState().auth.token}`
            }
        };
        try {
            const allData = await axios.delete(`http://localhost:3030${window.location.pathname}/${id}`);
            const order = allData.data;
            console.log(order, 'deleted');
            dispatch(fetchOrderSuccess(order));
        } catch (e) {
            console.log(e);
        }
    }
}export function fetchUpdatedSingleOrder(dish) {
    return async (dispatch, getState) => {
        dispatch(fetchOrdersStart());
        try {
            let config = {
                headers: {
                    'Authorization': `Bearer ${getState().auth.token}`
                }
            };
            const updateOrder = await axios.post(`http://localhost:3000/admin/${dish.id}`, dish, config);
            const order = updateOrder.data;
            console.log(order);
            dispatch(fetchOrderSuccess(order));
        } catch (e) {
            console.log(e);
        }
    }
}
export function fetchDeleteOrder(id) {
    return async dispatch => {
        try {
            await axios.delete(`http://localhost:3030/admin/delete/order/${id}`);
            dispatch(fetchOrders());
        } catch (e) {
            console.log(e);
        }
    }
}
export function fetchAllDeishes() {
    return async (dispatch, getState) => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getState().auth.token}`
            }
        };
        try {
            dispatch(fetchOrdersStart());
            const dataAll = await axios.get(`http://localhost:3030/menu`, config);
            const menu = dataAll.data;
            console.log(menu);
            dispatch(fetchSuccessDishes(menu));
        } catch (e) {
            console.log(e)
        }
    }
}

export function fetchDeleteDishFromOrder() {
    return async (dispatch, getState) => {
        const deleteItem = await axios.delete(`http://locahost:3030/`)
    }
}

export function fetchSuccessDishes(menu) {
    return {
        type: FETCH_SUCCESS_DISHES,
        menu
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
