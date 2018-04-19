/* eslint-disable */
import types from '../../config/types';

const initialState = {
  loading: false,
  error: null,
  showDialogBackupSeed: false,
  showTextBackupSeed: false,
  seedText: '',
  pin: '',
  wordSeedWasViewed: false,
  balance: {}
};

const pinReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOADING:
      return { ...state, loading: true };
    case types.REQUEST_FINISHED:
      return { ...state, loading: false };
    case types.ADD_PIN:
      return { ...state, pin: action.pin };
    case types.SHOW_TEXT_BACKUP_SEED:
      return { ...state, showTextBackupSeed: true, seedText: action.seedText };
    case types.SHOW_ERROR:
      return { ...state, error: action.error };
    case types.CLEAR_ERROR:
      return { ...state, error: action.error };
    case types.CLOSE_TEXT_BACKUP_SEED:
      return {
        ...state,
        showTextBackupSeed: false,
        pin: null,
        seedText: null,
        wordSeedWasViewed: true // flag pra mostrar ou nao o dialog de informação do seed
      };
    case types.SHOW_DIALOG_BACKUP_SEED:
      return {
        ...state,
        showDialogBackupSeed: true,
        seedText: action.seedText
      };
    case types.CLOSE_DIALOG_BACKUP_SEED:
      return {
        ...state,
        showDialogBackupSeed: false,
        pin: null,
        seedText: null
      };
    case types.CONFIRM_CODE_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case types.STORE_BALANCE:
      return {
        ...state,
        balance: action.balance
      };
    case types.REHYDRATE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default pinReducer;
