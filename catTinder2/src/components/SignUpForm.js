import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'http://10.10.11.53:3000';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
    };
  }

  handleSubmit = () => {
    const body = JSON.stringify(this.state)
    fetch(`${ROOT_URL}/users`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body
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
          <FormLabel>Confirm Password</FormLabel>
          <FormInput
            value={this.state.password_confirmation}
            autoCapitalize='none'
            onChangeText={password_confirmation => this.setState({ password_confirmation })}
          />
        </View>
        <Button onPress={this.handleSubmit} title="Create User" />
      </View>
    );
  }
}

export default SignUpForm;
