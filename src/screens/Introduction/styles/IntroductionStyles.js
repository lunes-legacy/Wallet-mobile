import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from 'app/src/themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  slide2: {
    flex: 2, // Take up all screen
    justifyContent: 'flex-start', // Center vertically
    alignItems: 'center', // Center horizontally
    paddingTop: 5
  },
  header: {
    fontFamily: 'Offside-Regular',
    fontSize: 18,
    fontWeight: '400',
    color: '#4CD566',
    marginTop: 5,
    marginBottom: 5
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    marginHorizontal: 25,
    textAlign: 'center'
  }
});
