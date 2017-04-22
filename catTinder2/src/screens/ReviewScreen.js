import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class ReviewScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Review</Text>
        <Text>Review</Text>
        <Text>Review</Text>
        <Text>Review</Text>
        <Text>Review</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around'
  }
};

export default ReviewScreen;
