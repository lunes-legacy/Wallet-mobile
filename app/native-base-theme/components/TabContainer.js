import variable from './../variables/commonColor';
import { Platform } from 'react-native';

export default (variables = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const tabContainerTheme = {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: Platform.OS === 'ios' ? variables.borderWidth : 1,
    borderColor: variables.topTabBarBorderColor,
    borderBottomColor: '#ccc',
  };

  return tabContainerTheme;
};
