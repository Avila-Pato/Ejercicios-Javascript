## Obtener datos de Pokémon usando la API de PokéAPI

Este script en JavaScript utiliza la API de PokéAPI para obtener datos de un Pokémon específico.

### Cómo funciona

1. **Solicitud a la API**: Utiliza `fetch()` para realizar una solicitud GET a la API de PokéAPI y obtener datos del Pokémon Ditto.

2. **Manejo de errores**: Verifica si la solicitud se realizó correctamente. Si no, muestra un mensaje de error en la consola.

3. **Conversión de la respuesta**: Si la solicitud es exitosa, convierte los datos de la respuesta a formato JSON.

4. **Registro de datos**: Registra los datos del Pokémon Ditto obtenidos en la consola.

### Código

```javascript
const getPokemonData = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        if (!response.ok) {
            throw new Error('Error al obtener los datos del Pokémon');
        }
        const pokemonData = await response.json();
        console.log('Datos del Pokémon obtenidos:', pokemonData);
        return pokemonData;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getPokemonData();
