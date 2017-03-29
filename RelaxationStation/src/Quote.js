
import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Platform,
} from 'react-native';

class Quote extends Component {
	render() {
    return (
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>"{this.props.quoteText}"</Text>
        <Text style={styles.sourceText}>- {this.props.quoteSource}</Text>
      </View>
    );
	}
}

Quote.propTypes = {
	quoteText: PropTypes.string.isRequired,
	quoteSource: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	quoteContainer: {
		flex: 1,
    // flexDirection: 'row',
		justifyContent: 'center',
	},
	quoteText: {
		fontFamily: (Platform.OS === 'ios') ?
			'AvenirNext-Bold' :
			'Roboto',
		fontSize: 36,
		color: '#ffffff',
		marginVertical: 30,
    // flex: 0.9,
    // justifyContent: 'center',
	},
	sourceText: {
		fontFamily: (Platform.OS === 'ios') ?
			'AvenirNext-Italic' :
			'Roboto',
		fontSize: 20,
		color: '#F8F8F8',
		textAlign: 'right',
		fontStyle: 'italic',
	},
});

// <View style={{flex:1, flexDirection:'row'}}>

export default Quote;
