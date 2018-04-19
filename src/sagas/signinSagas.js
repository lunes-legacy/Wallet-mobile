import { call, put } from 'redux-saga/effects';
import SigninActions from 'app/src/redux/signinRedux';
import { saveItemUserInStore } from 'app/src/services/UserServices';

export function* loginRequest(api, action) {
  const { user } = action;
  try {
    const response = yield call(api.login, user);
    yield put(SigninActions.success(response));
    yield call(saveItemUserInStore, user.email);
  } catch (error) {
    yield put(SigninActions.failure(error));
  }
}

export function* signupRequest(api, action) {
  const { user } = action;
  try {
    const response = yield call(api.create, user);
    yield put(SigninActions.success(response));
    yield call(saveItemUserInStore, user.email);
  } catch (error) {
    yield put(SigninActions.failure(error));
  }
}
