import {FETCH_SUCCESS_TOKEN, FETCH_USER_ROLE} from "../actions/actionTypes";

const initialsState={
    token:null,
    role:false
};
export default function authReducer(state = initialsState,action) {
    switch (action.type) {
        case FETCH_SUCCESS_TOKEN:
            return{
                ...state,token:action.token
            };
        case FETCH_USER_ROLE:
            return {
                ...state,role:action.role
            };
        default:
            return state;
    }
}