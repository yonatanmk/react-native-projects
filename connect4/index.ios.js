import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './src/App';
import GameClass from './GameClass';

let game = new GameClass();

export default class connect4 extends Component {
  render() {
    return (
      <App game={game}/>
    );
  }
}

AppRegistry.registerComponent('connect4', () => connect4);
