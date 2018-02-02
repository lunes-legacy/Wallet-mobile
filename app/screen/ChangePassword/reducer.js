import types from '../../config/types';
const initialState = {
  loading: false,
  error: false,
  success: false,
};

const changePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOADING:
      return { ...state, loading: true };
    case types.REQUEST_FINISHED:
      return { ...state, loading: false };
    case types.CLEAR_ERROR:
      return { ...state, error: null };
    case types.CLEAR_SUCCESS:
      return { ...state, success: null };
    case types.SHOW_ERROR:
      return { ...state, error: action.error };
    case types.SHOW_SUCCESS:
      return { ...state, success: action.msg };
    default:
      return state;
  }
};

export default changePasswordReducer;
