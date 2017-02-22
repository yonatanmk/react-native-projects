import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render () {
    return (
      <Card>
        <CardSection >
          <TextInput style={{ height: 20, width: 100}}/>
        </CardSection >

        <CardSection />
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection >
      </Card>
    );
  }
}

export default LoginForm;
