// Objeto global
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombres = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombres.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

const formulario = document.querySelector('.registrationForm');
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto

    // Validar formulario
    const { nombre, email, mensaje } = datos;
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return;
    }
    mostrarAlerta('Los datos han sido enviados correctamente');
});

function leerTexto(event) {
    datos[event.target.id] = event.target.value;
    // console.log(datos);
}



// validacion formulario metodo corto
function mostrarAlerta(mensaje, error = null) { 
    const alerta = document.createElement('P')
    alerta.textContent = mensaje


    if (error) {
        alerta.classList.add('error')
    } else {
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta); // para que se aguegue a HTML


    setTimeout(() => {
        alerta.remove();
    }, 3000);
}