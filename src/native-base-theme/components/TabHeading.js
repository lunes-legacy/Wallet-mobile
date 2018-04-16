/* eslint-disable */
import variable from './../variables/commonColor';

export default (variables = variable) => {
  const platform = variables.platform;

  const tabHeadingTheme = {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    '.scrollable': {
      paddingHorizontal: 20,
      flex: platform === 'android' ? 0 : 1,
      minWidth: platform === 'android' ? undefined : 60,
    },
    'NativeBase.Text': {
      color: variables.topTabBarTextColor,
      marginHorizontal: 7,
      fontSize: 12,
    },
    'NativeBase.Icon': {
      color: variables.topTabBarTextColor,
      fontSize: platform === 'ios' ? 26 : undefined,
    },
    '.active': {
      'NativeBase.Text': {
        color: variables.topTabBarActiveTextColor,
        fontWeight: '900',
        fontSize: 12,
      },
      'NativeBase.Icon': {
        color: variables.topTabBarActiveTextColor,
      },
    },
  };

  return tabHeadingTheme;
};
