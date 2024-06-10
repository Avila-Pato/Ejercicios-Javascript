// seleccionar elementos y asociales elementos 

const btnEnviar = document.querySelector('.btn');
btnEnviar.addEventListener('click', (evento) => {
    console.log(evento)
    evento.preventDefault();
    // Validacion de formualario // es util para que la pagina no recargue.--predenDefault
    console.log( 'has sido clicleado' );
})
window.onscroll = (e) => {
    console.log( e );
}