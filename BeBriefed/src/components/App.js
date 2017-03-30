
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
      selectedService: 'db',
			services: [
				{ key: 'web', isUp: true, lastUpTime: null },
				{ key: 'db', isUp: false, lastUpTime: new Date((new Date()).getTime() - 5 * 60 * 1000) },
				{ key: 'mail', isUp: true, lastUpTime: null },
			],
    };

    this._switchService = this._switchService.bind(this);
  }

	_renderTab(selected, services) {
		const thisService = services.find(s => s.key === selected);
		return (
			<StatusScreen
				isUp={thisService.isUp}
				lastUpTime={thisService.lastUpTime}
			/>
		);
	}

  _switchService(nextService) {
    this.setState({ selectedService: nextService });
  }

	render() {
		return (
      <View style={styles.container}>
        {this._renderTab(this.state.selectedService, this.state.services)}
        <TabBarContainer
          onTabChange={this._switchService}
          selectedService={this.state.selectedService}
        />
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
