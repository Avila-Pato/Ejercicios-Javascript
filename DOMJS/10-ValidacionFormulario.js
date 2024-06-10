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
        mostrarAlerta('Todos los campos son obligatorios');
        return;
    }

    console.log('Enviando Formulario');

    mostrarAlerta2('Los datos han sido enviados correctamente');
});

function leerTexto(event) {
    datos[event.target.id] = event.target.value;
    // console.log(datos);
}

function mostrarAlerta(mensaje) {
    const error = document.createElement('P');
    error.innerHTML = mensaje;
    error.classList.add('error'); // Agrega la clase error
    formulario.appendChild(error); // Para que se agregue a HTML

    // Desaparecer después de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}

function mostrarAlerta2(mensaje) {
    const listo = document.createElement('P');
    listo.innerHTML = mensaje;
    listo.classList.add('listo'); // Agrega la clase listo
    formulario.appendChild(listo); // Para que se agregue a HTML

    setTimeout(() => {
        listo.remove();
    }, 5000);
}


