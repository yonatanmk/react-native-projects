let setPokemonAction = (pokemon) => {
  return {
    type: 'SET_POKEMON',
    pokemon
  };
};

export const setPokemon = (query) => (dispatch) => {
  return fetch(`https://rallycoding.herokuapp.com/api/music_albums`)
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      console.log(body);
    })
    .catch(error => {
      console.error(`Error in fetch: ${error.message}`);
    });
};
