import { StyleSheet, Dimensions } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from 'app/src/themes/';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  fullScreen: {
    width,
    height
  },
  container: {
    backgroundColor: Colors.background,
    position: 'relative'
  },
  contentContainer: {
    flexGrow: 1
  },
  slide: {
    backgroundColor: 'transparent'
  },
  pagination: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'transparent'
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.25)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  activeDot: {
    backgroundColor: Colors.secondary
  },
  buttonWrapper: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 40,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  separator: {
    bottom: 40,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 0.5
  },
  buttonsContainer: {
    bottom: 20,
    flexDirection: 'row'
  }
});
