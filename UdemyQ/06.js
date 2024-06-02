//  Objetos 

const produdcto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}
// Forma anterior
const precioProducto = produdcto.precio
console.log(precioProducto)


// Destructuring Objetos
const { nombre, precio } = produdcto
const { disponible } = produdcto
console.log(nombre)
console.log(precio)
console.log(disponible)
