/* eslint-disable */
import types from '../../config/types';
import { navigate } from '../../config/routes';
import LunesLib from 'lunes-lib';

const obtain = async (params, dispatch) => {
  try {
    const userProfile = await LunesLib.users.obtain(
      params.id,
      params.accessToken
    );
    dispatch(requestFinished());
    dispatch(obtainUserProfileSuccess(userProfile));
    return dispatch(storeUserProfile(userProfile));
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
};

const updateProfile = async (params, dispatch) => {
  try {
    const userProfile = await LunesLib.users.update(
      params.id,
      params.updates,
      params.accessToken
    );
    dispatch(requestFinished());
    dispatch(obtainUserProfileSuccess(userProfile));
    return dispatch(storeUserProfile(userProfile));
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
};

export const requestObtain = values => dispatch => {
  dispatch(requestLoading());
  obtain({ id: values._id, accessToken: values.accessToken }, dispatch).catch(
    error => {
      dispatch(requestFinished());
      dispatch(obtainUserProfileError(error));
    }
  );
};

export const requestUpdate = values => dispatch => {
  try {
    dispatch(requestLoading());
    if (!values.userInfo.avatar && values.updates.small) {
      values.userInfo.avatar = {
        small: values.updates.small,
      };
    } else if (
      values.userInfo.avatar &&
      values.userInfo.avatar.small === '' &&
      values.updates.small
    ) {
      values.userInfo.avatar.small = values.updates.small;
    } else if (
      values.userInfo.avatar &&
      values.updates &&
      values.updates.small &&
      values.userInfo.avatar.small !== values.updates.small
    ) {
      values.userInfo.avatar.small = values.updates.small;
    }

    if (values.updates && values.updates.phoneNumber) {
      values.userInfo.phoneNumber = values.updates.phoneNumber;
    }

    if (values.updates && values.updates.city) {
      values.userInfo.city = values.updates.city;
    }

    if (values.updates && values.updates.birthDate) {
      values.userInfo.birthDate = values.updates.birthDate;
    }

    if (values.updates && values.updates.homeAddress) {
      values.userInfo.homeAddress = values.updates.homeAddress;
    }

    dispatch(storeUserProfile(values.userInfo));
    updateProfile(
      {
        id: values._id,
        updates: values.updates,
        accessToken: values.accessToken,
      },
      dispatch
    ).catch(error => {
      dispatch(requestFinished());
      dispatch(obtainUserProfileError(error));
    });
  } catch (e) {
    dispatch(requestFinished());
  }
};

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
