// Función que verifica si un objeto tiene una propiedad específica
function hasProperty(object, key) {
    // Utiliza el método hasOwnProperty() del objeto para verificar si tiene la propiedad especificada
    return object.hasOwnProperty(key);
}

// Verifica si el objeto {a: 1, b: 2} tiene la propiedad 'a'
console.log(hasProperty({a: 1, b: 2}, 'a')); // true

// Verifica si el objeto {a: 1, b: 2} tiene la propiedad 'c'
console.log(hasProperty({a: 1, b: 2}, 'c')); // false

// La función hasProperty toma dos argumentos: object (el objeto en el que se busca la propiedad) y key (la clave que se busca en el objeto).
// Dentro de la función, object.hasOwnProperty(key) devuelve true si el objeto tiene la propiedad especificada por key, de lo contrario devuelve false.
// En el primer console.log, {a: 1, b: 2} tiene la propiedad 'a', por lo que la función devuelve true.
// En el segundo console.log, {a: 1, b: 2} no tiene la propiedad 'c', por lo que la función devuelve false.