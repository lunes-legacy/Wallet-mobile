import { Platform, Dimensions } from 'react-native';

import variable from './../variables/platform';
import commonColor from './../variables/commonColor';

const deviceHeight = Dimensions.get('window').height;
export default (variables = variable) => {
  const theme = {
    flex: 1,
    height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
    padding: 30,
    backgroundColor: commonColor.bgContainer,
    justifyContent: 'center',
    alignItems: 'center'
  };

  return theme;
};
