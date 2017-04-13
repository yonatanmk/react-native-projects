import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';

class Deck extends Component {

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gesture) => true,
      onPanResponderMove: (evt, gesture) => {
        // debugger;
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (evt, gesture) => {},
    });

    this.state = { panResponder, position };
  }

  renderCards(){
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      <Animated.View
        style={this.state.position.getLayout()} 
        {...this.state.panResponder.panHandlers}
      >
        {this.renderCards()}
      </Animated.View>
    );
  }
}

// const styles = {
//   ball: {
//     height: 60,
//     width: 60,
//     borderRadius: 30,
//     borderWidth: 30,
//     borderColor: 'black',
//   }
// };

export default Deck;
