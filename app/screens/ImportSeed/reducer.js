import types from '../../config/types';

const initialState = {
  loading: false,
  error: null,
  seedWords: '',
  newSeedWords: '',
};

const seedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_ADDRESS_ON_DEVICE:
      return { ...state, address: action.address };
    case types.NEW_SEED_WORD:
      return { ...state, newSeedWords: action.newSeedWords };
    default:
      return state;
  }
};

export default seedReducer;
