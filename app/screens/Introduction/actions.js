import { AsyncStorage } from 'react-native';
import types from './types';
import { navigate } from '../../config/routes';

export const persistIntroductionViewedAction = () => ({
  type: types.PERSIST_INTRODUCTION_VIEWED,
});

export const redirectToIntroduction = () => dispatch => {
  AsyncStorage.getItem('showIntro').then((showIntro: string) => {
    if (!showIntro) {
      navigate('Introduction');
    }
  });
};

export const redirectToAuthAction = () => dispatch => {
  dispatch(persistIntroductionViewedAction());
  AsyncStorage.setItem('showIntro', 'false');
  navigate('Signin');
};
