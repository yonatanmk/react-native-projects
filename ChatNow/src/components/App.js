import React, { Component, PropTypes } from 'react';
import {
	Navigator,
	Platform,
	StyleSheet,
} from 'react-native';

import routes from '../routes';
import MainScreen from './MainScreen';
import SignInScreen from './SignInScreen';
// import ChatContainer from '../containers/ChatContainer';
import NavBarRouteMapper from './NavBarRouteMapper';
// import { getCustomerInfo } from '../storageManager';


class App extends Component {
	constructor(props) {
		super(props);

		this._renderScene = this._renderScene.bind(this);
	}

	// componentDidMount() {
	// 	getCustomerInfo()
	// 		.then(data => {
	// 			if (data.name && data.accountNumber) {
	// 				console.log('Going to restore from storage:', data);
	// 				this.props.onRehydrateFromLocalStorage(data.name, data.accountNumber);
	// 			}
	// 		});
	// }

	_renderScene(route, navigator) {
		switch (route.name) {
		case 'SignInScreen':
			return <SignInScreen />;
		case 'MainScreen':
		default:
			return <MainScreen getHelpPressHandler={()=>{
        navigator.push(routes.signIn);
      }}/>;
    }
	}

	render() {
		return (
			<Navigator
				initialRoute={routes.main}
				renderScene={this._renderScene}
				style={styles.container}
				sceneStyle={styles.sceneContainer}
        navigationBar={<Navigator.NavigationBar
          routeMapper={NavBarRouteMapper}
          style={styles.navBar}
        />}
			/>
		);
	}
}

// App.propTypes = {
// 	name: PropTypes.string,
// 	accountNumber: PropTypes.string,
// 	onRehydrateFromLocalStorage: PropTypes.func.isRequired,
// };

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	sceneContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		marginTop: Platform.OS === 'ios' ? 64 : 56,
	},
	navBar: {
		backgroundColor: '#efefef',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#494949',
	},
});

export default App;
