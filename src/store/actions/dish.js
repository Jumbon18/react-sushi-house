import axios from "axios";
import {FETCH_DISH_START, FETCH_DISH_SUCCESS, FETCH_LIKE_SUCCESS, FETCH_UPDATE_AMOUNT_DISH} from "./actionTypes";

export function fetchDish(id) {
    return async dispatch => {
        dispatch(fetchDishStart());
        const dishData = await axios.get(`http://localhost:3030/client/menu/dish/${id}`);
        console.log(dishData);
        const dish = dishData.data;
        dispatch(fetchDishSuccess(dish));
    }
}

/*export function fetchDishProducts(id) {
    return async dispatch => {
        try {

        } catch (e) {
            console.log(`Error in fetching dish products! ${e}`);
        }
    }
}*/

export function fetchLoadToAdmin(order) {
  return async (dispatch,getState)=>
    {
        try {
            const newOrder = await axios.post(`http://localhost:3030/client/order`,order);
            console.log(newOrder);
        } catch (e) {
            console.log(e);
        }
    }
  }
  export function fetchUpdateAmount(id,amount) {
      return{
          type:FETCH_UPDATE_AMOUNT_DISH,
          amount,id
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
        const deletedItem = newLikes.findIndex(el => el.Dish_id === id);
        console.log(deletedItem);
        newLikes.splice(deletedItem, 1);
        dispatch(fetchLikeSuccess(newLikes));
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