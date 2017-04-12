import React, { Component } from 'react';
import { View, Text } from 'react-native';


class Page extends Component {
  componentDidMount () {
    this.props.setPokemon('squirtle');
  }

  render () {
    return (
      <View style={styles.text}>
        <Text>Hello World</Text>
      </View>
    );
  }
}

const styles = {
  text: {
    marginTop: 30
  }
};

export default Page;
