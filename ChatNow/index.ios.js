import React, { Component } from 'react';
import {
	AppRegistry,
} from 'react-native';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

import MainScreen from './src/components/MainScreen';
import SignInScreen from './src/components/SignInScreen';

// import AppContainer from './containers/AppContainer';
// import chatNowReducers from './reducers';

// let store = createStore(chatNowReducers, applyMiddleware(thunk));

class ChatNow extends Component {
	render() {
		return (
      <SignInScreen />
		);
	}
}

AppRegistry.registerComponent('ChatNow', () => ChatNow);
