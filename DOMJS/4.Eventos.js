// 4.Eventos.js

document.addEventListener('DOMContentLoaded', function() {
    
    // Crear un nuevo elemento de enlace
    const nuevoEnlace = document.createElement('a');
    nuevoEnlace.href = 'http://youtube.com/';
    nuevoEnlace.textContent = 'Enlace a YouTube';
    nuevoEnlace.classList.add('nuevo-enlace');
    nuevoEnlace.setAttribute('target', '_blank');
    
    
    // Agregar el nuevo enlace al final de la navegación
    const navegacion = document.querySelector('.navegacion');
    navegacion.appendChild(nuevoEnlace);
    
    // Agregar elementos a una variable usando appendChild
    const a = document.querySelector('.navegacion');
    a.appendChild(nuevoEnlace);
    
    
  
     
    
    // Mostrar en consola el nuevo enlace
    console.log(nuevoEnlace);
})

 // Agregar un evento a los enlaces para mostrar una alerta al hacer clic
    // const enlaces = document.querySelectorAll('.navegacion a');
    // enlaces.forEach(enlace => {
    //     enlace.addEventListener('click', function(event) {
    //         event.preventDefault(); // Evitar el comportamiento por defecto
    //         alert(`Has hecho clic en: ${enlace.textContent}`);
    //     });
    // });
