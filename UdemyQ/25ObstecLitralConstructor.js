// POO

//Objeto literal

const persona = {
    nombre: 'ISAIAS',
    edad: 5
}
console.log(persona)

//Objeto constructor

const persona2 = new Persona('Patricio', 900)
function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
}
console.log(persona2)



const producto = new Producto('Televisor Tochiba 22 Pulgadas', 500.000)
function Producto(Marca, precio) {
    this.Marca = Marca
    this.precio = precio
}
console.log(producto)
