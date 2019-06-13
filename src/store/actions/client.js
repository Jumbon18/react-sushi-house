import axios from "axios";
import {FETCH_PERSONAL_START, FETCH_PERSONAL_SUCCESS} from "./actionTypes";

export function fetchAllPersonal(token,url = window.location.pathname) {
    console.log(url,'action');
    return async (dispatch, getState) => {
        console.log('fetching all orders');
      /*  let config = {
            headers: {
                'Authorization': Bearer ${getState().auth.token}
            }
        };*/
        dispatch(fetchPersonalOrdersStart());
        try {
          //TODO:AВТОРИЗАЦИЯ  const globalData = await axios.get(`http://localhost:3000${url}`, config);
            const globalData = await axios.get(`http://localhost:3000${url}`);

            console.log(globalData);
            const personalList = globalData.data;
            dispatch(fetchPersonalSuccess(personalList))
        } catch (e) {
            console.log(e);
        }
    }
}
export function fetchPersonalOrdersStart(){
return{
    type:FETCH_PERSONAL_START
}
}

export function fetchPersonalSuccess(personalList) {
    return{
        type:FETCH_PERSONAL_SUCCESS,
        personalList
    }
}