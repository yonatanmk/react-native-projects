import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { setPetsAction } from '../actions'
const petfinderAuth = require('../../env.js');

const ROOT_URL = 'http://10.10.11.53:3000';

class LocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
    };
  }

  handleSubmit = () => {
    const { zip } = this.state;
    fetch(`${ROOT_URL}/pets?zip=${zip}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.props.jwt
       }
    })
    .then(response => response.json())
    .then(body => {
      this.props.setPetsAction(body.pet)
      this.props.navigation.navigate('deck');
    })
    .catch(error => {
      console.error(`Error in fetch: ${error.message}`);
    });
  }

  render() {
    const { email, password, password_confirmation } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 10, marginTop: 20 }}>
          <FormLabel>Please Enter A Zipcode</FormLabel>
          <FormInput
            value={this.state.zip}
            keyboardType='numeric'
            autoCapitalize='none'
            onChangeText={zip => this.setState({ zip })}
          />
        </View>
        <Button onPress={this.handleSubmit} title="Search" />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
};

const mapStateToProps = (state) => {
  return {
    jwt: state.token
  }
};

export default connect(mapStateToProps, { setPetsAction })(LocationScreen);
