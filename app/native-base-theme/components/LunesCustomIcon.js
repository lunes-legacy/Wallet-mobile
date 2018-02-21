import React from 'react';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../utils/config.json';

const Icon = createIconSetFromFontello(fontelloConfig);
import BosonColors from '../variables/bosonColor';

export const LunesIconError = ({ size, color }) => (
  <Icon
    name="lunes-error"
    size={size || 12}
    color={color || BosonColors.$bosonLightPink}
  />
);

export const LunesIconSuccess = ({ size, color }) => (
  <Icon
    name="lunes-success"
    size={size || 12}
    color={color || BosonColors.$bosonLightGreen}
  />
);

export const LunesIconWarning = ({ size, color }) => (
  <Icon
    name="lunes-warning"
    size={size || 12}
    color={color || BosonColors.$bosonMediumYellow}
  />
);

export const LunesIconSendPayment = ({ size, color }) => (
  <Icon
    name="lunes-send"
    size={size || 12}
    color={color || BosonColors.$bosonMediumYellow}
  />
);

export const LunesIconReceivePayment = ({ size, color }) => (
  <Icon
    name="lunes-receive"
    size={size || 12}
    color={color || BosonColors.$bosonMediumYellow}
  />
);

export const LunesIconKey = ({ size, color }) => (
  <Icon
    name="lunes-key"
    size={size || 12}
    color={color || BosonColors.$bosonMediumYellow}
  />
);

export const LunesIconVersion = ({ size, color }) => (
  <Icon
    name="lunes-version"
    size={size || 12}
    color={color || BosonColors.$bosonMediumYellow}
  />
);

export const LunesIconAbout = ({ size, color }) => (
  <Icon
    name="lunes-about"
    size={size || 12}
    color={color || BosonColors.$bosonMediumYellow}
  />
);

export const LunesIconSupport = ({ size, color }) => (
  <Icon
    name="lunes-suport"
    size={size || 12}
    color={color || BosonColors.$bosonMediumYellow}
  />
);

export const LunesIconLocal = ({ size, color }) => (
  <Icon
    style={{ paddingLeft: 10, paddingRight: 15 }}
    name="lunes-local"
    size={size || 12}
    color={color || BosonColors.$bosonMediumYellow}
  />
);

export const LunesIconMail = ({ size, color }) => (
  <Icon
    style={{ paddingLeft: 10, paddingRight: 10 }}
    name="lunes-mail"
    size={size || 12}
    color={color || BosonColors.$bosonMediumYellow}
  />
);

export const LunesIconCalendar = ({ size, color }) => (
  <Icon
    style={{ paddingLeft: 10, paddingRight: 10 }}
    name="lunes-calendar"
    size={size || 12}
    color={color || BosonColors.$bosonMediumYellow}
  />
);

export const LunesIconPhone = ({ size, color }) => (
  <Icon
    style={{ paddingLeft: 10, paddingRight: 10 }}
    name="lunes-phone"
    size={size || 12}
    color={color || BosonColors.$bosonMediumYellow}
  />
);
