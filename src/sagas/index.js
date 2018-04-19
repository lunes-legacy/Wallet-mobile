import { takeLatest, all } from 'redux-saga/effects';
import API from 'app/src/services/api';
import fixtureApi from 'app/src/services/fixtureApi';
import debugConfig from 'app/src/config/debugConfig';

/* ------------- Types ------------- */

import { SigninTypes } from 'app/src/redux/signinRedux';

/* ------------- Sagas ------------- */

import { loginRequest, signupRequest } from './signinSagas';

/* ------------- API ------------- */

// The api we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = debugConfig.useFixtures ? fixtureApi : API.createApi();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(SigninTypes.REQUEST_LOGIN, loginRequest, api),
    takeLatest(SigninTypes.REQUEST_SIGNUP, signupRequest, api)
  ]);
}
