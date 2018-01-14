import React from 'react';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../utils/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import BosonColors from '../variables/bosonColor';

export const LunesIconError = ({ size, color }) => {
  return (
    <Icon
      name="lunes-error"
      size={size || 12}
      color={color || BosonColors.$bosonLightPink}
    />
  );
};

export const LunesIconSuccess = ({ size, color }) => {
  return (
    <Icon
      name="lunes-success"
      size={size || 12}
      color={color || BosonColors.$bosonLightGreen}
    />
  );
};

export const LunesIconWarning = ({ size, color }) => {
  return (
    <Icon
      name="lunes-warning"
      size={size || 12}
      color={color || BosonColors.$bosonMediumYellow}
    />
  );
};

export const LunesIconSendPayment = ({ size, color }) => {
  return (
    <Icon
      name="lunes-send"
      size={size || 12}
      color={color || BosonColors.$bosonMediumYellow}
    />
  );
};

export const LunesIconReceivePayment = ({ size, color }) => {
  return (
    <Icon
      name="lunes-receive"
      size={size || 12}
      color={color || BosonColors.$bosonMediumYellow}
    />
  );
};
