import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAF9pGj6772ItA914ZApIHE3FRNh-qI4Ok',
      authDomain: 'authentication-e398e.firebaseapp.com',
      databaseURL: 'https://authentication-e398e.firebaseio.com',
      storageBucket: 'authentication-e398e.appspot.com',
      messagingSenderId: '1028841437667'
    });

    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={()=>firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection>
            <Spinner size='large'/>
          </CardSection>
        );
    }
  }

  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
