import LeasingClass from './LeasingClass';
import types from '../../config/types';

export const setLeasingAmount = leasingInfo => {
  return {
    type: types.ADD_LEASING_FULFILLED,
    payload: leasingInfo,
  };
};

export const getLeasingHistory = payload => {
  return {
    type: types.GET_LEASING,
    payload: new LeasingClass().getLeaseHistory(payload),
  };
};

export const cancelLeasing = payload => {
  return {
    type: types.CANCEL_LEASING,
    // payload: new LeasingClass().cancelLease(payload),
    payload: 0,
  };
};

export const getLeasingValue = payload => {
  return {
    type: types.GET_LEASING_RESUME,
    payload: new LeasingClass().getLeasingValues(payload),
  };
};
