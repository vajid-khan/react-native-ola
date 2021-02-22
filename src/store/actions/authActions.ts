import * as actionTypes from '../actionTypes';

export const userLogin = payload => {
    return {
        type: actionTypes.AUTH_LOGIN,
        payload: payload
    }
}

export const loginSuccess = payload => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: payload
    }
}

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}