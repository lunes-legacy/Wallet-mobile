import types from '../../config/types';

export const updateConnectionStatus = isConnected => dispatch =>
  dispatch({ type: types.CONNECTION_STATUS, isConnected });
