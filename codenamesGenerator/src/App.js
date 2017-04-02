import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Board from './components/Board';
import Button from './components/Button';

import {boardMaker} from '../utilities';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: boardMaker(),
    };

    this.newBoard = this.newBoard.bind(this);
  }

  newBoard() {
    this.setState({board: boardMaker()});
  }

  render () {

    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={styles.boardBox}>
            <Board board={this.state.board}/>
          </View>
          <View style={styles.buttonBox}>
            <Button onPress={this.newBoard}>
              New Board
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#555555',
    flex: 1,
  },
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40,
    flex: 1,
  },
  boardBox: {
    flex: 2,
  },
  buttonBox: {
    flex: 1,
    justifyContent: 'flex-start'
  }
});

export default App;
