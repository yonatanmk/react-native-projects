import { combineReducers } from 'redux';

let pokemon = (state = null, action) => {
  switch(action.type) {
    case 'SET_POKEMON':
      return action.pokemon;
    default:
      return state;
  }
};

export default combineReducers({pokemon});
