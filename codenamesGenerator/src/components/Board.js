import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {shuffle, boardMaker} from '../../utilities';

class Board extends Component {
  render () {
    let rowCounter = 0;
    let boxCounter = 0;

    let rows = this.props.board.map((rowScaffold)=>{
      let row = [];
      for (let [index, box] of rowScaffold.entries()) {
        for (let i = box; i > 0 ; i--) {
          let color;
          switch (index) {
            case 0:
              color = styles.red;
              break;
            case 1:
              color = styles.blue;
              break;
            case 2:
              color = styles.black;
              break;
            default:
              color = styles.tan;
          }
          row.push(<View key={boxCounter++} style={[styles.box, color]}></View>);
        }
      }
      return (
        <View key={rowCounter++} style={styles.rowContainer}>
          {shuffle(row)}
        </View>
      );
    });

    return (
      <View style={styles.container}>
        {rows}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    // borderColor: 'black',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    height: 60,
    borderWidth: 2,
    borderColor: 'black',
  },
  red: {
    backgroundColor: '#EB1E2F',
  },
  blue: {
    backgroundColor: '#077EAB',
  },
  black: {
    backgroundColor: '#373737',
  },
  tan: {
    backgroundColor: '#DFCC9D',
  }
});

export default Board;
