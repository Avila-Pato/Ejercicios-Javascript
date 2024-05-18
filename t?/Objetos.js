let auto = {
    marca: 'fiat',
    modelo: '500',
    color: 'rojo',
    precio: 1000000
}

let auto2 = {
    marca: 'renaut',
    modelo: '12',
    color: 'azul',
    precio: 1000000
}

// console.log(auto, auto2)
// console.log(auto. marca)

const vendedor = {
    nombre: 'pepe',
    apellido: 'Zanches',
    edad: 30,
    habilidades: ['Logistico', 'cauteloso', 'dinamico',],
    salario: 1000000,
    vender: function() {
        return "pepe ha vendido un auto "
    },
nombreCompleto: function() {
    return this.nombre + " " + this.apellido
    }    
}
console.log(vendedor.vender())
console.log(vendedor)
console.log(vendedor.nombreCompleto())
console.log(vendedor.habilidades)
