import { takeEvery,all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {
  logoutSaga,
  logInSaga,
  signUpSaga,
  updateDataSaga,
  authCheckStateSaga
} from "./auth";


export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_LOGIN, logInSaga),
    takeEvery(actionTypes.AUTH_SIGNUP, signUpSaga),
    takeEvery(actionTypes.UPDATE_DATA, updateDataSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
  ]);
}


