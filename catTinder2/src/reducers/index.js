import { combineReducers } from 'redux';

import tokenReducer from './tokenReducer';
import likedPetsReducer from './likedPetsReducer';
import petsReducer from './petsReducer';

const appReducer = combineReducers({
  token: tokenReducer,
  likedPets: likedPetsReducer,
  pets: petsReducer,
});

export default appReducer;
