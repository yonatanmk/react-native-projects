import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// const petfinderAuth = require('../env.js');

import LocationScreen from './LocationScreen';
import DeckScreen from './DeckScreen';
import ReviewScreen from './ReviewScreen';

class HomeScreen extends Component {
  render() {
    const MainNavigator = TabNavigator({
      location: { screen: LocationScreen },
      deck: { screen: DeckScreen },
      review: { screen: ReviewScreen },
    });
    return (
      <View style={styles.container}>
        <MainNavigator />
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

export default HomeScreen;
