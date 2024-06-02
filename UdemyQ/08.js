// Unir 2 objetos con el 


// Spread Operator

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
};

const detalle = {
    peso: 3.5,
    color: 'Negro'
};


// No es recomendablle modificar 2 objetos (Maals practicas)
const productoCompleto = {
    ...producto,
    ...detalle
};

console.log(productoCompleto);