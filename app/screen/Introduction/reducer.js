import types from './types';
import { navigate } from '../../config/routes';

const initialState = {
  isViewedIntroduction: false,
};

const redirectReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PERSIST_INTRODUCTION_VIEWED:
      return {
        ...state,
        isViewedIntroduction: true,
      };
    case types.REHYDRATE:
      if (action.payload && action.payload.redirectToAuthReducer) {
        state.isViewedIntroduction = action.payload.redirectToAuthReducer;
        navigate('Signin');
        return state;
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default redirectReducer;
