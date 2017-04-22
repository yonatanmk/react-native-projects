export const setTokenAction = (token) => {
  return {
    type: 'SET TOKEN',
    token
  };
};

export const setLikedPetsAction = (pets) => {
  return {
    type: 'SET LIKED PETS',
    pets
  };
};

export const setPetsAction = (pets) => {
  return {
    type: 'SET PETS',
    pets
  };
};
