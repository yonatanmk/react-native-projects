import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {shuffle, boardMaker} from '../../utilities';

class Board extends Component {
  render () {

    let rows = [
      [ 1, 4, 0, 0 ],
      [ 2, 1, 0, 2 ],
      [ 2, 0, 1, 2 ],
      [ 2, 1, 0, 2 ],
      [ 2, 2, 0, 1 ]
    ];

    rows = boardMaker().map((row)=>{
      let boxes = [];
      for (let i = row[0]; i > 0 ; i--) {
        boxes.push(<View style={[styles.box, styles.red]}></View>);
      }
      for (let i = row[1]; i > 0 ; i--) {
        boxes.push(<View style={[styles.box, styles.blue]}></View>);
      }
      for (let i = row[2]; i > 0 ; i--) {
        boxes.push(<View style={[styles.box, styles.black]}></View>);
      }
      for (let i = row[3]; i > 0 ; i--) {
        boxes.push(<View style={styles.box}></View>);
      }
      return (
        <View style={styles.rowContainer}>
          {shuffle(boxes)}
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
    backgroundColor: '#DFCC9D',
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
});

export default Board;
