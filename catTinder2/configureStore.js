import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import appReducer from './src/reducers';

const configureStore = () => {
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let store = createStore(appReducer, {}, applyMiddleware(logger));
  return store;
};

export default configureStore;
