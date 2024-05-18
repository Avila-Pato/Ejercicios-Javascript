function getMethods(obj) {
    // Utiliza Object.keys() para obtener un array de todas las claves del objeto
    // Luego, utiliza .filter() para filtrar solo las claves cuyos valores son funciones
    return Object.keys(obj).filter(key => typeof obj[key] === 'function');
}

// Objeto que contiene propiedades y métodos
const obj = {
    a: 1,
    b: 2,
    foo() { return 'foo' }, // Método "foo"
    bar() { return 'bar' }  // Método "bar"
};

// Llama a la función con el objeto y imprime el resultado
console.log(getMethods(obj));

// La función getMethods toma un objeto obj como argumento.
// Utiliza Object.keys(obj) para obtener un array de todas las claves del objeto.
// Luego, aplica .filter() para filtrar solo las claves del objeto cuyos valores son de tipo función (typeof obj[key] === 'function'). Esto asegura que solo se incluyan los nombres de las claves que se refieren a métodos del objeto.
// El resultado es un array que contiene los nombres de todos los métodos del objeto.
// Finalmente, el console.log imprime este array en la consola.
// Por lo tanto, la salida será un array que contiene los nombres de los métodos del objeto proporcionado. En este caso, [ 'foo', 'bar' ].