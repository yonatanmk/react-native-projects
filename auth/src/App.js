import React, { Component } from 'react';
import { View} from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAF9pGj6772ItA914ZApIHE3FRNh-qI4Ok',
      authDomain: 'authentication-e398e.firebaseapp.com',
      databaseURL: 'https://authentication-e398e.firebaseio.com',
      storageBucket: 'authentication-e398e.appspot.com',
      messagingSenderId: '1028841437667'
    });
  }

  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
