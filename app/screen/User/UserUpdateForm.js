import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class UserUpdateForm extends Component {
  render() {
    return (
      <View>
        <Text>UPDATE FORM</Text>
      </View>
    );
  }
}

export default connect()(UserUpdateForm);
