
// La función deepClone utiliza JSON.stringify y JSON.parse para crear una copia profunda de un objeto, asegurando que incluso las propiedades anidadas se copian como nuevas instancias.
// copy es una copia profunda de original, lo que significa que ambos objetos tienen las mismas propiedades y valores, pero son independientes en la memoria.
// Al imprimir copy, vemos que tiene la misma estructura que original.
// La comparación entre copy.b y original.b muestra que son diferentes instancias de objeto, confirmando que copy es una copia profunda y no solo una referencia al mismo objeto.

// JSON.stringify(obj) convierte el objeto obj en una cadena de texto en formato JSON. Esto incluye todas sus propiedades y valores, incluso las propiedades anidadas.

// JSON.parse(...) toma esa cadena JSON y la convierte de nuevo en un objeto JavaScript.
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const original = {a: 1, b: {c: 2}};
const copy = deepClone(original);

console.log(copy); // {a: 1, b: {c: 2}}
console.log(copy.b === original.b); //False