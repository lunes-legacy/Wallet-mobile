import { StyleSheet, Dimensions } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from 'app/src/themes/';
import BosonColors from 'app/src/native-base-theme/variables/bosonColor';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  default: {
    borderRadius: 20,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 20,
    alignItems: 'center',
    width: '100%'
  },
  primary: {
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '100%'
  },
  roundedPrimary: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  roundedOpened: {
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 0,
    alignItems: 'center',
    width: 300
  },
  roundedAbsolutePosition: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20
  },
  disabled: {
    borderRadius: 20,
    backgroundColor: Colors.lightPrimary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%'
  },
  itemButtonOpened: {
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  textItemOpened: {
    fontSize: 12,
    color: Colors.white
  },
  textDefault: {
    color: Colors.secondary
  },
  textPrimary: {
    color: Colors.white
  },
  textDisabled: {
    color: Colors.white
  },
  textRounded: {
    color: Colors.white,
    fontSize: 30
  },
  container: {
    flex: 1,
    width: Dimensions.get('window').width - 60
  },
  openedCircle: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: '100%',
    height: 55,
    backgroundColor: BosonColors.$bosonLightGreen,
    borderRadius: 30,
    elevation: 3,
    paddingLeft: 10,
    paddingRight: 10
  },
  centralizedBtn: {
    position: 'absolute',
    bottom: 5,
    left: Dimensions.get('window').width / 2 - 65,
    backgroundColor: BosonColors.$bosonLightGreen,
    height: 65,
    width: 65,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15
  },
  iconButtonOpened: {
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  textItemIcons: {
    fontSize: 12,
    color: BosonColors.$bosonWhite
  },
  text: {
    color: '#ffffff',
    fontSize: 20
  },
  linearGradient: {
    borderRadius: 25,
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 16,
    paddingVertical: 3,
    height: 50
  },
  buttonText: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent'
  }
});
