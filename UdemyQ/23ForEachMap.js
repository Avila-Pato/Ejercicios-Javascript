const carrito = [
  {nombre: 'Monitor 20 pulgadas',precio: 300, marca: 'LG'}
 ,{nombre: 'Televisor 40 pulgadas',precio: 400, marca: 'SAMSUMG'}
 ,{nombre: 'Tablet',precio: 200, marca: 'TOSHIBA'}
 ,{nombre: 'Audifonos',precio: 300, marca: 'SAMSUMG'}
 ,{nombre: 'Teclado',precio: 50, marca: 'HP'}
 ,{nombre: 'Celular',precio: 700, marca: 'HUAVEI'}
 ,{nombre: 'Bocinas',precio: 100, marca: 'NOKIA'}
 ,{nombre: 'Laptop',precio: 800, marca: 'MOTOROLA'}
]

// For each
carrito.forEach(function(producto){
    console.log(producto.nombre)
})
carrito.forEach(producto => console.log(producto.marca))
// Map
let resultado = carrito.map(function(producto){
    return producto.nombre
})
let resultado2 = carrito.map(item => `${item.nombre} - ${item.precio}` )
console.log(resultado2)
console.log(resultado)



