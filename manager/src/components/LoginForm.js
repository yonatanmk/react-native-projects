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

  onPasswordChange(text) {
    this.props.passwordChanged(text);
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
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            autoCapitalize='none'
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={this.onPasswordChange}
            value={this.props.password}
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

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);
