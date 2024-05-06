# Función intersectionString

La función `intersectionString` encuentra la intersección de caracteres comunes entre dos cadenas y devuelve una nueva cadena que contiene esos caracteres únicos una sola vez.

## Uso

```javascript
/**
 * Encuentra la intersección de caracteres comunes entre dos cadenas.
 * @param {string} str1 - La primera cadena.
 * @param {string} str2 - La segunda cadena.
 * @returns {string} - La intersección de los caracteres comunes entre las dos cadenas.
 */
function intersectionString(str1, str2) {
    let intersection = '';
    const seenChars = {};

    for (const char of str1) {
        if (str2.includes(char) && !seenChars[char]) {
            intersection += char;
            seenChars[char] = true;
        }
    }

    return intersection;
}

console.log(intersectionString('maicol', 'patricio')); // Resultado: 'ac'
