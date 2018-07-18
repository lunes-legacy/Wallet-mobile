import LeasingClass from './LeasingClass';

export const setLeasingAmount = leasingInfo => {
  return {
    type: 'ADD_LEASING_FULFILLED',
    payload: leasingInfo,
  };
};

export const getLeasingHistory = payload => {
  return {
    type: 'GET_LEASING',
    payload: new LeasingClass().getLeaseHistory(payload),
  };
};

export const cancelLeasing = payload => {
  return {
    type: 'CANCEL_LEASING',
    // payload: new LeasingClass().cancelLease(payload),
    payload: 0,
  };
};

export const getLeasingValue = payload => {
  return {
    type: 'GET_LEASING_RESUME',
    payload: new LeasingClass().getLeasingValues(payload),
  };
};
