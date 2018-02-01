import React from 'react';
import I18n from '../i18n/i18n';
import LunesAlert from '../native-base-theme/components/LunesAlert';

/**
 * Return true if email is valid
 */
export const ValidateEmail = email => {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(pattern);
};

export const PasswordIsStronger = password => {
  const pattern = new RegExp(
    /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/g
  );
  return pattern.test(password);
};

export const GetDefaultURIAvatar = () => {
  return 'https://res.cloudinary.com/luneswallet/image/upload/v1516659103/avatar-test.png';
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

export const handleErrors = (
  error,
  callbackOnClose,
  callbackOnConfirmation
) => {
  if (error && error.messageKey === 'auth/email-already-in-use') {
    return alertError(
      I18n.t('EMAIL_ALREADY'),
      true,
      callbackOnClose,
      callbackOnConfirmation
    );
  } else if (error && error.messageKey === 'auth/wrong-password') {
    return alertError(
      I18n.t('ERROR_AUTHENTICATE'),
      true,
      callbackOnClose,
      callbackOnConfirmation
    );
  } else if (error && error.messageKey === 'auth/user-not-found') {
    return alertError(
      I18n.t('USER_NOT_FOUND'),
      true,
      callbackOnClose,
      callbackOnConfirmation
    );
  } else if (error && error.messageKey === 'INVALID_PASSWORD') {
    return alertError(
      I18n.t('PASSWORD_INSECURE'),
      true,
      callbackOnClose,
      callbackOnConfirmation
    );
  } else if (error) {
    return alertError(
      I18n.t('SOMETHING_ERROR'),
      true,
      callbackOnClose,
      callbackOnConfirmation
    );
  } else if (error && error.code === 'auth/unknown') {
    return alertError(
      I18n.t('UKNOWN'),
      true,
      callbackOnClose,
      callbackOnConfirmation
    );
  } else if (error && error.code === 'auth/session-expired') {
    return alertError(
      I18n.t('SMS_EXPIRED'),
      true,
      callbackOnClose,
      callbackOnConfirmation
    );
  }
  return null;
};
