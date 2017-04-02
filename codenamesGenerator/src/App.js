import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Board from './components/Board';

class App extends Component {
  render () {

    return (
      <View>
        <Board />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
});

export default App;
