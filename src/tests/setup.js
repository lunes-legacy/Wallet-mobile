import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('react-native-fs', () => {
  return {
    RNFSFileTypeRegular: jest.fn(() => {
      return false;
    }),
  };
});
jest.mock('react-native-camera', () => {
  return {
    Aspect: jest.fn(() => {
      return {};
    }),
  };
});

configure({ adapter: new Adapter() });
