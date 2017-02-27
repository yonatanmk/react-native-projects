import { combineReducers } from 'redux';
import Authreducer from './AuthReducer';

export default combineReducers({
  auth: Authreducer
});
