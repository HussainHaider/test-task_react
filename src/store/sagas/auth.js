import { put } from "redux-saga/effects";
import axios from "../../axios-auth";

import * as actions from "../actions/index";

export function* logoutSaga(action) {
  localStorage.removeItem('token');
  yield put(actions.logoutSucceed());
}

export function* logInSaga(action) {
  const authData = {
    email: action.email,
    password: action.password,
  };

  try {
    const response = yield axios.post('/login',authData);
    yield localStorage.setItem('token', response.data.token);
    yield put(actions.loginSuccess(response.data));

  } catch (error) {
    console.log("Error: " + error);

    if(error.response.status===400) {
      yield put(actions.authFail());
    }
  }
}

export function* signUpSaga(action) {
  const authData = {
    name:action.name,
    email: action.email,
    password: action.password,
  };

  try {
    const response = yield axios.post('/signUp',authData);
    console.log("Data: " + JSON.stringify(response.data.token));
    yield put(actions.signUpSuccess(response.data));
  } catch(error) {
    if(error.response.status===400) {
      yield put(actions.authFail());
    }
  }
}

export function* updateDataSaga(action) {
  const authData = {
    name: action.name
  };

  try {
    const response = yield axios.patch('/me',authData,
        {
          headers: {
            Authorization: 'Bearer '+localStorage.getItem('token')
          }
        });

    console.log("Data: " + JSON.stringify(response.data));
    yield put(actions.updateSuccess(response.data));

  } catch(error) {
    if(error.response.status===400) {

    }
  }
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem("token");
  console.log("token: " + token);
  if(token) {

    try {
      const response = yield axios.get('/me',
          {
            headers: {
              Authorization: 'Bearer '+localStorage.getItem('token')
            }
          });

      console.log("Data: " + JSON.stringify(response.data));
      let data = {
        token: token,
        user: response.data
      };
      yield put(actions.loginSuccess(data));
    } catch (error) {
      console.log(error);
    }
  }
}
