import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-69657.cloudfunctions.net/';

class SignInForm extends Component {
  state = { phone: '', code: '' };

  handleSubmit = async () => {
    try {
      const { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone,
        code: this.state.code
      });

      firebase.auth().signInWithCustomToken(data.token); //sign into firebase using JWT

    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
          <FormLabel>Enter Code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignInForm;
