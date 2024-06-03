//ARRAYS METHODS

const meses = ["enero", "febrero" , "marzo" , "abril" , "mayo"];

const carrito = 
[{nombre: 'Monitor 20 pulgadas',precio: 300,}
 ,{nombre: 'Televisor 40 pulgadas',precio: 400,}
 ,{nombre: 'Tablet',precio: 200,}
 ,{nombre: 'Audifonos',precio: 300,}
 ,{nombre: 'Teclado',precio: 50,}
 ,{nombre: 'Celular',precio: 700,}
 ,{nombre: 'Bocinas',precio: 100,}
 ,{nombre: 'Laptop',precio: 800,}
]
// ForEach

meses.forEach(function(mes) {
    if (mes === 'marzo') {
        console.log('Marzo si esta')
    }
})

// Includes, para arrays planos

console.log(meses.includes('Febrero'))
console.log(meses.includes('enero'))

// Some (Para Arreglos de objetos) == [Arrow Funtion]

let resultado = carrito.some(producto => producto.nombre === 'Celular')

// Reduce (Para Arreglos de objetos) == [Arrow Funtion]
resultado = carrito.reduce((total, producto) => total + producto.precio, 0)


// Some (Para Arreglos de objetos) == [Funtion]
let resultado2 = carrito.some(function(producto) {
    return producto.nombre === 'Celular'
})

// metodo reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0)


// Filter [llama losd atos que le estamos pidiendo]

resultado = carrito.filter(function(producto){
    return producto.precio > 400
})

// filter arrow Function
resultado = carrito.filter(producto => producto.precio > 400)



console.log(resultado)
console.log(resultado2)
