
// La función cloneObj crea un nuevo objeto con las mismas propiedades y valores que el objeto original, pero en una ubicación diferente en la memoria.
// El console.log(copy) muestra {a: 1, b: 2} porque copy es una copia exacta de original en términos de contenido.
// El console.log(copy === original) devuelve false porque copy y original no son el mismo objeto en memoria, a pesar de tener el mismo contenido.


function cloneObj(obj) {
    return { ...obj}
}

const original = {a: 1, b: 2};
const copy = cloneObj(original);

console.log(copy) // {a: 1, b: 2}
console.log(copy === original); // false