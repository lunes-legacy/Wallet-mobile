import LeasingClass from './LeasingClass';
import types from '../../config/types';

export const getLeasingHistory = payload => {
  return {
    type: types.GET_LEASING,
    payload: new LeasingClass().getLeaseHistory(payload),
  };
};

export const getLeasingValue = payload => {
  return {
    type: types.GET_LEASING_RESUME,
    payload: new LeasingClass().getLeasingValues(payload),
  };
};

export const closeAlert = () => ({
  type: types.CLOSE_ALERT_LEASE,
});

/* ----- */

const showError = () => ({
  type: types.ERROR_CANCEL_LEASE,
});
const showSuccess = () => ({
  type: types.SUCCESS_CANCEL_LEASE,
});

const doCancelLeasing = async (payload, dispatch) => {
  try {
    const res = await new LeasingClass().cancelLease(payload).catch(error => {
      throw error;
    });
    dispatch(showSuccess());

    dispatch(getLeasingValue(payload));
    dispatch(getLeasingHistory(payload));
  } catch (error) {
    dispatch(showError());
  }
};

export const cancelLeasing = payload => dispatch => {
  doCancelLeasing(payload, dispatch).catch(error => {
    dispatch(showError());
  });
};
