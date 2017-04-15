import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAtn_7ksl9ODBCYGv327cuThJwc0rrDIKc",
      authDomain: "one-time-password-69657.firebaseapp.com",
      databaseURL: "https://one-time-password-69657.firebaseio.com",
      projectId: "one-time-password-69657",
      storageBucket: "one-time-password-69657.appspot.com",
      messagingSenderId: "825589197268"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);
