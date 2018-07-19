import LeasingClass from '../Leasing/LeasingClass';
import types from '../../config/types';

const showError = () => ({
  type: types.ERROR_LEASE,
});

const showSuccess = () => ({
  type: types.SUCCESS_LEASE,
});

const confirmLeasing = data => ({
  type: types.START_LEASING,
  payload: data,
});

const doStartLease = async (data, dispatch) => {
  try {
    const res = await new LeasingClass().startLease(data).catch(error => {
      throw error;
    });
    dispatch(showSuccess());
    dispatch(confirmLeasing(res));
  } catch (error) {
    dispatch(showError(error));
  }
};

export const startLeasing = data => dispatch => {
  doStartLease(data, dispatch).catch(error => {
    dispatch(showError(error));
  });
};

export const closeAlert = () => ({
  type: types.CLOSE_ALERT_LEASE,
});
