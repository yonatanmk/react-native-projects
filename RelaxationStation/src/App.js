import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
} from 'react-native';
import StartScreen from './StartScreen';
import QuoteScreen from './QuoteScreen';

const { quotes } = require('../quotes.json');

class App extends Component {
  constructor(props) {
		super(props);

		this.state = {
			quoteIndex: 0,
		};

		this._incrementQuoteIndex = this._incrementQuoteIndex.bind(this);
	}

	_incrementQuoteIndex() {
		let newIndex;

		if (this.state.quoteIndex + 1 === quotes.length) {
			newIndex = 0;
		} else {
			newIndex = this.state.quoteIndex + 1;
		}

		this.setState({
			quoteIndex: newIndex,
		});
	}

  render() {
    const quote = quotes[this.state.quoteIndex];
    return (
      <Navigator
        initialRoute={{ name: 'StartScreen' }}
        renderScene={(route, navigator) => {
          switch(route.name) {
            case 'StartScreen':
              return <StartScreen onStartHandler={()=> navigator.push({ name: 'QuoteScreen' })}/>;
            case 'QuoteScreen':
              return (
                <QuoteScreen
                  qId={this.state.quoteIndex}
                  text={quote.text}
                  source={quote.source}
                  onNextQuotePress={this._incrementQuoteIndex}
                />
              );
          }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161737',
  },
  readyText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  buttonImage: {
    width: 200,
    height: 200,
  },
});

export default App;
