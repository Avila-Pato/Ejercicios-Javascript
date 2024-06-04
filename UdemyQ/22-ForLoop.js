// foor loop

for (let i = 1; i < 11; i++) {
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    if(i % 2 === 0) {
        console.log(`El numero ${i} es Par`);
    }else {
        console.log(`El numero ${i} es Impar`);
    }
}

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre)
}
// while loop

// var i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// // do while loop

// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 7);