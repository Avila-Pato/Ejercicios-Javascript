// Función que cuenta el número de propiedades de un objeto
function countProperties(obj) {
    // Object.keys(obj) devuelve un array con todas las claves (propiedades) del objeto
    // .length devuelve el número de elementos en ese array, es decir, el número de propiedades del objeto
    return Object.keys(obj).length;
//     La función toma un parámetro obj, que es el objeto cuyas propiedades queremos contar.
// Object.keys(obj) devuelve un array que contiene todas las claves (propiedades) enumerables propias del objeto obj.
// .length devuelve la longitud del array, que es el número de propiedades del objeto obj
}

console.log(countProperties({a: 1, b: 2, e: 3})); // 3
// countProperties({a: 1, b: 2, e: 3}) se llama con un objeto que tiene tres propiedades: a, b y e.
// Object.keys({a: 1, b: 2, e: 3}) devuelve el array ['a', 'b', 'e'].
// La longitud de este array es 3, por lo tanto, la función devuelve 3.
// console.log imprime 3 en la consola.