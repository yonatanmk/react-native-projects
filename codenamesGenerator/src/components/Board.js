import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Board extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    // borderColor: 'black',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    height: 60,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'black',
  }
});

export default Board;
