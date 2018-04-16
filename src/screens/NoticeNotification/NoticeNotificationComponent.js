import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import BosonColors from '../../native-base-theme/variables/bosonColor';
import LunesScreenNotification from '../../native-base-theme/components/LunesScreenNotification';

export default class NoticeNotification extends React.Component {
  getTitle() {
    const { state } = this.props.navigation;
    return state.params && state.params.title
      ? state.params.title
      : 'Concluído!';
  }
  getUserName() {
    const { state } = this.props.navigation;
    return state.params && state.params.userName ? state.params.userName : '';
  }
  getAmount() {
    const { state } = this.props.navigation;
    return state.params && state.params.amountToSend
      ? state.params.amountToSend
      : '';
  }
  getStatus() {
    const { state } = this.props.navigation;
    return state.params && state.params.status ? state.params.status : '';
  }
  render() {
    return (
      <Container>
        <LunesScreenNotification
          title={this.getTitle()}
          userName={this.getUserName()}
          amount={this.getAmount()}
          transationValue={this.props.transationValue}
          type={this.getStatus()}
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
