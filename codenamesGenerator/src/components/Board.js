import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Board extends Component {
  render () {
    return (
      <View style={styles.container}>
          <View style={styles.box2}></View>
          <View style={styles.box2}></View>
          <View style={styles.box2}></View>
          <View style={styles.box2}></View>
          <View style={styles.box2}></View>
      </View>
    );

    // return (
    //   <View style={styles.container}>
    //     <View style={styles.rowContainer}>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //     </View>
    //     <View style={styles.rowContainer}>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //     </View>
    //     <View style={styles.rowContainer}>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //     </View>
    //     <View style={styles.rowContainer}>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //     </View>
    //     <View style={styles.rowContainer}>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //       <View style={styles.box}></View>
    //     </View>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'flex-start',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'flex-start',
  },
  box: {
    flex: 1,
    height: 60,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'black',
  },
  box2: {
    flex: 1,
    height: 60,
    width: 60,
    backgroundColor: 'red',
    // borderWidth: 2,
    // borderColor: 'black',
  }
});

export default Board;
