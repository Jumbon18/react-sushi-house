import axios from "axios";
import {FETCH_MENU_START, FETCH_MENU_SUCCESS, FETCH_NEW_STATE} from "./actionTypes";

export function fetchMenu(category) {
    return async dispatch => {
        dispatch(fetchMenuStart());
        const globalData = await axios.get(`http://localhost:3030/client/menu/${category}`);
        const menuList = globalData.data;
        dispatch(fetchMenuSuccess(menuList));
    }
}
export function fetchMenuSuccess(menuList,) {
    return {
        type: FETCH_MENU_SUCCESS,
        menuList
    }
}
export function fetchMenuStart() {
    return {
        type: FETCH_MENU_START
    }
}
export function fetchNewState(newState) {
    return {
        type: FETCH_NEW_STATE,
        newState
    }
}
export function fetchDeleteItem(id) {
    return async dispatch => {
       const newDishes = await axios.delete(`http://localhost:3030/admin/menu/sets/${id}`);
       const newState = newDishes.data;
        dispatch(fetchNewState(newState));
    }
}