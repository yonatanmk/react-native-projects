import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Board from './components/Board';

class App extends Component {
  render () {

    return (
      <View style={styles.container}>
        <Board />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#555555',
  },
});

export default App;
