
import React, { Component, PropTypes } from 'react';
import {
	View,
	StyleSheet,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
//
import StatusScreen from './StatusScreen';
import TabBarContainer from './TabBarContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUp: false,
      lastUpTime: new Date((new Date()).getTime() - 5 * 60 * 1000)
    };
  }
	// _renderTab(selected, services) {
	// 	const thisService = services.find(s => s.key === selected)
	// 	return (
	// 		<StatusScreen
	// 			isUp={thisService.isUp}
	// 			lastUpTime={thisService.lastUpTime}
	// 		/>
	// 	)
	// }

	render() {
		return (
      <View style={styles.container}>
        <StatusScreen isUp={this.state.isUp} lastUpTime={this.state.lastUpTime}/>
        <TabBarContainer />
      </View>
		);
	}
}

App.propTypes = {
	// selectedService: PropTypes.string.isRequired,
	// services: PropTypes.array.isRequired,
	// onServiceChange: PropTypes.func.isRequired,
  // isUp: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default App;
