// @flow
import { Platform } from 'react-native';
import Colors from './Colors';

const formStyle = {
  container: {
    padding: 10,
  },
  input: {
    width: 300,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 100,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderWidth: 0,
  },
  buttonContainer: {
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    borderRadius: 100,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.white,
  },
};

export default formStyle;
