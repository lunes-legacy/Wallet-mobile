import types from './types';
import { navigate } from '../../config/routes';

export const persistIntroductionViewedAction = () => ({
  type: types.PERSIST_INTRODUCTION_VIEWED,
});

export const redirectToAuthAction = () => {
  return dispatch => {
    dispatch(persistIntroductionViewedAction());
    navigate('Signin');
  };
};
