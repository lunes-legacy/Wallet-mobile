// @flow
import { Platform } from 'react-native';
import Colors from '../theme/Colors';

const buttonStyle = {
  default: {
    borderRadius: 20,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  primary: {
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    width: 200,
    marginTop: 20,
    width: '100%',
  },
  roundedPrimary: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  roundedOpened: {
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 0,
    alignItems: 'center',
    width: 300,
  },
  roundedAbsolutePosition: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
  },
  disabled: {
    borderRadius: 20,
    backgroundColor: Colors.lightPrimary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  itemButtonOpened: {
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  textItemOpened: {
    fontSize: 12,
    color: Colors.white,
  },
  textDefault: {
    color: Colors.secondary,
  },
  textPrimary: {
    color: Colors.white,
  },
  textDisabled: {
    color: Colors.white,
  },
  textRounded: {
    color: Colors.white,
    fontSize: 30,
  },
};

export default buttonStyle;
