// Funciones que retornen valores

function sumar(a, b) {
    return a + b;
}
const Resultado = sumar(1, 2);
console.log(Resultado)



let total = 0
const totalAPagar = calcularImpuesto(total)

function agregarCarrito(precio){
    return total += precio
}
function calcularImpuesto(total){
    return 2 * total
}

total = agregarCarrito(100)
total = agregarCarrito(100)
console.log(total)

console.log(`El total de impuestos a pagar es de ${totalAPagar}`)