import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import BosonColors from '../../native-base-theme/variables/bosonColor';
import LunesScreenNotification from '../../native-base-theme/components/LunesScreenNotification';

export default class NoticeNotification extends React.Component {
  render() {
    return (
      <Container>
        <LunesScreenNotification
          title={this.props.title}
          transationValue={this.props.transationValue}
          type={this.props.type}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
