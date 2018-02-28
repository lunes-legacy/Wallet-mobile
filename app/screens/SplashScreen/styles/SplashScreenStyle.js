import { StyleSheet } from 'react-native';
import {
  Metrics,
  ApplicationStyles,
  Colors,
} from 'lunesmobilewallet/app/themes';

export default StyleSheet.create({
  loadingTxt: {
    textAlign: 'center',
    color: Colors.grey,
    marginBottom: 5,
    fontSize: 18,
    padding: 20,
  },
  buttonSecondary: {
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    marginTop: 30,
  },
  start: {
    color: Colors.white,
    fontSize: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
