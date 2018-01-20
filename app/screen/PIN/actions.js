import types from './types';
import confirmationTypes from '../Confirmation/types';
import { navigate } from '../../config/routes';
import LunesCore from 'lunes-core';

export const requestAddPIN = (PIN, currentUser) => {
  return dispatch => {
    dispatch(requestLoading());

    LunesCore.users.createPin({ pin: PIN }, currentUser.accessToken).then(
      response => {
        currentUser.pinIsValidated = true;
        dispatch(confirmSuccess(currentUser));
        LunesCore.coins.bitcoin
          .backupWallet({ email: currentUser.email }, currentUser.accessToken)
          .then(
            seed => {
              console.log(seed);
              dispatch(requestFinished());
              dispatch(showDialogBackupSeed(seed.result));
            },
            error => {
              console.log(error);
              dispatch(requestFinished());
            }
          );
      },
      error => {
        dispatch(requestFinished());
      }
    );
  };
};

export const requestValidPIN = (PIN, currentUser, wordSeedWasViewed) => {
  return dispatch => {
    dispatch(requestLoading());

    LunesCore.users.confirmPin({ pin: PIN }, currentUser.accessToken).then(
      response => {
        currentUser.pinIsValidated = true;
        dispatch(confirmSuccess(currentUser));
        //Create PIN, Get Backup Seed
        LunesCore.users.createPin({ pin: PIN }, currentUser.accessToken).then(
          response => {
            currentUser.pinIsValidated = true;
            dispatch(confirmSuccess(currentUser));
            if (wordSeedWasViewed) {
              dispatch(requestFinished());
              navigate('Main');
            } else {
              LunesCore.coins.bitcoin
                .backupWallet(
                  { email: currentUser.email },
                  currentUser.accessToken
                )
                .then(
                  seed => {
                    console.log(seed);
                    dispatch(requestFinished());
                    dispatch(showDialogBackupSeed(seed.result));
                  },
                  error => {
                    console.log(error);
                    dispatch(requestFinished());
                  }
                );
            }
          },
          error => {
            dispatch(requestFinished());
          }
        );

        //Get Balance
        LunesCore.coins.bitcoin
          .getBalance(
            { address: currentUser.wallet.coins[0].addresses[0].address },
            currentUser.accessToken
          )
          .then(
            response => {
              dispatch(storeBalanceOnUser(response));
            },
            error => {
              console.log(error);
            }
          );
      },
      error => {
        dispatch(requestFinished());
      }
    );
  };
};

//Aqui mostra o diload com a seed word
export const showTextBackupSeedAction = seedText => ({
  type: types.SHOW_TEXT_BACKUP_SEED,
  seedText,
});

export const closeTextBackupSeedAction = () => ({
  type: types.CLOSE_TEXT_BACKUP_SEED,
});

const requestLoading = () => ({
  type: types.REQUEST_LOADING,
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED,
});

//Aqui mostra o diloag informando que é importante ele efetuar o backup
const showDialogBackupSeed = seedText => ({
  type: types.SHOW_DIALOG_BACKUP_SEED,
  seedText,
});

export const closeShowDialogBackupSeed = () => ({
  type: types.CLOSE_DIALOG_BACKUP_SEED,
});

const confirmSuccess = user => ({
  type: confirmationTypes.CONFIRM_CODE_SUCCESS,
  user: user,
});

const storeBalanceOnUser = balance => ({
  type: types.STORE_BALANCE,
  balance,
});
