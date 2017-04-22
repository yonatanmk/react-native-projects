import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// const petfinderAuth = require('../env.js');

import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

class SignInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around'
  }
};

export default SignInScreen;
