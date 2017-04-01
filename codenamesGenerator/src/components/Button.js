import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Button extends Component {
  render () {

    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Button;
