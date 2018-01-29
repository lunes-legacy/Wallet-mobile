import types from '../../config/types';

const initialState = {
  loading: false,
  error: '',
  message: '',
  codeInput: '',
  prefixCountryNumber: '+55',
  dddNumber: '',
  phone: '',
  phoneNumber: '',
  confirmResult: null,
};

const confirmationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.REQUEST_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case types.REQUEST_CODE_SUCCESS:
      return {
        ...state,
        confirmResult: action.confirmResult,
      };
    case types.REQUEST_CODE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case types.CONFIRM_CODE_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case types.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case types.CONFIRM_CODE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case types.CLEAR_INVALID_PHONENUMBER:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default confirmationReducer;
