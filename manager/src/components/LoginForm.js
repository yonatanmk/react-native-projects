import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            autoCapitalize='none'
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange}
          />
        </CardSection>

        <CardSection>
          <Input
            autoCapitalize='none'
            secureTextEntry
            label='Password'
            placeholder='password'
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, {emailChanged})(LoginForm);
