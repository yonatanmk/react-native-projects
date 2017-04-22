const likedPetsReducer = (state = null, action ) => {
  switch (action.type) {
    case 'SET LIKED PETS':
      return action.pets;
    default:
      return state;
  }
};

export default likedPetsReducer;
