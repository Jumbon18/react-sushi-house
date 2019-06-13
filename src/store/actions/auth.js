import axios from "axios";
import {FETCH_SUCCESS_TOKEN, FETCH_USER_ROLE} from "./actionTypes";
import React from "react";
import {Redirect} from "react-router-dom";


export function auth(Email, Password) {
    return async dispatch => {
        const user = {
            Email,
            Password
        };
        if (user.Email)
            try {
                const login = await axios.post('http://localhost:3030/auth/login', {
                    user,
                    withCredentials: true
                });
                const token = login.data.token;
                const role = login.data.findUser.Role;
                console.log(token, login.data.findUser);

                localStorage.setItem('token', token);
                localStorage.setItem('role', role);
                dispatch(fetchUserRole(role));
                dispatch(fetchSuccesToken(token));
            } catch (e) {
                console.log(e);
            }
    }
}

export function signUp(user) {
    return async dispatch => {
        try {
            const newUser = await axios.post('http://localhost:3030/auth/signup', user);
            const token = newUser.data.token;

            dispatch(fetchSuccesToken(token));

            console.log(newUser)
        } catch (e) {
            console.log(e);


        }
    }
}

export function autoLogin() {
    return dispatch => {

        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        console.log(token);
        dispatch(fetchSuccesToken(token));
        dispatch(fetchUserRole(role));
    }
}

export function fetchUserRole(role) {
    return {
        type: FETCH_USER_ROLE,
        role
    }
}

export function fetchSuccesToken(token) {
    return {
        type: FETCH_SUCCESS_TOKEN,
        token
    }
}