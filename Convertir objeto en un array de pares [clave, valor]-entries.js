function objectToPairs(obj) {
    // Utiliza Object.entries() para obtener un array de pares [clave, valor] del objeto
    return Object.entries(obj);
}

// Llama a la función con un objeto {a: 1, b: 2, c: 3}
console.log(objectToPairs({a: 1, b: 2, c: 3}));

// La función objectToPairs toma un objeto obj como argumento.
// Utiliza el método Object.entries(obj) para obtener un array de pares [clave, valor] del objeto obj.
// Este array resultante contiene todos los pares [clave, valor] del objeto original.
// El console.log imprime el array de pares en la consola.

// El método Object.entries() se utiliza para convertir un objeto en una matriz de pares [clave, valor]. Esto es útil cuando necesitas trabajar con los pares de clave y valor de un objeto de una manera que sea más fácil de manejar o manipular, como iterar sobre ellos o convertirlos en otro formato.