import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';


class App extends Component {

  get renderApp(){
    if (this.props.token) {
      return HomeScreen;
    } else {
      return SignInScreen;
    }
  }
  render() {
    return (
      <this.renderApp />
    );
  }
}

const mapStateToProps = ({ token }) => {
  return { token };
};

export default connect(mapStateToProps)(App);
