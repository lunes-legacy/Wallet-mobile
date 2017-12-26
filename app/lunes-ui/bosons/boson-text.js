// @flow
import { TextDensityConstant, FontFamilyConstant } from '../constants';
import Colors from './boson-color';

/**
 * ===========================================================================
 * TEXTS
 * ===========================================================================
 */
export default {
  $h1: {
    fontSize: 90.4,
    color: Colors.$bosonWhite,
    fontFamily: FontFamilyConstant.$bosonFontRobotoLight,
  },
  $h2: {
    fontSize: 55,
    color: Colors.$bosonWhite,
    fontFamily: FontFamilyConstant.$bosonFontRobotoLight,
  },
  $h3: {
    fontSize: 40.04,
    color: Colors.$bosonWhite,
    fontFamily: FontFamilyConstant.$bosonFontRobotoRegular,
  },
  $h4: {
    fontSize: 40.04,
    color: Colors.$bosonLightGreen,
    fontFamily: FontFamilyConstant.$bosonFontRobotoLight,
  },
  $h5: {
    fontSize: 26,
    color: Colors.$bosonWhite,
    fontFamily: FontFamilyConstant.$bosonFontRobotoBold,
  },
  $h6: {
    fontSize: 26,
    color: Colors.$bosonMediumYellow,
    fontFamily: FontFamilyConstant.$bosonFontRobotoBold,
  },
  $textLight: {
    color: Colors.$bosonWhite,
    fontFamily: FontFamilyConstant.$bosonFontRobotoLight,
  },
  $textMedium: {
    color: Colors.$bosonWhite,
    fontFamily: FontFamilyConstant.$bosonFontRobotoMedium,
  },
  $textRegular: {
    color: Colors.$bosonWhite,
    fontFamily: FontFamilyConstant.$bosonFontRobotoRegular,
  },
  $textBold: {
    color: Colors.$bosonWhite,
    fontFamily: FontFamilyConstant.$bosonFontRobotoBold,
  },
  set setText(options) {
    switch (options.density) {
      case TextDensityConstant.LIGHT:
        return { ...$textLight, ...options };
      case TextDensityConstant.MEDIUM:
        return { ...$textMedium, ...options };
      case TextDensityConstant.REGULAR:
        return { ...$textRegular, ...options };
      case TextDensityConstant.BOLD:
        return { ...$textBold, ...options };
      default:
        return { ...$textRegular };
    }
  },
};
