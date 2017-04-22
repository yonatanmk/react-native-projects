import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {

  render() {
    console.log(process.env.PETFINDER_API_KEY);
    return (
      <View style={styles.container}>
        <Text>Blahhh!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
