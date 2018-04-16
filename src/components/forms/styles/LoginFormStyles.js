import { StyleSheet, Dimensions } from 'react-native';
import {
  Metrics,
  ApplicationStyles,
  Colors,
  Fonts,
} from 'app/src/themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    borderBottomColor: '#9f90c5',
    borderBottomWidth: 1,
  },
  input: {
    width: 300,
    color: '#fff',
  },
  containerForcePassword: {
    marginTop: 5,
  },
  checkForcePassword: {
    fontSize: 11,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    textAlign: 'center',
    width: '100%',
  },
  passwordWeak: {
    backgroundColor: Colors.LightRed,
  },
  passwordStrong: {
    backgroundColor: Colors.DarkPurple,
  },
  containerHelp: {
    backgroundColor: Colors.DarkPurple,
    padding: 2,
  },
  containerPassword: {
    position: 'absolute',
    top: 4,
    right: 10,
    flex: 1,
    justifyContent: 'center',
  },
  btnSubmit: {
    marginTop: 60,
  },
});
