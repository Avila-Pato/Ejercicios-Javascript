// reverse string

function reverseString(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;

}

console.log(reverseString('hola'));

// Los indises en javascript  de atras comienzan en -1 

    // function reverseString(str) {:
    //     Esta línea define una función llamada reverseString que toma un parámetro llamado str, que representa la cadena que queremos invertir.

    //     let result = '';:
    //     Aquí se declara una variable llamada result y se inicializa como una cadena vacía. Esta variable será utilizada para almacenar la cadena invertida.

    //     for (let i = str.length - 1; i >= 0; i--) {:
    //     Comienza un bucle for que recorrerá la cadena str de atrás hacia adelante. i se inicializa con el valor de str.length - 1, es decir, el índice del último carácter de la cadena str. El bucle se ejecutará mientras i sea mayor o igual que 0, disminuyendo i en cada iteración.


    //     result += str[i];:
    //     En cada iteración del bucle, se agrega el carácter en la posición i de la cadena str a la variable result. Esto es lo que realmente invierte la cadena.


    //     return result;:
    //     Una vez que se ha invertido toda la cadena, se devuelve la variable result, que contiene la cadena invertida.
    //     