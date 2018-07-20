import LeasingClass from '../Leasing/LeasingClass';
import types from '../../config/types';

const showError = () => ({
  type: types.ERROR_LEASE,
});

const showSuccess = () => ({
  type: types.SUCCESS_LEASE,
});

const showLoading = () => ({
  type: types.SHOW_LOADING_LEASE,
});

const hideLoading = () => ({
  type: types.HIDE_LOADING_LEASE,
});

const confirmLeasing = data => ({
  type: types.START_LEASING,
  payload: data,
});

const doStartLease = async (data, dispatch) => {
  try {
    dispatch(showLoading());
    const res = await new LeasingClass().startLease(data).catch(error => {
      dispatch(hideLoading());
      throw error;
    });
    dispatch(hideLoading());
    dispatch(showSuccess());
    dispatch(confirmLeasing(res));
  } catch (error) {
    dispatch(hideLoading());
    dispatch(showError(error));
  }
};

export const startLeasing = data => dispatch => {
  doStartLease(data, dispatch).catch(error => {
    dispatch(hideLoading());
    dispatch(showError(error));
  });
};

export const closeAlert = () => ({
  type: types.CLOSE_ALERT_LEASE,
});
