const petsReducer = (state = null, action ) => {
  switch (action.type) {
    case 'SET PETS':
      return action.pets;
    default:
      return state;
  }
};

export default petsReducer;
