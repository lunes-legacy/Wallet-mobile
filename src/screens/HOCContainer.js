import React, { Component, Fragment } from 'react';
import { View, Dimensions, ScrollView, BackHandler, Platform, NetInfo } from 'react-native';
import I18n from 'app/src/i18n/i18n';
import LunesLoading from 'app/src/native-base-theme/components/LunesLoading';
import { deepClone } from 'app/src/utils/ObjectUtils';

const backButtonPressFunction = () => true;
// in the future dealing with back button on for each screen
// on application
const goBack = ({ navigation }) => {
  if (Platform.OS === 'android') {
    BackHandler.addEventListener('hardwareBackPress', () => backButtonPressFunction());
  }
};

const isShowLoading = props => {
  const { appState } = props;
  if (appState === undefined) return null;
  if (appState === 'loading') {
    return <LunesLoading />;
  }
  return null;
};

/**
 * populate all props to travel the children HOC
 * @param {props} props
 */
const buildProps = props => {
  const newProps = deepClone(props);
  newProps.I18n = I18n;
  return newProps;
};

const HOCContainer = WrapperdComponent => props => (
  <Fragment>
    {isShowLoading(props)}
    {goBack(props)}
    <WrapperdComponent {...props} {...buildProps(props)} />
  </Fragment>
);

export default HOCContainer;
