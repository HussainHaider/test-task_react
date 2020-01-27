import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
    userId: null,
    name: '',
    email: '',
    error: false,
    fromSignUp: false,
    successMsg: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case actionTypes.LOGIN_SUCCESS:
            return updateObject(state,{token: action.token,
                userId:action.userData._id,
                name: action.userData.name,
                email: action.userData.email,
                error: false,
                fromSignUp: false,
                successMsg: false
            });

        case actionTypes.AUTH_FAIL:
            return updateObject(state,{error: action.error});
        case actionTypes.AUTH_LOGOUT:
            return updateObject(state,{token: null,
                userId: null,
                name: '',
                email: '',
                error: false,
                fromSignUp: false,
                successMsg: false
            });

        case actionTypes.CHANGE_NAME:
            return updateObject(state,{name: action.value,successMsg: false});

        case actionTypes.UPDATE_SUCCESS:
            return updateObject(state,{name: action.name,successMsg: true});

        case actionTypes.SIGNUP_SUCCESS:
            return updateObject(state,{fromSignUp: true,error: false,successMsg: false});

        default:
            return state;
    }
};

export default reducer;
