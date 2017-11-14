// @flow

import Colors from './Colors';

const appStyle = {
  screen: {
    base: {
      flex: 1,
      backgroundColor: Colors.background,
      justifyContent: 'center',
      alignItems: 'center',
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
  },
};

export default appStyle;