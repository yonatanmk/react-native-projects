import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

class Board extends Component {
  render () {
    console.log(Dimensions.get('window').width);

    return (
      <View style={styles().container}>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
        <View style={styles().box}></View>
      </View>
    );
  }
}

const styles = () => {
  let width = Dimensions.get('window').width
  ;
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap'
      // flex: 1,
      // justifyContent: 'center',
      // flexDirection: 'column',
      // alignItems: 'center',
      // backgroundColor: '#F5FCFF',
    },
    rowContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    box: {
      width: width / 5,
      height: width / 5,
      backgroundColor: 'red',
      // boxSizing: 'border-box',
      borderWidth: 2,
      borderColor: 'black',
    }
  });
};

export default Board;
