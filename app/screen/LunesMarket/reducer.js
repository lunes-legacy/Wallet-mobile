import types from '../../config/types';
import rangeConstant from '../../constants/general';

const initialState = {
  loading: false,
  historic: null,
  range: rangeConstant.PERIOD.RANGE_1D,
};

const historicDataReducer = (state = initialState, action) => {
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
    case types.HISTORIC_DATA:
      return {
        ...state,
        historic: action.historic,
      };
    case types.CHANGE_RANGE:
      return {
        ...state,
        range: action.range,
      };
    default:
      return state;
  }
};

export default historicDataReducer;
