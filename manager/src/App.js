import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCMG5O8wB18VOpCh0_4WROWDt7F0ocm02k",
      authDomain: "manager-4e141.firebaseapp.com",
      databaseURL: "https://manager-4e141.firebaseio.com",
      storageBucket: "manager-4e141.appspot.com",
      messagingSenderId: "565164043528"
    };
    firebase.initializeApp(config);
  }

  render () {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
