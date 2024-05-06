# Función reverseString

La función `reverseString` toma una cadena como entrada y devuelve la misma cadena invertida.

## Código y Explicación

```javascript
// Los índices en JavaScript de atrás comienzan en -1

// La siguiente función string2 invierte una cadena.
function reverseString(str) {
    // Aquí se declara una variable llamada result y se inicializa como una cadena vacía.
    // Esta variable será utilizada para almacenar la cadena invertida.
    let result = '';

    // Comienza un bucle for que recorrerá la cadena str de atrás hacia adelante.
    // i se inicializa con el valor de str.length - 1, es decir, el índice del último carácter de la cadena str.
    // El bucle se ejecutará mientras i sea mayor o igual que 0, disminuyendo i en cada iteración.
    for (let i = str.length - 1; i >= 0; i--) {
        // En cada iteración del bucle, se agrega el carácter en la posición i de la cadena str a la variable result.
        // Esto es lo que realmente invierte la cadena.
        result += str[i];
    }

    // Una vez que se ha invertido toda la cadena, se devuelve la variable result, que contiene la cadena invertida.
    return result;
}
console.log(reverseString('hello')); // Resultado: 'olleh'
console.log(reverseString('javascript')); // Resultado: 'tpircsavaj'
