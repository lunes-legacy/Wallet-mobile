import { StyleSheet, Dimensions } from 'react-native';
import {
  Metrics,
  ApplicationStyles,
  Colors,
} from 'app/src/themes/';
import BosonColors from 'app/src/native-base-theme/variables/bosonColor';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    position: 'absolute',
    width,
    height,
    zIndex: 995,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    position: 'absolute',
    opacity: 0.7,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 996,
  },
  dialog: {
    position: 'absolute',
    borderRadius: 20,
    width: width - 50,
    minHeight: 200,
    backgroundColor: '#fff',
    zIndex: 997,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    width,
    zIndex: 998,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 210,
  },
  dialogHeader: {
    width: '100%',
    height: 50,
    backgroundColor: '#ccc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  areaDescription: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 50,
  },
  textHeader: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  textDescription: {
    color: BosonColors.$bosonMediumGrey,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 25,
  },
  text: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  iconClose: {
    position: 'absolute',
    zIndex: 999,
    right: 10,
  },
});
