// @flow
import { Platform } from 'react-native';
import Colors from './Colors';

const formStyle = {
  container: {
    borderBottomColor: '#9f90c5',
    borderBottomWidth: 1
  },
  input: {
    width: 300,
    color: '#fff'
  },
  buttonContainer: {
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    borderRadius: 100
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.white
  }
};

export default formStyle;
