import * as actionTypes from './actionTypes';

export const loginSuccess = (data) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: data.token,
        userData: data.user,
    };
};

export const signUpSuccess = (data) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        userData: data.user,
    };
};

export const authFail = () => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: true
    };
};

export const logout = () => {

    return {
        type: actionTypes.AUTH_INITIATE_LOGOUT
    };
};

export const logoutSucceed = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const login = (email, password) => {
    return {
        type: actionTypes.AUTH_LOGIN,
        email: email,
        password: password
    }
};

export const signUp = (name, email, password) => {
    return {
        type: actionTypes.AUTH_SIGNUP,
        name: name,
        email: email,
        password: password
    }
};


export const updateSuccess = (data) => {
    return {
        type: actionTypes.UPDATE_SUCCESS,
        name: data.name,
    };
};

export const updateData = (name) => {
    return {
        type: actionTypes.UPDATE_DATA,
        name: name
    }
};

export const dataChange = (val) => {
    return {
        type: actionTypes.CHANGE_NAME,
        value: val
    };
};

export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE
    };
};


