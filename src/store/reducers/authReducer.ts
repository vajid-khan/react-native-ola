import * as actions from '../actionTypes';

const initialState = {
    token: null,
    loading: false,
    user: {

    }
}

const authReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {

        case actions.AUTH_INIT:
            newState.loading = true;
            return newState;

        case actions.AUTH_LOGIN:
            newState.token = 'TOKEN';
            newState.user = { ...action.payload }
            newState.loading = false;
            return newState;

        case actions.AUTH_LOGOUT:
            return initialState

        default:
            return newState;
    }
}

export default authReducer;