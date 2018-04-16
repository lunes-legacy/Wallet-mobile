import fixtureApi from 'app/src/services/fixtureApi';
import { put, call } from 'redux-saga/effects';
import SigninActions from 'app/src/redux/signinRedux';
import { loginRequest } from 'app/src/sagas/signinSagas';
import User from 'app/src/models/User';

const user = { ...User, email: 'lunestest@lunes.io', password: 'test' };

const stepper = fn => mock => fn.next(mock).value;

test('first calls API', () => {
  const step = stepper(loginRequest(fixtureApi, { user }));
  expect(step()).toEqual(call(fixtureApi.login, user));
});
