import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux'
import { AppStyle, FormStyle } from '../../components/theme';
import UserUpdateForm from './UserUpdateForm';

class UserUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name || '',
      email: this.props.user.email || '',
      timezone: this.props.user.timezone || 'Brasilia (UTC -03)',
      telephoneNumbers: this.props.user.telephoneNumbers || [],
      account: this.props.user.account || '',
      currency: this.props.user.currency || 'BRL',
      paymentMethods: this.props.user.paymentMethods || [],
    };
  }

  render() {
    return (
      <View style={AppStyle.screen.body}>
        <View>
          <Text>
            Configuração
          </Text>
          <Text>
            Conta
          </Text>
        </View>
        <UserUpdateForm />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: {}
  }
}

export default connect(mapStateToProps,null)(UserUpdate)
