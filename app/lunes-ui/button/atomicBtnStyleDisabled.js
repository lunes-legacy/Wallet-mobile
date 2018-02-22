/* eslint-disable */
// @flow
import { Platform, Dimensions } from 'react-native';
import { TextDensityConstant, FontFamilyConstant } from '../constants';
import BosonColors from '../bosons/boson-color';
import BosonTexts from '../bosons/boson-text';

const _getWidth = () => Dimensions.get('window').width - 50;

export default {
  atomBtn: {
    borderRadius: 30,
    backgroundColor: BosonColors.$bosonPastaPurple,
    paddingHorizontal: 18,
    paddingVertical: 18,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  atomBtnLarge: {
    width: _getWidth(),
  },
  quarkText: {
    fontFamily: FontFamilyConstant.$bosonFontRobotoRegular,
    color: BosonColors.$bosonWhite,
  },
};
