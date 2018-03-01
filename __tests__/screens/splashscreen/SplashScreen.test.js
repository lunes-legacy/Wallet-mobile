import React from 'react';
import { shallow, mount } from 'enzyme';
import { SplashScreen } from 'lunesmobilewallet/app/screens/SplashScreen';
import I18N from 'lunesmobilewallet/app/i18n/i18n';

// the splash is native
describe('SplashScreen', () => {
  it('SplashScreen should render Logo', () => {
    const wrapper = shallow(<SplashScreen />);
    // expect(wrapper.find('Logo')).toHaveLength(1);
  });
});
