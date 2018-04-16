import { AsyncStorage } from 'react-native';
import { isObject, isValidObject } from 'app/src/libs/validate';
import { ValidateEmail } from 'app/src/utils/stringUtils';

const isValidUser = ({ user }) => {
  return isObject(user) && user.accessToken;
};

const isValidSignin = user => {
  if (user.email === '' || user.password === '') {
    return { isValid: false, type: 'FILL_FIELDS' };
  }

  if (!ValidateEmail(user.email)) {
    return { isValid: false, type: 'INVALID_EMAIL' };
  }

  return { isValid: true, type: 'OK' };
};

const isValidSignUp = user => {
  if (!isValidObject(user)) {
    return { isValid: false, type: 'FILL_FIELDS' };
  }

  if (!ValidateEmail(user.email)) {
    return { isValid: false, type: 'INVALID_EMAIL' };
  }

  return { isValid: true, type: 'OK' };
};

const saveItemUserInStore = (value, item = '@email') => {
  return AsyncStorage.setItem(item, value);
};

const getItem = (item = '@email') => {
  return AsyncStorage.getItem(item);
};

export {
  isValidUser,
  isValidSignin,
  isValidSignUp,
  saveItemUserInStore,
  getItem,
};
