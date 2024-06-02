'use strict' // correr javascript para buennas practicas

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
};


// Object.freeze(producto); // freeze congela el objeto 'producto', evitando que se puedan agregar, eliminar o modificar sus propiedades

Object.seal(producto); // Permite Modificar el producto
producto.precio = '800.000'; // Esta línea no tendrá efecto porque el objeto está congelado y no se puede modificar 

// producto.imagen = 'imagen.jpg'; // Esta línea no tendrá efecto porque el objeto está congelado y no se puede modificar
// -- producto.image no permite agregarse usando e metodo seal igual que frezee
// // console.log(Object.isFrozen(producto)); // isFrozen verifica si el objeto 'producto' está congelado, devuelve true si lo está

console.log(producto); // Imprime el objeto 'producto', mostrando que la propiedad 'imagen' no se añadió
