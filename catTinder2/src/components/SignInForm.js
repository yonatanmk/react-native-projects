import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import { setTokenAction, setLikedPetsAction } from '../actions'

const ROOT_URL = 'http://10.10.11.53:3000';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = () => {
    const body = JSON.stringify(this.state)
    fetch(`${ROOT_URL}/users/login`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body
    })
    .then(response => response.json())
    .then(body => {
      this.props.setTokenAction(body.auth_token)
      this.props.setLikedPetsAction(body.pets)
    })
    .catch(error => {
      console.error(`Error in fetch: ${error.message}`);
    });
  }

  render() {
    const { email, password, password_confirmation } = this.state;
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Email</FormLabel>
          <FormInput
            value={this.state.email}
            autoCapitalize='none'
            onChangeText={email => this.setState({ email })}
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            value={this.state.password}
            autoCapitalize='none'
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <Button onPress={this.handleSubmit} title="Login" />
      </View>
    );
  }
}

export default connect(null, { setTokenAction, setLikedPetsAction })(SignUpForm);
