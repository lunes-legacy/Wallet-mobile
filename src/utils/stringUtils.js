/*eslint-disable*/

/**
 * WARNING!!!
 * Please do not put Components in files with names like stringUtils,
 * its cause a weird sensation because the developer will always think
 * that will use stringUtils as a helper with format string or anything.
 * So, all components in this file like alertSuccess and others have nothing
 * with stringUtils. And too, they are  Presentation Components,
 * so put them in components folder for the next time.
 * If you have a doubt:
 * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
 * Help refactory this file, the next time if you need something
 * from here adds the component to components folder, see example: components/forms.
 * Let's apply Single Responsibility Principle and not break the SOLID principle.
 */

import React from 'react';
import I18n from '../i18n/i18n';
import LunesAlert from '../native-base-theme/components/LunesAlert';
import generalConstant from '../constants/general';

const STATUS_MSG = generalConstant.STATUS_MSG;

/**
 * Return true if email is valid
 */
export const ValidateEmail = email => {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(pattern);
};

export const PasswordIsStronger = password => {
  const pattern = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!_+=@#-$%^&*])(?=.{8,})'
  );
  return pattern.test(password);
};

export const GetDefaultURIAvatar = () =>
  'https://res.cloudinary.com/luneswallet/image/upload/v1516659103/avatar-test.png';

export const upperCaseFirstLetterText = text => {
  const UpperCase = text
    .toLowerCase()
    .replace(
      /^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g,
      letter => {
        return letter.toUpperCase();
      }
    );
  return UpperCase;
};

function alertError(message, isShow, callbackOnClose, callbackOnConfirmation) {
  return (
    <LunesAlert
      isShow={isShow}
      type="error"
      onClose={() => {
        callbackOnClose();
      }}
      onPressConfirmation={() => {
        callbackOnConfirmation();
      }}
      titleHeader={I18n.t('ACCESS_DENIED')}
      message={message}
      textConfirmation={I18n.t('TRY_AGAIN')}
    />
  );
}

function alertSuccess(
  message,
  isShow,
  callbackOnClose,
  callbackOnConfirmation
) {
  return (
    <LunesAlert
      isShow={isShow}
      type="success"
      onClose={() => {
        callbackOnClose();
      }}
      onPressConfirmation={() => {
        callbackOnConfirmation();
      }}
      titleHeader={I18n.t('SUCCESS')}
      message={message}
      textConfirmation={'OK'}
    />
  );
}

export const handleSuccess = (
  success,
  callbackOnClose,
  callbackOnConfirmation
) => {
  const renderAlertSuccess = msg =>
    alertSuccess(msg, true, callbackOnClose, callbackOnConfirmation);

  if (success && success.messageKey === STATUS_MSG.SUCCESS_AUTH_EMAIL_SENT) {
    return renderAlertSuccess(I18n.t('EMAIL_SENT'));
  }
  return null;
};

export const handleErrors = (
  error,
  callbackOnClose,
  callbackOnConfirmation
) => {
  const renderAlertError = msg =>
    alertError(msg, true, callbackOnClose, callbackOnConfirmation);

  if (error && error.messageKey === STATUS_MSG.AUTH_EMAIL_ALREADY) {
    return renderAlertError(I18n.t('EMAIL_ALREADY'));
  } else if (error && error.messageKey === STATUS_MSG.AUTH_WRONG_PASSWORD) {
    return renderAlertError(I18n.t('ERROR_AUTHENTICATE'));
  } else if (error && error.messageKey === STATUS_MSG.AUTH_USER_NOT_FOUND) {
    return renderAlertError(I18n.t('USER_NOT_FOUND'));
  } else if (error && error.messageKey === STATUS_MSG.INVALID_PASSWORD) {
    return renderAlertError(I18n.t('PASSWORD_INSECURE'));
  } else if (error && error.messageKey === STATUS_MSG.AUTH_UNKNOWN) {
    return renderAlertError(I18n.t('UKNOWN'));
  } else if (error && error.messageKey === STATUS_MSG.AUTH_SESSION_EXPIRED) {
    return renderAlertError(I18n.t('SMS_EXPIRED'));
  } else if (error && error.messageKey === STATUS_MSG.INVALID_FULLNAME) {
    return renderAlertError(I18n.t('INVALID_FULLNAME'));
  } else if (error && error.message === STATUS_MSG.INVALID_PASSWORD2) {
    return renderAlertError(I18n.t('INVALID_PASSWORD2'));
  } else if (error && error.messageKey === STATUS_MSG.NOT_CONNECTED) {
    return renderAlertError(I18n.t('NOT_CONNECTED'));
  } else if (error) {
    // esse caso é especifico, pois o erro vem do firebase e a maneira de
    // pegar o nome do erro é pelo error.message
    if (error && error.message === STATUS_MSG.AUTH_USER_NOT_FOUND2) {
      return renderAlertError(I18n.t('USER_NOT_FOUND'));
    }
    return renderAlertError(I18n.t('SOMETHING_ERROR'));
  }
  return null;
};
