import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Page from './components/Page';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Page />
      </Provider>
    );
  }
}

const styles = {
  text: {
    marginTop: 30
  }
};

export default App;
