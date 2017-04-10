import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import PageContainer from './containers/PageContainer';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PageContainer />
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
