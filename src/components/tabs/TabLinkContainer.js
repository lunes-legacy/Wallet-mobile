import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeSelectedTab } from './reducer';
import tabStyle from './style';
import TabLink from './TabLink';

const mapStateToProps = state => ({
  tabSelected: state.tabsReducer.tabSelected,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeSelectedTab }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TabLink);
