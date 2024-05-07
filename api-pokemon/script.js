    // dada la url https://pokeapi.co/api/v2/pokemon/ditto
    // crea una llamada utilizando fetch para poder utilizarlo en cualquier 
    // framework/libreria de js . la funcion debe ser aprueba de errores, es decir si es correcta 
    // deberia de regresar los resultados, de lo contrario, deberia de regresar un console.error(

    // mandar logs de cada uno de los apsos de llamada
    const getPokemonData = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
            if (!response.ok) {
                throw new Error('Error al obtener los datos del Pokémon');
            }
            const pokemonData = await response.json();
            console.log('Datos del Pokémon obtenidos:', pokemonData);
            return pokemonData;
        }catch(error) 
        { console.error('Error',  error.message)
    }
}
    
        getPokemonData();
    
    