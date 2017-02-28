import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
