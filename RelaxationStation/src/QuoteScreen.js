import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import Quote from './Quote';

const bgImage = require('../assets/bg.png');

class QuoteScreen extends Component {
  render() {
    return (
      <Image style={styles.backgroundContainer} source={bgImage}>
        <View style={styles.container}>
          <Quote quoteText={this.props.text} quoteSource={this.props.source}/>
        </View>
      </Image>
    );
  }
}

QuoteScreen.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
  },
});

export default QuoteScreen;
