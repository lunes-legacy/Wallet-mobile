// @flow
import { Platform } from 'react-native';
import Colors from './Colors';

const appStyle = {
  screen: {
    base: {
      flex: 1,
      backgroundColor: Colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      backgroundColor: Colors.background,
      flexDirection: 'row',
      height: 50,
      marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
    body: {
      backgroundColor: Colors.background,
    },
    headerLogo: {
      paddingVertical: -20,
      paddingHorizontal: 50,
    },
    logo: {
      fontSize: 70,
      textAlign: 'center',
      margin: 10,
      color: Colors.white,
      fontFamily: 'Offside-Regular',
    },
    logoGreen: {
      fontSize: 70,
      textAlign: 'center',
      margin: 10,
      color: Colors.secondary,
      fontFamily: 'Offside-Regular',
    },
    logoSmall: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color: Colors.white,
      fontFamily: 'Offside-Regular',
    },
    logoGreenSmall: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color: Colors.secondary,
      fontFamily: 'Offside-Regular',
    },
  },
};

export default appStyle;