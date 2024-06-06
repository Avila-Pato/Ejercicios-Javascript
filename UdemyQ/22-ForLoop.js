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
// while loop (revisa si se cumple esas condicion y luego ejecuta el codigo )

let i = 1;
while (i < 20) {
    if(i % 2 == 0) {
        console.log(`El numero ${i} es Par`);
    }
    i++;
}
let x = 1;
while(x < carrito.length){
    console.log(carrito[x].nombre)
    x++;
}

// do while loop(ejecuta el codigo al menos 1 vez y despues evalua )

let a = 0;
do {
    console.log(a);
    i++;
} while (a < 7);

let b = 0;
do {
    console.log(b);
    i++;
} while (b < carrito); {
    console.log(carrito[b].nombre)
}

// let c = 0;
// do {
//     console.log(c);
//     i++;
// } while (c < 10);{
//    if(c % 2 == 0){
// }
// }
