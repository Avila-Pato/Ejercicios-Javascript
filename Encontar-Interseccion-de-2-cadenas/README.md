# Función intersectionString

Esta función encuentra la intersección de caracteres comunes entre dos cadenas y devuelve una nueva cadena que contiene esos caracteres únicos una sola vez.

## Uso


```javascript
/**
 * Encuentra la intersección de caracteres comunes entre dos cadenas.
 * @param {string} str1 - La primera cadena.
 * @param {string} str2 - La segunda cadena.
 * @returns {string} - La intersección de los caracteres comunes entre las dos cadenas.
 */
function intersectionString(str1, str2) {
    // Inicializa una variable para almacenar la intersección de caracteres.
    let intersection = '';

    // Objeto para llevar un registro de los caracteres vistos en str1.
    const seenChars = {};

    // Itera sobre cada carácter en la primera cadena.
    for (const char of str1) {
        // Verifica si el carácter está presente en la segunda cadena y no se ha visto antes.
        if (str2.includes(char) && !seenChars[char]) {
            // Agrega el carácter a la intersección.
            intersection += char;
            // Marca el carácter como visto en seenChars.
            seenChars[char] = true;
        }
    }

    // Devuelve la intersección de caracteres.
    return intersection;
}

// Ejemplo de uso de la función intersectionString
console.log(intersectionString('maicol', 'patricio')); // Resultado: 'aico'

