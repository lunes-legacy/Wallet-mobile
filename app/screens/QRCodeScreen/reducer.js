import types from '../../config/types';

const initialState = {
  loading: false,
  qrcodeAdressToSend: '',
};

const qrCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOADING:
      return { ...state, loading: true };
    case types.REQUEST_FINISHED:
      return { ...state, loading: false };
    case types.COPY_ADDRESS:
      return { ...state, address: action.address };
    case types.REHYDRATE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default qrCodeReducer;
