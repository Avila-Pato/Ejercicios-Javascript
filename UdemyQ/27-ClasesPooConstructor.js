//Clases POO

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
    formaterPorducto (){
        return `el ${this.nombre} tiene un costo de ${this.precio}`
    }
}

const Producto1 = new Producto ('Monitor curvo de 20  pulgadas', 200)
console.log(Producto1.formaterPorducto())


class Persona {
    constructor(nombre,apellido, status,edad, apariencia, correo, instituto, direccion) {
        this.nombre = nombre
        this.apellido = apellido
        this.status = status
        this.edad = edad
        this.apariencia = apariencia
        this.correo = correo
        this.instituto = instituto
        this.direccion = direccion
    }
    formaterPersona (){
        return `el Nombre de mi ehrmano es ${this.nombre} ${this.apellido} y es mi
        ${this.status} tiene ${this.edad} y es muy ${this.apariencia} 
        no tiene correo asi que mi correo es ${this.correo} y va a al 
        ${this.instituto} y que da en ${this.direccion}`
    }
}
const Persona1 = new Persona ('Isaias', 'Avila', 'Hermano', 5, 'bonito', 
    'p.avialf1998@gmail,com', 'Jadin Kinkelen',  'Los morros con condell #12421')

console.log(Persona1.formaterPersona())
