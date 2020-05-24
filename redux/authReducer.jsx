import { authAPI } from "../API/API";
import { stopSubmit } from "redux-form";

const CHECK_USER_AUTH = 'check_user_auth';

export const setAuthUserData = (userId, login, email, isAuth) => { return { type: CHECK_USER_AUTH, data: { userId, login, email, isAuth } } };

let initState = {
    userId: null,
    login: null,
    email: null,
    rememberMe: false,
    isAuth: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case CHECK_USER_AUTH: {
            return {
                ...state,
                ...action.data
            };
        }

        default:
            return state;
    }
}

export const acceptAuth = () => (dispatch) => {
    return authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        });
}

export const signIn = (email, password, rememberMe) => (dispatch) => {
    authAPI.signIn(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(acceptAuth());
        } else {
            dispatch(stopSubmit('login', { _error: response.data.messages[0] }));
        }
    });
}


export const signOut = () => (dispatch) => {
    authAPI.signOut().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false, false));
        }
    });
}

export default authReducer;