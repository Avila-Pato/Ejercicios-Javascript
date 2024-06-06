 
 const boton = document.querySelector('#boton');

 boton.addEventListener('click', () => {
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es ${resultado}`))
 })
 if(Notification.permission === 'granted') {
    new Notification('esta es una notificacion', {
        icon:'img.jpg',
        body: 'Explora el antivuros trotano 100% de virus'
    })
 }
