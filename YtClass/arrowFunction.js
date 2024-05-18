let num = '10' // si esta en un string con el parsInt podemos devolverlo a number en const

// funcion clasica 
function SumaDeNumero (numero) {
    return numero + 12
}
const asnwer = SumaDeNumero(parseInt(num))
console.log(asnwer)


// -------------------------------------------------------------------------//


// funcion flecha
let sumaDeNumero = numero => numero + 12
const respuesta = sumaDeNumero(parseInt(num))
console.log(respuesta)

