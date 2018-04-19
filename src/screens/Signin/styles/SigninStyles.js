import { StyleSheet, Dimensions } from 'react-native';
import { Metrics, ApplicationStyles, Colors, Fonts } from 'app/src/themes/';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    width: width - 50
  },
  contentTabs: {
    marginTop: 30
  },
  version: {
    fontSize: Fonts.size.tiny,
    textAlign: 'center'
  },
  tabText: {
    color: Colors.white
  },
  btnChangePassword: {
    marginTop: 30
  },
  textChangePassword: {
    fontSize: Fonts.size.small
  },
  tabs: {
    backgroundColor: Colors.primary
  }
});
