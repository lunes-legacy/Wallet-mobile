import types from '../../config/types';
import { navigate } from '../../config/routes';
import LunesLib from 'lunes-lib';

const obtain = async (params, dispatch) => {
  try {
    const userProfile = await LunesLib.users.obtain(params.id, params.accessToken)
    dispatch(requestFinished());
    dispatch(obtainUserProfileSuccess(userProfile));
    return dispatch(storeUserProfile(userProfile));
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
}

const updateProfile = async (params, dispatch) => {
  try {
    const userProfile = await LunesLib.users.update( params.id, params.updates, params.accessToken)
    dispatch(requestFinished());
    dispatch(obtainUserProfileSuccess(userProfile));
    return dispatch(storeUserProfile(userProfile));
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
}

export const requestObtain = values => {
  return dispatch => {
    dispatch(requestLoading());
    obtain({ id: values._id, accessToken: values.accessToken }, dispatch)
      .catch(error => {
      dispatch(obtainUserProfileError(error));
    });
  };
};

export const requestUpdate = values => {
  return dispatch => {
    dispatch(requestLoading());
    updateProfile({ id: values._id, updates: values.updates, accessToken: values.accessToken }, dispatch)
      .catch(error => {
        dispatch(obtainUserProfileError(error));
      });
  };
}

const storeUserProfile = userProfile => ({
  type: types.STORE_USER_PROFILE,
  userProfile,
});

const obtainUserProfileError = error => ({
  type: types.OBTAIN_USER_PROFILE_ERROR,
  error,
});

const obtainUserProfileSuccess = userProfile => ({
  type: types.OBTAIN_USER_PROFILE_SUCCESS,
  userProfile,
});

const requestLoading = () => ({
  type: types.REQUEST_LOADING,
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED,
});
