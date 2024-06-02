'use strict';

// Definición de arreglos
let lenguajes = ["JavaScript", "PHP", "Python"];
const Arreglos = ["Hola", 10, true, "si", null, {nombre: "Patricio", trabajo: 'Programador'}, [1,2,3]];

// Mostrar los arreglos
console.log("lenguajes:", lenguajes);
console.log("lenguajes[0]:", lenguajes[0]);
console.log("lenguajes[1]:", lenguajes[1]);
console.table(lenguajes);
console.log("Arreglos:", Arreglos);

// Acceder a valores de un arreglo
console.log("Arreglos[0]:", Arreglos[0]);
console.log("Arreglos[1]:", Arreglos[1]);
console.log("Arreglos[2]:", Arreglos[2]);
console.log("Arreglos[3]:", Arreglos[3]);
console.log("Arreglos[4]:", Arreglos[4]);

// Conocer la longitud de un arreglo
console.log("Longitud de Arreglos:", Arreglos.length);
console.log("Longitud de lenguajes:", lenguajes.length);

// Iterar sobre un arreglo utilizando forEach
console.log("Iterando sobre el arreglo 'lenguajes':");
lenguajes.forEach(function(lenguaje) {
    console.log(lenguaje);
});
