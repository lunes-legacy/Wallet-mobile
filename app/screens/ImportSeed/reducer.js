import types from '../../config/types';

const initialState = {
  loading: false,
  showError: null,
  showSuccess: null,
  msgError: '',
  msgSuccess: '',
  seedWords: '',
  newSeedWords: '',
  address: '',
};

const seedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_ADDRESS_ON_DEVICE:
      return { ...state, address: action.address };
    case types.NEW_SEED_WORD:
      return { ...state, seedWords: action.newSeedWords };
    case types.SUCCESS_TO_IMPORT_SEED:
      return { ...state, showSuccess: true, msgSuccess: action.msgSuccess };
    case types.ERROR_TO_IMPORT_SEED:
      return { ...state, showError: true, msgError: action.msgError };
    case types.CLEAR_SEED_WORDS:
      return { ...state, seedWords: '' };
    case types.CLOSE_ALERT:
      return {
        ...state,
        loading: false,
        showSuccess: false,
        showError: false,
        msgError: '',
        msgSuccess: '',
      };
    default:
      return state;
  }
};

export default seedReducer;
