import {combineReducers} from 'redux';
import adminReducer from './admin';
import menuReducer from "./menu";
import dishReducer from "./dish";
import authReducer from "./auth";
import productReducer from "./product";

export default combineReducers({
    auth:authReducer,
    admin: adminReducer,
    menu: menuReducer,
    dish: dishReducer,
    product: productReducer
});