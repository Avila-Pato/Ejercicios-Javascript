//Eventos inputs y textAreas

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
const nombres = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')

nombres.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value
    console.log(datos)
}
