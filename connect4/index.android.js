import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './src/App';
import GameClass from './GameClass';

export default class connect4 extends Component {
  render() {
    return (
      <App text='Thisis my text'/>
    );
  }
}

AppRegistry.registerComponent('connect4', () => connect4);
