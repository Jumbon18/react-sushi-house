import axios from "axios";
import {FETCH_DISH_START, FETCH_DISH_SUCCESS, FETCH_LIKE_SUCCESS} from "./actionTypes";

export function fetchDish(id) {
    return async dispatch => {
        dispatch(fetchDishStart());
        const dishData = await axios.get(`http://localhost:3030/client/menu/dish/${id}`);
        console.log(dishData);
        const dish = dishData.data;
        dispatch(fetchDishSuccess(dish));
    }
}

export function fetchLikedDish(dishData) {
    return (dispatch, getState) => {
        const newItem = [...getState().dish.likedDishData];
        newItem.push(dishData);
        console.log(newItem.length);
        dispatch(fetchLikeSuccess(newItem));
    }
}

export function fetchUnlikedDish(id) {
    return (dispatch, getState) => {
        const newLikes = [...getState().dish.likedDishData];
        const deletedItem = newLikes.findIndex(el => el.id === id);
        const newItem = newLikes.splice(deletedItem, 1);
        console.log(newItem);
        dispatch(fetchLikeSuccess(newItem));
    }
}

export function fetchDishSuccess(dish, newItem) {
    return {
        type: FETCH_DISH_SUCCESS,
        dish,
        newItem
    }
}

export function fetchLikeSuccess(newItem) {
    return {
        type: FETCH_LIKE_SUCCESS,
        newItem
    }
}

export function fetchDishStart() {
    return {
        type: FETCH_DISH_START
    }
}