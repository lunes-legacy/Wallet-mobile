import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  addPin: ['pin'],
  showTextBackupSeed: ['seed']
});

export const SigninTypes = Types;
export default Creators;
