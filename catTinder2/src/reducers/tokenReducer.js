const tokenReducer = (state = null, action ) => {
  switch (action.type) {
    case 'SET TOKEN':
      return action.token;
    default:
      return state;
  }
};

export default tokenReducer;
