import axios from "axios";
import {FETCH_PRODUCT_START, FETCH_PRODUCT_SUCCESS, FETCH_NEW_STATE_PRODUCT} from "./actionTypes";

export function fetchProduct() {
    return async dispatch => {
        dispatch(fetchProductStart());
        const globalData = await axios.get('http://localhost:3030/admin/menu/products');
        console.log(globalData);
        const productList = globalData.data;
        dispatch(fetchProductSuccess(productList));
    }
}

export function fetchProductSuccess(productList) {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        productList
    }
}

export function fetchProductStart() {
    return {
        type: FETCH_PRODUCT_START
    }
}

export function fetchDeleteProduct(id) {
        return async dispatch => {
            try {
                const newProducts = await axios.delete(`http://localhost:3030/admin/menu/products/${id}`);
                const newState = newProducts.data;
                console.log(newState);
                dispatch(fetchNewStateProduct(newState));
            } catch (e) {
                console.log(e);
            }
        }
}
    export function fetchUpdateProduct(product) {
        return async dispatch=> {
            try {
                const updatedProducts = await axios.patch(`http://localhost:3030/admin/menu/products/${product.Product_id}`, product);
                const newState = updatedProducts.data;
                console.log(newState);
                dispatch(fetchNewStateProduct(newState));
            } catch (e) {
                console.log(e);
            }
        }
    }

    export function fetchNewStateProduct(newState) {
        return {
            type: FETCH_NEW_STATE_PRODUCT,
            newState
        }
    }

    export function fetchAddProduct() {
        return async dispatch => {
            try {
                const newProducts = await axios.post('http://localhost:3030/admin/menu/products/add');
                console.log(newProducts);
                const newState = newProducts.data;
                dispatch(fetchNewStateProduct(newState));
            } catch (e) {
                console.log(e);
            }
        }
    }