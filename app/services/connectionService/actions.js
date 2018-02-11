import types from '../../config/types';
export const updateConnectionStatus = isConnected => (dispatch, getState) => {
  dispatch({ type: types.CONNECTION_STATUS, isConnected });
};
