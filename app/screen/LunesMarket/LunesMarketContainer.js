import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LunesMarket from './LunesMarket';

const mapStateToProps = state => {
  return {
    userInfo: state.auth.user || {},
    balanceData: state.auth.balance,
  };
};

export default connect(mapStateToProps)(LunesMarket);
