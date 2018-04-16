import SigninActions, {
  reducer,
  INITIAL_STATE,
} from 'app/src/redux/signinRedux';
import User from 'app/src/models/User';

const user = { ...User, email: 'lunestest@lunes.io', password: 'test' };

test('requestLogin', () => {
  const state = reducer(INITIAL_STATE, SigninActions.requestLogin(user));
  expect(state.appState).toBe('loading');
  expect(state.problem).toBeNull();
});

test('requestSignup', () => {
  const state = reducer(INITIAL_STATE, SigninActions.requestSignup(user));
  expect(state.appState).toBe('loading');
  expect(state.problem).toBeNull();
});

test('success', () => {
  const state = reducer(INITIAL_STATE, SigninActions.success(user));
  expect(state.appState).toBe('success');
  expect(state.problem).toBeNull();
});

test('failure', () => {
  const error = {};
  const state = reducer(INITIAL_STATE, SigninActions.failure(error));
  expect(state.appState).toBe('error');
  expect(state.problem).not.toBeNull();
});

test('clean', () => {
  const state = reducer(INITIAL_STATE, SigninActions.clean());
  expect(state).toBe(INITIAL_STATE);
});
