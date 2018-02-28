import React from 'react';
import { shallow } from 'enzyme';
import SplashScreen from 'lunesmobilewallet/app/screens/SplashScreen/SplashScreen';

describe('SplashScreen', () => {
  it('SplashScreenContainer should be exist', () => {
    const wrapper = shallow(<SplashScreen />);
    expect(wrapper).toBeTruthy();
  });
});
