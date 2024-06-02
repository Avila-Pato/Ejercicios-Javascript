//Objetos

let persona = {
    nombre: 'Pato',
    edad: 25,
    direccion: {
        ciudad: 'Santiago',
        codigoPostal: 'nose'
    }
}

console.log(persona)

// otras formas 

const nombreProducto = "Monitor 20 pulgadas"
const precio = '500.000'
const disponible = true

let produto = {

    nombreProducto,
    precio,
    disponible
}

// agregar nuevas propeidades
produto.imagen = 'imagen.js'

// borrar producto 
delete produto.disponible;



//opcion para accder a a as propiedades dell objeto
console.log(produto.precio)
// otra forma
console.log(produto['precio'])

