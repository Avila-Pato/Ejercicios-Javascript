// arrows function

 const sum1 = (n1, n2) => console.log(n1 + n2);
 sum1(5, 5);

 const aprendiendo = tecnologia => console.log(`Aprendiendo: ${tecnologia}`)
 aprendiendo ('Javascript')

 // Array Metodos

 const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo']

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
meses.forEach( mes => {
    if (mes == 'marzo') {
        console.log('Marzo si esta')
    }
})

resultado = carrito.some( producto => producto.nombre == 'Tablet')
resultado = carrito.some(function(producto){
    return producto.nombre == 'pepe'
});
if (resultado.length == 0) {
    console.log('No Esta el producto')
}else {

    console.log(resultado)

}

resultado2 = carrito.reduce((total, producto) => total + producto.precio, 0)
resultado2 = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0)


console.log(resultado2)

resultado3 = carrito.filter(function(producto) {
    return producto.nombre == 'Tablet'
})
if(resultado3.length == 0) {
    console.log('No Esta el producto')
}else{
    console.log(resultado3)
}
resultado3 = carrito.filter(producto => producto.nombre == 'microondas')
if(resultado3.length === 0 ) { 
    console.log('No Esta el producto')
}else{
    console.log(resultado3)
}
