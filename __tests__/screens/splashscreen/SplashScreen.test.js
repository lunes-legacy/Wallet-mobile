import React from 'react';
import { shallow, mount } from 'enzyme';
import { SplashScreen } from 'lunesmobilewallet/app/screens/SplashScreen';
import I18N from 'lunesmobilewallet/app/i18n/i18n';

describe('SplashScreen', () => {
  it('SplashScreen should render Logo', () => {
    const wrapper = shallow(<SplashScreen />);
    expect(wrapper.find('Logo')).toHaveLength(1);
  });
  it('SplashScreen should render Text', () => {
    const wrapper = shallow(<SplashScreen />);
    // expect(wrapper.find('loadingTxt').text()).toBe('Loading...');
  });
});
