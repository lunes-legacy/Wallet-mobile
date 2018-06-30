import types from '../../config/types';
import { navigate } from '../../config/routes';

export const showTextBackupSeedAction = seedText => ({
  type: types.SHOW_TEXT_BACKUP_SEED,
  seedText,
});

export const redirectToAuthAction = () => dispatch => {
  dispatch(showTextBackupSeedAction());
  navigate('Singin');
};
