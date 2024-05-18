// Función que cuenta el número de propiedades de un objeto
function coountProperties(obj) {
    // Utiliza Object.keys() para obtener un array de las claves del objeto
    // Luego, utiliza .length para obtener la longitud de ese array, que es el número de propiedades
    return Object.keys(obj).length;
}

// Llama a la función con un objeto que tiene tres propiedades: a, b y c
console.log(coountProperties({a: 1, b: 2, c: 3, d: 4})); // Output 4

// Esta versión del código incluye comentarios dentro del código mismo, lo que proporciona una explicación clara de lo que hace cada parte del código. La función coountProperties cuenta el número de propiedades del objeto que se le pasa como argumento, y el console.log imprime ese resultado en la consola.