
// Evento Submit
const formulario = document.querySelectorById('#registrationForm');
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el comportamiento por defecto
  console.log('Formulario enviado');
})

// Evento Clcillamiento
const btnEnviar = document.querySelector('.btn');
btnEnviar.addEventListener('click', (evento) => {
    console.log(evento)
    evento.preventDefault();
    // Validacion de formualario // es util para que la pagina no recargue.--predenDefault
    console.log( 'has sido clicleado' );
})

// Usualmente para las buenas practicaS se usa el Submit llo que son validaciones como formularios es mejor suar el submitz

// el evento cllickl se suan en imagennes en textos 
