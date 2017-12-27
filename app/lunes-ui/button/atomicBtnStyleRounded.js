// @flow
import { Platform, Dimensions } from 'react-native';
import { TextDensityConstant, FontFamilyConstant } from '../constants';
import BosonColors from '../bosons/boson-color';
import BosonTexts from '../bosons/boson-text';

const _getWidth = () => Dimensions.get('window').width - 50;

export default {
  atomBtn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: BosonColors.$bosonLightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  quarkText: {
    fontFamily: FontFamilyConstant.$bosonFontRobotoRegular,
    color: BosonColors.$bosonWhite,
    fontSize: 30,
  },
};
