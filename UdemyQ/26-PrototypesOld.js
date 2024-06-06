//Objeto constructor
function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
}
Persona.prototype.formatearpersona = function () {
    return `${this.nombre} tiene ${this.edad} años`
}
const persona2 = new Persona('Patricio', 25)
console.log(persona2.formatearpersona())


// <--------------------------------------------------------->>

function Persona4(nombre, apellido,  edad, ) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}
Persona4.prototype.formatearpersona4 = function() {
    return `${this.nombre} ${this.apellido} tiene ${this.edad} años`
}
const persona5 = new Persona4(`Isaias`,`Avila`, 5)
console.log(persona5.formatearpersona4())


function Persona5(nombre, apellido, estado, edad, app) {
    this.nombre = nombre
    this.apellido =apellido
    this.estado = estado 
    this.edad = edad 
    this.app = app
}
Persona5.prototype.formatearpersona5 = function() {
    return `El nombre de la persona es ${this.nombre} ${this.apellido} Su estado civil es 
    ${this.estado} y tiene ${this.edad} y busca un nuevo romance en ${this.app}`
}
const persona6 = new Persona5(`Laura`, `Mercedez`, `Soltera`, `28 `, `Tinder`)
console.log(persona6.formatearpersona5())


// Crear productos que solo utilizan en un objeto en especifico 
function Producto(Marca, precio) {
    this.Marca = Marca
    this.precio = precio
}
Producto.prototype.formatearProducto = function () {
    return `${this.Marca}, ${this.precio}`
}
const producto = new Producto('Televisor Tochiba 22 Pulgadas', 500.000)
console.log(producto.formatearProducto())



function Producto3(Marca, precio) {
    this.Marca = Marca
    this.precio = precio
}
Producto3.prototype.formatearProducto3 = function (){
    return `${this.Marca}, ${this.precio}`
}
const producto3 = new Producto3(`Microondas electrico`, 200)
console.log(producto3.formatearProducto3())


function Producto4(marca, precio){
    this.marca = marca
    this.precio = precio
}
Producto4.prototype.formatearProducto4 = function () {
    return `${this.marca}, ${this.precio}`
}
const producto4 = new Producto4(`Tablet Lenovo 18 pulgadas`, 700)
    console.log(producto4.formatearProducto4())


function Producto5(marca, precio){
    this.marca = marca
    this.precio = precio
}
Producto5.prototype.formatearProducto5 = function () {
    return `${this.marca}. ${this.precio}`
}
const producto5 = new Producto5(`Refrigerador ultra caro xd`, 200) 
    console.log(producto5.formatearProducto5())



// Los prototipos permite la reutilización de código y la herencia. se puede crear estructuras de código más eficientes y flexibles.

