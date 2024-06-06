// Hrencia

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



class Libro extends Producto {
    constructor (nombre, precio, isnb) {
        super(nombre, precio)
        this.isnb = isnb
    }
    formaterPorducto (){
        return `${super.formaterPorducto()} y numero de serie es ${this.isnb} `
    }
}
const libro = new Libro ('El libro Gitgub de Midudev', 500, 297392740)
console.log(libro.formaterPorducto())