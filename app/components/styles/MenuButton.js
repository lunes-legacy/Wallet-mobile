import Colors from '../theme/Colors';
import { Platform } from 'react-native';

const fontSize = 20;
const padding = 15;

export default {
  fontSize,
  color: Colors.white,
  padding,
  marginTop: Platform.OS === 'ios' ? 20 : 0,
  next: {
    paddingHorizontal: 40,
    paddingVertical: padding,
    fontSize,
    color: Colors.white,
  },
  back: {
    color: Colors.secondary,
    padding,
    fontSize,
  },
}