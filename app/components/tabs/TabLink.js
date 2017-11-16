import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { changeSelectedTab } from './reducer';
import tabStyle from './style';

class TabLink extends React.Component {
  render() {
    let isSelected = (this.props.isSelected) ? tabStyle.tabLinkSelected : {};
    return (
      <TouchableOpacity onPress={(e) => { this.props.changeSelectedTab(this.props.tabId) }}>
        <View style={{...tabStyle.tabLink, ...isSelected}}>
          <Text style={tabStyle.tabLinkTitle}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToprops = (state, ownProps) => {
  return {
    tabSelected: state.tabSelected,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSelectedTab: tabId => {
      dispatch(changeSelectedTab(tabId));
    },
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(TabLink);
