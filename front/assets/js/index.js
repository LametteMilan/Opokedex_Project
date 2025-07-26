const apiUrl = 'http://localhost:3000';




async function getPokemons() {
    try {
      const response = await fetch(apiUrl + '/pokemon');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const pokemons = await response.json();
      console.log('Pokémons reçus :', pokemons);
      return pokemons;
      
    } catch (error) {
      console.error('Erreur lors de la récupération des Pokémon :', error);
      return [];
    }
  }

getPokemons();