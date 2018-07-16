import types from '../../config/types';

const initialState = {
  loading: false,
  resume: {
    available: 100000000,
    leasing: 8000000,
    total: 18000000,
  },
  list: [
    {
      txid: 'asdasdasdasdasdasd',
      date: '2018/08/01',
      nativeAmount: 90000,
      otherParams: {
        status: 'active',
        type: 8,
      },
    },
    {
      txid: 'k34k32kj234h2j34h2j3h4',
      date: '2018/08/01',
      nativeAmount: 5000,
      otherParams: {
        status: 'active',
        type: 8,
      },
    },
    {
      txid: 'k34k32kj234h2j34h2j3h4',
      date: '2018/08/01',
      nativeAmount: 5000,
      otherParams: {
        status: 'inactive',
        type: 8,
      },
    },
    {
      txid: 'k34k32kj234h2j34h2j3h4',
      date: '2018/08/01',
      nativeAmount: 5000,
      otherParams: {
        status: 'inactive',
        type: 9,
      },
    },
  ],
};

const leasingReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default leasingReducer;
